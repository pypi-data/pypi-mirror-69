# -*- coding:utf-8 -*-
# !/usr/bin/env python3

"""

"""

import re

from minghu6.algs.var import isiterable
from minghu6.internet.char_escape import ESCAPED_CHARSET_MAP_DICT

__all__ = ['ReservedSectionNameError',
           'SmallConfig',
           ]


class ReservedSectionNameError(BaseException): pass


class SmallConfig():
    """
    based on section, like .ini config file,
    but multiple-lines log.
    [last_time]
    2017-01-01 10:02
    [failed]
    545321 http://csdn.com/postid#!=545321
    632222 http://csdn.com/postid#!=632222
    """
    LOGID = '_log_id'
    LOGSEP = '_log_sep'

    def __init__(self):
        self._section_dict = {}

    def get_section_dict(self):
        '''get a copy of section_dict'''
        return self._section_dict.copy()

    def set_section(self, section_name, iterable_obj):
        """section_name shouldn't start with `_` """
        if iterable_obj is None:
            pass
        elif not isiterable(iterable_obj):
            try:
                list(iterable_obj)
            except TypeError as ex:
                err_msg = ex.__str__()
                raise TypeError(err_msg)

        if section_name.startswith('_'):
            raise ReservedSectionNameError("`%s` shouldn't start with `_` " % section_name)
        self._section_dict[section_name] = iterable_obj

    def __contains__(self, section_name):
        return section_name in self._section_dict

    def __getitem__(self, section_name):
        if section_name in self._section_dict:
            return self.get_section(section_name)
        else:
            raise KeyError('{0} not exist'.format(section_name))

    def __setitem__(self, section_name, iterable_obj):
        return self.set_section(section_name, iterable_obj)

    def remove_section(self, section_name):
        self._section_dict[section_name] = None

    def get_section(self, section_name, default=None):
        return self._section_dict.get(section_name, default)

    def write_log(self, filepath, mode='w', sep=' ', log_id=None, format_func=None, **kwargs):
        """
        1. format_func(section_name, elem, sep) => str
           # section_name = None means all
        2. other kwargs for open
        3. mark None for delete
        """
        if format_func is None:
            format_func = lambda section_name, elem, sep: str(elem)

        with open(filepath, mode, **kwargs) as fw:
            if 'b' not in mode:
                fw.write('[%s]\n' % SmallConfig.LOGSEP)
                fw.write(ESCAPED_CHARSET_MAP_DICT[sep].html + '\n')

                fw.write('[%s]\n' % SmallConfig.LOGID)
                fw.write(str(log_id) + '\n')

                for key, value in self._section_dict.items():
                    if value is not None and key not in [SmallConfig.LOGID,
                                                         SmallConfig.LOGSEP]:
                        fw.write('[%s]\n' % key)
                        [fw.write('{0}\n'.format(format_func(key, elem, sep))) for elem in value]

            else:
                fw.write(b'[%s]\n' % SmallConfig.LOGSEP.encode())
                fw.write(ESCAPED_CHARSET_MAP_DICT[sep].html.encode() + b'\n')

                fw.write(b'[%s]\n' % SmallConfig.LOGID.encode())
                fw.write(str(log_id).encode() + b'\n')

                for key, value in self._section_dict.items():
                    if value is not None:
                        fw.write(b'[%s]\n' % key)
                        [fw.write(b'%s\n' % (elem)) for elem in value]

    def read_log(self, filepath, mode='r', format_func=None, **kwargs):
        """
        1. format_func(section_name, line, sep) => elem
           # section_name = None means all
        2. other kwargs for open
        """
        if format_func is None:
            format_func = lambda line, sep: line

        section_pattern = r"^\[.*\]$"
        with open(filepath, mode, **kwargs) as fr:
            section_content_list = []
            state = 'start'
            section_name = None
            for line in fr:
                line = line.strip()
                if re.match(section_pattern, line):

                    if state == 'start':
                        section_name = line[1:-1]
                        state = 'next'

                    elif state == 'next':
                        self._section_dict[section_name] = section_content_list
                        section_name = line[1:-1]
                        section_content_list = []
                        state = 'go_on'

                    elif state == 'go_on':
                        self._section_dict[section_name] = section_content_list
                        section_name = line[1:-1]
                        section_content_list = []

                else:
                    section_content_list.append(line)

            self._section_dict[section_name] = section_content_list
            # print(self._section_dict)
            sep = chr(int(self._section_dict[SmallConfig.LOGSEP][0][2:]))
            for section_name, section_content in self._section_dict.items():
                if not section_name.startswith('_'):
                    self._section_dict[section_name] = [format_func(section_name, line, sep)
                                                        for line in section_content]
                else:
                    self._section_dict[section_name] = section_content[0]
