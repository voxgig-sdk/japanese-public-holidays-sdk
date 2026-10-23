# JapanesePublicHolidays SDK exists test

import pytest
from japanesepublicholidays_sdk import JapanesePublicHolidaysSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = JapanesePublicHolidaysSDK.test(None, None)
        assert testsdk is not None
