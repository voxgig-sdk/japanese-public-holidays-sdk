# JapanesePublicHolidays SDK utility: make_context

from projectname_sdk.core.context import JapanesePublicHolidaysContext


def make_context_util(ctxmap, basectx):
    return JapanesePublicHolidaysContext(ctxmap, basectx)
