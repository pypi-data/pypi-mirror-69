from __future__ import print_function

import configparser
import datetime
import json
import logging
import os
import time
from environs import Env
from abc import ABCMeta,abstractmethod
from halo_flask.exceptions import HaloError, CacheKeyError, CacheExpireError,HaloException
from halo_flask.providers.ssm.onprem_ssm import AbsOnPremClient
# from .logs import log_json


logger = logging.getLogger(__name__)

# for testing
class OnPremClient(AbsOnPremClient):
    dict = {}

    def put_parameter(self, Name, Value, Type, Overwrite):
        self.dict[Name] = Value

    def get_parameters_by_path(self, Path, Recursive, WithDecryption):
        return self.dict[Path]


