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
# CHECK 'demo.py' FOR ALL EXAMPLES
from typing import Optional
import time

from ktimeout import timeout

def func_with_arguments(sleep_time: float, extra_print: Optional[str] = None):
    while True:
        time.sleep(sleep_time)

        print('Sleeping', sleep_time, 'sec', extra_print or '')

def func():
    func_with_arguments(0.5, extra_print='called from func()')

try:
    timeout.run(func, 2)
except Exception as e:
    print(e)

try:
    timeout.run(
        timeout.partial(func_with_arguments, 0.25, extra_print='extra'),
        2
    )
except Exception as e:
    print(e)

try:
    with timeout.timeout(1):
        while True:
            sleep_time = 0.25
            time.sleep(sleep_time)

            print('Sleeping', sleep_time, 'sec')
except Exception as e:
    print(e)
~~~~