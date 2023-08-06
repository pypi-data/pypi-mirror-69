#!/usr/bin/env python3
# @Author: carlosgilgonzalez
# @Date:   2019-07-11T23:33:30+01:00
# @Last modified by:   carlosgilgonzalez
# @Last modified time: 2019-11-16T00:38:46+00:00

import ast
import subprocess
import shlex
import time
import serial
import serial.tools.list_ports
import struct
import socket
import multiprocessing
from dill.source import getsource
from array import array
from pexpect.replwrap import REPLWrapper
from upydevice import wsclient, protocol
import functools
import glob
try:
    from upydev import __path__ as CA_PATH
except Exception as e:
    pass


name = 'upydevice'
version = '0.2.3'


class W_UPYDEVICE:
    def __init__(self, ip_target, password, name=None, bundle_dir='', platform=None):
        self.password = password
        self.ip = ip_target
        self.response = None
        self.output = None
        self.bundle_dir = bundle_dir
        self.long_output = []
        self.process_raw = None
        self.name = name
        self.dev_class = 'WIRELESS'
        if name is None:
            self.name = 'wupydev_{}'.format(self.ip.split('.')[-1])
        self.output_queue = multiprocessing.Queue(maxsize=1)
        self._wconn = None
        self.repl_CONN = False
        self.platform = platform

    def _send_recv_cmd2(self, cmd):  # test method
        resp_recv = False
        command = shlex.split(cmd)
        while not resp_recv:
            try:
                process = subprocess.Popen(command, stdout=subprocess.PIPE)
                resp_recv = True
            except Exception as e:
                pass

        stdout = process.communicate()
        try:
            resp = ast.literal_eval(
                stdout[0].decode('utf-8').split('\n')[6][4:-1])
        except Exception as e:
            try:
                resp = stdout[0].decode('utf-8').split('\n')[6][4:-1]
            except Exception as e:
                resp = None

            pass
        return resp, stdout

    def _cmd_r(self, cmd, pt=False):  # test method
        command = 'web_repl_cmd_r  -c "{}" -p {} -t {}'.format(
            cmd, self.password, self.ip)
        resp = self._send_recv_cmd2(command)
        if pt:
            print(resp[0])
        return resp[0]

    def _cmd(self, cmd):  # test method
        command = 'web_repl_cmd -c "{}" -p {} -t {}'.format(
            cmd, self.password, self.ip)
        resp = self._send_recv_cmd2(command)
        return resp[0]

    def _run_command_rl(self, command):  # test method
        end = False
        lines = []
        process = subprocess.Popen(
            shlex.split(command), stdout=subprocess.PIPE)
        while end is not True:
            if process.poll() is None:
                output = process.stdout.readline()
                if output == '' and process.poll() is not None:
                    break
                if output:
                    line = output.strip().decode()
                    lines.append(line)
                    if output.strip() == b'### closed ###':
                        end = True
            else:
                break
        rc = process.poll()
        return rc, lines

    def _cmd_rl(self, command, rt=False, evl=True):  # test method
        cmd = command
        cmd_str = 'web_repl_cmd_r -c "{}" -t {} -p {}'.format(
            cmd, self.ip, self.password)
        cmd_resp = self._run_command_rl(cmd_str)
        resp = cmd_resp[1]
        output = []
        for line in resp[6:]:
            if line == '### closed ###':
                pass
            else:
                try:
                    if line[0] == '>':
                        print(line[4:])
                        output.append(line[4:])
                    else:
                        print(line)
                        output.append(line)
                except Exception as e:
                    if len(line) == 0:
                        pass
                    else:
                        print(e)
                        pass
        if rt:
            if evl:
                return ast.literal_eval(output[0])
            else:
                return output

    def cmd(self, command, silent=False, p_queue=None, bundle_dir='', capture_output=False):  # best method
        cmd_str = self.bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format(
            command, self.ip, self.password)
        if bundle_dir is not '':
            cmd_str = bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format(
                command, self.ip, self.password)
        # print(group_cmd_str)
        self.long_output = []
        cmd = shlex.split(cmd_str)
        try:
            proc = subprocess.Popen(
                cmd, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            for i in range(6):
                proc.stdout.readline()
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if len(resp) > 0:
                    if resp[0] == '>':
                        if not silent:
                            print(resp[4:])
                        self.response = resp[4:]
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp[4:])
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp[4:])
                                except Exception as e:
                                    if 'bytearray' in resp[4:]:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp[4:]:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                    else:
                        if not silent:
                            print(resp)
                        self.response = resp
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp)
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp)
                                except Exception as e:
                                    if 'bytearray' in resp:

                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                else:
                    if not silent:
                        print(resp)

        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def cmd_p(self, command, silent=False, p_queue=None, bundle_dir='', capture_output=False):  # best method
        cmd_str = self.bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format(
            command, self.ip, self.password)
        if bundle_dir is not '':
            cmd_str = bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format(
                command, self.ip, self.password)
        # print(group_cmd_str)
        self.long_output = []
        cmd = shlex.split(cmd_str)
        try:
            proc = subprocess.Popen(
                cmd, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            for i in range(6):
                proc.stdout.readline()
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if len(resp) > 0:
                    if resp[0] == '>':
                        if not silent:
                            print('{}:{}'.format(self.name, resp[4:]))
                        self.response = resp[4:]
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp[4:])
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp[4:])
                                except Exception as e:
                                    if 'bytearray' in resp[4:]:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp[4:]:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                    else:
                        if not silent:
                            print('{}:{}'.format(self.name, resp))
                        self.response = resp
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp)
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp)
                                except Exception as e:
                                    if 'bytearray' in resp:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                else:
                    if not silent:
                        print('{}:{}'.format(self.name, resp))
        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def _cmd_nb(self, command, silent=False, time_out=2, bundle_dir=''):  # non blocking device method
        cmd_str = self.bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format(
            command, self.ip, self.password)
        if bundle_dir is not '':
            cmd_str = bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format(
                command, self.ip, self.password)
        # print(group_cmd_str)
        self.long_output = []
        cmd = shlex.split(cmd_str)
        try:
            proc = subprocess.Popen(
                cmd, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            for i in range(6):
                proc.stdout.readline()
            time.sleep(time_out)
            proc.terminate()

        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def cmd_nb(self, command, silent=False, time_out=2, block_dev=True):
        if not block_dev:
            self.dev_process_raw = multiprocessing.Process(
                target=self._cmd_nb, args=(command, silent, time_out, self.bundle_dir))
            self.dev_process_raw.start()
        else:
            self.dev_process_raw = multiprocessing.Process(
                target=self.cmd, args=(command, silent, self.output_queue, self.bundle_dir))
            self.dev_process_raw.start()

    def get_opt(self):
        try:
            self.output = self.output_queue.get(block=False)
        except Exception:
            pass

    def reset(self, bundle_dir='', output=True):
        reset_cmd_str = self.bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format('D',
                                                                                    self.ip, self.password)
        if bundle_dir is not '':
            reset_cmd_str = bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format('D',
                                                                                   self.ip, self.password)
        reset_cmd = shlex.split(reset_cmd_str)
        if output:
            print('Rebooting device...')
        try:
            proc = subprocess.Popen(
                reset_cmd, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            for i in range(6):
                proc.stdout.readline()
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if len(resp) > 0:
                    if resp[0] == '>':
                        if output:
                            print(resp[4:])
                    else:
                        if output:
                            print(resp)
                else:
                    if output:
                        print(resp)
            if output:
                print('Done!')
        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def get_output(self):
        try:
            self.output = ast.literal_eval(self.response)
        except Exception as e:
            if 'bytearray' in self.response:
                try:
                    self.output = bytearray(ast.literal_eval(
                        self.response.strip().split('bytearray')[1]))
                except Exception as e:
                    pass
            else:
                if 'array' in self.response:
                    try:
                        arr = ast.literal_eval(
                            self.response.strip().split('array')[1])
                        self.output = array(arr[0], arr[1])
                    except Exception as e:
                        pass
            pass

    def kbi(self, bundle_dir='', output=True, traceback=False, filter_ban=True):
        reset_cmd_str = self.bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format('\x03',
                                                                                    self.ip, self.password)
        if bundle_dir is not '':
            reset_cmd_str = bundle_dir+'web_repl_cmd_r -c "{}" -t {} -p {}'.format(hex(3),
                                                                                   self.ip, self.password)
        reset_cmd = shlex.split(reset_cmd_str)
        if output:
            print('KeyboardInterrupt sent!')
        kw_ban = ["MicroPython", "module with", 'Type "help()" for more information.']
        try:
            proc = subprocess.Popen(
                reset_cmd, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            for i in range(2):
                proc.stdout.readline()
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if len(resp) > 0:
                    if resp[0] == '>':
                        if traceback:
                            if filter_ban:
                                if not any([kw in resp[4:] for kw in kw_ban]):
                                    print(resp[4:])
                            else:
                                print(resp[4:])
                    else:
                        if traceback:
                            if filter_ban:
                                if not any([kw in resp for kw in kw_ban]):
                                    if resp != '':
                                        print(resp)
                            else:
                                print(resp)
                else:
                    if traceback:
                        if filter_ban:
                            if resp != '':
                                print(resp)
                        else:
                            print(resp)
                if 'KeyboardInterrupt' in resp:
                    while proc.poll() is None:
                        proc.stdout.readline()
                    break
            if output:
                print('Done!')
        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def is_reachable(self, n_tries=2, max_loss=1, debug=False, timeout=2):
        ping_cmd_str = 'ping -c {} {} -t {}'.format(n_tries, self.ip, timeout)
        ping_cmd = shlex.split(ping_cmd_str)
        timeouts = 0
        down_kw = ['Unreachable', 'down', 'timeout']
        try:
            proc = subprocess.Popen(
                ping_cmd, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if debug:
                    print(resp)
                if any([kw in resp for kw in down_kw]):
                    timeouts += 1

            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                if debug:
                    print(message[:-1].decode())

        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                if debug:
                    print(message[:-1].decode())

        if timeouts >= max_loss:
            if debug:
                print('DEVICE IS DOWN OR SIGNAL RSSI IS TO LOW')
            return False
        else:
            return True

    def open_wconn(self, bundle_dir='', dbg=False):
        self._wconn = REPLWrapper(
            bundle_dir+'web_repl_conn {} -p {}'.format(self.ip, self.password), ">>> ", None)
        self.repl_CONN = True
        if dbg:
            print('WebREPL connection ready!')

    def wr_cmd(self, cmd_msg, dbg=False, silent=False, rtn=True, timeout=1, follow=True, pipe=None, m_kbi=False):
        cmd = self._wconn.child.sendline(cmd_msg)
        s_output = False
        try:
            raw_out = ' '
            cmd_echo = self._wconn.child.readline()
            timed_out = False
            len_output_now = 0
            len_output_prev = 0
            expect_prompt = ' '
            time.sleep(0.2)
            while not self._wconn.prompt.strip() in expect_prompt.strip():
                try:
                    raw_out += self._wconn.child.read_nonblocking(
                        2**16, timeout)
                    s_output = True
                    expect_prompt = raw_out.split('\n')[-1]
                    if follow:
                        outlines = [line for line in raw_out.split(
                            '...')[-1].splitlines()[:-1] if line != '']  # line.strip()
                        len_output_now = len(outlines)
                        if dbg:
                            print(outlines)
                            print('LEN NOW: {}'.format(len_output_now))
                            print('LEN PREV: {}'.format(len_output_prev))
                        if len_output_now > len_output_prev:
                            diff_len = len_output_now - len_output_prev
                            len_output_prev = len(outlines)
                            for line in outlines[-diff_len:]:
                                if line == outlines[0]:
                                    line = line[1:]
                                cmds = [val for val in cmd_msg.split(
                                    '\r') if val != '']
                                if line.replace('>>> ', '') != cmd_msg and line.replace('>>> ', '').strip() not in cmds and '\x08' not in line.replace('>>> ', ''):
                                    self.response = line.replace('>>> ', '')
                                    if pipe is not None:
                                        pipe(self.response+'\n')
                                    else:
                                        if not silent:
                                            print(self.response)
                        elif len_output_now < len_output_prev:
                            len_output_prev = 0

                except KeyboardInterrupt:
                    # print('KBI!')
                    # self._wconn.child.sendline('C' + '\r')
                    self.close_wconn()
                    self.kbi(traceback=True, output=False)
                    if self.platform == 'esp8266':
                        self.cmd('\x0d', silent=True)
                    time.sleep(0.2)
                    self.open_wconn()
                    flush = self._wconn.child.read_nonblocking(256, 0.1)
                    s_output = False
                    break

                except Exception as e:
                    if dbg:
                        print(e)
                        print(expect_prompt)
                    timed_out = True
                # except KeyboardInterrupt:
                #     if m_kbi:
                #         self.close_wconn()
                #         self.kbi()
                #         time.sleep(0.5)
                #         self.open_wconn()
                # except EOFError:
                #     if m_kbi:
                #         self.close_wconn()
                #         self.kbi()
                #         time.sleep(0.5)
                #         self.open_wconn()
        except Exception as e:
            if dbg:
                print('Timeout')
        if s_output:
            s_output = raw_out.replace('>>>', '').strip().split('\n')[-1]
            self.process_raw = raw_out
            outlines = [line.strip() for line in self.process_raw.split(
                '...')[-1].splitlines()[:-1] if line != '']
            for line in outlines:
                if line != cmd_msg:
                    self.response = line
                    if rtn:
                        self.get_output()
                    if not silent:
                        if not follow:
                            print(line)

    def close_wconn(self):
        self._wconn.child.close()
        self.repl_CONN = False


# S_UPYDEVICE

class S_UPYDEVICE:
    def __init__(self, serial_port, timeout=100, baudrate=9600, name=None, bundle_dir='', reset=True):
        self.serial_port = serial_port
        self.returncode = None
        self.timeout = timeout
        self.baudrate = baudrate
        self.name = name
        self.process_raw = None
        self.dev_class = 'SERIAL'
        self.bundle_dir = bundle_dir
        if name is None:
            self.name = 'supydev_{}'.format(self.serial_port.split('/')[-1])
        self.output_queue = multiprocessing.Queue(maxsize=1)
        self.picocom_cmd = shlex.split(
            'picocom -port {} -qcx {} -b{}'.format(self.serial_port, self.timeout, self.baudrate))
        self.response = None
        self.response_object = None
        self.output = None
        self.long_output = []
        self._wconn = None
        self.repl_CONN = False
        self.serial = serial.Serial(self.serial_port, self.baudrate)
        if reset:
            self.reset(output=False)
            # self._reset()
            self.serial.close()

    def get_output(self):
        try:
            self.output = ast.literal_eval(self.response)
        except Exception as e:
            if 'bytearray' in self.response:
                try:
                    self.output = bytearray(ast.literal_eval(
                        self.response.strip().split('bytearray')[1]))
                except Exception as e:
                    pass
            else:
                if 'array' in self.response:
                    try:
                        arr = ast.literal_eval(
                            self.response.strip().split('array')[1])
                        self.output = array(arr[0], arr[1])
                    except Exception as e:
                        pass
            pass

    def enter_cmd(self):
        if not self.serial.is_open:
            self.serial.open()
        self.serial.write(struct.pack('i', 0x0d))  # CR
        self.serial.close()

    def cmd(self, command, silent=False, p_queue=None, bundle_dir='', capture_output=False, timeout=None):
        self.long_output = []
        self.picocom_cmd = shlex.split(self.bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
            shlex.quote(command), self.timeout, self.baudrate, self.serial_port))
        if timeout is not None:
            self.picocom_cmd = shlex.split(self.bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                shlex.quote(command), timeout, self.baudrate, self.serial_port))
        if bundle_dir is not '':
            self.picocom_cmd = shlex.split(bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                shlex.quote(command), self.timeout, self.baudrate, self.serial_port))
            if timeout is not None:
                self.picocom_cmd = shlex.split(bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                    shlex.quote(command), timeout, self.baudrate, self.serial_port))
        try:
            proc = subprocess.Popen(
                self.picocom_cmd, stdout=subprocess.PIPE, stdin=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            time.sleep(0.2)
            for i in range(2):
                self.enter_cmd()
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if len(resp) > 0:
                    if resp[0] == '>':
                        if not silent:
                            print(resp[4:])
                        self.response = resp[4:]
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp[4:])
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp[4:])
                                except Exception as e:
                                    if 'bytearray' in resp[4:]:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp[4:]:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                    else:
                        if resp != '{}\r'.format(command):
                            if not silent:
                                print(resp)
                        self.response = resp
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp)
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp)
                                except Exception as e:
                                    if 'bytearray' in resp:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                else:
                    if not silent:
                        print(resp)

        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def cmd_p(self, command, silent=False, p_queue=None, bundle_dir='', capture_output=False, timeout=None):
        self.long_output = []
        self.picocom_cmd = shlex.split(self.bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
            shlex.quote(command), self.timeout, self.baudrate, self.serial_port))
        if timeout is not None:
            self.picocom_cmd = shlex.split(self.bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                shlex.quote(command), timeout, self.baudrate, self.serial_port))
        if bundle_dir is not '':
            self.picocom_cmd = shlex.split(bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                shlex.quote(command), self.timeout, self.baudrate, self.serial_port))
            if timeout is not None:
                self.picocom_cmd = shlex.split(bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                    shlex.quote(command), timeout, self.baudrate, self.serial_port))
        try:
            proc = subprocess.Popen(
                self.picocom_cmd, stdout=subprocess.PIPE, stdin=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            time.sleep(0.2)
            for i in range(2):
                self.enter_cmd()
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if len(resp) > 0:
                    if resp[0] == '>':
                        if not silent:
                            print('{}:{}'.format(self.name, resp[4:]))
                        self.response = resp[4:]
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp[4:])
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp[4:])
                                except Exception as e:
                                    if 'bytearray' in resp[4:]:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp[4:]:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                    else:
                        if resp != '{}\r'.format(command):
                            if not silent:
                                print('{}:{}'.format(self.name, resp))
                        self.response = resp
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp)
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp)
                                except Exception as e:
                                    if 'bytearray' in resp:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                else:
                    if not silent:
                        print('{}:{}'.format(self.name, resp))

        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def cmd_nb(self, command, silent=False):
        self.dev_process_raw = multiprocessing.Process(
            target=self.cmd, args=(command, silent, self.output_queue, self.bundle_dir))
        self.dev_process_raw.start()

    def get_opt(self):
        try:
            self.output = self.output_queue.get(block=False)
        except Exception:
            pass

    def reset(self, output=True):
        if output:
            print('Rebooting upydevice...')
        if not self.serial.is_open:
            self.serial.open()
        # time.sleep(1)
        while self.serial.inWaiting() > 0:
            self.serial.read()
        # print(self.serial.inWaiting())
        # time.sleep(1)
        self.serial.write(struct.pack('i', 0x0d))
        self.serial.write(struct.pack('i', 0x04))  # EOT
        self.serial.write(struct.pack('i', 0x0d))  # CR
        self.serial.flush()
        # print(self.serial.inWaiting())
        while self.serial.inWaiting() > 0:
            self.serial.read()
        # print(self.serial.inWaiting())
        self.serial.write(struct.pack('i', 0x0d))
        # time.sleep(1)
        self.serial.close()
        if output:
            print('Done!')

    def kbi(self, output=True):
        if output:
            print('KeyboardInterrupt sent!')
        if not self.serial.is_open:
            self.serial.open()
        # time.sleep(1)
        while self.serial.inWaiting() > 0:
            self.serial.read()
        # print(self.serial.inWaiting())
        # time.sleep(1)
        self.serial.write(struct.pack('i', 0x0d))
        self.serial.write(struct.pack('i', 0x03))  # EOT
        self.serial.write(struct.pack('i', 0x0d))  # CR
        self.serial.flush()
        # print(self.serial.inWaiting())
        while self.serial.inWaiting() > 0:
            self.serial.read()
        # print(self.serial.inWaiting())
        self.serial.write(struct.pack('i', 0x0d))
        # time.sleep(1)
        self.serial.close()
        if output:
            print('Done!')

    def open_wconn(self, bundle_dir='', dbg=False):
        self._wconn = REPLWrapper(
            bundle_dir + "picocom -t '>>> ' -b{} {}".format(self.baudrate, self.serial_port), ">>> ", None)
        cmd = self._wconn.child.sendline("\x08"*len('>>> ')+"\r")
        self.repl_CONN = True
        if dbg:
            print('Serial connection ready!')

    def wr_cmd(self, cmd_msg, dbg=False, silent=False, rtn=True, timeout=1, follow=True, pipe=None):
        if cmd_msg.endswith('\r'):
            cmd = self._wconn.child.sendline(cmd_msg)
        else:
            cmd = self._wconn.child.sendline(cmd_msg + '\r')
        s_output = False
        try:
            raw_out = ' '
            cmd_echo = self._wconn.child.readline()
            timed_out = False
            len_output_now = 0
            len_output_prev = 0
            expect_prompt = ' '
            # time.sleep(0.2)
            while not self._wconn.prompt.strip() in expect_prompt.strip():
                try:
                    raw_out += self._wconn.child.read_nonblocking(
                        2**16, timeout)
                    s_output = True
                    expect_prompt = raw_out.split('\n')[-1]
                    if follow:
                        outlines = [line for line in raw_out.split(
                            '...')[-1].splitlines()[:-1] if line != '']  # line.strip()
                        len_output_now = len(outlines)
                        if dbg:
                            print(outlines)
                            print('LEN NOW: {}'.format(len_output_now))
                            print('LEN PREV: {}'.format(len_output_prev))
                        if len_output_now > len_output_prev:
                            diff_len = len_output_now - len_output_prev
                            len_output_prev = len(outlines)
                            for line in outlines[-diff_len:]:
                                if line == outlines[0]:
                                    line = line[1:]
                                cmds = [val for val in cmd_msg.split(
                                    '\r') if val != '']
                                if line.replace('>>> ', '') != cmd_msg and line.replace('>>> ', '').strip() not in cmds and '\x08' not in line.replace('>>> ', ''):
                                    self.response = line.replace('>>> ', '')
                                    if pipe is not None:
                                        pipe(self.response+'\n')
                                    else:
                                        if not silent:
                                            print(self.response)
                        elif len_output_now < len_output_prev:
                            len_output_prev = 0

                except KeyboardInterrupt:
                    print('^C')
                    self._wconn.child.sendline('\x03' + '\r')
                except Exception as e:
                    if dbg:
                        print(e)
                        print(expect_prompt)
                    timed_out = True
        except Exception as e:
            if dbg:
                print('Timeout')
        if s_output:
            s_output = raw_out.replace('>>>', '').strip().split('\n')[-1]
            self.process_raw = raw_out
            outlines = [line.strip() for line in self.process_raw.split(
                '...')[-1].splitlines()[:-1] if line != '']
            for line in outlines:
                if line != cmd_msg:
                    self.response = line
                    if rtn:
                        self.get_output()
                    if not silent:
                        if not follow:
                            print(line)

    def close_wconn(self):
        self._wconn.child.close()
        self.repl_CONN = False


# PYBOARD


class PYBOARD:
    def __init__(self, serial_port, timeout=100, baudrate=9600, name=None, bundle_dir=''):
        self.serial_port = serial_port
        self.returncode = None
        self.timeout = timeout
        self.baudrate = baudrate
        self.picocom_cmd = None
        self.response = None
        self.response_object = None
        self.name = name
        self.dev_class = 'SERIAL'
        self.bundle_dir = bundle_dir
        if name is None:
            self.name = 'pyboard_{}'.format(self.serial_port.split('/')[-1])
        self.output_queue = multiprocessing.Queue(maxsize=1)
        self.output = None
        self.process_raw = None
        self.long_output = []
        self._wconn = None
        self.repl_CONN = False
        self.serial = serial.Serial(self.serial_port, self.baudrate)
        self.reset(output=False)
        self.reset(output=False)
        # self.serial.close()
        for i in range(3):
            self.enter_cmd()

    def get_output(self):
        try:
            self.output = ast.literal_eval(self.response)
        except Exception as e:
            if 'bytearray' in self.response:
                try:
                    self.output = bytearray(ast.literal_eval(
                        self.response.strip().split('bytearray')[1]))
                except Exception as e:
                    pass
            else:
                if 'array' in self.response:
                    try:
                        arr = ast.literal_eval(
                            self.response.strip().split('array')[1])
                        self.output = array(arr[0], arr[1])
                    except Exception as e:
                        pass
            pass

    def enter_cmd(self):
        if not self.serial.is_open:
            self.serial.open()
        self.serial.write(struct.pack('i', 0x0d))  # CR
        # self.serial.close()

    def cmd(self, command, silent=False, p_queue=None, bundle_dir='', out_print=True, capture_output=False, timeout=None):
        out_print = not silent
        self.long_output = []
        self.picocom_cmd = shlex.split(self.bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
            shlex.quote(command), self.timeout, self.baudrate, self.serial_port))
        if timeout is not None:
            self.picocom_cmd = shlex.split(self.bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                shlex.quote(command), timeout, self.baudrate, self.serial_port))
        if bundle_dir is not '':
            self.picocom_cmd = shlex.split(bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                shlex.quote(command), self.timeout, self.baudrate, self.serial_port))
            if timeout is not None:
                self.picocom_cmd = shlex.split(bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                    shlex.quote(command), timeout, self.baudrate, self.serial_port))
        try:
            proc = subprocess.Popen(
                self.picocom_cmd, stdout=subprocess.PIPE, stdin=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            time.sleep(0.05)  # KEY FINE TUNNING
            for i in range(2):
                self.enter_cmd()
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if len(resp) > 0:
                    if resp[0] == '>':
                        if out_print:
                            print(resp[4:])
                        self.response = resp[4:]
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp[4:])
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp[4:])
                                except Exception as e:
                                    if 'bytearray' in resp[4:]:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp[4:]:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                    else:
                        if resp != '{}\r'.format(command):
                            if out_print:
                                print(resp)
                        self.response = resp
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp)
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp)
                                except Exception as e:
                                    if 'bytearray' in resp:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                else:
                    print(resp)

            while self.serial.inWaiting() > 0:
                self.serial.read()

        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def cmd_p(self, command, silent=False, p_queue=None, bundle_dir='', out_print=True, capture_output=False, timeout=None):
        out_print = not silent
        self.long_output = []
        self.picocom_cmd = shlex.split(self.bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
            shlex.quote(command), self.timeout, self.baudrate, self.serial_port))
        if timeout is not None:
            self.picocom_cmd = shlex.split(self.bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                shlex.quote(command), timeout, self.baudrate, self.serial_port))
        if bundle_dir is not '':
            self.picocom_cmd = shlex.split(bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                shlex.quote(command), self.timeout, self.baudrate, self.serial_port))
            if timeout is not None:
                self.picocom_cmd = shlex.split(bundle_dir+'picocom -t {} -qx {} -b{} {}'.format(
                    shlex.quote(command), timeout, self.baudrate, self.serial_port))
        try:
            proc = subprocess.Popen(
                self.picocom_cmd, stdout=subprocess.PIPE, stdin=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            time.sleep(0.05)  # KEY FINE TUNNING
            for i in range(2):
                self.enter_cmd()
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if len(resp) > 0:
                    if resp[0] == '>':
                        if out_print:
                            print('{}:{}'.format(self.name, resp[4:]))
                        self.response = resp[4:]
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp[4:])
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp[4:])
                                except Exception as e:
                                    if 'bytearray' in resp[4:]:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp[4:]:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                    else:
                        if resp != '{}\r'.format(command):
                            if out_print:
                                print('{}:{}'.format(self.name, resp))
                        self.response = resp
                        self.get_output()
                        if capture_output:
                            self.long_output.append(resp)
                        if p_queue is not None:
                            try:
                                try:
                                    output = ast.literal_eval(resp)
                                except Exception as e:
                                    if 'bytearray' in resp:
                                        output = bytearray(ast.literal_eval(
                                            resp.strip().split('bytearray')[1]))
                                    else:
                                        if 'array' in resp:
                                            arr = ast.literal_eval(
                                                resp.strip().split('array')[1])
                                            output = array(arr[0], arr[1])
                                    pass
                                p_queue.put((
                                    output), block=False)
                            except Exception as e:
                                pass
                else:
                    print('{}:{}'.format(self.name, resp))

            while self.serial.inWaiting() > 0:
                self.serial.read()

        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                print(message[:-1].decode())

    def cmd_nb(self, command, silent=False):
        self.dev_process_raw = multiprocessing.Process(
            target=self.cmd, args=(command, silent, self.output_queue, self.bundle_dir))
        self.dev_process_raw.start()

    def get_opt(self):
        try:
            self.output = self.output_queue.get(block=False)
        except Exception:
            pass

    def reset(self, output=True):
        if output:
            print('Rebooting pyboard...')
        if not self.serial.is_open:
            self.serial.open()
        # time.sleep(1)
        while self.serial.inWaiting() > 0:
            self.serial.read()
        # print(self.serial.inWaiting())
        # time.sleep(1)
        self.serial.write(struct.pack('i', 0x0d))
        self.serial.write(struct.pack('i', 0x04))  # EOT
        self.serial.write(struct.pack('i', 0x0d))  # CR
        self.serial.flush()
        # print(self.serial.inWaiting())
        while self.serial.inWaiting() > 0:
            self.serial.read()
        # print(self.serial.inWaiting())
        self.serial.write(struct.pack('i', 0x0d))
        # time.sleep(1)
        # self.serial.close()
        if output:
            print('Done!')

    def kbi(self, output=True):
        if output:
            print('KeyboardInterrupt sent!')
        if not self.serial.is_open:
            self.serial.open()
        # time.sleep(1)
        while self.serial.inWaiting() > 0:
            self.serial.read()
        # print(self.serial.inWaiting())
        # time.sleep(1)
        self.serial.write(struct.pack('i', 0x0d))
        self.serial.write(struct.pack('i', 0x03))  # ETX
        self.serial.write(struct.pack('i', 0x0d))  # CR
        self.serial.flush()
        # print(self.serial.inWaiting())
        while self.serial.inWaiting() > 0:
            self.serial.read()
        # print(self.serial.inWaiting())
        self.serial.write(struct.pack('i', 0x0d))
        # time.sleep(1)
        # self.serial.close()
        if output:
            print('Done!')

    def open_wconn(self, bundle_dir='', dbg=False):
        self._wconn = REPLWrapper(
            bundle_dir + "picocom -t '>>> ' -b{} {}".format(self.baudrate, self.serial_port), ">>> ", None)
        cmd = self._wconn.child.sendline("\x08"*len('>>> ')+"\r")
        self.repl_CONN = True
        if dbg:
            print('Serial connection ready!')

    def wr_cmd(self, cmd_msg, dbg=False, silent=False, rtn=True, timeout=1, follow=True, pipe=None):
        if cmd_msg.endswith('\r'):
            cmd = self._wconn.child.sendline(cmd_msg)
        else:
            cmd = self._wconn.child.sendline(cmd_msg + '\r')
        s_output = False
        try:
            raw_out = ' '
            cmd_echo = self._wconn.child.readline()
            timed_out = False
            len_output_now = 0
            len_output_prev = 0
            expect_prompt = ' '
            # time.sleep(0.2)
            while not self._wconn.prompt.strip() in expect_prompt.strip():
                try:
                    raw_out += self._wconn.child.read_nonblocking(
                        2**16, timeout)
                    s_output = True
                    expect_prompt = raw_out.split('\n')[-1]
                    if follow:
                        outlines = [line for line in raw_out.split(
                            '...')[-1].splitlines()[:-1] if line != '']  # line.strip()
                        len_output_now = len(outlines)
                        if dbg:
                            print(outlines)
                            print('LEN NOW: {}'.format(len_output_now))
                            print('LEN PREV: {}'.format(len_output_prev))
                        if len_output_now > len_output_prev:
                            diff_len = len_output_now - len_output_prev
                            len_output_prev = len(outlines)
                            for line in outlines[-diff_len:]:
                                if line == outlines[0]:
                                    line = line[1:]
                                cmds = [val for val in cmd_msg.split(
                                    '\r') if val != '']
                                if line.replace('>>> ', '') != cmd_msg and line.replace('>>> ', '').strip() not in cmds and '\x08' not in line.replace('>>> ', ''):
                                    self.response = line.replace('>>> ', '')
                                    if pipe is not None:
                                        pipe(self.response+'\n')
                                    else:
                                        if not silent:
                                            print(self.response)
                        elif len_output_now < len_output_prev:
                            len_output_prev = 0

                except KeyboardInterrupt:
                    print('^C')
                    self._wconn.child.sendline('\x03' + '\r')
                except Exception as e:
                    if dbg:
                        print(e)
                        print(expect_prompt)
                    timed_out = True

        except Exception as e:
            if dbg:
                print('Timeout')
        if s_output:
            s_output = raw_out.replace('>>>', '').strip().split('\n')[-1]
            self.process_raw = raw_out
            outlines = [line.strip() for line in self.process_raw.split(
                '...')[-1].splitlines()[:-1] if line != '']
            for line in outlines:
                if line != cmd_msg:
                    self.response = line
                    if rtn:
                        self.get_output()
                    if not silent:
                        if not follow:
                            print(line)

    def close_wconn(self):
        self._wconn.child.close()
        self.repl_CONN = False


class GROUP:
    def __init__(self, devs=[None], name=None):
        self.name = name
        self.devs = {dev.name: dev for dev in devs}
        self.dev_process_raw_dict = None
        self.output = None
        self.output_queue = {
            dev.name: multiprocessing.Queue(maxsize=1) for dev in devs}

    def cmd(self, command, group_silent=False, dev_silent=False, ignore=[], include=[]):
        if len(include) == 0:
            include = [dev for dev in self.devs.keys()]
        for dev in ignore:
            include.remove(dev)
        for dev in include:
            if not group_silent:
                print('Sending command to {}'.format(dev))
            self.devs[dev].cmd(command, silent=dev_silent)
        self.output = {dev: self.devs[dev].output for dev in include}

    def cmd_p(self, command, group_silent=False, dev_silent=False, ignore=[], include=[], blocking=True, id=False):
        if not id:
            self.dev_process_raw_dict = {dev: multiprocessing.Process(target=self.devs[dev].cmd, args=(
                command, dev_silent, self.output_queue[dev])) for dev in self.devs.keys()}
            if len(include) == 0:
                include = [dev for dev in self.devs.keys()]
            for dev in ignore:
                include.remove(dev)
            if not group_silent:
                print('Sending command to: {}'.format(', '.join(include)))
            for dev in include:
                # self.devs[dev].cmd(command, silent=dev_silent)
                self.dev_process_raw_dict[dev].start()

            while blocking:
                dev_proc_state = [self.dev_process_raw_dict[dev].is_alive(
                ) for dev in self.dev_process_raw_dict.keys()]
                if all(state is False for state in dev_proc_state):
                    time.sleep(0.1)
                    if not group_silent:
                        print('Done!')
                    break

            try:
                self.output = {dev: self.output_queue[dev].get(
                    timeout=2) for dev in include}
            except Exception as e:
                pass
            for dev in include:
                try:
                    self.devs[dev].output = self.output[dev]
                except Exception as e:
                    pass
        else:
            self.dev_process_raw_dict = {dev: multiprocessing.Process(target=self.devs[dev].cmd_p, args=(
                command, dev_silent, self.output_queue[dev])) for dev in self.devs.keys()}
            if len(include) == 0:
                include = [dev for dev in self.devs.keys()]
            for dev in ignore:
                include.remove(dev)
            if not group_silent:
                print('Sending command to: {}'.format(', '.join(include)))
            for dev in include:
                # self.devs[dev].cmd(command, silent=dev_silent)
                self.dev_process_raw_dict[dev].start()

            while blocking:
                dev_proc_state = [self.dev_process_raw_dict[dev].is_alive(
                ) for dev in self.dev_process_raw_dict.keys()]
                if all(state is False for state in dev_proc_state):
                    time.sleep(0.1)
                    if not group_silent:
                        print('Done!')
                    break

            try:
                self.output = {dev: self.output_queue[dev].get(
                    timeout=2) for dev in include}
            except Exception as e:
                pass
            for dev in include:
                try:
                    self.devs[dev].output = self.output[dev]
                except Exception as e:
                    pass

    def get_opt(self):
        try:
            self.output = {dev: self.output_queue[dev].get(
                timeout=2) for dev in self.devs.keys()}
        except Exception as e:
            pass
        for dev in self.devs.keys():
            try:
                self.devs[dev].output = self.output[dev]
            except Exception as e:
                pass

    def reset(self, group_silent=False, output_dev=True, ignore=[], include=[]):
        if len(include) == 0:
            include = [dev for dev in self.devs.keys()]
        for dev in ignore:
            include.remove(dev)
        for dev in include:
            if not group_silent:
                print('Rebooting {}'.format(dev))
            self.devs[dev].reset(output=output_dev)


# CODE BLOCK PARSERS

# def uparser_dec(long_command):
#     lines_cmd = []
#     space_count = [0]
#     for line in long_command.split('\n')[1:]:
#         line_before = space_count[-1]
#         line_now = line.count('   ')
#         # print(line_now)
#         space_count.append(line_now)
#         if line_before > line_now:
#             if line_now > 0:
#                 lines_cmd.append(
#                     ''.join(['\b' for i in range(int((line_before/line_now)/2))]+[line.strip()]))
#                 # print('This line must be backspaced {} times: '.format((line_before/line_now)/2), line)
#             # else:
#             #     if len(line.strip()) > 0:
#             #         lines_cmd.append(''.join(['\b' for i in range(1)]+[line.strip()]))
#
#         else:
#             lines_cmd.append('\r'.join([line.strip()]))
#     return "{}\r\r".format('\r'.join(lines_cmd))

def uparser_dec(long_command, pastemode=False, end=''):
    lines_cmd = []
    space_count = [0]
    buffer_line = ''
    previous_incomplete = False
    for line in long_command.split('\n')[1:]:
        line_before = space_count[-1]
        if line != '':
            if not previous_incomplete:
                line_now = line.count('    ')
                # print(line_now)
        # print(line_now)
            space_count.append(line_now)
            if line_before > line_now:
                if line_now > 0:
                    lines_cmd.append(
                        ''.join(['\b' for i in range(int("{:.0f}".format((line_before-line_now))))]+[line.strip()]))
                    # print('This line must be backspaced {:.0f} times: {}'.format(((line_before-line_now)), line.strip()))
                # else:
                #     if len(line.strip()) > 0:
                #         lines_cmd.append(''.join(['\b' for i in range(1)]+[line.strip()]))

            elif line[-1] == ',':
                # print('line incomplete')
                previous_incomplete = True
                buffer_line += line.strip()
            else:
                if buffer_line != '':
                    if previous_incomplete:
                        # print('This is the complete line:{}'.format(buffer_line+line.strip()))
                        lines_cmd.append('\r'.join([buffer_line+line.strip()]))
                        buffer_line = ''
                        previous_incomplete = False
                else:
                    lines_cmd.append('\r'.join([line.strip()]))
    if not pastemode:
        return "{}{}{}".format('\r'.join(lines_cmd), '\r'*line_now, end)
    else:
        return "\x05{}\x04".format(long_command)


def upy_code(func):  # TODO: ACCEPT DEVICE ARG
    def wrapper_get_str_func(*args, **kwargs):
        print(getsource(func))
        return uparser_dec(getsource(func))
    return wrapper_get_str_func


# PYTHON PHANTOM DECORATORS

def upy_cmd(device, debug=False, rtn=True):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            args_repr = [repr(a) for a in args]
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd = f"{func.__name__}({signature})"
            device.output = None
            if debug:
                device.cmd(cmd)
            else:
                device.cmd(cmd, silent=True)
            if rtn:
                return device.output
            else:
                return None
        return wrapper_cmd
    return decorator_cmd_str


def upy_cmd_c(device, debug=False, rtn=True, out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            name = func(*args, **kwargs)
            cmd = "{}.{}".format(name, cmd_)
            device.output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            if debug:
                device.cmd(cmd)
            else:
                device.cmd(cmd, silent=True)
            if rtn:
                return device.output
            else:
                return None
        return wrapper_cmd
    return decorator_cmd_str


def upy_cmd_c_raw(device, out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            name = func(*args, **kwargs)
            cmd = "{}.{}".format(name, cmd_)
            device.output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            device.cmd(cmd, capture_output=True)
            try:
                device.output = device.long_output[0].strip()
            except Exception as e:
                print(e)
                pass
            return None
        return wrapper_cmd
    return decorator_cmd_str


def upy_cmd_c_r(debug=False, rtn=True, out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            dev_dict = func(*args, **kwargs)
            cmd = "{}.{}".format(dev_dict['name'], cmd_)
            dev_dict['dev'].output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            if debug:
                dev_dict['dev'].cmd(cmd)
            else:
                dev_dict['dev'].cmd(cmd, silent=True)
            if rtn:
                return dev_dict['dev'].output
            else:
                return None
        return wrapper_cmd
    return decorator_cmd_str


def upy_cmd_c_raw_r(out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            dev_dict = func(*args, **kwargs)
            cmd = "{}.{}".format(dev_dict['name'], cmd_)
            dev_dict['dev'].output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            dev_dict['dev'].cmd(cmd, capture_output=True)
            try:
                dev_dict['dev'].output = dev_dict['dev'].long_output[0].strip()
            except Exception as e:
                print(e)
                pass
            return None
        return wrapper_cmd
    return decorator_cmd_str


def upy_cmd_c_r_in_callback(debug=False, rtn=True, out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            dev_dict = func(*args, **kwargs)
            name = dev_dict['name']
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={name}.{v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            cmd = "{}.{}".format(dev_dict['name'], cmd_)
            dev_dict['dev'].output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            if debug:
                dev_dict['dev'].cmd(cmd)
            else:
                dev_dict['dev'].cmd(cmd, silent=True)
            if rtn:
                return dev_dict['dev'].output
            else:
                return None
        return wrapper_cmd
    return decorator_cmd_str


def upy_cmd_c_r_nb(debug=False, rtn=True, out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            dev_dict = func(*args, **kwargs)
            cmd = "{}.{}".format(dev_dict['name'], cmd_)
            dev_dict['dev'].output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            if debug:
                dev_dict['dev'].cmd_nb(cmd)
            else:
                dev_dict['dev'].cmd_nb(cmd, silent=True)
            if rtn:
                dev_dict['dev'].get_opt()
                return dev_dict['dev'].output
            else:
                return None
        return wrapper_cmd
    return decorator_cmd_str


def upy_cmd_c_r_nb_in_callback(debug=False, rtn=True, out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            dev_dict = func(*args, **kwargs)
            name = dev_dict['name']
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={name}.{v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            cmd = "{}.{}".format(dev_dict['name'], cmd_)
            dev_dict['dev'].output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            if debug:
                dev_dict['dev'].cmd_nb(cmd)
            else:
                dev_dict['dev'].cmd_nb(cmd, silent=True)
            if rtn:
                dev_dict['dev'].get_opt()
                return dev_dict['dev'].output
            else:
                return None
        return wrapper_cmd
    return decorator_cmd_str


def upy_wrcmd_c_r(debug=False, rtn=True, out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            dev_dict = func(*args, **kwargs)
            cmd = "{}.{}".format(dev_dict['name'], cmd_)
            dev_dict['dev'].output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            if debug:
                dev_dict['dev'].wr_cmd(cmd)
            else:
                dev_dict['dev'].wr_cmd(cmd, silent=True)
            if rtn:
                return dev_dict['dev'].output
            else:
                return None
        return wrapper_cmd
    return decorator_cmd_str


# def upy_wrcmd_c_raw_r(out=False):
#     def decorator_cmd_str(func):
#         @functools.wraps(func)
#         def wrapper_cmd(*args, **kwargs):
#             flags = ['>', '<', 'object', 'at', '0x']
#             args_repr = [repr(a) for a in args if any(
#                 f not in repr(a) for f in flags)]
#             kwargs_repr = [f"{k}={v!r}" if not callable(
#                 v) else f"{k}={v.__name__}" for k, v in kwargs.items()]
#             signature = ", ".join(args_repr + kwargs_repr)
#             cmd_ = f"{func.__name__}({signature})"
#             dev_dict = func(*args, **kwargs)
#             cmd = "{}.{}".format(dev_dict['name'], cmd_)
#             dev_dict['dev'].output = None
#             if out:
#                 cmd = "{}".format(cmd_)
#             else:
#                 pass
#             dev_dict['dev'].wr_cmd(cmd, capture_output=True)
#             try:
#                 dev_dict['dev'].output = dev_dict['dev'].long_output[0].strip()
#             except Exception as e:
#                 print(e)
#                 pass
#             return None
#         return wrapper_cmd
#     return decorator_cmd_str


def upy_wrcmd_c_r_in_callback(debug=False, rtn=True, out=False):
    def decorator_cmd_str(func):
        @functools.wraps(func)
        def wrapper_cmd(*args, **kwargs):
            flags = ['>', '<', 'object', 'at', '0x']
            args_repr = [repr(a) for a in args if any(
                f not in repr(a) for f in flags)]
            dev_dict = func(*args, **kwargs)
            name = dev_dict['name']
            kwargs_repr = [f"{k}={v!r}" if not callable(
                v) else f"{k}={name}.{v.__name__}" for k, v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            cmd_ = f"{func.__name__}({signature})"
            cmd = "{}.{}".format(dev_dict['name'], cmd_)
            dev_dict['dev'].output = None
            if out:
                cmd = "{}".format(cmd_)
            else:
                pass
            if debug:
                dev_dict['dev'].wr_cmd(cmd)
            else:
                dev_dict['dev'].wr_cmd(cmd, silent=True)
            if rtn:
                return dev_dict['dev'].output
            else:
                return None
        return wrapper_cmd
    return decorator_cmd_str
# LOAD DEVICE CONFIGURATION FUNCTIONS (json) devtools.py (submodule)

# DEFAULT IS GLOBAL DIR, BUT dir= option available (in case of bundle_dir)
# MAKE A GLOBAL DIR TO STORE DEV CONFIGURATIONS, (.upydevice_devs in $HOME)
# load_dev(name, dir=), returns {'ip':X, 'passwd':X}
# store_dev(name, ip=None, pass=None, s_port=None, dir=$HOME/.upydevice_devs)
# if not .upydevice_devs then create
# if ip:
# json dumps {}
# else:
# if s_port:
# json dumps {}
# dev = load_dev('my_esp32')
# esp32 = W_UPYDEVICE(dev['ip'], dev['passwd'])
# dev = load_dev('my_pyb')
# pyboard = PYBOARD(dev['s_port'])

# BASE CLASSES UPYDEVICES


class BASE_SERIAL_DEVICE:
    def __init__(self, serial_port, baudrate):
        self.serial = serial.Serial(serial_port, baudrate)
        self.bytes_sent = 0
        self.buff = b''
        self._kbi = '\x03'
        self._banner = '\x02'
        self._reset = '\x04'
        self.response = ''
        self._traceback = b'Traceback (most recent call last):'
        self.output = None
        self.wr_cmd = self.cmd
        self.prompt = b'>>> '

    def cmd(self, cmd, silent=False, rtn=True, long_string=False, rtn_resp=False):
        self.response = ''
        self.output = None
        self.buff = b''
        self.bytes_sent = self.serial.write(bytes(cmd+'\r', 'utf-8'))
        time.sleep(0.2)
        # self.buff = self.serial.read_all()[self.bytes_sent+1:]
        if self.buff == b'':
            time.sleep(0.2)
            self.buff = self.serial.read_all()
        cmd_filt = bytes(cmd + '\r\n', 'utf-8')
        self.buff = self.buff.replace(cmd_filt, b'', 1)
        if self._traceback in self.buff:
            long_string = True
        if long_string:
            self.response = self.buff.replace(b'\r', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode()
        else:
            self.response = self.buff.replace(b'\r\n', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode()
        if not silent:
            if self.response != '\n' and self.response != '':
                print(self.response)
            else:
                self.response = ''
        if rtn:
            self.get_output()
            if self.output == '\n' and self.output == '':
                self.output = None
            if self.output is None:
                if self.response != '' and self.response != '\n':
                    self.output = self.response
        if rtn_resp:
            return self.output

    def reset(self, silent=False):
        self.buff = b''
        if not silent:
            print('Rebooting device...')
        self.bytes_sent = self.serial.write(bytes(self._reset, 'utf-8'))
        time.sleep(0.5)
        self.buff = self.serial.read_all()
        if not silent:
            print('Done!')

    def kbi(self, silent=True, pipe=None):
        if pipe is not None:
            self.wr_cmd(self._kbi, silent=silent)
            pipe(self.response, std='stderr')
        else:
            self.cmd(self._kbi, silent=silent)

    def banner(self, pipe=None):
        self.cmd(self._banner, silent=True, long_string=True)
        if pipe is None:
            print(self.response.replace('\n\n', '\n'))
        else:
            pipe(self.response.replace('\n\n', '\n'))

    def get_output(self):
        try:
            self.output = ast.literal_eval(self.response)
        except Exception as e:
            if 'bytearray' in self.response:
                try:
                    self.output = bytearray(ast.literal_eval(
                        self.response.strip().split('bytearray')[1]))
                except Exception as e:
                    pass
            else:
                if 'array' in self.response:
                    try:
                        arr = ast.literal_eval(
                            self.response.strip().split('array')[1])
                        self.output = array(arr[0], arr[1])
                    except Exception as e:
                        pass
            pass


class BASE_WS_DEVICE:
    def __init__(self, target, password, init=False, ssl=False, auth=False, capath=CA_PATH[0]):
        self.ws = None
        self.ip = target
        self.pswd = password
        self.port = 8266
        self.bytes_sent = 0
        self.buff = b''
        self.raw_buff = b''
        self.prompt = b'>>> '
        self.response = ''
        self._kbi = '\x03'
        self._banner = '\x02'
        self._reset = '\x04'
        self._traceback = b'Traceback (most recent call last):'
        self._flush = b''
        self.output = None
        self.platform = None
        self.connected = False
        self.repl_CONN = self.connected
        if init:
            if not ssl:
                self.ws = wsclient.connect('ws://{}:{}'.format(self.ip, self.port), self.pswd)
            else:
                self.port = 8833
                self.ws = wsclient.connect('wss://{}:{}'.format(self.ip, self.port), self.pswd, auth=auth, capath=capath)
            self.connected = True
            self.repl_CONN = self.connected

    def open_wconn(self, ssl=False, auth=False, capath=CA_PATH[0]):
        if not ssl:
            self.ws = wsclient.connect('ws://{}:{}'.format(self.ip, self.port), self.pswd)
        else:
            self.port = 8833
            self.ws = wsclient.connect('wss://{}:{}'.format(self.ip, self.port), self.pswd, auth=auth, capath=capath)
        self.connected = True
        self.repl_CONN = self.connected

    def close_wconn(self):
        self.ws.close()
        self.connected = False
        self.repl_CONN = self.connected

    def write(self, cmd):
        n_bytes = len(bytes(cmd, 'utf-8'))
        self.ws.send(cmd)
        return n_bytes

    def read_all(self):
        self.ws.sock.settimeout(None)
        try:
            self.raw_buff = b''
            while self.prompt not in self.raw_buff:
                fin, opcode, data = self.ws.read_frame()
                self.raw_buff += data

            return self.raw_buff
        except socket.timeout as e:
            return self.raw_buff

    def flush(self):
        self.ws.sock.settimeout(0.01)
        self._flush = b''
        while True:
            try:
                fin, opcode, data = self.ws.read_frame()
                self._flush += data
            except socket.timeout as e:
                break
            except protocol.NoDataException as e:
                break

    def wr_cmd(self, cmd, silent=False, rtn=True, rtn_resp=False, long_string=False):
        self.output = None
        self.response = ''
        self.buff = b''
        self.flush()
        self.bytes_sent = self.write(cmd+'\r')
        # time.sleep(0.1)
        # self.buff = self.read_all()[self.bytes_sent:]
        self.buff = self.read_all()
        if self.buff == b'':
            # time.sleep(0.1)
            self.buff = self.read_all()
        # print(self.buff)
        # filter command
        cmd_filt = bytes(cmd + '\r\n', 'utf-8')
        self.buff = self.buff.replace(cmd_filt, b'', 1)
        if self._traceback in self.buff:
            long_string = True
        if long_string:
            self.response = self.buff.replace(b'\r', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode('utf-8', 'ignore')
        else:
            self.response = self.buff.replace(b'\r\n', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode('utf-8', 'ignore')
        if not silent:
            if self.response != '\n' and self.response != '':
                print(self.response)
            else:
                self.response = ''
        if rtn:
            self.get_output()
            if self.output == '\n' and self.output == '':
                self.output = None
            if self.output is None:
                if self.response != '' and self.response != '\n':
                    self.output = self.response
        if rtn_resp:
            return self.output

    def cmd(self, cmd, silent=False, rtn=False, ssl=False):
        if not self.connected:
            self.open_wconn(ssl=ssl, auth=True)
        self.wr_cmd(cmd, silent=True)
        if self.connected:
            self.close_wconn()
        self.get_output()
        if not silent:
            print(self.response)
        if rtn:
            return self.output

    def reset(self, silent=False, ssl=False):
        if not silent:
            print('Rebooting device...')
        if self.connected:
            self.bytes_sent = self.write(self._reset)
            self.close_wconn()
            time.sleep(1)
            while True:
                try:
                    self.open_wconn()
                    self.wr_cmd(self._banner, silent=True)
                    break
                except Exception as e:
                    time.sleep(0.5)
            if not silent:
                print('Done!')
        else:
            self.open_wconn(ssl=ssl, auth=True)
            self.bytes_sent = self.write(self._reset)
            self.close_wconn()
            if not silent:
                print('Done!')

    def kbi(self, silent=True, pipe=None):
        if self.connected:
            if pipe is not None:
                self.wr_cmd(self._kbi, silent=silent)
                bf_output = self.response.split('Traceback')[0]
                traceback = 'Traceback' + self.response.split('Traceback')[1]
                if bf_output != '' and bf_output != '\n':
                    pipe(bf_output)
                pipe(traceback, std='stderr')
            else:
                self.wr_cmd(self._kbi, silent=silent)
        else:
            self.cmd(self._kbi, silent=silent)

    def banner(self, pipe=None):
        self.wr_cmd(self._banner, silent=True, long_string=True)
        if pipe is None:
            print(self.response.replace('\n\n', '\n'))
        else:
            pipe(self.response.replace('\n\n', '\n'))

    def get_output(self):
        try:
            self.output = ast.literal_eval(self.response)
        except Exception as e:
            if 'bytearray' in self.response:
                try:
                    self.output = bytearray(ast.literal_eval(
                        self.response.strip().split('bytearray')[1]))
                except Exception as e:
                    pass
            else:
                if 'array' in self.response:
                    try:
                        arr = ast.literal_eval(
                            self.response.strip().split('array')[1])
                        self.output = array(arr[0], arr[1])
                    except Exception as e:
                        pass
            pass


class SERIAL_DEVICE(BASE_SERIAL_DEVICE):
    def __init__(self, serial_port, baudrate=115200, name=None, dev_platf=None, autodetect=False):
        super().__init__(serial_port=serial_port, baudrate=baudrate)
        self.dev_class = 'SERIAL'
        self.dev_platform = dev_platf
        self.serial_port = serial_port
        self.baudrate = baudrate
        self.name = name
        self.raw_buff = b''
        self.message = b''
        self.data_buff = ''
        self.datalog = []
        self.output_queue = multiprocessing.Queue(maxsize=1)
        self.paste_cmd = ''
        self.connected = True
        self.repl_CONN = self.connected
        self._is_traceback = False
        self._is_first_line = True
        self.stream_kw = ['print', 'ls', 'cat', 'help', 'from', 'import',
                          'tree', 'du']
        if name is None and self.dev_platform:
            self.name = '{}_{}'.format(self.dev_platform, self.serial_port.split('/')[-1])
        if autodetect:
            self.cmd('\r', silent=True)
            self.cmd("import sys; sys.platform", silent=True)
            self.dev_platform = self.output
            self.name = '{}_{}'.format(self.dev_platform, self.serial_port.split('/')[-1])

    def flush_conn(self):
        flushed = 0
        while flushed < 2:
            try:
                if self.serial.readable():
                    self.buff = self.serial.read_all()
                    flushed += 1
                    self.buff = b''
            except Exception as e:
                flushed += 1

    def _kbi_cmd(self):
        self.bytes_sent = self.serial.write(bytes(self._kbi+'\r', 'utf-8'))

    def read_until(self, exp=None, exp_p=True, rtn=False):
        self.raw_buff = b''
        while exp not in self.raw_buff:
            self.raw_buff += self.serial.read(1)
            if exp_p:
                if self.prompt in self.raw_buff:
                    break
        if rtn:
            return self.raw_buff
            # print(self.raw_buff)

    def cmd(self, cmd, silent=False, rtn=True, long_string=False,
            rtn_resp=False, follow=False, pipe=None, multiline=False,
            dlog=False, nb_queue=None):
        self._is_traceback = False
        self.response = ''
        self.output = None
        self.flush_conn()
        self.buff = b''
        self.bytes_sent = self.serial.write(bytes(cmd+'\r', 'utf-8'))
        # time.sleep(0.2)
        # self.buff = self.serial.read_all()[self.bytes_sent+1:]
        if self.buff == b'':
            if not follow:
                time.sleep(0.2)
                # self.read_until(b'\n')
                self.buff = self.serial.read_all()
                if self.buff == b'' or self.prompt not in self.buff:
                    time.sleep(0.2)
                    self.buff += self.serial.read_all()
                    while self.prompt not in self.buff:
                        self.buff += self.serial.read_all()
            else:
                silent_pipe = silent
                silent = True
                rtn = False
                rtn_resp = False
                try:
                    self.follow_output(cmd, pipe=pipe, multiline=multiline,
                                       silent=silent_pipe)
                except KeyboardInterrupt:
                    # time.sleep(0.2)
                    self.paste_cmd = ''
                    if pipe is None:
                        print('')  # print Traceback under ^C
                    self.kbi(pipe=pipe)  # KBI
                    time.sleep(0.2)
                    for i in range(1):
                        self.serial.write(b'\r')
                        self.flush_conn()
        cmd_filt = bytes(cmd + '\r\n', 'utf-8')
        self.buff = self.buff.replace(cmd_filt, b'', 1)
        if dlog:
            self.data_buff = self.buff.replace(b'\r', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode()
        if self._traceback in self.buff:
            long_string = True
        if long_string:
            self.response = self.buff.replace(b'\r', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode()
        else:
            self.response = self.buff.replace(b'\r\n', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode()
        if not silent:
            if self.response != '\n' and self.response != '':
                if pipe is None:
                    print(self.response)
            else:
                self.response = ''
        if rtn:
            self.get_output()
            if self.output == '\n' and self.output == '':
                self.output = None
            if self.output is None:
                if self.response != '' and self.response != '\n':
                    self.output = self.response
            if nb_queue is not None:
                nb_queue.put((self.output), block=False)
        if rtn_resp:
            return self.output

    def follow_output(self, inp, pipe=None, multiline=False, silent=False):
        self.raw_buff = b''
        # self.raw_buff += self.serial.read(len(inp)+2)
        # if not pipe:
        self.read_until(exp=b'\n')
        # self.read_until(exp=bytes(inp, 'utf-8')+b'\r\n')
        # self.read_until(exp=bytes(inp, 'utf-8'))
        if pipe is not None:
            self._is_first_line = True
            if any(_kw in inp for _kw in self.stream_kw):
                self._is_first_line = False
            if self.paste_cmd != '':
                if self.dev_platform != 'pyboard':
                    while self.paste_cmd.split('\n')[-1] not in self.raw_buff.decode():
                        self.read_until(exp=b'\n')

                    self.read_until(exp=b'\n')
        while True:
            if pipe is not None and not multiline:
                self.message = b''
                while b'\n' not in self.message:
                    self.message += self.serial.read(1)
                    if self.prompt in self.message:
                        break
            else:
                self.message = self.serial.read_all()
            self.buff += self.message
            self.raw_buff += self.message
            if self.message == b'':
                pass
            else:
                if self.message.startswith(b'\n'):
                    self.message = self.message[1:]
                if pipe:
                    cmd_filt = bytes(inp + '\r\n', 'utf-8')
                    self.message = self.message.replace(cmd_filt, b'', 1)
                msg = self.message.replace(b'\r', b'').decode()
                if 'cat' in inp:
                    if msg.endswith('>>> '):
                        msg = msg.replace('>>> ', '')
                        if not msg.endswith('\n'):
                            msg = msg+'\n'
                if pipe is not None:
                    if msg == '>>> ':
                        pass
                    else:
                        pipe_out = msg.replace('>>> ', '')
                        if pipe_out != '':
                            if self.paste_cmd != '':
                                if self.buff.endswith(b'>>> '):
                                    # if pipe_out[-1] == '\n':
                                    pipe_out = pipe_out[:-1]
                                    if pipe_out != '' and pipe_out != '\n':
                                        if self._traceback.decode() in pipe_out:
                                            self._is_traceback = True
                                            # catch before traceback:
                                            pipe_stdout = pipe_out.split(self._traceback.decode())[0]
                                            if pipe_stdout != '' and pipe_stdout != '\n':
                                                pipe(pipe_stdout)
                                            pipe_out = self._traceback.decode() + pipe_out.split(self._traceback.decode())[1]
                                        if self._is_traceback:
                                            pipe(pipe_out, std='stderr')
                                        else:
                                            if self._is_first_line:
                                                self._is_first_line = False
                                                if not multiline:
                                                    pipe(pipe_out, execute_prompt=True)
                                                else:
                                                    pipe(pipe_out)
                                            else:
                                                pipe(pipe_out)
                                else:
                                    if self._traceback.decode() in pipe_out:
                                        self._is_traceback = True
                                        # catch before traceback:
                                        pipe_stdout = pipe_out.split(self._traceback.decode())[0]
                                        if pipe_stdout != '' and pipe_stdout != '\n':
                                            pipe(pipe_stdout)
                                        pipe_out = self._traceback.decode() + pipe_out.split(self._traceback.decode())[1]
                                    if self._is_traceback:
                                        pipe(pipe_out, std='stderr')
                                    else:
                                        if self._is_first_line:
                                            self._is_first_line = False
                                            if not multiline:
                                                pipe(pipe_out, execute_prompt=True)
                                            else:
                                                pipe(pipe_out)
                                        else:
                                            pipe(pipe_out)
                            else:
                                if self._traceback.decode() in pipe_out:
                                    self._is_traceback = True
                                    # catch before traceback:
                                    pipe_stdout = pipe_out.split(self._traceback.decode())[0]
                                    if pipe_stdout != '' and pipe_stdout != '\n':
                                        pipe(pipe_stdout)
                                    pipe_out = self._traceback.decode() + pipe_out.split(self._traceback.decode())[1]
                                if self._is_traceback:
                                    pipe(pipe_out, std='stderr')
                                else:
                                    if self._is_first_line:
                                        self._is_first_line = False
                                        if not multiline:
                                            pipe(pipe_out, execute_prompt=True)
                                        else:
                                            pipe(pipe_out)
                                    else:
                                        pipe(pipe_out)
                else:
                    if pipe is None:
                        if not silent:
                            print(msg.replace('>>> ', ''), end='')
            if self.buff.endswith(b'>>> '):
                break
        self.paste_cmd = ''

    def is_reachable(self):
        portlist = [p.device for p in
                    serial.tools.list_ports.comports()] + glob.glob('/dev/*')
        if self.serial.writable() and self.serial_port in portlist:
            return True
        else:
            return False

    def close_wconn(self):
        self.serial.close()
        self.connected = False

    def open_wconn(self):
        if self.serial.is_open:
            pass
        else:
            self.serial.open()
        self.connected = True

    def paste_buff(self, long_command):
        self.paste_cmd = long_command
        self.serial.write(b'\x05')
        lines = long_command.split('\n')
        for line in lines:
            time.sleep(0.01)
            self.serial.write(bytes(line+'\n', 'utf-8'))
        self.flush_conn()

    def get_datalog(self, dvars=None, fs=None, time_out=None, units=None):
        self.datalog = []
        self.output = None
        for line in self.data_buff.splitlines():
            self.output = None
            self.response = line
            self.get_output()
            if self.output is not None and self.output != '':
                self.datalog.append(self.output)
        if dvars is not None and self.datalog != []:
            temp_dict = {var: [] for var in dvars}
            temp_dict['vars'] = dvars
            for data in self.datalog:
                if len(data) == len(dvars):
                    for i in range(len(data)):
                        temp_dict[dvars[i]].append(data[i])
            if time_out is not None:
                fs = int((1/time_out)*1000)
            if fs is not None:
                temp_dict['fs'] = fs
                temp_dict['ts'] = [i/temp_dict['fs'] for i in range(len(temp_dict[dvars[0]]))]
            if units is not None:
                temp_dict['u'] = units
            self.datalog = temp_dict

    def cmd_nb(self, command, silent=False, rtn=True, long_string=False,
               rtn_resp=False, follow=False, pipe=None, multiline=False,
               dlog=False):
        self.dev_process_raw = multiprocessing.Process(
            target=self.wr_cmd, args=(command, silent, rtn, long_string, rtn_resp,
                                      follow, pipe, multiline, dlog,
                                      self.output_queue))
        self.dev_process_raw.start()

    def get_opt(self):
        try:
            self.output = self.output_queue.get(block=False)
        except Exception:
            pass


class WS_DEVICE(BASE_WS_DEVICE):
    def __init__(self, target, password, init=False, ssl=False, auth=False,
                 capath=CA_PATH[0], name=None, dev_platf=None,
                 autodetect=False):
        super().__init__(target=target, password=password, init=init, ssl=ssl,
                         auth=auth, capath=capath)
        self.dev_class = 'WIRELESS'
        self.dev_platform = dev_platf
        self.name = name
        self.raw_buff = b''
        self.message = b''
        self.output_queue = multiprocessing.Queue(maxsize=1)
        self.data_buff = ''
        self.datalog = []
        self.paste_cmd = ''
        self.flush_conn = self.flush
        self._is_traceback = False
        self.stream_kw = ['print', 'ls', 'cat', 'help', 'from', 'import',
                          'tree', 'du']
        if name is None and self.dev_platform:
            self.name = '{}_{}'.format(self.dev_platform, self.ip.split('.')[-1])
        if autodetect:
            if not self.connected:
                self.cmd("import sys; sys.platform", silent=True)
            else:
                self.wr_cmd("import sys; sys.platform", silent=True)
            self.dev_platform = self.output
            self.name = '{}_{}'.format(self.dev_platform, self.ip.split('.')[-1])

    def readline(self):
        self.ws.sock.settimeout(None)
        try:
            self.raw_buff = b''
            while b'\r\n' not in self.raw_buff:
                fin, opcode, data = self.ws.read_frame()
                self.raw_buff += data
                if self.prompt in self.raw_buff:
                    break

            return self.raw_buff
        except socket.timeout as e:
            return self.raw_buff
        except KeyboardInterrupt:
            raise KeyboardInterrupt

    def wr_cmd(self, cmd, silent=False, rtn=True, long_string=False,
               rtn_resp=False, follow=False, pipe=None, multiline=False,
               dlog=False, nb_queue=None):
        self.output = None
        self._is_traceback = False
        self.response = ''
        self.buff = b''
        self.flush()
        self.bytes_sent = self.write(cmd+'\r')
        # time.sleep(0.1)
        # self.buff = self.read_all()[self.bytes_sent:]
        if not follow:
            self.buff = self.read_all()
        if self.buff == b'':
            # time.sleep(0.1)
            if not follow:
                self.buff = self.read_all()
            else:
                silent_pipe = silent
                silent = True
                rtn = False
                rtn_resp = False
                try:
                    self.follow_output(cmd, pipe=pipe, multiline=multiline,
                                       silent=silent_pipe)
                except KeyboardInterrupt:
                    # time.sleep(0.2)
                    self.paste_cmd = ''
                    if pipe is None:
                        print('')
                    self.kbi(pipe=pipe)  # KBI
                    time.sleep(0.2)
                    for i in range(1):
                        self.write('\r')
                        self.flush_conn()
        # print(self.buff)
        # filter command
        cmd_filt = bytes(cmd + '\r\n', 'utf-8')
        self.buff = self.buff.replace(cmd_filt, b'', 1)
        if dlog:
            self.data_buff = self.buff.replace(b'\r', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode('utf-8', 'ignore')
        if self._traceback in self.buff:
            long_string = True
        if long_string:
            self.response = self.buff.replace(b'\r', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode('utf-8', 'ignore')
        else:
            self.response = self.buff.replace(b'\r\n', b'').replace(b'\r\n>>> ', b'').replace(b'>>> ', b'').decode('utf-8', 'ignore')
        if not silent:
            if self.response != '\n' and self.response != '':
                if pipe is None:
                    print(self.response)
            else:
                self.response = ''
        if rtn:
            self.get_output()
            if self.output == '\n' and self.output == '':
                self.output = None
            if self.output is None:
                if self.response != '' and self.response != '\n':
                    self.output = self.response
            if nb_queue is not None:
                nb_queue.put((self.output), block=False)
        if rtn_resp:
            return self.output

    def follow_output(self, inp, pipe=None, multiline=False, silent=False):
        self.raw_buff += self.readline()
        if pipe is not None:
            self._is_first_line = True
            if any(_kw in inp for _kw in self.stream_kw):
                self._is_first_line = False
            if self.paste_cmd != '':
                while self.paste_cmd.split('\n')[-1] not in self.raw_buff.decode('utf-8', 'ignore'):
                    self.raw_buff += self.readline()
        while True:

            self.message = self.readline()
            self.buff += self.message
            self.raw_buff += self.message
            if self.message == b'':
                pass
            else:
                if self.message.startswith(b'\n'):
                    self.message = self.message[1:]
                if pipe:
                    cmd_filt = bytes(inp + '\r\n', 'utf-8')
                    self.message = self.message.replace(cmd_filt, b'', 1)
                msg = self.message.replace(b'\r', b'').decode('utf-8', 'ignore')
                if 'cat' in inp:
                    if msg.endswith('>>> '):
                        msg = msg.replace('>>> ', '')
                        if not msg.endswith('\n'):
                            msg = msg+'\n'

                if pipe is not None:
                    if msg == '>>> ':
                        pass
                    else:
                        pipe_out = msg.replace('>>> ', '')
                        if pipe_out != '':
                            # if '...' in pipe_out:
                            #     pipe(pipe_out.split('...')[-1])
                            # else:
                            if 'Traceback (most' in pipe_out:
                                self._is_traceback = True
                                # catch before traceback:
                                pipe_stdout = pipe_out.split('Traceback (most')[0]
                                if pipe_stdout != '' and pipe_stdout != '\n':
                                    pipe(pipe_stdout)
                                pipe_out = 'Traceback (most' + pipe_out.split('Traceback (most')[1]
                            if self._is_traceback:
                                pipe(pipe_out, std='stderr')
                            else:
                                if self._is_first_line:
                                    self._is_first_line = False
                                    if not multiline:
                                        pipe(pipe_out, execute_prompt=True)
                                    else:
                                        pipe(pipe_out)
                                else:
                                    pipe(pipe_out)
                if pipe is None:
                    if not silent:
                        print(msg.replace('>>> ', ''), end='')
            if self.buff.endswith(b'>>> '):
                break
        self.paste_cmd = ''

    def is_reachable(self, n_tries=2, max_loss=1, debug=False, timeout=2):
        ping_cmd_str = 'ping -c {} {} -t {}'.format(n_tries, self.ip, timeout)
        ping_cmd = shlex.split(ping_cmd_str)
        timeouts = 0
        down_kw = ['Unreachable', 'down', 'timeout']
        try:
            proc = subprocess.Popen(
                ping_cmd, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT)
            while proc.poll() is None:
                resp = proc.stdout.readline()[:-1].decode()
                if debug:
                    print(resp)
                if any([kw in resp for kw in down_kw]):
                    timeouts += 1

            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                if debug:
                    print(message[:-1].decode())

        except KeyboardInterrupt:
            time.sleep(1)
            result = proc.stdout.readlines()
            for message in result:
                if debug:
                    print(message[:-1].decode())

        if timeouts >= max_loss:
            if debug:
                print('DEVICE IS DOWN OR SIGNAL RSSI IS TO LOW')
            return False
        else:
            return True

    def paste_buff(self, long_command):
        self.paste_cmd = long_command
        self.write('\x05')
        lines = long_command.split('\n')
        for line in lines:
            time.sleep(0.1)
            self.write(line+'\n')
        self.flush_conn()

    def get_datalog(self, dvars=None, fs=None, time_out=None, units=None):
        self.datalog = []
        self.output = None
        for line in self.data_buff.splitlines():
            self.output = None
            self.response = line
            self.get_output()
            if self.output is not None and self.output != '':
                self.datalog.append(self.output)
        if dvars is not None and self.datalog != []:
            temp_dict = {var: [] for var in dvars}
            temp_dict['vars'] = dvars
            for data in self.datalog:
                if len(data) == len(dvars):
                    for i in range(len(data)):
                        temp_dict[dvars[i]].append(data[i])
            if time_out is not None:
                fs = int((1/time_out)*1000)
            if fs is not None:
                temp_dict['fs'] = fs
                temp_dict['ts'] = [i/temp_dict['fs'] for i in range(len(temp_dict[dvars[0]]))]
            if units is not None:
                temp_dict['u'] = units
            self.datalog = temp_dict

    def cmd(self, cmd, silent=False, rtn=False, ssl=False, nb_queue=None):
        if not self.connected:
            self.open_wconn(ssl=ssl, auth=True)
        self.wr_cmd(cmd, silent=True)
        if self.connected:
            self.close_wconn()
        self.get_output()
        if not silent:
            print(self.response)
        if rtn:
            return self.output
        if nb_queue is not None:
            nb_queue.put((self.output), block=False)

    def cmd_nb(self, command, silent=False, rtn=True, long_string=False,
               rtn_resp=False, follow=False, pipe=None, multiline=False,
               dlog=False):
        # do a
        if self.connected:
            self.dev_process_raw = multiprocessing.Process(
                target=self.wr_cmd, args=(command, silent, rtn, long_string, rtn_resp,
                                          follow, pipe, multiline, dlog,
                                          self.output_queue))
            self.dev_process_raw.start()
        else:
            self.dev_process_raw = multiprocessing.Process(
                target=self.cmd, args=(command, silent, False, False,
                                          self.output_queue))
            self.dev_process_raw.start()

    def get_opt(self):
        try:
            self.output = self.output_queue.get(block=False)
        except Exception:
            pass


#############################################

# DEV GROUP

class DEVGROUP:
    def __init__(self, devs=[None], name=None):
        self.name = name
        self.devs = {dev.name: dev for dev in devs}
        self.dev_process_raw_dict = None
        self.output = None
        self.output_queue = {
            dev.name: multiprocessing.Queue(maxsize=1) for dev in devs}

    def cmd(self, command, group_silent=False, dev_silent=False, ignore=[], include=[]):
        if len(include) == 0:
            include = [dev for dev in self.devs.keys()]
        for dev in ignore:
            include.remove(dev)
        for dev in include:
            if not group_silent:
                print('Sending command to {}'.format(dev))
            self.devs[dev].wr_cmd(command, silent=dev_silent)
        self.output = {dev: self.devs[dev].output for dev in include}

    def cmd_p(self, command, group_silent=False, dev_silent=False, ignore=[],
              include=[], blocking=True, id=False, rtn=True, long_string=False,
              rtn_resp=False, follow=False, pipe=None, multiline=False,
              dlog=False):
        if not id:
            self.dev_process_raw_dict = {dev: multiprocessing.Process(target=self.devs[dev].wr_cmd, args=(
                command, dev_silent, rtn, long_string, rtn_resp, follow, pipe,
                multiline, dlog, self.output_queue[dev])) for dev in self.devs.keys()}
            if len(include) == 0:
                include = [dev for dev in self.devs.keys()]
            for dev in ignore:
                include.remove(dev)
            if not group_silent:
                print('Sending command to: {}'.format(', '.join(include)))
            for dev in include:
                # self.devs[dev].cmd(command, silent=dev_silent)
                self.dev_process_raw_dict[dev].start()

            while blocking:
                dev_proc_state = [self.dev_process_raw_dict[dev].is_alive(
                ) for dev in self.dev_process_raw_dict.keys()]
                if all(state is False for state in dev_proc_state):
                    time.sleep(0.1)
                    if not group_silent:
                        print('Done!')
                    break

            try:
                self.output = {dev: self.output_queue[dev].get(
                    timeout=2) for dev in include}
            except Exception as e:
                pass
            for dev in include:
                try:
                    self.devs[dev].output = self.output[dev]
                except Exception as e:
                    pass

    def get_opt(self):
        try:
            self.output = {dev: self.output_queue[dev].get(
                timeout=2) for dev in self.devs.keys()}
        except Exception as e:
            pass
        for dev in self.devs.keys():
            try:
                self.devs[dev].output = self.output[dev]
            except Exception as e:
                pass

    def reset(self, group_silent=False, silent_dev=True, ignore=[], include=[]):
        if len(include) == 0:
            include = [dev for dev in self.devs.keys()]
        for dev in ignore:
            include.remove(dev)
        for dev in include:
            if not group_silent:
                print('Rebooting {}'.format(dev))
            self.devs[dev].reset(silent=silent_dev)
