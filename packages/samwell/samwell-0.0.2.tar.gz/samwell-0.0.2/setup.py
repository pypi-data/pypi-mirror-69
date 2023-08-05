# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['samwell', 'samwell.sam', 'samwell.sam.tests', 'samwell.tests']

package_data = \
{'': ['*'], 'samwell.sam.tests': ['data/*']}

install_requires = \
['attrs>=19.3.0',
 'cython>=0.29.15',
 'defopt>=5.1.0',
 'intervaltree>=3.0.2',
 'mypy-extensions>=0.4.3',
 'pybedtools>=0.8.1',
 'pysam>=0.15.3']

setup_kwargs = {
    'name': 'samwell',
    'version': '0.0.2',
    'description': 'Useful utilities for biological data formats and analyses',
    'long_description': None,
    'author': 'Jeff Tratner',
    'author_email': 'jeffrey.tratner@myriad.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': None,
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'python_requires': '>=3.6',
}


setup(**setup_kwargs)
