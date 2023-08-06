# -*- coding: utf-8 -*-

##########################################################################
# OpenLP - Open Source Lyrics Projection                                 #
# ---------------------------------------------------------------------- #
# Copyright (c) 2008-2020 OpenLP Developers                              #
# ---------------------------------------------------------------------- #
# This program is free software: you can redistribute it and/or modify   #
# it under the terms of the GNU General Public License as published by   #
# the Free Software Foundation, either version 3 of the License, or      #
# (at your option) any later version.                                    #
#                                                                        #
# This program is distributed in the hope that it will be useful,        #
# but WITHOUT ANY WARRANTY; without even the implied warranty of         #
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the          #
# GNU General Public License for more details.                           #
#                                                                        #
# You should have received a copy of the GNU General Public License      #
# along with this program.  If not, see <https://www.gnu.org/licenses/>. #
##########################################################################
"""
Functional tests to test the AppLocation class and related methods.
"""
from pathlib import Path
from unittest import skipUnless
from unittest.mock import MagicMock, call, patch

from openlp.core.common import Singleton, clean_button_text, de_hump, extension_loader, is_linux, is_macosx, is_win, \
    is_64bit_instance, normalize_str, path_to_module, trace_error_handler


def test_extension_loader_no_files_found():
    """
    Test the `extension_loader` function when no files are found
    """
    # GIVEN: A mocked `Path.glob` method which does not match any files
    with patch('openlp.core.common.applocation.AppLocation.get_directory',
               return_value=Path('/', 'app', 'dir', 'openlp')), \
            patch.object(Path, 'glob', return_value=[]), \
            patch('openlp.core.common.importlib.import_module') as mocked_import_module:

        # WHEN: Calling `extension_loader`
        extension_loader('glob', ['file2.py', 'file3.py'])

        # THEN: `extension_loader` should not try to import any files
        assert mocked_import_module.called is False


def test_extension_loader_files_found():
    """
    Test the `extension_loader` function when it successfully finds and loads some files
    """
    # GIVEN: A mocked `Path.glob` method which returns a list of files
    with patch('openlp.core.common.applocation.AppLocation.get_directory',
               return_value=Path('/', 'app', 'dir', 'openlp')), \
            patch.object(Path, 'glob', return_value=[
                Path('/', 'app', 'dir', 'openlp', 'import_dir', 'file1.py'),
                Path('/', 'app', 'dir', 'openlp', 'import_dir', 'file2.py'),
                Path('/', 'app', 'dir', 'openlp', 'import_dir', 'file3.py'),
                Path('/', 'app', 'dir', 'openlp', 'import_dir', 'file4.py')]), \
            patch('openlp.core.common.importlib.import_module') as mocked_import_module:

        # WHEN: Calling `extension_loader` with a list of files to exclude
        extension_loader('glob', ['file2.py', 'file3.py'])

        # THEN: `extension_loader` should only try to import the files that are matched by the blob, excluding the
        #       files listed in the `excluded_files` argument
        mocked_import_module.assert_has_calls([call('openlp.import_dir.file1'),
                                               call('openlp.import_dir.file4')])


def test_extension_loader_import_error():
    """
    Test the `extension_loader` function when `SourceFileLoader` raises a `ImportError`
    """
    # GIVEN: A mocked `import_module` which raises an `ImportError`
    with patch('openlp.core.common.applocation.AppLocation.get_directory',
               return_value=Path('/', 'app', 'dir', 'openlp')), \
            patch.object(Path, 'glob', return_value=[
                Path('/', 'app', 'dir', 'openlp', 'import_dir', 'file1.py')]), \
            patch('openlp.core.common.importlib.import_module', side_effect=ImportError()), \
            patch('openlp.core.common.log') as mocked_logger:

        # WHEN: Calling `extension_loader`
        extension_loader('glob')

        # THEN: The `ImportError` should be caught and logged
        assert mocked_logger.exception.called


def test_extension_loader_os_error():
    """
    Test the `extension_loader` function when `import_module` raises a `ImportError`
    """
    # GIVEN: A mocked `SourceFileLoader` which raises an `OSError`
    with patch('openlp.core.common.applocation.AppLocation.get_directory',
               return_value=Path('/', 'app', 'dir', 'openlp')), \
            patch.object(Path, 'glob', return_value=[
                Path('/', 'app', 'dir', 'openlp', 'import_dir', 'file1.py')]), \
            patch('openlp.core.common.importlib.import_module', side_effect=OSError()), \
            patch('openlp.core.common.log') as mocked_logger:

        # WHEN: Calling `extension_loader`
        extension_loader('glob')

        # THEN: The `OSError` should be caught and logged
        assert mocked_logger.exception.called


def test_de_hump_conversion():
    """
    Test the de_hump function with a class name
    """
    # GIVEN: a Class name in Camel Case
    string = "MyClass"

    # WHEN: we call de_hump
    new_string = de_hump(string)

    # THEN: the new string should be converted to python format
    assert new_string == "my_class", 'The class name should have been converted'


def test_de_hump_static():
    """
    Test the de_hump function with a python string
    """
    # GIVEN: a Class name in Camel Case
    string = "my_class"

    # WHEN: we call de_hump
    new_string = de_hump(string)

    # THEN: the new string should be converted to python format
    assert new_string == "my_class", 'The class name should have been preserved'


def test_path_to_module():
    """
    Test `path_to_module` when supplied with a `Path` object
    """
    # GIVEN: A `Path` object
    path = Path('core', 'ui', 'media', 'vlcplayer.py')

    # WHEN: Calling path_to_module with the `Path` object
    result = path_to_module(path)

    # THEN: path_to_module should return the module name
    assert result == 'openlp.core.ui.media.vlcplayer'


def test_trace_error_handler():
    """
    Test the trace_error_handler() method
    """
    # GIVEN: Mocked out objects
    with patch('openlp.core.common.traceback') as mocked_traceback:
        mocked_traceback.extract_stack.return_value = [('openlp.fake', 56, None, 'trace_error_handler_test')]
        mocked_logger = MagicMock()

        # WHEN: trace_error_handler() is called
        trace_error_handler(mocked_logger)

        # THEN: The mocked_logger.error() method should have been called with the correct parameters
        mocked_logger.error.assert_called_with(
            'OpenLP Error trace\n   File openlp.fake at line 56 \n\t called trace_error_handler_test')


def test_singleton_metaclass_multiple_init():
    """
    Test that a class using the Singleton Metaclass is only initialised once despite being called several times and
    that the same instance is returned each time..
    """
    # GIVEN: The Singleton Metaclass and a test class using it
    class SingletonClass(metaclass=Singleton):
        def __init__(self):
            pass

    with patch.object(SingletonClass, '__init__', return_value=None) as patched_init:

        # WHEN: Initialising the class multiple times
        inst_1 = SingletonClass()
        inst_2 = SingletonClass()

    # THEN: The __init__ method of the SingletonClass should have only been called once, and both returned values
    #       should be the same instance.
    assert inst_1 is inst_2
    assert patched_init.call_count == 1


def test_singleton_metaclass_multiple_classes():
    """
    Test that multiple classes using the Singleton Metaclass return the different an appropriate instances.
    """
    # GIVEN: Two different classes using the Singleton Metaclass
    class SingletonClass1(metaclass=Singleton):
        def __init__(self):
            pass

    class SingletonClass2(metaclass=Singleton):
        def __init__(self):
            pass

    # WHEN: Initialising both classes
    s_c1 = SingletonClass1()
    s_c2 = SingletonClass2()

    # THEN: The instances  should be an instance of the appropriate class
    assert isinstance(s_c1, SingletonClass1)
    assert isinstance(s_c2, SingletonClass2)


def test_is_win():
    """
    Test the is_win() function
    """
    # GIVEN: Mocked out objects
    with patch('openlp.core.common.os') as mocked_os, patch('openlp.core.common.sys') as mocked_sys:

        # WHEN: The mocked os.name and sys.platform are set to 'nt' and 'win32' repectivly
        mocked_os.name = 'nt'
        mocked_sys.platform = 'win32'

        # THEN: The three platform functions should perform properly
        assert is_win() is True, 'is_win() should return True'
        assert is_macosx() is False, 'is_macosx() should return False'
        assert is_linux() is False, 'is_linux() should return False'


def test_is_macosx():
    """
    Test the is_macosx() function
    """
    # GIVEN: Mocked out objects
    with patch('openlp.core.common.os') as mocked_os, patch('openlp.core.common.sys') as mocked_sys:

        # WHEN: The mocked os.name and sys.platform are set to 'posix' and 'darwin' repectivly
        mocked_os.name = 'posix'
        mocked_sys.platform = 'darwin'

        # THEN: The three platform functions should perform properly
        assert is_macosx() is True, 'is_macosx() should return True'
        assert is_win() is False, 'is_win() should return False'
        assert is_linux() is False, 'is_linux() should return False'


def test_is_linux():
    """
    Test the is_linux() function
    """
    # GIVEN: Mocked out objects
    with patch('openlp.core.common.os') as mocked_os, patch('openlp.core.common.sys') as mocked_sys:

        # WHEN: The mocked os.name and sys.platform are set to 'posix' and 'linux3' repectively
        mocked_os.name = 'posix'
        mocked_sys.platform = 'linux3'

        # THEN: The three platform functions should perform properly
        assert is_linux() is True, 'is_linux() should return True'
        assert is_win() is False, 'is_win() should return False'
        assert is_macosx() is False, 'is_macosx() should return False'


@skipUnless(is_linux(), 'This can only run on Linux')
def test_is_linux_distro():
    """
    Test the is_linux() function for a particular Linux distribution
    """
    # GIVEN: Mocked out objects
    with patch('openlp.core.common.os') as mocked_os, \
            patch('openlp.core.common.sys') as mocked_sys, \
            patch('openlp.core.common.distro_id') as mocked_distro_id:

        # WHEN: The mocked os.name and sys.platform are set to 'posix' and 'linux3' repectively
        #       and the distro is Fedora
        mocked_os.name = 'posix'
        mocked_sys.platform = 'linux3'
        mocked_distro_id.return_value = 'fedora'

        # THEN: The three platform functions should perform properly
        assert is_linux(distro='fedora') is True, 'is_linux(distro="fedora") should return True'
        assert is_win() is False, 'is_win() should return False'
        assert is_macosx() is False, 'is_macosx() should return False'


def test_is_64bit_instance():
    """
    Test the is_64bit_instance() function
    """
    # GIVEN: Mocked out objects
    with patch('openlp.core.common.sys') as mocked_sys:

        # WHEN: The mocked sys.maxsize is set to 32-bit
        mocked_sys.maxsize = 2**32

        # THEN: The result should be False
        assert is_64bit_instance() is False, 'is_64bit_instance() should return False'


def test_normalize_str_leaves_newlines():
    # GIVEN: a string containing newlines
    string = 'something\nelse'
    # WHEN: normalize is called
    normalized_string = normalize_str(string)
    # THEN: string is unchanged
    assert normalized_string == string


def test_normalize_str_removes_null_byte():
    # GIVEN: a string containing a null byte
    string = 'somet\x00hing'
    # WHEN: normalize is called
    normalized_string = normalize_str(string)
    # THEN: nullbyte is removed
    assert normalized_string == 'something'


def test_normalize_str_replaces_crlf_with_lf():
    # GIVEN: a string containing crlf
    string = 'something\r\nelse'
    # WHEN: normalize is called
    normalized_string = normalize_str(string)
    # THEN: crlf is replaced with lf
    assert normalized_string == 'something\nelse'


def test_clean_button_text():
    """
    Test the clean_button_text() function.
    """
    # GIVEN: Button text
    input_text = '&Next >'
    expected_text = 'Next'

    # WHEN: The button caption is sent through the clean_button_text function
    actual_text = clean_button_text(input_text)

    # THEN: The text should have been cleaned
    assert expected_text == actual_text, 'The text should be clean'
