import os
import sys

from context_menu import menus


def get_last_path_item(path):
    return os.path.basename(os.path.normpath(path))


def test_check_paths():
    valid_paths = list(filter(lambda x: get_last_path_item(x)
                              in ['windows', 'linux'], sys.path))
    assert len(valid_paths) == 2


def test_method_info():

    def example_func():
        pass

    cc = menus.ContextCommand('Test Command', python=example_func)
    func_name, func_file_name, func_dir_path = cc.get_method_info()
    assert func_name == 'example_func' and func_file_name == 'test_menus' and get_last_path_item(
        func_dir_path) == 'tests'
