import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name App Center Push
 * @description
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/push/cordova
 *
 * @usage
 * ```typescript
 * import { AppCenterPush } from '@ionic-native/app-center-push/ngx';
 *
 *
 * constructor(private appCenterPush: AppCenterPush) { }
 *
 * ...
 *
 * this.appCenterPush.setEnabled(true).then(() => {
 *    this.appCenterPush.addEventListener('My Event').subscribe(pushNotification => {
 *        console.log('Recived push notification', pushNotification);
 *    });
 * });
 *
 * ```
 */
export declare class AppCenterPush extends IonicNativePlugin {
    /**
     * Subscribe to an event
     * @param  {string} eventName Event name
     * @returns {Observable<any>}
     */
    addEventListener(eventName: string): Observable<any>;
    /**
     * Check if App Center Push is enabled
     * @returns {Promise<boolean>}
     */
    isEnabled(): Promise<boolean>;
    /**
     * Enable or disable App Center Push at runtime
     * @param  {boolean} shouldEnable Set value
     * @returns {Promise<void>}
     */
    setEnabled(shouldEnable: boolean): Promise<void>;
}
