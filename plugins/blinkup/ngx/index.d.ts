import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * Interface of a blink up options.
 */
export interface BlinkUpOptions {
    apiKey: string;
    developmentPlanId?: string;
    isInDevelopment?: boolean;
    timeoutMs?: number;
}
/**
 * Interface of a blink up wifi options.
 */
export interface BlinkUpWifiOptions {
    apiKey: string;
    timeoutMs?: number;
    ssid: string;
    password: string;
}
/**
 * Interface of a blink up wps options.
 */
export interface BlinkUpWPSOptions {
    apiKey: string;
    timeoutMs?: number;
    wpsPin: string;
}
/**
 * @name BlinkUp
 * @description
 * Electric Imp BlinkUp ionic plugin.
 *
 * @usage
 * ```typescript
 * import { BlinkUp } from '@ionic-native/blinkup/ngx';
 *
 * const options = <BlinkUpWifiOptions>{
 *    apiKey: 'API_KEY',
 *    timeoutMs: 60000,
 *    ssid: 'MY_SSID',
 *    password: 'MY_PASSWORD'
 *  }
 *  BlinkUp.flashWifiBlinkUp(options).subscribe(
 *     (result) => console.log('Done'),
 *     (error) => console.log(error)
 *   )
 * ```
 */
export declare class BlinkUp extends IonicNativePlugin {
    /**
     * startBlinkUp - starts the blinkup process
     * @param {module:blinkup.BlinkUpOptions} options BlinkUp Options
     * @return {Observable<any>} Returns an Observable
     */
    startBlinkUp(options: BlinkUpOptions): Observable<any>;
    /**
     * flashWifiBlinkUp - invokes the flash wifi process
     * @param {module:blinkup.BlinkUpWifiOptions} options BlinkUp Wifi Options
     * @return {Observable<any>} Returns an Observable
     */
    flashWifiBlinkUp(options: BlinkUpWifiOptions): Observable<any>;
    /**
     * flashWPSBlinkUp - invokes the flash wps process
     * @param {module:blinkup.BlinkUpWPSOptions} options BlinkUp WPS Options
     * @return {Observable<any>} Returns an Observable
     */
    flashWPSBlinkUp(options: BlinkUpWPSOptions): Observable<any>;
    /**
     * abortBlinkUp - abort blinkup process
     * @return {Observable<any>} Returns an Observable
     */
    abortBlinkUp(): Observable<any>;
    /**
     * clearBlinkUpData - clear wifi data
     * @return {Observable<any>} Returns an Observable
     */
    clearBlinkUpData(): Observable<any>;
}
