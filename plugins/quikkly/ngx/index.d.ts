import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name QuikklyPlugin
 * @description ionic wrapper for cordova-plugin-quikkly
 * Use the quikkly scanner in your ionic app
 */
export declare class QuikklyPlugin extends IonicNativePlugin {
    openScanner(): Promise<string[]>;
}
