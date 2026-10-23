import { JapanesePublicHolidaysEntityBase } from '../JapanesePublicHolidaysEntityBase';
import type { JapanesePublicHolidaysSDK } from '../JapanesePublicHolidaysSDK';
import type { Control } from '../types';
import type { Year, YearListMatch } from '../JapanesePublicHolidaysTypes';
declare class YearEntity extends JapanesePublicHolidaysEntityBase<Year> {
    constructor(client: JapanesePublicHolidaysSDK, entopts: any);
    make(this: YearEntity): YearEntity;
    list(this: any, reqmatch?: YearListMatch, ctrl?: Control): Promise<YearEntity[]>;
}
export { YearEntity };
