#!/usr/bin/env python3
# 
# Cross Platform and Multi Architecture Advanced Binary Emulation Framework
# Built on top of Unicorn emulator (www.unicorn-engine.org) 

import ctypes
import struct
from qiling.const import *

def convert_struct_to_bytes(st):
    buffer = ctypes.create_string_buffer(ctypes.sizeof(st))
    ctypes.memmove(buffer, ctypes.addressof(st), ctypes.sizeof(st))
    return buffer.raw

def check_and_notify_protocols(ql):
    if len(ql.loader.notify_list) > 0:
        event_id, notify_func, notify_context = ql.loader.notify_list.pop(0)
        ql.nprint(f'Notify event:{event_id} calling:{notify_func:x} context:{notify_context:x}')
        ql.stack_push(ql.loader.end_of_execution_ptr)
        ql.reg.rcx = notify_context
        ql.reg.arch_pc = notify_func
        return True
    return False

def write_int32(ql, address, num):
    if ql.archendian == QL_ENDIAN.EL:
        ql.mem.write(address, struct.pack('<I',(num)))
    else:
        ql.mem.write(address, struct.pack('>I',(num)))

def write_int64(ql, address, num):
    if ql.archendian == QL_ENDIAN.EL:
        ql.mem.write(address, struct.pack('<Q',(num)))
    else:
        ql.mem.write(address, struct.pack('>Q',(num)))

def read_int64(ql, address):
    if ql.archendian == QL_ENDIAN.EL:
        return struct.unpack('<Q', ql.mem.read(address, 8))[0]
    else:
        return struct.unpack('>Q',ql.mem.read(address, 8))[0]

