import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Alipay
 * @description
 * This plugin facilitates the usage of Alipay 支付宝 in an Ionic apps with the integrated AlipaySDK dated on 20180601.
 *
 * Requires Cordova plugin: `cordova-plugin-gubnoi-alipay`. For more info, please see https://github.com/jing-zhou/cordova-plugin-alipay .
 *
 * @usage
 * ```typescript
 * import { Alipay } from '@ionic-native/alipay/ngx';
 *
 * constructor(private alipay: Alipay) {
 *
 * //alipayOrder is a string that has been generated and signed by the server side.
 * this.alipay.pay(alipayOrder, success, error)
 *    .then(result => {
 *       console.log(result); // Success
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 *
 * }
 *
 * ```
 */
export declare class Alipay extends IonicNativePlugin {
    /**
     * Open Alipay to perform App pay
     * @param {string} order alipay order string
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    pay(order: string, success?: (res?: any) => void, error?: (err?: any) => void): Promise<any>;
}
