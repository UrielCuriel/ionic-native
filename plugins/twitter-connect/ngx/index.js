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
var TwitterConnect = /** @class */ (function (_super) {
    __extends(TwitterConnect, _super);
    function TwitterConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwitterConnect.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    TwitterConnect.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    TwitterConnect.prototype.showUser = function () { return cordova(this, "showUser", {}, arguments); };
    TwitterConnect.pluginName = "TwitterConnect";
    TwitterConnect.plugin = "twitter-connect-plugin";
    TwitterConnect.pluginRef = "TwitterConnect";
    TwitterConnect.repo = "https://github.com/chroa/twitter-connect-plugin";
    TwitterConnect.install = "ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>";
    TwitterConnect.installVariables = ["FABRIC_KEY", "TWITTER_KEY", "TWITTER_SECRET"];
    TwitterConnect.platforms = ["Android", "iOS"];
    TwitterConnect = __decorate([
        Injectable()
    ], TwitterConnect);
    return TwitterConnect;
}(IonicNativePlugin));
export { TwitterConnect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3R3aXR0ZXItY29ubmVjdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4RHBDLGtDQUFpQjs7OztJQU1uRCw4QkFBSztJQVNMLCtCQUFNO0lBU04saUNBQVE7Ozs7Ozs7O0lBeEJHLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkEvRDNCO0VBK0RvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFR3aXR0ZXJDb25uZWN0UmVzcG9uc2Uge1xuICAvKipcbiAgICogVHdpdHRlciBVc2VybmFtZVxuICAgKi9cbiAgdXNlck5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFR3aXR0ZXIgVXNlciBJRFxuICAgKi9cbiAgdXNlcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUd2l0dGVyIE9BdXRoIFNlY3JldFxuICAgKi9cbiAgc2VjcmV0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUd2l0dGVyIE9BdXRoIFRva2VuXG4gICAqL1xuICB0b2tlbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIFR3aXR0ZXIgQ29ubmVjdFxuICogQGRlc2NyaXB0aW9uXG4gKiBQbHVnaW4gdG8gdXNlIFR3aXR0ZXIgU2luZ2xlIFNpZ24gT25cbiAqIFVzZXMgVHdpdHRlcidzIEZhYnJpYyBTREtcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFR3aXR0ZXJDb25uZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90d2l0dGVyLWNvbm5lY3Qvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHR3aXR0ZXI6IFR3aXR0ZXJDb25uZWN0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBmdW5jdGlvbiBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICpcbiAqICAgLy8gV2lsbCBjb25zb2xlIGxvZyBzb21ldGhpbmcgbGlrZTpcbiAqICAgLy8ge1xuICogICAvLyAgIHVzZXJOYW1lOiAnbXl1c2VyJyxcbiAqICAgLy8gICB1c2VySWQ6ICcxMjM1ODEwMicsXG4gKiAgIC8vICAgc2VjcmV0OiAndG9rZW5TZWNyZXQnXG4gKiAgIC8vICAgdG9rZW46ICdhY2Nlc3NUb2tlbkhlcmUnXG4gKiAgIC8vIH1cbiAqIH1cbiAqXG4gKiB0aGlzLnR3aXR0ZXIubG9naW4oKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogdGhpcy50d2l0dGVyLmxvZ291dCgpLnRoZW4ob25Mb2dvdXRTdWNjZXNzLCBvbkxvZ291dEVycm9yKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFR3aXR0ZXJDb25uZWN0UmVzcG9uc2VcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUd2l0dGVyQ29ubmVjdCcsXG4gIHBsdWdpbjogJ3R3aXR0ZXItY29ubmVjdC1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdUd2l0dGVyQ29ubmVjdCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hyb2EvdHdpdHRlci1jb25uZWN0LXBsdWdpbicsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL2Nocm9hL3R3aXR0ZXItY29ubmVjdC1wbHVnaW4gLS12YXJpYWJsZSBGQUJSSUNfS0VZPTxGYWJyaWMgQVBJIEtleT4gLS12YXJpYWJsZSBUV0lUVEVSX0tFWT08VHdpdHRlciBDb25zdW1lciBLZXk+IC0tdmFyaWFibGUgVFdJVFRFUl9TRUNSRVQ9PFR3aXR0ZXIgQ29uc3VtZXIgU2VjcmV0PicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnRkFCUklDX0tFWScsICdUV0lUVEVSX0tFWScsICdUV0lUVEVSX1NFQ1JFVCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUd2l0dGVyQ29ubmVjdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIExvZ3MgaW5cbiAgICogQHJldHVybnMge1Byb21pc2U8VHdpdHRlckNvbm5lY3RSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgbG9nZ2VkIGluIGFuZCByZWplY3RzIGlmIGZhaWxlZCB0byBsb2dpblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbigpOiBQcm9taXNlPFR3aXR0ZXJDb25uZWN0UmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9ncyBvdXRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiBsb2dnZWQgb3V0IGFuZCByZWplY3RzIGlmIGZhaWxlZCB0byBsb2dvdXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdXNlcidzIHByb2ZpbGUgaW5mb3JtYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB1c2VyIHByb2ZpbGUgaXMgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlZCBhbmQgcmVqZWN0cyBpZiByZXF1ZXN0IGZhaWxzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dVc2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=