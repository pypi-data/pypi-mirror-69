# -*- coding: utf-8 -*-
#
# Copyright © 2013 Spyder Project Contributors
# Licensed under the terms of the MIT License
# (see LICENSE.txt for details)
"""Tests for baserunner.py"""

# Standard library imports
import os

# Third party imports
import pytest

# Local imports
from spyder_unittest.backend.runnerbase import RunnerBase
from spyder_unittest.widgets.configdialog import Config

try:
    from unittest.mock import Mock
except ImportError:
    from mock import Mock  # Python 2


def test_runnerbase_with_nonexisting_module():
    class FooRunner(RunnerBase):
        module = 'nonexisiting'

    assert not FooRunner.is_installed()


@pytest.mark.parametrize('pythonpath,env_pythonpath', [
    ([], None),
    (['pythonpath'], None),
    (['pythonpath'], 'old')
])
def test_runnerbase_prepare_process(monkeypatch, pythonpath, env_pythonpath):
    MockQProcess = Mock()
    monkeypatch.setattr('spyder_unittest.backend.runnerbase.QProcess',
                        MockQProcess)
    mock_process = MockQProcess()

    MockEnvironment = Mock()
    monkeypatch.setattr(
        'spyder_unittest.backend.runnerbase.QProcessEnvironment.systemEnvironment',
        MockEnvironment)
    mock_environment = MockEnvironment()
    mock_environment.configure_mock(**{'value.return_value': env_pythonpath})

    config = Config('myRunner', 'wdir')
    runner = RunnerBase(None, 'results')
    runner._prepare_process(config, pythonpath)

    mock_process.setWorkingDirectory.assert_called_once_with('wdir')
    mock_process.finished.connect.assert_called_once_with(runner.finished)
    if pythonpath:
        if env_pythonpath:
            mock_environment.insert.assert_any_call('PYTHONPATH',
                                                    'pythonpath{}{}'.format(
                                                        os.pathsep,
                                                        env_pythonpath))
        else:
            mock_environment.insert.assert_any_call('PYTHONPATH', 'pythonpath')
        mock_process.setProcessEnvironment.assert_called_once()
    else:
        mock_environment.insert.assert_not_called()
        mock_process.setProcessEnvironment.assert_not_called()


def test_runnerbase_start(monkeypatch):
    MockQProcess = Mock()
    monkeypatch.setattr('spyder_unittest.backend.runnerbase.QProcess',
                        MockQProcess)
    mock_process = MockQProcess()

    mock_remove = Mock(side_effect=OSError())
    monkeypatch.setattr('spyder_unittest.backend.runnerbase.os.remove',
                        mock_remove)

    monkeypatch.setattr(
        'spyder_unittest.backend.runnerbase.get_python_executable',
        lambda: 'python')

    runner = RunnerBase(None, 'results')
    runner._prepare_process = lambda c, p: mock_process
    runner.create_argument_list = lambda: ['arg1', 'arg2']
    config = Config('pytest', 'wdir')
    mock_process.waitForStarted = lambda: False
    with pytest.raises(RuntimeError):
        runner.start(config, ['pythondir'])

    mock_process.start.assert_called_once_with('python', ['arg1', 'arg2'])
    mock_remove.assert_called_once_with('results')
