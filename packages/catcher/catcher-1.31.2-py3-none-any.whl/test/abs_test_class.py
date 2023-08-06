import os
import unittest
from os.path import join

import test
from catcher.modules.log_storage import EmptyLogStorage
from catcher.utils import logger
from catcher.utils.file_utils import ensure_empty, remove_dir
from catcher.utils.singleton import Singleton


class TestClass(unittest.TestCase):
    def __init__(self, test_name, method_name):
        super().__init__(method_name)
        self._test_name = test_name
        self._test_dir = test.get_test_dir(test_name)
        logger.configure('debug')
        logger.log_storage = EmptyLogStorage('empty')

    @property
    def test_name(self):
        return self._test_name

    @property
    def test_dir(self):
        return join(os.getcwd(), self._test_dir)

    def setUp(self):
        Singleton._instances = {}  # clean singleton between tests
        ensure_empty(test.get_test_dir(self.test_name))
        ensure_empty(join(test.get_test_dir(self.test_name), 'resources'))

    def tearDown(self):
        remove_dir(test.get_test_dir(self.test_name))

    def populate_file(self, file: str, content: str):
        with open(join(self.test_dir, file), 'w') as f:
            f.write(content)

    def populate_resource(self, file: str, content: str):
        with open(join(test.get_test_dir(self.test_name), 'resources', file), 'w') as f:
            f.write(content)
