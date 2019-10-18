import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name jAnalytics
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { JAnalytics } from '@ionic-native/JAnalytics/ngx';
 *
 *
 * constructor(private jAnalytics: JAnalytics) { }
 *
 * ...
 *
 *
 * this.jAnalytics.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class JAnalytics extends IonicNativePlugin {
    /**
     * This function does something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    init(): Promise<any>;
    initCrashHandler(): Promise<any>;
    stopCrashHandler(): Promise<any>;
    onPageStart(params: any): Promise<any>;
    onPageEnd(params: any): Promise<any>;
    addCountEvent(params: any): Promise<any>;
    addCalculateEvent(params: any): Promise<any>;
    addLoginEvent(params: any): Promise<any>;
    addRegisterEvent(params: any): Promise<any>;
    addBrowseEvent(params: any): Promise<any>;
    addPurchaseEvent(params: any): Promise<any>;
}
