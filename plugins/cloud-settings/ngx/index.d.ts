import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Cloud Settings
 * @description
 * Stores app settings in cloud storage so if the user re-installs the app or installs it on a different device, the settings will be restored and available in the new installation.
 *
 * @usage
 * ```typescript
 * import { CloudSettings } from '@ionic-native/cloud-settings/ngx';
 *
 *
 * constructor(private cloudSettings: CloudSettings) { }
 *
 * ...
 *
 * this.cloudSettings.exists()
 *   .then((exists: boolean) => console.log("Saved settings exist: " + exists) )
 *
 * this.cloudSettings.load()
 *   .then((settings: any) => this.settings = settings)
 *   .catch((error: any) => console.error(error));
 *
 * this.cloudSettings.save(this.settings)
 *   .then((savedSettings: any) => console.log("Saved settings: " + JSON.stringify(savedSettings)))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class CloudSettings extends IonicNativePlugin {
    /**
     * Indicates if any stored cloud settings currently exist for the current user.
     * @return {Promise<boolean>} Will be passed a boolean flag which indicates whether an store settings exist for the user.
     */
    exists(): Promise<boolean>;
    /**
     * Saves the settings to cloud backup.
     * @param {object} settings - a JSON structure representing the user settings to save to cloud backup.
     * @param {boolean} [overwrite] - (optional) if true, existing settings will be replaced rather than updated. Defaults to false.
     * If false, existing settings will be merged with the new settings passed to this function.
     * @return {Promise<any>} Will be passed a single object argument which contains the saved settings as a JSON object.
     */
    save(settings: any, overwrite?: boolean): Promise<any>;
    /**
     * Loads the current settings.
     * @return {Promise<any>} Will be passed a single object argument which contains the saved settings as a JSON object.
     */
    load(): Promise<any>;
    /**
     * Registers a function which will be called if/when settings on the device have been updated from the cloud.
     * @param {Function} handler - callback function to invoke when device settings have been updated from the cloud.
     */
    onRestore(handler: Function): void;
    /**
     * Outputs verbose log messages from the native plugin components to the JS console.
     * @return {Promise<void>}
     */
    enableDebug(): Promise<void>;
}
