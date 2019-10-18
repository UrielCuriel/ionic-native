import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface Response {
    status: number;
    body?: string;
    path?: string;
    headers: {
        [key: string]: string;
    };
}
export interface Request {
    requestId: string;
    body: string;
    headers: string;
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    query: string;
}
/**
 * @name Web Server
 * @description
 * This plugin allows you to start a local dynamic content web server for android and iOS devices.
 *
 * @usage
 * ```typescript
 * import { WebServer } from '@ionic-native/web-server/ngx';
 *
 *
 * constructor(private webServer: WebServer) { }
 *
 * ...
 *
 * this.webServer.onRequest().subscribe(data => {
 *   console.log(data);
 *   const res: Response = {
 *     status: 200,
 *     body: '',
 *     headers: {
 *       'Content-Type': 'text/html'
 *     }
 *   };
 *
 *   this.webServer.sendResponse(data.requestId, res)
 *     .catch((error: any) => console.error(error));
 * });
 *
 * this.webServer.start(80)
 *   .catch((error: any) => console.error(error));
 *
 * ```
 *
 * @interfaces
 * Response
 * Request
 */
export declare class WebServer extends IonicNativePlugin {
    /**
     * This method will start your webserver.
     * @param port {number} Port number (default to 8080)
     */
    start(port?: number): Promise<any>;
    /**
     * This method will stop your webserver.
     */
    stop(): Promise<any>;
    /**
     * This method returns an observable that streams HTTP requests to an observer.
     * @return {Observable<Request>} Returns an observable to resolve as a Request object
     */
    onRequest(): Observable<Request>;
    /**
     * This method sends a response to a request.
     * @param requestId {string} Request ID to respond to
     * @param responseObject {Response} Response object
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    sendResponse(requestId: string, responseObject: Response): Promise<any>;
}
