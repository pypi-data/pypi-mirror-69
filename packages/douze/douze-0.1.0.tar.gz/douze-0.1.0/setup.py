# -*- coding: utf-8 -*-
from setuptools import setup

package_dir = \
{'': 'src'}

packages = \
['douze']

package_data = \
{'': ['*']}

install_requires = \
['httpx<0.13', 'typefit>=0.3.0,<0.4.0']

setup_kwargs = {
    'name': 'douze',
    'version': '0.1.0',
    'description': 'A DigitalOcean API client to help with 12-factors apps',
    'long_description': None,
    'author': 'Rémy Sanchez',
    'author_email': 'remy.sanchez@hyperthese.net',
    'maintainer': None,
    'maintainer_email': None,
    'url': None,
    'package_dir': package_dir,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'python_requires': '>=3.7,<4.0',
}


setup(**setup_kwargs)
