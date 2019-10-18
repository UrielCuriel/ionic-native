var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BioCatch = /** @class */ (function (_super) {
    __extends(BioCatch, _super);
    function BioCatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatch.prototype.start = function (customerSessionID, wupUrl, publicKey) { return cordova(this, "start", {}, arguments); };
    BioCatch.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    BioCatch.prototype.resume = function () { return cordova(this, "resume", {}, arguments); };
    BioCatch.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BioCatch.prototype.resetSession = function () { return cordova(this, "resetSession", {}, arguments); };
    BioCatch.prototype.changeContext = function (contextName) { return cordova(this, "changeContext", {}, arguments); };
    BioCatch.prototype.updateCustomerSessionID = function (customerSessionID) { return cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatch.pluginName = "BioCatch";
    BioCatch.plugin = "cordova-plugin-biocatch";
    BioCatch.pluginRef = "BioCatch";
    BioCatch.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatch.platforms = ["iOS", "Android"];
    BioCatch = __decorate([
        Injectable()
    ], BioCatch);
    return BioCatch;
}(IonicNativePlugin));
export { BioCatch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jpb2NhdGNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCMUMsNEJBQWlCOzs7O0lBVTdDLHdCQUFLLGFBQUMsaUJBQWdDLEVBQUUsTUFBYyxFQUFFLFNBQXdCO0lBU2hGLHdCQUFLO0lBU0wseUJBQU07SUFTTix1QkFBSTtJQVNKLCtCQUFZO0lBVVosZ0NBQWEsYUFBQyxXQUFtQjtJQVVqQywwQ0FBdUIsYUFBQyxpQkFBZ0M7Ozs7OztJQWxFN0MsUUFBUTtRQURwQixVQUFVLEVBQUU7T0FDQSxRQUFRO21CQWhDckI7RUFnQzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQmlvQ2F0Y2hcbiAqIEBkZXNjcmlwdGlvblxuICogQmlvQ2F0Y2ggU0RLIENvcmRvdmEgc3VwcG9ydFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmlvQ2F0Y2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jpb2NhdGNoJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiaW9jYXRjaDogQmlvQ2F0Y2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJpb2NhdGNoLnN0YXJ0KCdjdXN0b21lci1zZXNzaW9uLTEnLCAnaHR0cDovL2V4YW1wbGUuY29tJywgJ3NvbWUtcHVibGljLWtleScpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmlvQ2F0Y2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iaW9jYXRjaCcsXG4gIHBsdWdpblJlZjogJ0Jpb0NhdGNoJyxcbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy9jYXJsb3Nfb3JlbGxhbmEvaW9uaWMtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJpb0NhdGNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBTdGFydCBhIHNlc3Npb25cbiAgICogQHBhcmFtIGN1c3RvbWVyU2Vzc2lvbklEIHtTdHJpbmd9IEN1c3RvbWVyIHNlc3Npb24gaWRcbiAgICogQHBhcmFtIHd1cFVybCB7U3RyaW5nfSBXVVAgc2VydmVyIFVSTFxuICAgKiBAcGFyYW0gcHVibGljS2V5IHtTdHJpbmd9IFB1YmxpYyBLZXlcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnQoY3VzdG9tZXJTZXNzaW9uSUQ6IHN0cmluZyB8IG51bGwsIHd1cFVybDogc3RyaW5nLCBwdWJsaWNLZXk6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGF1c2UgdGhlIHNlc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3VtZSB0aGUgc2Vzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHNlc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHNlc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXRTZXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHNlc3Npb24gY29udGV4dFxuICAgKiBAcGFyYW0gY29udGV4dE5hbWUge1N0cmluZ30gQ29udGV4dCBuYW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoYW5nZUNvbnRleHQoY29udGV4dE5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGN1c3RvbWVyIHNlc3Npb24gSURcbiAgICogQHBhcmFtIGN1c3RvbWVyU2Vzc2lvbklEIHtTdHJpbmd9XG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVwZGF0ZUN1c3RvbWVyU2Vzc2lvbklEKGN1c3RvbWVyU2Vzc2lvbklEOiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=