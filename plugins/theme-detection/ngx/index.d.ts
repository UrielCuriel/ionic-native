import { IonicNativePlugin } from '@ionic-native/core';
export interface ThemeDetectionResponse {
    value: boolean;
    message: string;
}
/**
 * @beta
 * @name Theme Detection
 * @description
 * Cordova plugin to detect whether dark mode is enabled or not
 *
 * @usage
 * ```typescript
 * import { ThemeDetection } from '@ionic-native/theme-detection';
 *
 *
 * constructor(private themeDetection: ThemeDetection) { }
 *
 * ...
 *
 * this.themeDetection.isAvailable()
 *   .then((res: ThemeDetectionResponse) => {
 *      if(res.value) {
 *        this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
 *          console.log(res);
 *        })
 *        .catch((error: any) => console.error(error));
 *      }
 *   })
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ThemeDetection extends IonicNativePlugin {
    /**
     *
     * @return {Promise<ThemeDetectionResponse>}
     *  Returns a promise with an object that has a boolean property which gives information if the detection is available or not
     */
    isAvailable(): Promise<ThemeDetectionResponse>;
    /**
     *
     * @return {Promise<ThemeDetectionResponse>}
     *  Returns a promise with an object that has a boolean property which gives information if dark mode is enabled or not
     */
    isDarkModeEnabled(): Promise<ThemeDetectionResponse>;
}
