# JapanesePublicHolidays SDK exists test

require "minitest/autorun"
require_relative "../JapanesePublicHolidays_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = JapanesePublicHolidaysSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
