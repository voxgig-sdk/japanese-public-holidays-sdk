# JapanesePublicHolidays SDK utility: make_context
require_relative '../core/context'
module JapanesePublicHolidaysUtilities
  MakeContext = ->(ctxmap, basectx) {
    JapanesePublicHolidaysContext.new(ctxmap, basectx)
  }
end
