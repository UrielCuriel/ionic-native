import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Broadcaster
 * @description
 * This plugin adds exchanging events between native code and your app.
 *
 * @usage
 * ```typescript
 * import { Broadcaster } from '@ionic-native/broadcaster/ngx';
 *
 * constructor(private broadcaster: Broadcaster) { }
 *
 * ...
 *
 * // Listen to events from Native
 * this.broadcaster.addEventListener('eventName').subscribe((event) => console.log(event));
 *
 * // Send event to Native
 * this.broadcaster.fireNativeEvent('eventName', {}).then(() => console.log('success'));
 *
 * ```
 */
export declare class Broadcaster extends IonicNativePlugin {
    /**
     * This function listen to an event sent from the native code
     * @param {string} eventName
     * @return {Observable<any>} Returns an observable to watch when an event is received
     */
    addEventListener(eventName: string): Observable<any>;
    /**
     * This function sends data to the native code
     * @param {string} eventName
     * @param {any} eventData
     * @return {Promise<any>} Returns a promise that resolves when an event is successfully fired
     */
    fireNativeEvent(eventName: string, eventData: any): Promise<any>;
}
