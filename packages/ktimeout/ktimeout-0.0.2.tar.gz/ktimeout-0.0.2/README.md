# ktimeout
![python_version](https://img.shields.io/static/v1?label=Python&message=3.5%20|%203.6%20|%203.7&color=blue) [![PyPI downloads/month](https://img.shields.io/pypi/dm/ktimeout?logo=pypi&logoColor=white)](https://pypi.python.org/pypi/ktimeout)

## Description
add timeout to any function

## Install
~~~~bash
pip install ktimeout
# or
pip3 install ktimeout
~~~~

## Usage
~~~~python
import time

from ktimeout import timeout

def random_func():
    while True:
        time.sleep(1)

        print('Sleeping 1 sec')

timeout.run(random_func, 3)
~~~~