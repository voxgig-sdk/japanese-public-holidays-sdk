# JapanesePublicHolidays SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module JapanesePublicHolidaysFeatures
  def self.make_feature(name)
    case name
    when "base"
      JapanesePublicHolidaysBaseFeature.new
    when "ratelimit"
      JapanesePublicHolidaysRatelimitFeature.new
    when "retry"
      JapanesePublicHolidaysRetryFeature.new
    when "test"
      JapanesePublicHolidaysTestFeature.new
    when "timeout"
      JapanesePublicHolidaysTimeoutFeature.new
    else
      JapanesePublicHolidaysBaseFeature.new
    end
  end
end
