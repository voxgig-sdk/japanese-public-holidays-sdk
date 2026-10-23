-- JapanesePublicHolidays SDK exists test

local sdk = require("japanese-public-holidays_sdk")

describe("JapanesePublicHolidaysSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
