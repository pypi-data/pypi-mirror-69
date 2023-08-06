# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['fake_rpi', 'fake_rpi.smbus']

package_data = \
{'': ['*']}

install_requires = \
['numpy']

extras_require = \
{':python_version < "3.8"': ['importlib-metadata']}

setup_kwargs = {
    'name': 'fake-rpi',
    'version': '0.7.1',
    'description': 'A bunch of fake interfaces for development when not using the RPi or unit testing',
    'long_description': '![image](https://raw.githubusercontent.com/MomsFriendlyRobotCompany/fake_rpi/master/pics/pi-python.jpg)\n\n# Fake Raspberry Pi\n\n[![Actions Status](https://github.com/MomsFriendlyRobotCompany/fake_rpi/workflows/CheckPackage/badge.svg)](https://github.com/MomsFriendlyRobotCompany/fake_rpi/actions)\n![GitHub](https://img.shields.io/github/license/MomsFriendlyRobotCompany/fake_rpi)\n![PyPI - Python Version](https://img.shields.io/pypi/pyversions/fake_rpi)\n![PyPI](https://img.shields.io/pypi/v/fake_rpi)\n[![Downloads](https://img.shields.io/pypi/dm/fake_rpi.svg)](https://img.shields.io/pypi/dm/fake_rpi.svg)\n\n**Why??**\n\nI do a lot of development on my Powerbook and I got tired of constantly\ncreating a fake interface for dev on my laptop and testing on Travis.ci or github workflows.\n\n-   2017 Apr 2: **Beta Quality**\n-   2017 Apr 8: **Initial** python3 support\n\nSo, does this simulate everything on a Raspberry Pi? **No!** Right now\nit simulates what I use and need. Over time, more will be added. You are\nalso welcome to submit pull requests for things I haven\\\'t added yet.\n\n|          |                       |\n| -------- | --------------------- |\n| Adafruit | LSM303(accelerometer) |\n| nxp_imu  | adafruit accelerometer|\n| GPIO     | gpio pins             |\n| picamera | camera                |\n| RPi      | PWM                   |\n| smbus    | i2c                   |\n| serial   | not done yet          |\n\n## Install\n\nThe preferred way to install this is:\n\n```\npip install fake_rpi\n```\n\n## Development\n\nTo submit pull requests for new sensors or fixes, just do:\n\n```\ngit clone https://github.com/MomsFriendlyRobotCompany/fake_rpi.git\ncd fake_rpi\npoetry install\n```\n\nThen do a pull request.\n\n## Usage\n\nTo fake RPi.GPIO or smbus, this following\ncode must be executed before your application:\n\n```python\n# Replace libraries by fake ones\nimport sys\nimport fake_rpi\n\nsys.modules[\'RPi\'] = fake_rpi.RPi     # Fake RPi\nsys.modules[\'RPi.GPIO\'] = fake_rpi.RPi.GPIO # Fake GPIO\nsys.modules[\'smbus\'] = fake_rpi.smbus # Fake smbus (I2C)\n```\n\nThen you can keep your usual imports in your application:\n\n```python\nimport RPi.GPIO as GPIO\nimport smbus\n\nGPIO.setmode(io.BCM) # now use the fake GPIO\nb = GPIO.input(21)\n\nsm = smbus.SMBus(1) # now use the fake smbus\nb = sm.read_byte_data(0x21, 0x32)  # read in a byte\n```\n\nTurning on/off fake calls logging:\n\n```python\nfrom fake_rpi import toggle_print\n\n# by default it prints everything to std.error\ntoggle_print(False)  # turn on/off printing\n```\n\nBut I need `smbus` to return a specific byte for unit testing! Ok, then\ncreate a child of my `smbus` like below and modify *only* the methods\nyou need changed:\n\n```python\nfrom fake_rpi import smbus\nfrom fake_rpi import printf\n\nclass MyBus(smbus.SMBus):\n    @printf\n    def read_byte_data(self, i2c_addr, register):\n        ret = 0xff\n        if i2c_addr == 0x21:\n            ret = 0x55\n        elif i2c_addr == 0x25:\n            ret = 0x11\n        return ret\n\nsm = MyBus()\nb = sm.read_byte_data(0x21, 0x32)  # read in a byte\n```\n\n### Printing On or Off\n\nHere is the output from `example.py` in the `git` repo when the printing\nis toggled on or off:\n\n```\nkevin@Logan fake_rpi $ ./example.py\n<<< WARNING: using fake raspberry pi interfaces >>>\n\nkevin@Logan fake_rpi $ ./example.py\n<<< WARNING: using fake raspberry pi interfaces >>>\nfake_rpi.RPi.PWM.__init__()\nfake_rpi.RPi.PWM.start(5,)\nfake_rpi.smbus.SMBus.__init__(1,)\nfake_rpi.smbus.SMBus.write_byte_data(1, 2, 3)\nfake_rpi.smbus.SMBus.read_byte_data(1, 2): 21\nfake_rpi.smbus.SMBus.close()\n__main__.MyBus.__init__()\n__main__.MyBus.read_byte_data(1, 2): 72\n__main__.MyBus.read_i2c_block_data(1, 2, 3): [90, 90, 90]\n```\n\n# Change Log\n\n|  Date      | Ver.  | Notes                                         |\n| ---------- | ----- | --------------------------------------------- |\n| 2020-04-03 | 0.7.0 | additions to gpio and camera                  |\n| 2020-02-03 | 0.6.3 | moved to toml and github workflows            |\n| 2019-10-19 | 0.6.2 | fixes from scivision and Rotzbua              |\n| 2019-03-29 | 0.6.1 | bug fix with randint range                    |\n| 2017-11-30 | 0.6.0 | bug fix with printing                         |\n| 2017-10-23 | 0.5.3 | bug fix with randint                          |\n| 2017-09-05 | 0.5.1 | flushing out interfaces                       |\n| 2017-07-07 | 0.3.0 | fixed bugs, print statement, and reduced dups |\n| 2017-04-08 | 0.1.0 | initial python3 setup and support             |\n| 2017-04-02 | 0.0.2 | pushed to pypi with landscape.io fixes        |\n| 2017-04-01 | 0.0.1 | created                                       |\n\n# MIT License\n\n**Copyright (c) 2017 Kevin J. Walchko**\n\nPermission is hereby granted, free of charge, to any person obtaining a\ncopy of this software and associated documentation files (the\n"Software"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be included\nin all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\nCLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\nTORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n',
    'author': 'walchko',
    'author_email': 'walchko@users.noreply.github.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': 'https://pypi.org/project/fake_rpi/',
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'extras_require': extras_require,
    'python_requires': '>=3.6',
}


setup(**setup_kwargs)
