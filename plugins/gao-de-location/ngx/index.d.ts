import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Gao De Location
 * @description
 * Because the original GPS positioning uses Google Browser positioning, and Google withdraws from China, resulting in GPS Android positioning can not be positioned.
 * Gaode location can directly return address informationGaode location can directly return address information
 *
 * @usage
 * ```typescript
 * import { GaoDeLocation } from '@ionic-native/gao-de-location/ngx';
 *
 *
 * constructor(private gaoDeLocation: GaoDeLocation) { }
 *
 * this.gaoDeLocation.getCurrentPosition()
 * .then((res: PositionOptions) => console.log(res))
 * .catch((error) => console.error(error));
 *
 * ```
 */
export declare class GaoDeLocation extends IonicNativePlugin {
    /**
     * Get longitude and latitude, country, province, city, postal code, specific address, region
     * @returns {Promise<PositionOptions>}
     */
    getCurrentPosition(): Promise<PositionOptions>;
}
export interface PositionOptions {
    latitude: number;
    longitude: number;
    accuracy: string;
    adcode: string;
    address: string;
    city: string;
    citycode: string;
    country: string;
    district: string;
    poi: string;
    province: string;
    status: string;
    type: string;
    time?: string;
    backtime?: string;
    bearing?: string;
    satellites?: string;
}
