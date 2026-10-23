<?php
declare(strict_types=1);

// JapanesePublicHolidays SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class JapanesePublicHolidaysMakeContext
{
    public static function call(array $ctxmap, ?JapanesePublicHolidaysContext $basectx): JapanesePublicHolidaysContext
    {
        return new JapanesePublicHolidaysContext($ctxmap, $basectx);
    }
}
