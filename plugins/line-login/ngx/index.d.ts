import { IonicNativePlugin } from '@ionic-native/core';
export interface LineLoginParams {
    /**
     * Line Channel ID
     */
    channel_id: string;
}
export interface LineLoginProfile {
    /**
     * Line User ID
     */
    userID: string;
    /**
     * Line Profile Image URL
     */
    pictureURL: string;
    /**
     * Line Profile Name
     */
    displayName: string;
    /**
     * Email
     */
    email?: string;
}
export interface LineLoginAccessToken {
    /**
     * Line Access Token
     */
    accessToken: string;
    /**
     * Line Access Token Expire Time
     */
    expireTime: string;
}
/**
 * @name Line Login
 * @description
 * The function login, logs out, acquires, verifies, and refreshes the access token. The version of LineSDK you are using is as follows.
 *
 * @usage
 * ```typescript
 * import { LineLogin } from '@ionic-native/line-login/ngx';
 *
 *
 * constructor(private lineLogin: LineLogin) { }
 *
 * ...
 *
 *
 * this.lineLogin.initialize({ channel_id: "xxxxxxxxxx" })
 *
 * this.lineLogin.login()
 *   .then(result => console.log(result))
 *   .catch(error => console.log(error))
 *
 * ```
 *
 * @interfaces
 * LineLoginParams
 * LineLoginProfile
 * LineLoginAccessToken
 *
 */
export declare class LineLogin extends IonicNativePlugin {
    /**
     * Initialize
     * @param param LineLoginParams
     * @return {Promise<any>}
     */
    initialize(param: LineLoginParams): Promise<any>;
    /**
     * Login
     * @return {Promise<LineLoginProfile>}
     */
    login(): Promise<LineLoginProfile>;
    /**
     * Login with Web
     * (iOS only)
     * @return {Promise<LineLoginProfile>}
     */
    loginWeb(): Promise<LineLoginProfile>;
    /**
     * Logout
     * @return {Promise<any>}
     */
    logout(): Promise<any>;
    /**
     * Get Access Token
     * @return {Promise<LineLoginAccessToken>}
     */
    getAccessToken(): Promise<LineLoginAccessToken>;
    /**
     * Verify AccessToken
     * @return {Promise<any>}
     */
    verifyAccessToken(): Promise<any>;
    /**
     * Refresh Access Token
     * @return {Promise<any>}
     */
    refreshAccessToken(): Promise<any>;
}
