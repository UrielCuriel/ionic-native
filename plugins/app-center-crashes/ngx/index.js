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
var AppCenterCrashes = /** @class */ (function (_super) {
    __extends(AppCenterCrashes, _super);
    function AppCenterCrashes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterCrashes.prototype.generateTestCrash = function () { return cordova(this, "generateTestCrash", {}, arguments); };
    AppCenterCrashes.prototype.hasCrashedInLastSession = function () { return cordova(this, "hasCrashedInLastSession", {}, arguments); };
    AppCenterCrashes.prototype.lastSessionCrashReport = function () { return cordova(this, "lastSessionCrashReport", {}, arguments); };
    AppCenterCrashes.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterCrashes.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterCrashes.pluginName = "AppCenterCrashes";
    AppCenterCrashes.plugin = "cordova-plugin-appcenter-crashes";
    AppCenterCrashes.pluginRef = "AppCenter.Crashes";
    AppCenterCrashes.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes";
    AppCenterCrashes.platforms = ["Android", "iOS"];
    AppCenterCrashes = __decorate([
        Injectable()
    ], AppCenterCrashes);
    return AppCenterCrashes;
}(IonicNativePlugin));
export { AppCenterCrashes };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItY3Jhc2hlcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRWxDLG9DQUFpQjs7OztJQU9yRCw0Q0FBaUI7SUFPakIsa0RBQXVCO0lBU3ZCLGlEQUFzQjtJQVN0QixvQ0FBUztJQVVULHFDQUFVLGFBQUMsWUFBcUI7Ozs7OztJQTFDckIsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQjsyQkFyRTdCO0VBcUVzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwQ2VudGVyQ3Jhc2hSZXBvcnQge1xuICBpZDogc3RyaW5nO1xuICBkZXZpY2U6IEFwcENlbnRlckNyYXNoUmVwb3J0RGV2aWNlO1xuICBhcHBTdGFydFRpbWU6IG51bWJlcjtcbiAgYXBwRXJyb3JUaW1lOiBudW1iZXI7XG4gIHNpZ25hbDogc3RyaW5nO1xuICBhcHBQcm9jZXNzSWRlbnRpZmllcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcENlbnRlckNyYXNoUmVwb3J0RGV2aWNlIHtcbiAgb2VtX25hbWU6IHN0cmluZztcbiAgb3NfbmFtZTogc3RyaW5nO1xuICBhcHBfdmVyc2lvbjogc3RyaW5nO1xuICB0aW1lX3pvbmVfb2Zmc2V0OiBudW1iZXI7XG4gIGNhcnJpZXJfbmFtZTogc3RyaW5nO1xuICBzY3JlZW5fc2l6ZTogc3RyaW5nO1xuICBsb2NhbGU6IHN0cmluZztcbiAgc2RrX3ZlcnNpb246IHN0cmluZztcbiAgY2Fycmllcl9jb3VudHJ5OiBzdHJpbmc7XG4gIG9zX2J1aWxkOiBzdHJpbmc7XG4gIGFwcF9uYW1lc3BhY2U6IHN0cmluZztcbiAgb3NfdmVyc2lvbjogc3RyaW5nO1xuICBzZGtfbmFtZTogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBhcHBfYnVpbGQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIENyYXNoZXNcbiAqIEBkZXNjcmlwdGlvblxuICogQXBwIENlbnRlciBBbmFseXRpY3MgaGVscHMgeW91IHVuZGVyc3RhbmQgdXNlciBiZWhhdmlvciBhbmQgY3VzdG9tZXIgZW5nYWdlbWVudCB0byBpbXByb3ZlIHlvdXIgYXBwLlxuICogVGhlIFNESyBhdXRvbWF0aWNhbGx5IGNhcHR1cmVzIHNlc3Npb24gY291bnQgYW5kIGRldmljZSBwcm9wZXJ0aWVzIGxpa2UgbW9kZWwsIE9TIHZlcnNpb24sIGV0Yy5cbiAqIFlvdSBjYW4gZGVmaW5lIHlvdXIgb3duIGN1c3RvbSBldmVudHMgdG8gbWVhc3VyZSB0aGluZ3MgdGhhdCBtYXR0ZXIgdG8geW91LlxuICogQWxsIHRoZSBpbmZvcm1hdGlvbiBjYXB0dXJlZCBpcyBhdmFpbGFibGUgaW4gdGhlIEFwcCBDZW50ZXIgcG9ydGFsIGZvciB5b3UgdG8gYW5hbHl6ZSB0aGUgZGF0YS5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvY3Jhc2hlcy9jb3Jkb3ZhXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBDZW50ZXJDcmFzaGVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtY2VudGVyLWNyYXNoZXMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBBcHBDZW50ZXJDcmFzaGVzOiBBcHBDZW50ZXJDcmFzaGVzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLkFwcENlbnRlckNyYXNoZXMuc2V0RW5hYmxlZCh0cnVlKS50aGVuKCgpID0+IHtcbiAqICAgIHRoaXMuQXBwQ2VudGVyQ3Jhc2hlcy5sYXN0U2Vzc2lvbkNyYXNoUmVwb3J0KCkudGhlbihyZXBvcnQgPT4ge1xuICogICAgICAgIGNvbnNvbGUubG9nKCdDcmFzaCByZXBvcnQnLCByZXBvcnQpO1xuICogICAgfSk7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBBcHBDZW50ZXJDcmFzaFJlcG9ydFxuICogQXBwQ2VudGVyQ3Jhc2hSZXBvcnREZXZpY2VcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBDZW50ZXJDcmFzaGVzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWNyYXNoZXMnLFxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXIuQ3Jhc2hlcycsXG4gIHJlcG86XG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1jcmFzaGVzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQ2VudGVyQ3Jhc2hlcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEFwcCBDZW50ZXIgQ3Jhc2hlcyBwcm92aWRlcyB5b3Ugd2l0aCBhbiBBUEkgdG8gZ2VuZXJhdGUgYSB0ZXN0IGNyYXNoIGZvciBlYXN5IHRlc3Rpbmcgb2YgdGhlIFNESy5cbiAgICogVGhpcyBBUEkgY2FuIG9ubHkgYmUgdXNlZCBpbiB0ZXN0L2JldGEgYXBwcyBhbmQgd29uJ3QgZG8gYW55dGhpbmcgaW4gcHJvZHVjdGlvbiBhcHBzLlxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlbmVyYXRlVGVzdENyYXNoKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQXQgYW55IHRpbWUgYWZ0ZXIgc3RhcnRpbmcgdGhlIFNESywgeW91IGNhbiBjaGVjayBpZiB0aGUgYXBwIGNyYXNoZWQgaW4gdGhlIHByZXZpb3VzIGxhdW5jaFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzQ3Jhc2hlZEluTGFzdFNlc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFpbHMgYWJvdXQgdGhlIGxhc3QgY3Jhc2hcbiAgICogQHJldHVybnMge1Byb21pc2U8QXBwQ2VudGVyQ3Jhc2hSZXBvcnQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsYXN0U2Vzc2lvbkNyYXNoUmVwb3J0KCk6IFByb21pc2U8QXBwQ2VudGVyQ3Jhc2hSZXBvcnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgQXBwIENlbnRlciBDcmFzaGVzIGlzIGVuYWJsZWRcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgQXBwIENlbnRlciBDcmFzaGVzIGF0IHJ1bnRpbWVcbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gc2hvdWxkRW5hYmxlIFNldCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW5hYmxlZChzaG91bGRFbmFibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==