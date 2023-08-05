# -*- coding:utf-8 -*-
# !/usr/bin/env python3

"""
from a URI open the captcha Image Pillow PIL.Image
"""
import os

import requests
from PIL import Image

__all__ = ['InvalidPathError',
           'get_image']


class InvalidPathError(Exception): pass


def get_image(s: str, outdir=None, captcha_name='captcha', session: requests.Session = None):
    from urllib.request import urlretrieve

    import re
    from minghu6.text.pattern import url_net
    pattern_url_net = url_net
    if re.match(pattern_url_net, s) is not None:
        if outdir is not None:
            filepath = os.path.join(outdir, captcha_name)
        else:
            filepath = captcha_name

        if session is None:
            if os.path.exists(captcha_name):
                os.remove(captcha_name)
            urlretrieve(s, filename=filepath)
        else:
            r = session.get(s)
            with open(captcha_name, 'wb') as imgFile:
                imgFile.write(r.content)

        with Image.open(filepath) as imgObj:
            newfilepath = filepath + '.' + imgObj.format.lower()

        if os.path.exists(newfilepath):
            os.remove(newfilepath)

        os.rename(filepath, newfilepath)
        with Image.open(newfilepath) as img:
            imgObj = img.copy()

        # imgObj.show()
        return imgObj, newfilepath
    elif os.path.isfile(s):
        with Image.open(s) as img:
            imgObj = img.copy()

        return imgObj, s
    else:
        raise InvalidPathError(s)
