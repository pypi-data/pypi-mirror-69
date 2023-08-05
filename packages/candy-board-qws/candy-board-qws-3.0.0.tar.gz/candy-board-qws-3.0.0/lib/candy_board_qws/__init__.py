#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Copyright (c) 2019 CANDY LINE INC.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import fcntl
import json
import os
import socket
import select
import struct
import sys
import termios
import threading
import time
import glob
import platform
import traceback
import errno
import re

# SerialPort class was imported from John Wiseman's
# https://github.com/wiseman/arduino-serial/blob/master/arduinoserial.py

# Map from the numbers to the termios constants (which are pretty much
# the same numbers).

BPS_SYMS = {
    115200:   termios.B115200,
    460800:   4100,
    # 230400:   termios.B230400,
    # 57600:    termios.B57600,
    # 38400:    termios.B38400,
    # 19200:    termios.B19200,
    # 9600:     termios.B9600,
    # 921600:   4103
    }


# Indices into the termios tuple.

IFLAG = 0
OFLAG = 1
CFLAG = 2
LFLAG = 3
ISPEED = 4
OSPEED = 5
CC = 6


def bps_to_termios_sym(bps):
    return BPS_SYMS[bps]


CGREG_STATS = [
    "Unregistered",
    "Registered",
    "Searching",
    "Denied",
    "Unknown",
    "Roaming"
]

# For local debugging:
# import candy_board_qws
# serial = candy_board_qws.SerialPort("/dev/ttyUSB2", 115200)
# server = candy_board_qws.SockServer(
#     "1.0.0",
#     "/var/run/candy-board-service.sock", serial)
# server.debug = True
# server.apn_ls()

# looking for a modem serial port
# import candy_board_qws
# candy_board_qws.SerialPort.resolve_modem_port()


class SerialPort(object):

    def __init__(self, serialport, bps):
        """Takes the string name of the serial port
        (e.g. "/dev/tty.usbserial","COM1") and a baud rate (bps) and
        connects to that port at that speed and 8N1. Opens the port in
        fully raw mode so you can send binary data.
        """
        self.fd = os.open(serialport, os.O_RDWR | os.O_NOCTTY | os.O_NDELAY)
        attrs = termios.tcgetattr(self.fd)
        bps_sym = bps_to_termios_sym(int(bps))
        # Set I/O speed.
        attrs[ISPEED] = bps_sym
        attrs[OSPEED] = bps_sym

        # 8N1
        attrs[CFLAG] &= ~termios.PARENB
        attrs[CFLAG] &= ~termios.CSTOPB
        attrs[CFLAG] &= ~termios.CSIZE
        attrs[CFLAG] |= termios.CS8
        # No flow control
        attrs[CFLAG] &= ~termios.CRTSCTS

        # Turn on READ & ignore contrll lines.
        attrs[CFLAG] |= termios.CREAD | termios.CLOCAL
        # Turn off software flow control.
        attrs[IFLAG] &= ~(termios.IXON | termios.IXOFF | termios.IXANY)

        # Make raw.
        attrs[LFLAG] &= ~(termios.ICANON | termios.ECHO |
                          termios.ECHOE | termios.ISIG)
        attrs[OFLAG] &= ~termios.OPOST

        # It's complicated--See
        # http://unixwiz.net/techtips/termios-vmin-vtime.html
        attrs[CC][termios.VMIN] = 0
        attrs[CC][termios.VTIME] = 20
        termios.tcsetattr(self.fd, termios.TCSANOW, attrs)

        self.ping()

    def available(self):
        return True

    def read_until(self, until):
        buf = ""
        done = False
        cnt = 0
        while not done:
            try:
                n = os.read(self.fd, 1).decode()
            except UnicodeDecodeError:
                n = '.'
            if n == '':
                if cnt > 200:
                    buf = None
                    break
                cnt = cnt + 1
                # FIXME: Maybe worth blocking instead of busy-looping?
                time.sleep(0.01)
                continue
            buf = buf + n
            if n == until:
                done = True
        return buf

    def read_line(self):
        try:
            return self.read_until("\n").strip()
        except OSError:
            return None

    def write(self, str):
        os.write(self.fd, str.encode())

    def write_byte(self, byte):
        os.write(self.fd, byte)

    def close(self):
        try:
            os.close(self.fd)
        except OSError:
            pass

    def ping(self, loop=3):
        ret = None
        for i in (0, loop):
            self.write("AT\r")
            time.sleep(0.1)
            line = self.read_line()
            if line is None:
                time.sleep(0.1)
                continue
            else:
                ret = ''
                while line is not None:
                    ret = ret + line + '\r'
                    line = self.read_line()
                break
        return ret

    @staticmethod
    def resolve_modem_baudrate(p):
        if platform.system() != 'Linux':
            return None

        for bps in BPS_SYMS.keys():
            port = SerialPort.open_serial_port(p, bps)
            if port is None:
                continue
            ret = port.ping()
            if ret is None:
                port.close()
                continue
            if "OK" in ret:
                port.close()
                return bps
            port.close()

        return None

    @staticmethod
    def open_serial_port(p, bps):
        for i in (0, 3):
            port = None
            try:
                port = SerialPort(p, bps)
                return port
            except Exception:
                if port:
                    try:
                        port.close()
                    except Exception:
                        pass
                port = None
                time.sleep(0.1)
                pass
        return None

    @staticmethod
    def resolve_modem_port(bps=115200):
        if platform.system() != 'Linux':
            return None

        for t in [
                    '/dev/QWS.*.MODEM',
                    '/dev/ttySC1'
                ]:
            for p in sorted(glob.glob(t)):
                port = SerialPort.open_serial_port(p, bps)
                if port is None:
                    continue
                ret = port.ping()
                if ret is None:
                    port.close()
                    continue
                if "OK" in ret:
                    port.close()
                    return p
                port.close()

        return None


class LazySerialPort:
    def __init__(self, serialport, bps):
        self.serial = None
        self.serialport = serialport
        self.bps = bps

    def _serial(self):
        if self.serial is None:
            self.serial = SerialPort(self.serialport, self.bps)
        return self.serial

    def available(self):
        try:
            self._serial()
            return True
        except OSError:
            return False

    def read_line(self):
        return self._serial().read_line()

    def write(self, str):
        return self._serial().write(str)

    def write_byte(self, byte):
        return self._serial().write_byte(byte)

    def close(self):
        if self.serial is None:
            return
        try:
            return self.serial.close()
        finally:
            self.serial = None


class SockServer(threading.Thread):
    def __init__(self, version,
                 sock_path="/var/run/candy-board-service.sock", serial=None):
        super(SockServer, self).__init__()
        self.version = version
        self.sock_path = sock_path
        self.sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        self.serial = serial
        self.debug = False

    def recv(self, connection, size):
        ready, _, _ = select.select([connection], [], [], 5)
        if ready:
            return connection.recv(size)
        else:
            raise IOError("recv Timeout")

    def run(self):
        self.sock.bind(self.sock_path)
        self.sock.listen(128)
        header_packer = struct.Struct("I")
        print("Listening to the socket[%s]...." % self.sock_path)

        while True:
            try:
                connection, client_address = self.sock.accept()
                connection.setblocking(0)

                # request
                header = self.recv(connection, header_packer.size)
                size = header_packer.unpack(header)
                unpacker_body = struct.Struct("%is" % size)
                cmd_json = self.recv(connection, unpacker_body.size)
                cmd = json.loads(cmd_json)

                # response
                message = self.perform(cmd)
                if message:
                    size = len(message)
                else:
                    size = 0
                packed_header = header_packer.pack(size)
                connection.sendall(packed_header)
                if size > 0:
                    packer_body = struct.Struct("%is" % size)
                    packed_message = packer_body.pack(message.encode('utf-8'))
                    connection.sendall(packed_message)

            except socket.error as e:
                if isinstance(e.args, tuple):
                    if e[0] == errno.EPIPE:
                        continue
                exc_type, exc_value, exc_traceback = sys.exc_info()
                traceback.print_exception(exc_type, exc_value, exc_traceback)

            except Exception:
                exc_type, exc_value, exc_traceback = sys.exc_info()
                traceback.print_exception(exc_type, exc_value, exc_traceback)

            finally:
                if 'connection' in locals():
                    connection.close()

    def perform(self, cmd):
        if self.serial is None or self.serial.available() is False:
            return self.error_message("Modem is not ready")
        try:
            if cmd['category'][0] == '_':
                raise AttributeError()
            m = getattr(self.__class__,
                        "%s_%s" % (cmd['category'], cmd['action']))
            return m(self, cmd)
        except AttributeError:
            return self.error_message("Unknown Command")
        except KeyError:
            return self.error_message("Invalid Args")
        except OSError:  # I/O Error
            return self.error_message("Modem is not ready")
        except Exception:
            return self.error_message("Unexpected error: %s" %
                                      (''.join(traceback
                                       .format_exception(*sys.exc_info())[-2:])
                                       .strip().replace('\n', ': '))
                                      )

    def error_message(self, msg):
        return json.dumps({"status": "ERROR", "result": msg})

    def read_line(self):
        line = self.serial.read_line()
        if self.debug:
            print("[modem:IN] => [%s]" % line)
        return line

    def send_at(self, cmd, ok="OK"):
        line = "%s\r" % cmd
        if self.debug:
            print("[modem:OUT] => [%s]" % line)
        self.serial.write(line)
        time.sleep(0.1)
        result = ""
        status = None
        count = 0
        while True:
            line = self.read_line()
            if line is None:
                if status is not None or count > 650:
                    break
                time.sleep(0.1)
                count = count + 1
            elif line == cmd:
                continue
            elif line == ok or \
                    line == "ERROR" or \
                    line == "NO DIALTONE" or \
                    line == "NO CARRIER" or \
                    line.startswith("+CME ERROR"):
                status = line
            elif line is None:
                status = "UNKNOWN"
            elif line.strip() != "":
                result += line + "\n"
        if self.debug:
            print("cmd:[%s] => status:[%s], result:[%s]" %
                  (cmd, status, result))
        return (status, result.strip())

    def _apn_ls(self):
        status, result = self.send_at("AT+CGDCONT?")
        apn_list = []
        id_name_list = []
        if status == "OK":
            try:
                id_name_list = list(map(lambda e: e[10:].split(",")[0] + "," +
                                   re.sub('"', '', e[10:].split(",")[2]),
                                   result.split("\n")))
                status, result = self.send_at("AT$QCPDPP?")
                creds_list = []
                if status == "OK":
                    def to_user(e):
                        if len(e) > 2:
                            return re.sub('"', '', e[2])
                        return ''
                    creds_list = list(map(lambda e: to_user(e),
                                     list(map(lambda e: e[9:].split(","),
                                         result.split("\n")))))
            except IndexError:
                pass
        for i in range(len(id_name_list)):
                id_name = id_name_list[i].split(",")
                apn = {
                    'apn_id': id_name[0],
                    'apn': id_name[1]
                }
                if len(creds_list) > i:
                    apn['user'] = creds_list[i]
                apn_list.append(apn)
        message = {
            'status': status,
            'result': {
                'apns': apn_list
            }
        }
        return message

    def apn_ls(self, cmd={}):
        return json.dumps(self._apn_ls())

    def apn_set(self, cmd={}):
        (name, user_id, password) = (cmd['name'], cmd['user_id'],
                                     cmd['password'])
        if 'type' in cmd:
            t = cmd['type']
            if t == 'ipv4':
                pdp = 'IP'
            elif t == 'ipv6':
                pdp = 'IPV6'
            else:
                pdp = 'IPV4V6'
        else:
            pdp = 'IP'

        apn_id = "1"
        if 'id' in cmd:
            apn_id = cmd['id']
        status, result = self.send_at(("AT+CGDCONT=%s,\"%s\",\"%s\"," +
                                      ",0,0") % (apn_id, pdp, name))
        if status == "OK":
            status, result = self.send_at(("AT$QCPDPP=%s,3,\"%s\",\"%s\"") %
                                          (apn_id, password, user_id))
        message = {
            'status': status,
            'result': result
        }
        return json.dumps(message)

    def _apn_del(self, apn_id):
        # removes QCPDPP as well
        status, result = self.send_at(("AT+CGDCONT=%s") % apn_id)
        message = {
            'status': status,
            'result': result
        }
        return message

    def apn_del(self, cmd={}):
        apn_id = "1"
        if 'id' in cmd:
            apn_id = cmd['id']
        return json.dumps(self._apn_del(apn_id))

    def network_show(self, cmd={}):
        rssi = ""
        network = "UNKNOWN"
        rssi_desc = ""
        operator = "UNKNOWN"
        status, result = self.send_at("AT+CSQ")
        if status == "OK":
            rssi_level = int(result[5:].split(",")[0])
            if rssi_level == 0:
                rssi = "-113"
                rssi_desc = "OR_LESS"
            elif rssi_level == 1:
                rssi = "-111"
            elif rssi_level <= 30:
                rssi = "%i" % (-109 + (rssi_level - 2) * 2)
            elif rssi_level == 31:
                rssi = "-51"
                rssi_desc = "OR_MORE"
            elif rssi_level == 100:
                rssi = "-116"
                rssi_desc = "OR_LESS"
            elif rssi_level == 101:
                rssi = "-115"
            elif rssi_level <= 190:
                rssi = "%i" % (-114 + (rssi_level - 102))
            elif rssi_level == 191:
                rssi = "-25"
                rssi_desc = "OR_MORE"
            else:
                rssi_desc = "NO_SIGANL"
            status, result = self.send_at("AT+COPS?")
            try:
                operator = result.split(',')[2][1:-1]
            except IndexError:
                operator = "N/A"
            registration = {
                "cs": "N/A",
                "ps": "N/A",
                "eps": "N/A"
            }
            status, result = self.send_at("AT+CREG?")
            try:
                cs = int(result.split(",")[1])
                registration["cs"] = CGREG_STATS[cs]
            except IndexError:
                pass
            status, result = self.send_at("AT+CGREG?")
            try:
                ps = int(result.split(",")[1])
                registration["ps"] = CGREG_STATS[ps]
            except IndexError:
                pass
            status, result = self.send_at("AT+CEREG?")
            try:
                eps = int(result.split(",")[1])
                registration["eps"] = CGREG_STATS[eps]
            except IndexError:
                pass
            access = 'N/A'
            band = 'N/A'
            status, result = self.send_at("AT+QNWINFO")
            if status == 'ERROR':
                status, result = self.send_at("AT+QGBAND")
                try:
                    currentband = int(result.split(': ')[1])
                    if currentband == 1:
                        access, band = 'GSM', 'GSM 900'
                    elif currentband == 2:
                        access, band = 'GSM', 'GSM 1800'
                    elif currentband == 4:
                        access, band = 'GSM', 'GSM 850'
                    elif currentband == 8:
                        access, band = 'GSM', 'GSM 1900'
                    elif currentband == 16:
                        access, band = 'WCDMA', 'WCDMA 2100'
                    elif currentband == 32:
                        access, band = 'WCDMA', 'WCDMA 1900'
                    elif currentband == 64:
                        access, band = 'WCDMA', 'WCDMA 850'
                    elif currentband == 128:
                        access, band = 'WCDMA', 'WCDMA 900'
                    elif currentband == 256:
                        access, band = 'WCDMA', 'WCDMA 800'
                except IndexError:
                    pass
            else:
                try:
                    nwinfo = result.split(': ')[1].split(',')
                    access = nwinfo[0].replace('"', '')
                    band = nwinfo[2].replace('"', '')
                except IndexError:
                    pass
        message = {
            'status': status,
            'result': {
                'rssi': rssi,
                'rssiDesc': rssi_desc,
                'network': 'N/A',
                'operator': operator,
                'registration': registration,
                'access': access,
                'band': band
            }
        }
        return json.dumps(message)

    def network_deregister(self, cmd={}):
        status, result = self.send_at("AT+COPS=2")
        message = {
            'status': status,
            'result': result
        }
        return json.dumps(message)

    def network_register(self, cmd={}):
        operator = None
        if 'operator' in cmd:
            mode = '4' if 'auto' in cmd and cmd['auto'] else '1'
            operator = cmd['operator']
        if operator is None or operator == '':
            mode = '0'
        status, result = self.send_at(
            "AT+COPS=%s,2,%s"
            % (mode, operator))
        message = {
            'status': status,
            'result': {
                'mode': mode
            }
        }
        return json.dumps(message)

    def sim_show(self, cmd={}):
        state = "SIM_STATE_ABSENT"
        msisdn = ""
        imsi = ""
        status, result = self.send_at("AT+CIMI")
        if status == "OK":
            imsi = result
            state = "SIM_STATE_READY"
            status, result = self.send_at("AT+CNUM")
            if len(result) > 5:
                msisdn = re.sub('"', '', result[6:].split(",")[1])
            else:
                msisdn = ''
        message = {
            'status': status,
            'result': {
                'msisdn': msisdn,
                'imsi': imsi,
                'state': state
            }
        }
        return json.dumps(message)

    def _counter_show(self):
        """
        - Show TX/RX packet counter
        """
        status, result = self.send_at("AT+QGDCNT?")
        tx = '0'
        rx = '0'
        if status == "OK":
            txrx = result.split(':')[1].strip().split(',')
            tx = txrx[0]
            rx = txrx[1]
        message = {
            'status': status,
            'result': {
                'tx': tx,
                'rx': rx
            }
        }
        return message

    def _counter_reset(self):
        """
        - Reset packet counter
        """
        status, result = self.send_at("AT+QGDCNT=0")
        message = {
            'status': status,
            'result': result
        }
        return message

    def _imei_show(self):
        """
        - Show IMEI
        """
        status, result = self.send_at("AT+GSN")
        message = {
            'status': status,
            'result': result
        }
        return message

    def _timestamp_show(self):
        """
        - Show timestamp
        """
        status, result = self.send_at("AT+CCLK?")
        message = {
            'status': status,
            'result': result
        }
        return message

    def _functionality_show(self):
        """
        - Show phone functionality
        """
        status, result = self.send_at("AT+CFUN?")
        func = "Error"
        if status == "OK":
            func = result.split(':')[1].strip()
            if func == "0":
                func = "Minimum"
            elif func == "1":
                func = "Full"
            elif func == "4":
                func = "Disabled"
            else:
                func = "Anomaly"
        message = {
            'status': status,
            'result': {
                'functionality': func
            }
        }
        return message

    def modem_show(self, cmd={}):
        status, result = self.send_at("ATI")
        man = "UNKNOWN"
        mod = "UNKNOWN"
        rev = "UNKNOWN"
        imei = "UNKNOWN"
        func = "UNKNOWN"
        counter = None
        utc = None
        timezone_hrs = None
        if status == "OK":
            info = result.split("\n")
            man = info[0]
            mod = info[1]
            rev = info[2][10:]
            result = self._imei_show()
            if result['status'] == "OK":
                imei = result['result']
            result = self._counter_show()
            if result['status'] == "OK":
                counter = result['result']
            result = self._timestamp_show()
            if result['status'] == "OK":
                datelen = len(result['result'])
                if datelen == 29:
                    utc = result['result'][8:-4]
                    timezone_hrs = float(result['result'][-4:-1]) / 4
                elif datelen == 26:
                    utc = result['result'][8:-1]
                    timezone_hrs = 0.0
            result = self._functionality_show()
            func = result['result']['functionality']
        message = {
            'status': status,
            'result': {
                'manufacturer': man,
                'model': mod,
                'revision': rev,
                'imei': imei,
                'datetime': utc,
                'timezone': timezone_hrs,
                'functionality': func
            }
        }
        if counter:
            message['result']['counter'] = counter
        return json.dumps(message)

    def _parse_opts(self, cmd={}):
        opts = {}
        if 'opts' in cmd:
            try:
                opts = json.loads(cmd['opts'])
            except Exception:
                try:
                    entries = list(map(lambda e: e.split('='),
                                  cmd['opts'].split(',')))
                    for (k, v) in entries:
                        opts[k.strip()] = v.strip()
                except Exception:
                    pass
        return opts

    def modem_reset(self, cmd={}):
        """
        - opts counter=yes
            - Reset packet counter
        - no-opts or counter!=yes
            - Reset packet counter
            - Remove all APN
            - Reset Phone Functionality
        """
        result = 'counter'
        counter_reset_ret = self._counter_reset()
        status = counter_reset_ret['status']
        opts = self._parse_opts(cmd)
        if 'counter' not in opts or opts['counter'] != 'yes':
            result = ''
            apn_ls_ret = self._apn_ls()
            status = apn_ls_ret['status']
            if apn_ls_ret['status'] == "OK":
                apns = apn_ls_ret['result']['apns']
                for apn in apns:
                    self._apn_del(apn['apn_id'])
            status, qnvw_result = self.send_at(
                'AT+QNVW=4548,0,"0000400C00000210"')
            if status != "OK":
                result = qnvw_result
            status, qnvw_result = self.send_at(
                'AT+QNVW=930,0,"2A39380000030003002A3939000003000300233737370'
                '004000400000000000000000000"')
            if status != "OK":
                result = qnvw_result
            self._modem_clck_unlock(cmd)

        message = {
            'status': status,
            'result': result
        }
        return json.dumps(message)

    def modem_off(self, cmd={}):
        """
        PRIVATE COMMAND (not available from CLI)
        - Power off
        """
        status, result = self.send_at("AT+QPOWD", "POWERED DOWN")
        if status == "POWERED DOWN":
            status = "OK"
            result = ""
        message = {
            'status': status,
            'result': result
        }
        return json.dumps(message)

    def modem_init(self, cmd={}):
        """
        PRIVATE COMMAND (not available from CLI)
        - Enable automatic timezone update with NITZ
          to set modem RTC (if NW is capable)
          Enabled by default.
        - Reset Phone Functionality
        - Set baudrate (optional)
        - Reset packet counter (optional)
        """
        tz_update = "N/A"
        counter_reset_ret = "N/A"
        baudrate_ret = "N/A"
        if 'tz_update' not in cmd or cmd['tz_update'] is True:
            status, result = self.send_at("AT+CTZU?")
            if status == "OK":
                tz_update = "OK"
                for at in ["AT+COPS=2", "AT+CTZU=1", "AT+COPS=0"]:
                    status, result = self.send_at(at)
                    if status != "OK":
                        tz_update = "ERROR"
                        break
        if 'counter_reset' in cmd and cmd['counter_reset']:
            counter_reset_ret = self._counter_reset()['status']
        status, result_qnvw = self.send_at(
            'AT+QNVW=4548,0,"0000400C00000210"')
        if status != "OK":
            message = {
                'status': status,
                'result': result_qnvw,
                'cmd': 'AT+QNVW'
            }
            return json.dumps(message)
        self._modem_clck_unlock(cmd)
        if 'baudrate' in cmd:
            baudrate_ret, result = self.send_at("AT+IPR=%s" % cmd['baudrate'])
            if baudrate_ret != "OK":
                message = {
                    'status': baudrate_ret,
                    'result': result,
                    'cmd': 'baudrate'
                }
                return json.dumps(message)
        message = {
            'status': status,
            'result': {
                'counter_reset': counter_reset_ret,
                'baudrate': baudrate_ret
            }
        }
        return json.dumps(message)

    def _modem_clck_unlock(self, cmd={}):
        if 'pu' not in cmd or cmd['pu'] is False:
            self.send_at(
                'AT+CLCK="PU",0,"12341234"')

    def _gnss_config_uc2x(self, cmd={}):
        glonassenable = '0'
        glonassnmeatype = '0'
        if 'all' in cmd and cmd['all']:
            glonassenable = '1'
            glonassnmeatype = '7'

        status, result = self.send_at('AT+QGPSCFG="glonassenable",%s'
                                      % glonassenable)
        if status != "OK":
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'glonassenable'
            }
            return json.dumps(message)
        status, result = self.send_at('AT+QGPSCFG="glonassnmeatype",%s'
                                      % glonassnmeatype)
        if status != "OK":
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'glonassnmeatype'
            }
            return json.dumps(message)

    def _gnss_config_ec2x(self, cmd={}):
        config = '0'
        glonassnmeatype = '0'
        beidounmeatype = '0'
        galileonmeatype = '0'
        if 'all' in cmd and cmd['all']:
            config = '1'
            glonassnmeatype = '7'
            beidounmeatype = '3'
            galileonmeatype = '1'
        elif 'qzss' in cmd and cmd['qzss']:
            config = '2'
            glonassnmeatype = '7'
            beidounmeatype = '3'

        status, result = self.send_at('AT+QGPSCFG="gnssconfig",%s' % config)
        if status != "OK":
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'gnssconfig'
            }
            return json.dumps(message)
        status, result = self.send_at('AT+QGPSCFG="glonassnmeatype",%s'
                                      % glonassnmeatype)
        if status != "OK":
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'glonassnmeatype'
            }
            return json.dumps(message)
        status, result = self.send_at('AT+QGPSCFG="beidounmeatype",%s'
                                      % beidounmeatype)
        if status != "OK":
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'beidounmeatype'
            }
            return json.dumps(message)
        status, result = self.send_at('AT+QGPSCFG="galileonmeatype",%s'
                                      % galileonmeatype)
        if status != "OK":
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'galileonmeatype'
            }
            return json.dumps(message)

    def _gnss_config(self, cmd={}):
        status, result = self.send_at("ATI")
        if status == "OK":
            info = result.split("\n")
            if info[1] == 'UC20':
                return self._gnss_config_uc2x(cmd)
            else:
                return self._gnss_config_ec2x(cmd)

    def gnss_start(self, cmd={}):
        status, result = self.send_at('AT+QGPSCFG="gpsnmeatype",31')
        if status != "OK":
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'gpsnmeatype'
            }
            return json.dumps(message)
        message_json = self._gnss_config(cmd)
        if message_json is not None:
            return message_json
        status, result = self.send_at('AT+QGPSCFG="nmeasrc",1')
        if status != "OK":
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'nmeasrc'
            }
            return json.dumps(message)
        status, result = self.send_at("AT+QGPS=1,30,50,0,1")
        if status == "OK":
            result = ""
        elif status == "+CME ERROR: 504":
            status = "OK"
        else:
            result = status
            status = "ERROR"
        message = {
            'status': status,
            'result': result,
        }
        return json.dumps(message)

    def gnss_status(self, cmd={}):
        status, result = self.send_at("AT+QGPS?")
        if status == "OK":
            gnssstate = result.split(':')[1].strip()
            if gnssstate == "0":
                session = 'stopped'
            elif gnssstate == "1":
                session = 'started'
        else:
            result = status
            status = "ERROR"
            message = {
                'status': status,
                'result': result,
                'cmd': 'QGPS?'
            }
            return json.dumps(message)

        qzss = 'N/A'
        status, result = self.send_at("ATI")
        if status == "OK":
            info = result.split("\n")
            if info[1] != 'UC20':
                status, result = self.send_at('AT+QGPSCFG="gnssconfig"')
                if status != "OK":
                    result = status
                    status = "ERROR"
                    message = {
                        'status': status,
                        'result': result,
                        'cmd': 'gnssconfig'
                    }
                    return json.dumps(message)
                gnssconfig = result.split(':')[1].split(',')[1].strip()
                if gnssconfig == '1' or gnssconfig == '2':
                    qzss = 'enabled'
                else:
                    qzss = 'disabled'

        message = {
            'status': status,
            'result': {
                'session': session,
                'qzss': qzss
            },
        }
        return json.dumps(message)

    def gnss_stop(self, cmd={}):
        status, result = self.send_at("AT+QGPSEND")
        if status == "OK":
            result = ""
        elif status == "+CME ERROR: 505":
            status = "OK"
        else:
            result = status
            status = "ERROR"
        message = {
            'status': status,
            'result': result,
        }
        return json.dumps(message)

    def gnss_locate(self, cmd={}):
        if 'format' in cmd and cmd['format']:
            format = str(cmd['format'])
        else:
            format = '2'
        status, result = self.send_at("AT+QGPSLOC=%s" % (format))
        if status == "OK":
            csv = result.split(':')[1].strip().split(',')
            if len(csv) < 11:
                message = {
                    'status': 'ERROR',
                    'result': 'Temporary I/O Error',
                }
                return json.dumps(message)
            latitude = csv[1]
            if format == '1':
                latitude = '%s %s' % (latitude, csv[2])
                del csv[2]
            elif format == '0':
                latitude = '%s %s' % (latitude[:-1], latitude[-1])
            longitude = csv[2]
            if format == '1':
                longitude = '%s %s' % (longitude, csv[3])
                del csv[3]
            elif format == '0':
                longitude = '%s %s' % (longitude[:-1], longitude[-1])
            altitude = float(csv[4])
            if format == '2':
                latitude = float(latitude)
                longitude = float(longitude)
            result = {
                'timestamp': '20%s-%s-%sT%s:%s:%s.000Z' %
                (
                    csv[9][4:6], csv[9][2:4], csv[9][0:2],
                    csv[0][0:2], csv[0][2:4], csv[0][4:6]
                ),
                'latitude': latitude,
                'longitude': longitude,
                'hdop': float(csv[3]),
                'altitude': altitude,
                'fix': '%sD' % csv[5],
                'cog': float(csv[6]),
                'spkm': float(csv[7]),
                'spkn': float(csv[8]),
                'nsat': int(csv[10])
            }
        else:
            code = status.split(':')
            if len(code) > 1:
                code = code[1].strip()
                status = "ERROR"
            else:
                code = code[0]
            if code == "516":
                result = "Not fixed yet"
            elif code == "502":
                result = "Invalid format"
            elif code == "505":
                result = "Session not started"
            else:
                result = code
        message = {
            'status': status,
            'result': result,
        }
        return json.dumps(message)

    def service_version(self, cmd={}):
        message = {
            'status': 'OK',
            'result': {
                'version': self.version,
            }
        }
        return json.dumps(message)
