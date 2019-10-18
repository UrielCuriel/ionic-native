import { IonicNativePlugin } from '@ionic-native/core';
export declare class SmartlookSetupConfig {
    private smartlookAPIKey;
    private fps;
    constructor(smartlookAPIKey: string, fps?: number);
}
export declare class SmartlookUserIdentifier {
    private identifier;
    private sessionProperties;
    constructor(identifier: string, sessionProperties?: {});
}
export declare class SmartlookCustomEvent {
    private name;
    private eventProperties;
    constructor(name: string, eventProperties?: {});
}
export declare class SmartlookGlobalEventProperties {
    private globalEventProperties;
    private immutable;
    constructor(globalEventProperties: {}, immutable: boolean);
}
export declare class SmartlookGlobalEventProperty {
    private key;
    private value;
    private immutable;
    constructor(key: string, value: string, immutable: boolean);
}
export declare class SmartlookGlobalEventPropertyKey {
    private key;
    constructor(key: string);
}
/**
 * @name Smartlook
 * @description
 * Official Smartlook SDK plugin. For more information visit (www.smartlook.com).
 *
 * @usage
 * ```typescript
 * import { Smartlook } from '@ionic-native/smartlook/ngx';
 *
 *
 * constructor(private smartlook: Smartlook) { }
 *
 * ...
 *
 *
 * this.smartlook.setupAndStartRecording(new SmartlookSetupConfig("key"));
 *
 * ```
 * @classes
 * SmartlookSetupConfig
 * SmartlookUserIdentifier
 * SmartlookCustomEvent
 * SmartlookGlobalEventProperties
 * SmartlookGlobalEventProperty
 * SmartlookGlobalEventPropertyKey
 */
export declare class Smartlook extends IonicNativePlugin {
    /**
     * Setup and start Smartlook SDK recording.
     * @param config SmartlookSetupConfig object.
     * @param config.smartlookAPIKey (required) Smartlook API key (you can obtain it in your dashboard).
     * @param config.fps (optional) recorded video framerate (allowed values 2-10 fps).
     */
    setupAndStartRecording(config: SmartlookSetupConfig): void;
    /**
     * Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see start())
     * @param config SmartlookSetupConfig object.
     * @param config.smartlookAPIKey (required) Smartlook API key (you can obtain it in your dashboard).
     * @param config.fps (optional) recorded video framerate (allowed values 2-10 fps).
     */
    setup(config: SmartlookSetupConfig): void;
    /**
     * Start SDK recording.
     */
    startRecording(): void;
    /**
     * Stop SDK recording. Recording will start again when you call start().
     */
    stopRecording(): void;
    /**
     * Check if SDK is currently recording.
     * @return {Promise<boolean>} Returns a promise with isRecording boolean.
     */
    isRecording(): Promise<boolean>;
    /**
     * When you start sensitive mode SDK records blank videos (single color) but SDK still sends analytic events.
     */
    startFullscreenSensitiveMode(): void;
    /**
     * Stop sensitive mode -> SDK records video.
     */
    stopFullscreenSensitiveMode(): void;
    /**
     * Check if fullscreen sensitive mode is active.
     * @return {Promise<boolean>} Returns a promise with isFullscreenSensitiveModeActive boolean.
     */
    isFullscreenSensitiveModeActive(): Promise<boolean>;
    /**
     * Identify user.
     * @param identifier SmartlookUserIdentifier object.
     * @param identifier.idenfier (required) id that can be used to identify user and his records.
     *                            You will see this Id in Smartlook dashboard so you can pair records with concrete user.
     * @param identifier.sessionProperties (optional) custom session properties object.
     */
    setUserIdentifier(identifier: SmartlookUserIdentifier): void;
    /**
     * Track custom event.
     * @param event SmartlookCustomEvent object.
     * @param event.name (required) string used to identify event.
     * @param event.eventProperties (optional) event properties object.
     */
    trackCustomEvent(event: SmartlookCustomEvent): void;
    /**
     * Track custom event.
     * @param timedEvent SmartlookCustomEvent object.
     * @param timedEvent.name (required) string used to identify timed event.
     * @param timedEvent.eventProperties (optional) timed event properties object. These properties will
     *                                   be merged with properties of tracked event (with lower priority).
     */
    startTimedCustomEvent(timedEvent: SmartlookCustomEvent): void;
    /**
     * Set global event properties that will be added to every tracked event.
     * @param properties SmartlookGlobalEventProperties object.
     * @param properties.globalEventProperties (required) global event properties object.
     * @param properties.immutable (required) If set to TRUE these properties have higher priority
     *                              than mutable ones and also they cannot be changed (only removed).
     */
    setGlobalEventProperties(properties: SmartlookGlobalEventProperties): void;
    /**
     * Check if SDK is currently recording.
     * @param property SmartlookGlobalEventProperty object.
     * @param property.key global property key.
     * @param property.value global property value.
     * @param property.immutable (required) If set to TRUE these properties have higher priority
     *                           than mutable ones and also they cannot be changed (only removed).
     */
    setGlobalEventProperty(property: SmartlookGlobalEventProperty): void;
    /**
     * Remove property from global event properties.
     * @param property SmartlookGlobalEventPropertyKey object.
     * @param property.key global property key.
     */
    removeGlobalEventProperty(property: SmartlookGlobalEventPropertyKey): void;
    /**
     * Remove all properties from global event properties.
     */
    removeAllGlobalEventProperties(): void;
}
