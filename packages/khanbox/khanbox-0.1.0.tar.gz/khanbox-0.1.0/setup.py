# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['khanbox']

package_data = \
{'': ['*']}

install_requires = \
['pandas>=1.0.3,<2.0.0']

setup_kwargs = {
    'name': 'khanbox',
    'version': '0.1.0',
    'description': '',
    'long_description': None,
    'author': 'Khalid',
    'author_email': 'khalidck@gmail.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': None,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'python_requires': '>=3.7,<4.0',
}


setup(**setup_kwargs)
