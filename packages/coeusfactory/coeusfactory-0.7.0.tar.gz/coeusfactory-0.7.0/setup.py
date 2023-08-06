# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['coeusfactory', 'coeusfactory.connectors', 'coeusfactory.repositories']

package_data = \
{'': ['*']}

install_requires = \
['pypubsub>=4.0.3,<5.0.0']

setup_kwargs = {
    'name': 'coeusfactory',
    'version': '0.7.0',
    'description': 'A Database Connector interface that follows a factory model pattern.',
    'long_description': '# Coeus Factory - Database Connector Factory\n\n[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)\n[![PyPI pyversions](https://img.shields.io/pypi/pyversions/coeusfactory)](https://pypi.python.org/pypi/coeusfactory/)\n[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/mamerisawesome/coeusfactory/graphs/commit-activity)\n[![Coverage](https://raw.githubusercontent.com/mamerisawesome/coeusfactory/master/assets/coverage.svg?sanitize=true)](https://github.com/mamerisawesome/coeusfactory)\n[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges)\n\nA Database Connector interface that follows a factory model pattern.\n\n## Installation\n\n```bash\n# if using poetry\n# highly recommended\npoetry add coeusfactory\n\n# also works with standard pip\npip install coeusfactory\n```\n\nThen add necessary database interfaces as necessary. Below are the libraries that works with Coeus Factory.\n\n| Database | Python Library | Status            |\n|----------|----------------|-------------------|\n| **MongoDB**  | *pymongo*      | ![Passed unit tests](https://img.shields.io/static/v1?label=&message=Passed%20unit%20tests&color=green) |\n| **DynamoDB** | *boto3*        | ![Needs unit tests](https://img.shields.io/static/v1?label=&message=Needs%20unit%20tests&color=yellow) |\n\n## Getting Started\n\nFor every first step for any database, initialization and connections will come first. As long as it is supported in the factory, you can pass the parameters you normally handle in supported databse interfaces.\n\n```python\nfrom coeusfactory import ConnectorFactory\ncf = ConnectorFactory(\n    interface="<database>",\n    db="<database-name>"\n    # other config or auth params for the db\n    username="",\n    password=""\n)\n\n# db init\ncf.handler.initialize()\ncf.handler.connect()\n```\n\n## Connector Methods\n\n### Getting / Creating a model\n\n```python\nUsers = cf.get_model("Users")\nCarts = cf.get_model("Carts")\nCustomerReviews = cf.get_model("CustomerReviews")\n```\n\n### Retrieval\n\n```python\nUsers.get_by_id(0)\nUsers.get({"name": "Test User"})\n```\n\n### Insertion\n\n```python\nUsers.add({"name": "Test User"})\n```\n\n### Deletion\n\n```python\nUsers.delete_by_id(0)\nUsers.delete({"name": "Test User"})\n```\n\n### Modification\n\n```python\nUsers.update_by_id(0, {"name": "New Name"})\nUsers.update({"name": "Test User"}, {"name": "New Name"})\n```\n\n### Entry Count\n\n```python\nUsers.count()\n```\n\n## Author\n\nAlmer Mendoza\n[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](mailto:atmalmer23@gmail.com)\n\n[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)\n[![forthebadge](https://forthebadge.com/images/badges/powered-by-responsibility.svg)](https://forthebadge.com)\n[![forthebadge](https://forthebadge.com/images/badges/kinda-sfw.svg)](https://forthebadge.com)\n',
    'author': 'Almer Mendoza',
    'author_email': 'atmalmer23@gmail.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': 'https://github.com/mamerisawesome/coeusfactory',
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'python_requires': '>=3.6,<4.0',
}


setup(**setup_kwargs)
