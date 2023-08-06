import os
import pytest


def pytest_configure(config):
    import sys

    sys._called_from_test = True


def pytest_unconfigure(config):
    import sys

    del sys._called_from_test


def pytest_collection_modifyitems(items):
    # Ensure test_black.py and test_inspect.py run first before any asyncio code kicks in
    move_to_front(items, "test_black")
    move_to_front(items, "test_inspect_cli")
    move_to_front(items, "test_inspect_cli_writes_to_file")
    move_to_front(items, "test_spatialite_error_if_attempt_to_open_spatialite")
    move_to_front(items, "test_package")
    move_to_front(items, "test_package_with_port")


def move_to_front(items, test_name):
    test = [fn for fn in items if fn.name == test_name]
    if test:
        items.insert(0, items.pop(items.index(test[0])))


@pytest.fixture
def restore_working_directory(tmpdir, request):
    previous_cwd = os.getcwd()
    tmpdir.chdir()

    def return_to_previous():
        os.chdir(previous_cwd)

    request.addfinalizer(return_to_previous)
