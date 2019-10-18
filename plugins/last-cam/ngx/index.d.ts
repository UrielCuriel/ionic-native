import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface LastCamStartupOptions {
    /** The left edge in pixels, default 0 */
    x?: number;
    /** The top edge in pixels, default 0 */
    y?: number;
    /** The width in pixels, default window.screen.width */
    width?: number;
    /** The height in pixels, default window.screen.height */
    height?: number;
    /** Choose the camera to use 'front' or 'back', default 'front' */
    camera?: string;
}
/**
 * @name LastCam
 * @description
 * Last Cam is a Camera Preview plugin that allows you to take capture both Videos and images in a
 * custom html preview of your choice.
 *
 * @interfaces
 * LastCamStartupOptions
 */
export declare class LastCam extends IonicNativePlugin {
    /**
     * Starts the camera preview instance.
     * @param {LastCamStartupOptions} options
     * @return {Promise<any>}
     */
    startCamera(options: LastCamStartupOptions): Promise<any>;
    /**
     * Stops the camera preview instance. (iOS)
     * @return {Promise<any>}
     */
    stopCamera(): Promise<any>;
    /**
     * Switch from the rear camera and front camera, if available.
     * @return {Promise<any>}
     */
    switchCamera(): Promise<any>;
    /**
     * Switch the flash mode.
     * @return {Promise<any>}
     */
    switchFlash(): Promise<any>;
    /**
     * Take the picture (base64)
     * @return {Promise<any>}
     */
    takePicture(): Promise<any>;
    /**
     * Start the video capture
     * @return {Promise<any>}
     */
    startVideoCapture(): Promise<any>;
    /**
     * Stops the video capture
     * @return {Promise<any>}
     */
    stopVideoCapture(): Promise<any>;
    /**
     * Promise of the recordingTimer.
     * @return {Promise<any>}
     */
    recordingTimer(): Promise<any>;
    /**
     * Observable of the recordingTimer.
     * @return {Observable<any>}
     */
    watchRecordingTimer(): Observable<any>;
}
