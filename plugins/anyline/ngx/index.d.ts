import { IonicNativePlugin } from '@ionic-native/core';
export interface AnylineOptions {
    licenseKey: string;
    config: any;
}
/**
 * @name Anyline
 * @description
 * Anyline provides an easy-to-use SDK for applications to enable Optical Character Recognition (OCR) on mobile devices.
 *
 * @usage
 * ```typescript
 * import { Anyline } from '@ionic-native/anyline/ngx';
 *
 *
 * constructor(private anyline: Anyline) { }
 *
 * ...
 *
 *
 * this.anyline.scan(options)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Anyline extends IonicNativePlugin {
    /**
     * Scan
     * @param options {AnylineOptions} Scanning options
     * @return {Promise<any>} Returns a promise that resolves when Code is captured
     */
    scan(options: AnylineOptions): Promise<any>;
}
