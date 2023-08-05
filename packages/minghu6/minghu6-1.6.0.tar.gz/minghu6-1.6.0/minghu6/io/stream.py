# -*- coding:utf-8 -*-
# !/usr/bin/env python3

"""

"""
import io

__all__ = ['CanNotBeBytes',
           'hexStr_bytesIter']


class CanNotBeBytes(Exception):
    def __str__(self):
        return 'len(hex_str) % 2 == 0 or len(bin_str) % 8 == 0 etc.'


def hexStr_bytesIter(hexStr):
    """
    # only support hex
    :param hexStr:
    :return:
    """

    if len(hexStr) >= 2 and hexStr[:2].lower() == '0x':
        hexStr = hexStr[2:]

    if len(hexStr) % 2 != 0:
        raise CanNotBeBytes

    # format(value, '0'+str(hexStr_length)+'d')

    for i in range(len(hexStr) // 2):
        yield int(hexStr[i * 2] + hexStr[i * 2 + 1], 16)


def fetch_stream(print_func, *args, **other_kwargs):
    buffer = io.StringIO()
    other_kwargs.pop('file', None)
    print_func(*args, file=buffer, **other_kwargs)
    content = buffer.getvalue()
    return content
