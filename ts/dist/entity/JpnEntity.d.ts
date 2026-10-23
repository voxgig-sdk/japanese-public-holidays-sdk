import { JapanesePublicHolidaysEntityBase } from '../JapanesePublicHolidaysEntityBase';
import type { JapanesePublicHolidaysSDK } from '../JapanesePublicHolidaysSDK';
import type { Control } from '../types';
import type { Jpn, JpnListMatch } from '../JapanesePublicHolidaysTypes';
declare class JpnEntity extends JapanesePublicHolidaysEntityBase<Jpn> {
    constructor(client: JapanesePublicHolidaysSDK, entopts: any);
    make(this: JpnEntity): JpnEntity;
    list(this: any, reqmatch?: JpnListMatch, ctrl?: Control): Promise<JpnEntity[]>;
}
export { JpnEntity };
