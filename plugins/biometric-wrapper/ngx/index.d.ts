import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name BiometricWrapper
 * @description
 * This plugin capture biometric(Iris and Fingerprint) and validate the user.
 * May be used in Banking domain
 *
 * @usage
 * ```typescript
 * import { BiometricWrapper } from '@ionic-native/biometric-wrapper/ngx';
 *
 *
 * constructor(private biometricWrapper: BiometricWrapper) { }
 *
 * ...
 *
 *
 * this.biometricWrapper.activateIris({'PID_XML': '<pid-xml/>'})
 *   .then((res: any) => )
 *   .catch((error: any) => );
 *
 * ```
 */
export declare class BiometricWrapper extends IonicNativePlugin {
    /**
     * This function activate iris activity
     * @return {Promise<any>} Returns a promise that resolves when iris data captured
     */
    activateIris(args: any): Promise<any>;
    /**
     * This function activate fingerprint activity
     * @return {Promise<any>} Returns a promise that resolves when FP data captured
     */
    activateFingerprint(args: any): Promise<any>;
}
