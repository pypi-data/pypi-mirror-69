# -*- coding:utf-8 -*-
# !/usr/bin/env python3

"""Text Editor (based on tk/tcl)

Usage:
  text_editor
  text_editor <filename>

"""
import minghu6
from docopt import docopt
from minghu6.gui.textEditor import main


def cli():
    arguments = docopt(__doc__, version=minghu6.__version__)
    main(arguments['<filename>'])


if __name__ == '__main__':
    cli()
