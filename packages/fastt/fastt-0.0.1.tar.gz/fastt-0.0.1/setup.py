# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['fastt']

package_data = \
{'': ['*']}

install_requires = \
['click>=7.1.2,<8.0.0',
 'google-cloud-translate==2.0.1',
 'polib>=1.1.0,<2.0.0',
 'python-dotenv>=0.13.0,<0.14.0']

entry_points = \
{'console_scripts': ['fastt = fastt:translation']}

setup_kwargs = {
    'name': 'fastt',
    'version': '0.0.1',
    'description': 'Fast and Simple Translation Tool',
    'long_description': None,
    'author': 'Leandro E. Colombo Viña',
    'author_email': 'lecovi@ac.python.org.ar',
    'maintainer': None,
    'maintainer_email': None,
    'url': None,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'entry_points': entry_points,
    'python_requires': '>=3.7,<4.0',
}


setup(**setup_kwargs)
