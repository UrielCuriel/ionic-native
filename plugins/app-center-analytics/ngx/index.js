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
var AppCenterAnalytics = /** @class */ (function (_super) {
    __extends(AppCenterAnalytics, _super);
    function AppCenterAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterAnalytics.prototype.trackEvent = function (eventName, properties) { return cordova(this, "trackEvent", {}, arguments); };
    AppCenterAnalytics.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterAnalytics.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterAnalytics.pluginName = "AppCenterAnalytics";
    AppCenterAnalytics.plugin = "cordova-plugin-appcenter-analytics";
    AppCenterAnalytics.pluginRef = "AppCenter.Analytics";
    AppCenterAnalytics.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics";
    AppCenterAnalytics.platforms = ["Android", "iOS"];
    AppCenterAnalytics = __decorate([
        Injectable()
    ], AppCenterAnalytics);
    return AppCenterAnalytics;
}(IonicNativePlugin));
export { AppCenterAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItYW5hbHl0aWNzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTRDaEMsc0NBQWlCOzs7O0lBVXZELHVDQUFVLGFBQUMsU0FBaUIsRUFBRSxVQUFxQjtJQVNuRCxzQ0FBUztJQVVULHVDQUFVLGFBQUMsWUFBcUI7Ozs7OztJQTdCckIsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQjs2QkE3Qy9CO0VBNkN3QyxpQkFBaUI7U0FBNUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nTWFwIHtcbiAgW3M6IHN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIEFuYWx5dGljc1xuICogQGRlc2NyaXB0aW9uXG4gKiBBcHAgQ2VudGVyIEFuYWx5dGljcyBoZWxwcyB5b3UgdW5kZXJzdGFuZCB1c2VyIGJlaGF2aW9yIGFuZCBjdXN0b21lciBlbmdhZ2VtZW50IHRvIGltcHJvdmUgeW91ciBhcHAuXG4gKiBUaGUgU0RLIGF1dG9tYXRpY2FsbHkgY2FwdHVyZXMgc2Vzc2lvbiBjb3VudCBhbmQgZGV2aWNlIHByb3BlcnRpZXMgbGlrZSBtb2RlbCwgT1MgdmVyc2lvbiwgZXRjLlxuICogWW91IGNhbiBkZWZpbmUgeW91ciBvd24gY3VzdG9tIGV2ZW50cyB0byBtZWFzdXJlIHRoaW5ncyB0aGF0IG1hdHRlciB0byB5b3UuXG4gKiBBbGwgdGhlIGluZm9ybWF0aW9uIGNhcHR1cmVkIGlzIGF2YWlsYWJsZSBpbiB0aGUgQXBwIENlbnRlciBwb3J0YWwgZm9yIHlvdSB0byBhbmFseXplIHRoZSBkYXRhLlxuICpcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9hbmFseXRpY3MvY29yZG92YVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwQ2VudGVyQW5hbHl0aWNzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtY2VudGVyLWFuYWx5dGljcy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENlbnRlckFuYWx5dGljczogQXBwQ2VudGVyQW5hbHl0aWNzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmFwcENlbnRlckFuYWx5dGljcy5zZXRFbmFibGVkKHRydWUpLnRoZW4oKCkgPT4ge1xuICogICAgdGhpcy5hcHBDZW50ZXJBbmFseXRpY3MudHJhY2tFdmVudCgnTXkgRXZlbnQnLCB7IFRFU1Q6ICdIRUxMT19XT1JMRCcgfSkudGhlbigoKSA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2coJ0N1c3RvbSBldmVudCB0cmFja2VkJyk7XG4gKiAgICB9KTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFN0cmluZ01hcFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcENlbnRlckFuYWx5dGljcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1hbmFseXRpY3MnLFxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXIuQW5hbHl0aWNzJyxcbiAgcmVwbzpcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWFuYWx5dGljcycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcENlbnRlckFuYWx5dGljcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRyYWNrcyBhbiBjdXN0b20gZXZlbnQuXG4gICAqIFlvdSBjYW4gc2VuZCB1cCB0byAyMDAgZGlzdGluY3QgZXZlbnQgbmFtZXMuIEFsc28sIHRoZXJlIGlzIGEgbWF4aW11bSBsaW1pdCBvZiAyNTYgY2hhcmFjdGVycyBwZXIgZXZlbnQgbmFtZVxuICAgKiBhbmQgNjQgY2hhcmFjdGVycyBwZXIgZXZlbnQgcHJvcGVydHkgbmFtZSBhbmQgZXZlbnQgcHJvcGVydHkgdmFsdWUuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nTWFwfSBwcm9wZXJ0aWVzIEV2ZW50IHByb3BlcnRpZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYWNrRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM6IFN0cmluZ01hcCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBBcHAgQ2VudGVyIEFuYWx5dGljcyBpcyBlbmFibGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIEFwcCBDZW50ZXIgQW5hbHl0aWNzIGF0IHJ1bnRpbWVcbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gc2hvdWxkRW5hYmxlIFNldCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW5hYmxlZChzaG91bGRFbmFibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==