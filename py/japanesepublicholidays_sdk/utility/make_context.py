# JapanesePublicHolidays SDK utility: make_context

from japanesepublicholidays_sdk.core.context import JapanesePublicHolidaysContext


def make_context_util(ctxmap, basectx):
    return JapanesePublicHolidaysContext(ctxmap, basectx)
