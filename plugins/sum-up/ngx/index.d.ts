import { IonicNativePlugin } from '@ionic-native/core';
export interface SumUpResponse {
    code: number;
    message: string;
}
export interface SumUpLoginStatus {
    code: number;
    isLoggedIn: boolean;
}
export interface SumUpPayment {
    transaction_code: string;
    card_type: string;
    merchant_code: string;
    amount: number;
    tip_amount: number;
    vat_amount: number;
    currency: string;
    status: string;
    payment_type: string;
    entry_mode: string;
    installments: number;
}
/**
 * @name SumUp
 * @description
 * Plugin to communicate with a SumUp payment terminal
 *
 * @usage
 * ```typescript
 * import { SumUp } from '@ionic-native/sum-up';
 *
 *
 * constructor(private sumUp: SumUp) { }
 *
 * this.sumUp.login("ACCESS_TOKEN")
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.auth("ACCESS_TOKEN")
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.getSettings()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.logout()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.isLoggedIn()
 *   .then((res: SumUpLoginStatus) => console.log(res))
 *   .catch((error: SumUpLoginStatus) => console.error(error));
 *
 *  this.sumUp.prepare()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 * this.sumUp.closeConnection()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 * this.sumUp.pay(10.0, "EUR")
 *   .then((res: SumUpPayment) => console.log(res))
 *   .catch((error: SumUpPayment) => console.error(error));
 *
 * ```
 */
export declare class SumUp extends IonicNativePlugin {
    /**
     * Login a user with an optional access token.
     * If the access token is provided and valid, the user is logged in autmatically.
     * Otherwise the user has to type in the credentials
     * @param accessToken {string}
     * @return {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    login(accessToken?: string): Promise<SumUpResponse>;
    /**
     * Authenticates the account with the given access token. Parameter accessToken is required.
     * @param accessToken {string}
     * @return {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    auth(accessToken: string): Promise<SumUpResponse>;
    /**
     * Opens a new window with the all account settings of an logged in user.
     * @return {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    getSettings(): Promise<SumUpResponse>;
    /**
     * Logout a user from the account.
     * @return {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    logout(): Promise<SumUpResponse>;
    /**
     * Checks whether the user is logged in or not and returns an object with the field isLoggedIn which is a boolean value.
     * @return {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    isLoggedIn(): Promise<SumUpLoginStatus>;
    /**
     * Prepares the terminal for a payment. Checks whether the CardReader is ready to transmit and
     * if an instance of the CardReaderManager is available.
     * @return {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    prepare(): Promise<SumUpResponse>;
    /**
     * Tries to close the connection to the card terminal.
     * @return {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    closeConnection(): Promise<SumUpResponse>;
    /**
     * Opens a native SumUp window to proceed a payment. Parameter amount and currencycode are required.
     * If the Payment was successful it returns an SumUpPayment object with information about the payment.
     * @param amount {number}
     * @param currencycode {string}
     * @return {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    pay(amount: number, currencycode: string): Promise<SumUpPayment>;
}
