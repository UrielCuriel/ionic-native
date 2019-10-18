import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name BioCatch
 * @description
 * BioCatch SDK Cordova support
 *
 * @usage
 * ```typescript
 * import { BioCatch } from '@ionic-native/biocatch';
 *
 *
 * constructor(private biocatch: BioCatch) { }
 *
 * ...
 *
 *
 * this.biocatch.start('customer-session-1', 'http://example.com', 'some-public-key')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class BioCatch extends IonicNativePlugin {
    /**
     * Start a session
     * @param customerSessionID {String} Customer session id
     * @param wupUrl {String} WUP server URL
     * @param publicKey {String} Public Key
     * @return {Promise<void>} Returns a promise
     */
    start(customerSessionID: string | null, wupUrl: string, publicKey: string | null): Promise<void>;
    /**
     * Pause the session
     * @return {Promise<void>} Returns a promise
     */
    pause(): Promise<void>;
    /**
     * Resume the session
     * @return {Promise<void>} Returns a promise
     */
    resume(): Promise<void>;
    /**
     * Stop the session
     * @return {Promise<void>} Returns a promise
     */
    stop(): Promise<void>;
    /**
     * Reset the session
     * @return {Promise<void>} Returns a promise
     */
    resetSession(): Promise<void>;
    /**
     * Change the session context
     * @param contextName {String} Context name
     * @return {Promise<void>} Returns a promise
     */
    changeContext(contextName: string): Promise<void>;
    /**
     * Update the customer session ID
     * @param customerSessionID {String}
     * @return {Promise<void>} Returns a promise
     */
    updateCustomerSessionID(customerSessionID: string | null): Promise<void>;
}
