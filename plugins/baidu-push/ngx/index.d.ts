import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface BaiduResponse<T> {
    /**
     * The corresponding Baidu SDK method called.
     */
    type: string;
    /**
     * The error code corresponding to Baidu's request.
     */
    errorCode?: string;
    /**
     * Registration data revelvant to subsequent actions.
     */
    data: T;
}
export interface RegistrationData {
    /**
     * The ID registered to Baidu for the app.
     */
    appId: string;
    /**
     * The ID registered to Baidu for the device.
     */
    userId: string;
    /**
     * The channel ID registered to Baidu for the app.
     */
    channelId: string;
}
export interface UnregistrationData {
    /**
     * The ID corresponding to the Baidu request.
     */
    requestId: string;
}
export interface TagData {
    /**
     * The ID corresponding to the Baidu request.
     */
    requestId: string;
    /**
     * The channel ID registered to Baidu for the app.
     */
    channelId: string;
    /**
     * The list of successfully set/deleted tags.
     */
    sucessTags: string[];
    /**
     * The list of unsuccessfully set/deleted tags.
     */
    failTags: string[];
}
export interface NotificationData {
    /**
     * The title of the notification.
     */
    title: string;
    /**
     * The description of the notification.
     */
    description: string;
    /**
     * Custom content for the notification.
     */
    customContentString?: string;
}
/**
 * @name Baidu Push
 * @description
 * This plugin faciliates the use of Baidu Push notifications.
 *
 * @usage
 * ```typescript
 * import { BaiduPush } from '@ionic-native/baidu-push/ngx';
 *
 *
 * constructor(private baiduPush: BaiduPush) { }
 *
 * ...
 *
 * this.baiduPush.startWork('xxxxxx')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * BaiduResponse
 * RegistrationData
 * UnregistrationData
 * TagData
 * NotificationData
 */
export declare class BaiduPush extends IonicNativePlugin {
    /**
     * This method registers the device to Baidu Cloud Push services.
     * @param {string} apiKey Baidu Cloud Push API key.
     * @return {Promise<BaiduResponse<RegistrationData>>} Returns a Promise that resolves with a BaiduResponse.
     */
    startWork(apiKey: string): Promise<BaiduResponse<RegistrationData>>;
    /**
     * This method unregisters the device to Baidu Cloud Push services.
     * @return {Promise<BaiduResponse<UnregistrationData>>} Returns a Promise that resolves with a BaiduResponse.
     */
    stopWork(): Promise<BaiduResponse<UnregistrationData>>;
    /**
     * This method re-binds the device to Baidu Cloud Push services.
     * @return {Promise<BaiduResponse<RegistrationData>>} Returns a Promise that resolves with a BaiduResponse.
     */
    resumeWork(): Promise<BaiduResponse<RegistrationData>>;
    /**
     * This sets tags in the Baidu Cloud Push services.
     * @param tags {any} tags The tags to set.
     * @return {Promise<BaiduResponse<TagData>>} Returns a Promise that resolves with a BaiduResponse.
     */
    setTags(tags: any): Promise<BaiduResponse<TagData>>;
    /**
     * This sets tags in the Baidu Cloud Push services.
     * @param tags {any} tags The tags to set.
     * @return {Promise<BaiduResponse<TagData>>} Returns a Promise that resolves with a BaiduResponse.
     */
    delTags(tags: any): Promise<BaiduResponse<TagData>>;
    /**
     * This method is called when a notification is recieved on the foreground.
     * @return {Promise<BaiduResponse<NotificationData>>} Returns a Promise that resolves with a BaiduResponse.
     */
    onMessage(): Observable<BaiduResponse<NotificationData>>;
    /**
     * This method is called when the user taps a notification.
     * @return {Promise<BaiduResponse<NotificationData>>} Returns a Promise that resolves with a BaiduResponse.
     */
    onNotificationClicked(): Observable<BaiduResponse<NotificationData>>;
    /**
     * This method is called when a notification is recieved.
     * @return {Promise<BaiduResponse<NotificationData>>} Returns a Promise that resolves with a BaiduResponse.
     */
    onNotificationArrived(): Observable<BaiduResponse<NotificationData>>;
}
