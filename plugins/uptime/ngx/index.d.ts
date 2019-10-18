import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Uptime
 * @description
 * This plugin provides the time spent in milliseconds since boot (uptime).
 *
 * @usage
 * ```typescript
 * import { Uptime } from '@ionic-native/uptime/ngx';
 *
 * constructor(private uptime: Uptime) { }
 *
 * ...
 *
 * this.uptime.getUptime(includeDeepSleep)
 *   .then(uptime => console.log(uptime))
 *   .catch(error => console.log(error));
 *
 * ```
 */
export declare class Uptime extends IonicNativePlugin {
    /**
     * This function return system uptime
     * @param {boolean} includeDeepSleep Set to true to include system deep sleep
     * @return {Promise<string>} Returns a promise that return the uptime in milliseconds
     */
    getUptime(includeDeepSleep: boolean): Promise<string>;
}
