import { IonicNativePlugin } from '@ionic-native/core';
export interface WonderPushDelegate {
    urlForDeepLink(url: string, callback: (url?: string) => void): void;
}
export interface WonderPushChannel {
    id: string;
    groupId?: string;
    name?: string;
    description?: string;
    bypassDnd?: boolean;
    showBadge?: boolean;
    importance?: number;
    lights?: boolean;
    lightColor?: number;
    vibrate?: boolean;
    sound?: boolean;
    soundUri?: string;
    lockscreenVisibility?: number;
    vibrateInSilentMode?: boolean;
    color?: number;
    localOnly?: boolean;
}
export interface WonderPushChannelGroup {
    id: string;
    name?: string;
}
declare class NestedObject {
    pluginObj: any;
    constructor(pluginObj: any);
    wrap<T>(functionName: string, args: any[]): Promise<T>;
}
export declare class UserPreferencesMethods extends NestedObject {
    /**
     * Get the default channel id
     * @returns {Promise<string>}
     */
    getDefaultChannelId(): Promise<string>;
    /**
     * Set the default channel id
     * @param {string} id
     * @returns {Promise<any>}
     */
    setDefaultChannelId(id: string): Promise<any>;
    /**
     * Get a channel group
     * @param {string} groupId
     * @returns {Promise<WonderPushChannelGroup | null>}
     */
    getChannelGroup(groupId: string): Promise<WonderPushChannelGroup | null>;
    /**
     * Get a channel
     * @param {string} channelId
     * @returns {Promise<WonderPushChannel | null>}
     */
    getChannel(channelId: string): Promise<WonderPushChannel | null>;
    /**
     * Create, update and remove channel existing groups to match the given channel groups
     * @param {WonderPushChannelGroup[]} channelGroups
     * @returns {Promise<any>}
     */
    setChannelGroups(channelGroups: WonderPushChannelGroup[]): Promise<any>;
    /**
     * Create, update and remove channels to match the given channels
     * @param {WonderPushChannel[]} channels
     * @returns {Promise<any>}
     */
    setChannels(channels: WonderPushChannel[]): Promise<any>;
    /**
     * Create or update a channel group
     * @param {WonderPushChannelGroup} channelGroup
     * @returns {Promise<any>}
     */
    putChannelGroup(channelGroup: WonderPushChannelGroup): Promise<any>;
    /**
     * Create or update a channel
     * @param {WonderPushChannel} channel
     * @returns {Promise<any>}
     */
    putChannel(channel: WonderPushChannel): Promise<any>;
    /**
     * Remove a channel group
     * @param {string} groupId
     * @returns {Promise<any>}
     */
    removeChannelGroup(groupId: string): Promise<any>;
    /**
     * Remove a channel
     * @param {string} channelId
     * @returns {Promise<any>}
     */
    removeChannel(channelId: string): Promise<any>;
}
/**
 * @name WonderPush
 * @description
 *
 * Push notification delivery with the WonderPush service.
 *
 * Get started in minutes: [Ionic Quickstart Guide](https://docs.wonderpush.com/docs/ionic-quickstart).
 *
 * Requires the Cordova plugin `wonderpush-cordova-sdk`.
 *
 * [WonderPush push notifications](https://www.wonderpush.com) are the most effective way
 * to retain your users and grow your audience while remaining fully GDPR compliant.
 *
 * @usage
 * ```typescript
 * import { WonderPush } from '@ionic-native/wonderpush';
 *
 *
 * constructor(private wonderPush: WonderPush) { }
 *
 * ...
 *
 * // Subscribe user
 * this.wonderPush.subscribeToNotifications()
 *   .then(() => console.log("User subscribed to notifications"))
 *   .catch((error: any) => console.error(error));
 *
 *
 * // Send an event (a purchase in this example)
 * this.wonderPush.sendEvent('purchase', {
 *   float_price: 12.99,
 *   string_sku: "X123456"
 * });
 *
 * // Tag users (as customers)
 * this.wonderPush.addTag('customer');
 *
 * // Personalize
 * // 1. Store user details.
 * // 2. Use those details to create segments.
 * // 3. Include those details in your notifications.
 * this.wonderPush.putProperties({
 *   string_name: 'John D.',
 *   int_age: 24
 * });
 *
 * // GDPR
 * // 1. set REQUIRES_USER_CONSENT=true to enable GDPR compliance.
 * // 2. WonderPush doesn't start until setUserConsent(true) is called.
 * const onClick = (userConsent: boolean) => this.wonderPush.setUserConsent(userConsent);
 *
 * // Listen to notification clicks
 * document.addEventListener('wonderpush.notificationOpen', function(event) {
 *   console.log('Notification opened', event.notification);
 *   if (event.notificationType === 'data') {
 *     console.log('Silent notification', event.notification);
 *   }
 * });
 * ```
 *
 * @interfaces
 * WonderPushChannel
 * WonderPushChannelGroup
 */
export declare class WonderPush extends IonicNativePlugin {
    /**
     * Sets the user id, used to identify a single identity across multiple devices,
     * and to correctly identify multiple users on a single device.
     *
     * If not called, the last used user id it assumed. Defaulting to `null` if none is known.
     *
     * Upon changing userId, the access token is wiped, so avoid unnecessary calls, like calling with `null`
     * just before calling with a user id.
     *
     * @param {?string} userId - The user id, unique to your application.
     *   Use `null` for anonymous users.
     *
     *   You are strongly encouraged to use your own unique internal identifier.
     * @returns {Promise<any>}
     */
    setUserId(userId: string | null): Promise<any>;
    /**
     * Whether the SDK is ready to operate.
     *
     * The SDK is ready when it is initialized and has fetched an access token.
     * @returns {Promise<any>}
     */
    isReady(): Promise<boolean>;
    /**
     * Controls native SDK logging.
     * @param {boolean} enabled - Whether to enable logs.
     * @returns {Promise<any>}
     */
    setLogging(enabled: boolean): Promise<any>;
    /**
     * Sets up a delegate for tighter integration, or removes it.
     * @param {?WonderPushDelegate} delegate - The delegate to set, or `null` to remove it.
     * @returns {Promise<any>}
     */
    setDelegate(delegate: WonderPushDelegate | null): Promise<any>;
    /**
     * Gets the current delegate.
     * @returns {Promise<WonderPushDelegate | null>} A promise with the delegate of null
     */
    getDelegate(): Promise<WonderPushDelegate | null>;
    /**
     * Returns the userId currently in use, `null` by default.
     * @returns {Promise<string | null>} A promise with the user ID or null
     */
    getUserId(): Promise<string | null>;
    /**
     * Returns the installationId identifying your application on a device, bond to a specific userId.
     * If you want to store this information on your servers, keep the corresponding userId with it.
     * Will return `null` until the SDK is properly initialized.
     * @returns {Promise<string | null>} A promise with the installation ID or null
     */
    getInstallationId(): Promise<string | null>;
    /**
     * Returns the unique device identifier
     * @returns {Promise<string | null>} A promise with the device ID or null
     */
    getDeviceId(): Promise<string | null>;
    /**
     * Returns the push token.
     * @returns {Promise<string | null>} A promise with the push token or `null`
     */
    getPushToken(): Promise<string | null>;
    /**
     * Returns the currently used access token.
     * Returns `null` until the SDK is properly initialized.
     * This together with your client secret gives entire control to the current installation and associated user, you should not disclose it unnecessarily.
     * @returns {Promise<string | null>}
     */
    getAccessToken(): Promise<string | null>;
    /**
     * Send an event to be tracked to WonderPush.
     *
     * @param {string} type - The event type, or name. Event types starting with an `@` character are reserved.
     * @param {?object} [attributes] - An object containing custom properties to be attached to the event.
     *   The keys should be prefixed according to the type of their values.
     *   You can find the details in the [Concepts > Custom fields](https://www.wonderpush.com/docs/guide/custom-fields) section of the documentation.
     * @returns {Promise<any>}
     */
    trackEvent(type: string, attributes: {
        [key: string]: any;
    }): Promise<any>;
    /**
     * Adds one or more tags to the installation.
     * @param {string|string[]} tag - The tags to add to the installation. You can use either a single string argument or an array of strings.
     * @returns {Promise<any>}
     */
    addTag(tag: string | string[]): Promise<any>;
    /**
     * Removes one or more tags from the installation.
     * @param {string|string[]} tag - The tags to remove from the installation. You can use either a single string argument or an array of strings.
     * @returns {Promise<any>}
     */
    removeTag(tag: string | string[]): Promise<any>;
    /**
     * Removes all tags from the installation.
     * @returns {Promise<any>}
     */
    removeAllTags(): Promise<any>;
    /**
     * Returns all the tags of the installation.
     * @returns {Promise<string[]>}
     */
    getTags(): Promise<string[]>;
    /**
     * Tests whether the installation has the given tag attached to it.
     * @param {string} tag - The tag to test.
     * @returns {Promise<boolean>}
     */
    hasTag(tag: string): Promise<boolean>;
    /**
     * Sets the value to a given installation property.
     *
     * The previous value is replaced entirely.
     * Setting `undefined` or `null` has the same effect as {@link cordova.plugins.WonderPush#unsetProperty}.
     *
     * @param {string} field - The name of the property to set
     * @param value
     * @returns {Promise<any>}
     */
    setProperty(field: string, value: any): Promise<any>;
    /**
     * Removes the value of a given installation property.
     *
     * The previous value is replaced with `null`.
     *
     * @param {string} field - The name of the property
     * @returns {Promise<any>}
     */
    unsetProperty(field: string): Promise<any>;
    /**
     * Adds the value to a given installation property.
     *
     * The stored value is made an array if not already one.
     * If the given value is an array, all its values are added.
     * If a value is already present in the stored value, it won't be added.
     *
     * @param {string} field - The name of the property
     * @param value
     * @returns {Promise<void>}
     */
    addProperty(field: string, value: any): Promise<void>;
    /**
     * Removes the value from a given installation property.
     *
     * The stored value is made an array if not already one.
     * If the given value is an array, all its values are removed.
     * If a value is present multiple times in the stored value, they will all be removed.
     *
     * @param {string} field - The name of the property
     * @param value
     * @returns {Promise<any>}
     */
    removeProperty(field: string, value: any): Promise<any>;
    /**
     * Returns the value of a given installation property.
     *
     * If the property stores an array, only the first value is returned.
     * This way you don't have to deal with potential arrays if that property is not supposed to hold one.
     * Returns `null` if the property is absent or has an empty array value.
     *
     * @param {string} field - The name of the property to read values from
     * @returns {Promise<any>}
     */
    getPropertyValue(field: string): Promise<any>;
    /**
     * Returns an array of the values of a given installation property.
     *
     * If the property does not store an array, an array is returned nevertheless.
     * This way you don't have to deal with potential scalar values if that property is supposed to hold an array.
     * Returns an empty array instead of `null` if the property is absent.
     * Returns an array wrapping any scalar value held by the property.
     *
     * @param {string} field - The name of the property to read values from
     * @returns {Promise<any[]>}
     */
    getPropertyValues(field: string): Promise<any[]>;
    /**
     * Returns the latest known custom properties attached to the current installation object stored by WonderPush.
     * @returns {Promise<{[p: string]: any}>}
     */
    getProperties(): Promise<{
        [key: string]: any;
    }>;
    /**
     * Updates the properties attached to the current installation object stored by WonderPush.
     *
     * In order to remove a value, use `null`.
     *
     * @param {{[p: string]: any}} properties. The keys should be prefixed according to the type of their values. You can find the details in the [Segmentation > Properties](https://docs.wonderpush.com/docs/properties#section-custom-properties) section of the documentation.
     * @returns {Promise<any>}
     */
    putProperties(properties: {
        [key: string]: any;
    }): Promise<any>;
    /**
     * Subscribes to push notification and registers the device token with WondePush.
     *
     * On iOS, you **must** call the following method at least once to make the notification visible to the user.
     *
     * - You can call this method multiple times. The user is only prompted for permission by iOS once.
     * - There is no need to call this method if the permission has already been granted, but it does not harm either.
     * - If the permission has been denied in the OS, the user will stay soft opt-out.
     *
     * Because in iOS you only have *one* chance for prompting the user, you should find a good timing for that.
     * For a start, you can systematically call it when the application starts, so that the user will be prompted directly at the first launch.
     *
     * @return {Promise<any>} Returns a promise that resolves upon successful subscription
     */
    subscribeToNotifications(): Promise<any>;
    /**
     * Returns whether the notifications are enabled.
     * @returns {Promise<boolean>}
     */
    isSubscribedToNotifications(): Promise<boolean>;
    /**
     * Unsubscribes from push notification.
     * This method marks the user as soft opt-out.
     *
     * @returns {Promise<any>}
     */
    unsubscribeFromNotifications(): Promise<any>;
    /**
     * Reads user consent state.
     * Returns undefined if no explicit consent was set.
     * @returns {Promise<boolean>}
     */
    getUserConsent(): Promise<boolean>;
    /**
     * Provides or withdraws user consent.
     * If the `requiresUserConsent` initialization option is true,
     * the whole SDK is paused and no data is sent to WonderPush, until consent is provided.
     * @param {boolean} consent -
     * @returns {Promise<any>}
     */
    setUserConsent(consent: boolean): Promise<any>;
    /**
     * Remove any local storage and ask the WonderPush servers to delete any data associated with the all local installations and related users.
     * @returns {Promise<any>}
     */
    clearAllData(): Promise<any>;
    /**
     * Ask the WonderPush servers to delete any event associated with the all local installations.
     * @returns {Promise<any>}
     */
    clearEventsHistory(): Promise<any>;
    /**
     * Ask the WonderPush servers to delete any custom data associated with the all local installations and related users.
     *
     * @returns {Promise<any>}
     */
    clearPreferences(): Promise<any>;
    /**
     * Initiates the download of all user remote and local data.
     *
     * @returns {Promise<any>}
     */
    downloadAllData(): Promise<any>;
    UserPreferences: UserPreferencesMethods;
}
export {};
