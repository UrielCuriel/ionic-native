import { IonicNativePlugin } from '@ionic-native/core';
export interface AndroidAccount {
    /** Account creator */
    CREATOR: AndroidAccount;
    /** Account name */
    name: string;
    /** Account type */
    type: string;
}
/**
 * @name Device Accounts
 * @description
 * Gets the Google accounts associated with the Android device
 *
 * @usage
 * ```typescript
 * import { DeviceAccounts } from '@ionic-native/device-accounts/ngx';
 *
 * constructor(private deviceAccounts: DeviceAccounts) { }
 *
 * ...
 *
 * this.deviceAccounts.get()
 *   .then(accounts => console.log(accounts))
 *   .catch(error => console.error(error));
 *
 * ```
 * @interfaces
 * AndroidAccount
 */
export declare class DeviceAccounts extends IonicNativePlugin {
    /**
     *  Gets all accounts registered on the Android Device
     * @returns {Promise<AndroidAccount[]>}
     */
    get(): Promise<AndroidAccount[]>;
    /**
     *  Get all accounts registered on Android device for requested type
     * @param {string} type
     * @returns {Promise<AndroidAccount[]>}
     */
    getByType(type: string): Promise<AndroidAccount[]>;
    /**
     *  Get all emails registered on Android device (accounts with 'com.google' type)
     * @returns {Promise<string[]>}
     */
    getEmails(): Promise<string[]>;
    /**
     *  Get the first email registered on Android device
     * @returns {Promise<string>}
     */
    getEmail(): Promise<string>;
    /**
     *  Get permissions for access to email registered on Android device 8.0+
     * @returns {Promise<string>}
     */
    getPermissions(): Promise<string>;
    /**
     *  Get permissions for access to email registered on Android device 8.0+ for requested type
     * @param {string} type
     * @returns {Promise<string>}
     */
    getPermissionsByType(type: string): Promise<string>;
}
