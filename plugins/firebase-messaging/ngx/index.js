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
import { Observable } from 'rxjs';
var FirebaseMessaging = /** @class */ (function (_super) {
    __extends(FirebaseMessaging, _super);
    function FirebaseMessaging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseMessaging.prototype.onMessage = function () { return cordova(this, "onMessage", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.onBackgroundMessage = function () { return cordova(this, "onBackgroundMessage", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.requestPermission = function (options) { return cordova(this, "requestPermission", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.getToken = function (type) { return cordova(this, "getToken", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.onTokenRefresh = function () { return cordova(this, "onTokenRefresh", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.subscribe = function (topic) { return cordova(this, "subscribe", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.unsubscribe = function (topic) { return cordova(this, "unsubscribe", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.getBadge = function () { return cordova(this, "getBadge", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.setBadge = function (value) { return cordova(this, "setBadge", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.revokeToken = function () { return cordova(this, "revokeToken", { "sync": true }, arguments); };
    FirebaseMessaging.pluginName = "FirebaseMessaging";
    FirebaseMessaging.plugin = "cordova-plugin-firebase-messaging";
    FirebaseMessaging.pluginRef = "cordova.plugins.firebase.messaging";
    FirebaseMessaging.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-messaging";
    FirebaseMessaging.platforms = ["Android", "iOS"];
    FirebaseMessaging = __decorate([
        Injectable()
    ], FirebaseMessaging);
    return FirebaseMessaging;
}(IonicNativePlugin));
export { FirebaseMessaging };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLW1lc3NhZ2luZy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXFFSyxxQ0FBaUI7Ozs7SUFPdEQscUNBQVM7SUFVVCwrQ0FBbUI7SUFXbkIsNkNBQWlCLGFBQUMsT0FBaUM7SUFjbkQsb0NBQVEsYUFBQyxJQUFpQztJQVcxQywwQ0FBYztJQVdkLHFDQUFTLGFBQUMsS0FBYTtJQVd2Qix1Q0FBVyxhQUFDLEtBQWE7SUFVekIsb0NBQVE7SUFXUixvQ0FBUSxhQUFDLEtBQWE7SUFVdEIsdUNBQVc7Ozs7OztJQTFHQSxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO09BQ0EsaUJBQWlCOzRCQXZFOUI7RUF1RXVDLGlCQUFpQjtTQUEzQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmlyZWJhc2VHQ01NZXNzYWdlIHtcbiAgZ2NtOiB7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc291bmQ6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgdGFnOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBjbGlja0FjdGlvbjogc3RyaW5nO1xuICB9O1xuICAnZ29vZ2xlLm1lc3NhZ2VfaWQnOiBzdHJpbmc7XG4gICdnb29nbGUuc2VudF90aW1lJzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpcmViYXNlQVBTTWVzc2FnZSB7XG4gIGFwczoge1xuICAgIGFsZXJ0OiB7XG4gICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgYm9keTogc3RyaW5nO1xuICAgIH07XG4gICAgYmFkZ2U/OiBudW1iZXI7XG4gIH07XG4gICdnY20ubWVzc2FnZV9pZCc6ICdzdHJpbmcnO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIElGaXJlYmFzZU1lc3NhZ2UgPSBJRmlyZWJhc2VBUFNNZXNzYWdlIHwgSUZpcmViYXNlR0NNTWVzc2FnZTtcblxuZXhwb3J0IGludGVyZmFjZSBJUmVxdWVzdFBlcm1pc3Npb25PcHRpb25zIHtcbiAgZm9yY2VTaG93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgRmlyZWJhc2VNZXNzYWdpbmdUb2tlblR5cGUgPSAnYXBucy1idWZmZXInIHwgJ2FwbnMtc3RyaW5nJztcblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgRmlyZWJhc2UgTWVzc2FnaW5nXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciBGaXJlYmFzZSBNZXNzYWdpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlTWVzc2FnaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS1tZXNzYWdpbmcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZU1lc3NhZ2luZzogRmlyZWJhc2VNZXNzYWdpbmcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpcmViYXNlTWVzc2FnaW5nLmxvZ0V2ZW50KCdwYWdlX3ZpZXcnLCB7cGFnZTogXCJkYXNoYm9hcmRcIn0pXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSUZpcmViYXNlTWVzc2FnZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlTWVzc2FnaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtbWVzc2FnaW5nJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLm1lc3NhZ2luZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hlbWVyaXN1ay9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1tZXNzYWdpbmcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VNZXNzYWdpbmcgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIHB1c2ggbWVzc2FnZSByZWNlaXZlZCB3aGlsZSBhcHAgaXMgaW4gZm9yZWdyb3VuZC5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIG9uTWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIHB1c2ggbWVzc2FnZSByZWNlaXZlZCB3aGlsZSBhcHAgaXMgaW4gYmFja2dyb3VuZC5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIG9uQmFja2dyb3VuZE1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR3JhbnQgcGVybWlzc2lvbiB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucyAod2lsbCB0cmlnZ2VyIHByb21wdCBvbiBpT1MpLlxuICAgKlxuICAgKiBAcGFyYW0ge0lSZXF1ZXN0UGVybWlzc2lvbk9wdGlvbnN9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlcXVlc3RQZXJtaXNzaW9uKG9wdGlvbnM/OiB7IGZvcmNlU2hvdz86IGJvb2xlYW4gfSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgY3VycmVudCBGQ00gdG9rZW5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgYWxzbyBhY2NlcHRzIG9wdGlvbmFsIGFyZ3VtZW50IHR5cGUuXG4gICAqIEN1cnJlbnRseSBpT1MgaW1wbGVtZW50YXRpb24gc3VwcG9ydHMgdmFsdWVzIFwiYXBucy1idWZmZXJcIiBhbmQgXCJhcG5zLXN0cmluZ1wiIHRoYXQgZGVmaW5lcyBwcmVzZW50YXRpb24gb2YgcmVzb2x2ZWQgQVBOUyB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHtGaXJlYmFzZU1lc3NhZ2luZ1Rva2VuVHlwZX0gW3R5cGVdIGlPUyBvbmx5LiBEZWZpbmVzIHByZXNlbnRhdGlvbiBvZiByZXNvbHZlZCBBUE5TIHRva2VuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VG9rZW4odHlwZT86IEZpcmViYXNlTWVzc2FnaW5nVG9rZW5UeXBlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgZXZlcnkgdGltZSB3aGVuIEZDTSB0b2tlbiB1cGRhdGVkLlxuICAgKiBZb3Ugc2hvdWxkIHVzdWFsbHkgY2FsbCBnZXRUb2tlbiB0byBnZXQgYW4gdXBkYXRlZCB0b2tlbiBhbmQgc2VuZCBpdCB0byBzZXJ2ZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgb25Ub2tlblJlZnJlc2goKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0b3BpYyBpbiBiYWNrZ3JvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWNcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVsbD59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPG51bGw+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgZnJvbSB0b3BpYyBpbiBiYWNrZ3JvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWNcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVsbD59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdW5zdWJzY3JpYmUodG9waWM6IHN0cmluZyk6IFByb21pc2U8bnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBjdXJyZW50IGJhZGdlIG51bWJlciAoaWYgc3VwcG9ydGVkKS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCYWRnZSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGN1cnJlbnQgYmFkZ2UgbnVtYmVyIChpZiBzdXBwb3J0ZWQpLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVsbD59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QmFkZ2UodmFsdWU6IG51bWJlcik6IFByb21pc2U8bnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZva2UgdGhlIGN1cnJlbnQgRkNNIHRva2VuLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudWxsPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZXZva2VUb2tlbigpOiBQcm9taXNlPG51bGw+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==