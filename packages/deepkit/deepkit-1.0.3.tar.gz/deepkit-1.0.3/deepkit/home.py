import json
import os

import typedload

from deepkit.model import HomeConfig


def get_home_config() -> HomeConfig:
    path = os.path.expanduser('~') + '/.deepkit/config'
    if not os.path.exists(path):
        raise Exception("No ~/.deepkit/config file found")

    with open(path, 'r') as h:
        return typedload.load(json.load(h), HomeConfig)