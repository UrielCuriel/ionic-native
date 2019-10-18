import { IonicNativePlugin } from '@ionic-native/core';
export interface TagGroupEditor {
    addTags(): void;
    removeTags(): void;
    apply(): void;
}
/**
 * Enum for notification types.
 * @readonly
 * @enum {number}
 */
export declare enum NotificationType {
    none = 0,
    badge = 1,
    sound = 2,
    alert = 4
}
/**
 * Enum for presentation options.
 * @readonly
 * @enum {number}
 */
export declare enum PresentationOptions {
    none = 0,
    badge = 1,
    sound = 2,
    alert = 4
}
/**
 * @name UrbanAirShip
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { UrbanAirShip } from '@ionic-native/urbanairship/ngx';
 *
 *
 * constructor(private urbanAirShip: UrbanAirShip) { }
 *
 * ...
 *
 *
 * this.urbanAirShip.takeOff(config)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class UrbanAirShip extends IonicNativePlugin {
    /**
     * Re-attaches document event listeners in this webview
     */
    reattach(): Promise<any>;
    /**
     * Initailizes Urban Airship.
     *
     * The plugin will automatically call takeOff during the next app init in
     * order to properly handle incoming push. If takeOff is called multiple times
     * in a session, or if the config is different than the previous sesssion, the
     * new config will not be used until the next app start.
     *
     * @param {object}  config The Urban Airship config.
     * @param {object}  config.development The Urban Airship development config.
     * @param {string}  config.development.appKey The development appKey.
     * @param {string}  config.development.appSecret The development appSecret.
     * @param {object}  config.production The Urban Airship production config.
     * @param {string}  config.production.appKey The production appKey.
     * @param {string}  config.production.appSecret The production appSecret.
     */
    takeOff(config: any): Promise<any>;
    /**
     * Sets the Android notification config. Values not set will fallback to any values set in the config.xml.
     *
     * @param {object}  config The notification config.
     * @param {string}  [config.icon] The name of the drawable resource to use as the notification icon.
     * @param {string}  [config.largeIcon] The name of the drawable resource to use as the notification large icon.
     * @param {string}  [config.accentColor] The notification accent color. Format is #AARRGGBB.
     */
    setAndroidNotificationConfig(config: any): Promise<any>;
    /**
     * Sets the default behavior when the message center is launched from a push
     * notification. If set to false the message center must be manually launched.
     *
     * @param {boolean} enabled true to automatically launch the default message center, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAutoLaunchDefaultMessageCenter(enabled: boolean): Promise<any>;
    /**
     * Enables or disables user notifications.
     *
     * @param {boolean} enabled true to enable notifications, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setUserNotificationsEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if user notifications are enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if user notifications is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isUserNotificationsEnabled(): Promise<any>;
    /**
     * Checks if app notifications are enabled or not. Its possible to have `userNotificationsEnabled`
     * but app notifications being disabled if the user opted out of notifications.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if app notifications is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isAppNotificationsEnabled(): Promise<any>;
    /**
     * Returns the channel ID.
     *
     * @param {function(ID)} success The function to call on success.
     * @param {string} success.ID The channel ID string
     * @param {failureCallback} [failure] The function to call on failure.
     * @param {string} failure.message The error message.
     */
    getChannelID(): Promise<any>;
    /**
     * Returns the last notification that launched the application.
     *
     * @param {Boolean} clear true to clear the notification.
     * @param {function(push)} success The function to call on success.
     * @param {object} success.push The push message object containing data associated with a push notification.
     * @param {string} success.push.message The push alert message.
     * @param {object} success.push.extras Any push extras.
     * @param {number} [success.push.notification_id] The Android notification ID.
     * @param {failureCallback} [failure] The function to call on failure.
     * @param {string} failure.message The error message.
     */
    getLaunchNotification(clear: boolean): Promise<any>;
    /**
     * Returns the last received deep link.
     *
     * @param {Boolean} clear true to clear the deep link.
     * @param {function(push)} success The function to call on success.
     * @param {string} success.deepLink The deep link.
     * @param {failureCallback} [failure] The function to call on failure.
     * @param {string} failure.message The error message.
     */
    getDeepLink(clear: boolean): Promise<any>;
    /**
     * Returns the tags as an array.
     *
     * @param {function(tags)} success The function to call on success.
     * @param {array} success.tags The tags as an array.
     * @param {failureCallback} [failure] The function to call on failure.
     * @param {string} failure.message The error message.
     */
    getTags(): Promise<any>;
    /**
     * Sets the tags.
     *
     * @param {Array} tags an array of strings.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setTags(tags: string[]): Promise<any>;
    /**
     * Returns the alias.
     *
     * @deprecated Deprecated since 6.7.0 - to be removed in a future version of the plugin - please use getNamedUser
     *
     * @param {function(currentAlias)} success The function to call on success.
     * @param {string} success.currentAlias The alias as a string.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getAlias(): Promise<any>;
    /**
     * Sets the alias.
     *
     * @deprecated Deprecated since 6.7.0  - to be removed in a future version of the plugin - please use setNamedUser
     *
     * @param {String} alias string
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAlias(alias: string): Promise<any>;
    /**
     * Checks if quiet time is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if quiet time is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isQuietTimeEnabled(): Promise<any>;
    /**
     * Enables or disables quiet time.
     *
     * @param {Boolean} enabled true to enable quiet time, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setQuietTimeEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if the device is currently in quiet time.
     *
     * @param {function(inQuietTime)} success Success callback.
     * @param {boolean} success.inQuietTime Flag indicating if quiet time is currently in effect.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isInQuietTime(): Promise<any>;
    /**
     * Returns the quiet time as an object with the following:
     * "startHour": Number,
     * "startMinute": Number,
     * "endHour": Number,
     * "endMinute": Number
     *
     * @param {function(quietTime)} success The function to call on success.
     * @param {object} success.quietTime The quietTime object represents a timespan during
     *        which notifications should be silenced.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getQuietTime(): Promise<any>;
    /**
     * Sets the quiet time.
     *
     * @param {Number} startHour for quiet time.
     * @param {Number} startMinute for quiet time.
     * @param {Number} endHour for quiet time.
     * @param {Number} endMinute for quiet time.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setQuietTime(startHour: number, startMinute: number, endHour: number, endMinute: number): Promise<any>;
    /**
     * Enables or disables analytics.
     *
     * Disabling analytics will delete any locally stored events
     * and prevent any events from uploading. Features that depend on analytics being
     * enabled may not work properly if it's disabled (reports, region triggers,
     * location segmentation, push to local time).
     *
     * @param {Boolean} enabled true to enable analytics, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAnalyticsEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if analytics is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if analytics is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isAnalyticsEnabled(): Promise<any>;
    /**
     * Returns the named user ID.
     *
     * @param {function(namedUser)} success The function to call on success.
     * @param {string} success.namedUser The named user ID as a string.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getNamedUser(): Promise<any>;
    /**
     * Sets the named user ID.
     *
     * @param {String} namedUser identifier string.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setNamedUser(namedUser: string): Promise<any>;
    /**
     * Runs an Urban Airship action.
     *
     * @param {String} actionName action as a string.
     * @param {*} actionValue
     * @param {function(result)} [success] The function to call on success.
     * @param {object} success.result The result's value.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    runAction(actionName: string, actionValue: any): Promise<any>;
    /**
     * Creates an editor to modify the named user tag groups.
     *
     * @return {TagGroupEditor} A tag group editor instance.
     */
    editNamedUserTagGroups(): TagGroupEditor;
    /**
     * Creates an editor to modify the channel tag groups.
     *
     * @return {TagGroupEditor} A tag group editor instance.
     */
    editChannelTagGroups(): TagGroupEditor;
    /**
     * Sets an associated identifier for the Connect data stream.
     *
     * @param key Custom key for identifier.
     * @param identifier The identifier value.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAssociatedIdentifier(key: string, identifier: string): Promise<any>;
    /**
     * Enables or disables Urban Airship location services.
     *
     * @param {Boolean} enabled true to enable location, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setLocationEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if location is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if location is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isLocationEnabled(): Promise<any>;
    /**
     * Enables or disables background location.
     *
     * @param {Boolean} enabled true to enable background location, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setBackgroundLocationEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if background location is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if background location updates are enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isBackgroundLocationEnabled(): Promise<any>;
    /**
     * Displays the message center.
     *
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    displayMessageCenter(): Promise<any>;
    /**
     * Dismiss the message center.
     *
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    dismissMessageCenter(): Promise<any>;
    /**
     * Dismiss the inbox message.
     *
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    dismissInboxMessage(): Promise<any>;
    /**
     * Dismiss the inbox message in the overlay.
     *
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    dismissOverlayInboxMessage(): Promise<any>;
    /**
     * Gets the array of inbox messages. Each message will have the following properties:
     * "id": string - The messages ID. Needed to display, mark as read, or delete the message.
     * "title": string - The message title.
     * "sentDate": number - The message sent date in milliseconds.
     * "listIconUrl": string, optional - The icon url for the message.
     * "isRead": boolean - The unread/read status of the message.
     * "extras": object - String to String map of any message extras.
     *
     * @param {function(messages)} success The function to call on success.
     * @param {array} success.messages The array of inbox messages.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getInboxMessages(): Promise<any>;
    /**
     * Marks an inbox message read.
     *
     * @param {String} messageId The ID of the message to mark as read.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    markInboxMessageRead(messageId: string): Promise<any>;
    /**
     * Deletes an inbox message.
     *
     * @param {String} messageId The ID of the message to delete.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    deleteInboxMessage(messageId: string): Promise<any>;
    /**
     * Displays the inbox message using a full screen view.
     *
     * @param {String} messageId The ID of the message to display.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    displayInboxMessage(messageId: string): Promise<any>;
    /**
     * Forces the inbox to refresh. This is normally not needed as the inbox
     * will automatically refresh on foreground or when a push arrives thats
     * associated with a message, but it can be useful when providing a refresh
     * button for the message listing.
     *
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    refreshInbox(): Promise<any>;
    /**
     * Displays the inbox message using an overlay display.
     *
     * @param {String} messageId The ID of the message to display.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    overlayInboxMessage(messageId: string): Promise<any>;
    /**
     * Clears a notification by identifier.
     *
     * @param {string} identifier The notification identifier.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     */
    clearNotification(identifier: string): Promise<any>;
    /**
     * Clears all notifications posted by the application.
     *
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    clearNotifications(): Promise<any>;
    /**
     * Gets currently active notifications.
     *
     * Note: On Android this functionality is only supported on Android M or higher.
     *
     * @param {function(messages)} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     */
    getActiveNotifications(): Promise<any>;
    /**
     * Enables or disables auto badge. Defaults to `NO`.
     *
     * @param {Boolean} enabled true to enable auto badge, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAutobadgeEnabled(enabled: boolean): Promise<any>;
    /**
     * Sets the badge number.
     *
     * @param count number specified badge to set.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setBadgeNumber(count: number): Promise<any>;
    /**
     * Returns the current badge number.
     *
     * @param {function(badgeNumber)} success The function to call on success.
     * @param {int} success.badgeNumber The current application badge number.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getBadgeNumber(): Promise<any>;
    /**
     * Clears the badge.
     *
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    resetBadge(): Promise<any>;
    /**
     * Sets the iOS notification types. Specify the combination of
     * badges, sound and alerts that are desired.
     *
     * @param types specified notification types.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setNotificationTypes(types: NotificationType): Promise<any>;
    /**
     * Sets the iOS presentation options. Specify the combination of
     * badges, sound and alerts that are desired.
     *
     * @param options types specified presentation options.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setPresentationOptions(options: PresentationOptions): Promise<any>;
    /**
     * Checks if notification sound is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if sound is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isSoundEnabled(): Promise<any>;
    /**
     * Enables or disables notification sound.
     *
     * @param {Boolean} enabled true to enable sound, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setSoundEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if notification vibration is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if vibration is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isVibrateEnabled(): Promise<any>;
    /**
     * Enables or disables notification vibration.
     *
     * @param {Boolean} enabled true to enable vibration, false to disable.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setVibrateEnabled(enabled: boolean): Promise<any>;
    /**
     * Adds a custom event.
     *
     * @param {object} event The custom event object.
     * @param {string} event.name The event's name.
     * @param {number} [event.value] The event's value.
     * @param {string} [event.transactionId] The event's transaction ID.
     * @param {object} [event.properties] The event's properties. Only numbers, booleans, strings, and array of strings are supported.
     * @param {function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    addCustomEvent(event: object): Promise<any>;
}
