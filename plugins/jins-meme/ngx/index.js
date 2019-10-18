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
import { IonicNativePlugin, checkAvailability, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var JinsMeme = /** @class */ (function (_super) {
    __extends(JinsMeme, _super);
    function JinsMeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JinsMeme.prototype.setAppClientID = function (appClientId, clientSecret) { return cordova(this, "setAppClientID", {}, arguments); };
    JinsMeme.prototype.startScan = function () { return cordova(this, "startScan", { "observable": true, "clearFunction": "stopScan", "clearWithArgs": true }, arguments); };
    JinsMeme.prototype.stopScan = function () { return cordova(this, "stopScan", {}, arguments); };
    JinsMeme.prototype.connect = function (target) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Observable(function (observer) {
                    var data = cordova.plugins.JinsMemePlugin.connect(target, observer.next.bind(observer), observer.complete.bind(observer), observer.error.bind(observer));
                    return data;
                });
            }
        })();
    };
    JinsMeme.prototype.setAutoConnect = function (flag) { return cordova(this, "setAutoConnect", {}, arguments); };
    JinsMeme.prototype.isConnected = function () { return cordova(this, "isConnected", {}, arguments); };
    JinsMeme.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    JinsMeme.prototype.startDataReport = function () { return cordova(this, "startDataReport", { "observable": true, "clearFunction": "stopDataReport", "clearWithArgs": true }, arguments); };
    JinsMeme.prototype.stopDataReport = function () { return cordova(this, "stopDataReport", {}, arguments); };
    JinsMeme.prototype.getSDKVersion = function () { return cordova(this, "getSDKVersion", {}, arguments); };
    JinsMeme.prototype.getConnectedByOthers = function () { return cordova(this, "getConnectedByOthers", {}, arguments); };
    JinsMeme.prototype.isCalibrated = function () { return cordova(this, "isCalibrated", {}, arguments); };
    JinsMeme.prototype.getConnectedDeviceType = function () { return cordova(this, "getConnectedDeviceType", {}, arguments); };
    JinsMeme.prototype.getConnectedDeviceSubType = function () { return cordova(this, "getConnectedDeviceSubType", {}, arguments); };
    JinsMeme.prototype.getFWVersion = function () { return cordova(this, "getFWVersion", {}, arguments); };
    JinsMeme.prototype.getHWVersion = function () { return cordova(this, "getHWVersion", {}, arguments); };
    JinsMeme.prototype.isDataReceiving = function () { return cordova(this, "isDataReceiving", {}, arguments); };
    JinsMeme.pluginName = "JINS MEME";
    JinsMeme.plugin = "cordova-plugin-jins-meme";
    JinsMeme.pluginRef = "JinsMemePlugin";
    JinsMeme.repo = "https://github.com/BlyncSync/cordova-plugin-jins-meme";
    JinsMeme.platforms = ["Android", "iOS"];
    JinsMeme = __decorate([
        Injectable()
    ], JinsMeme);
    return JinsMeme;
}(IonicNativePlugin));
export { JinsMeme };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ppbnMtbWVtZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxpREFLTixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBc0NKLDRCQUFpQjs7OztJQVc3QyxpQ0FBYyxhQUFDLFdBQW1CLEVBQUUsWUFBb0I7SUFZeEQsNEJBQVM7SUFRVCwyQkFBUTtJQVdSLDBCQUFPLGFBQUMsTUFBYzs7O21EQUFtQjtnQkFDdkMsT0FBTyxJQUFJLFVBQVUsQ0FBTSxVQUFDLFFBQWE7b0JBQ3ZDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FDakQsTUFBTSxFQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUM1QixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDaEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzlCLENBQUM7b0JBQ0YsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBUUQsaUNBQWMsYUFBQyxJQUFhO0lBUTVCLDhCQUFXO0lBUVgsNkJBQVU7SUFZVixrQ0FBZTtJQVFmLGlDQUFjO0lBU2QsZ0NBQWE7SUFRYix1Q0FBb0I7SUFRcEIsK0JBQVk7SUFRWix5Q0FBc0I7SUFRdEIsNENBQXlCO0lBUXpCLCtCQUFZO0lBUVosK0JBQVk7SUFRWixrQ0FBZTs7Ozs7O0lBaktKLFFBQVE7UUFEcEIsVUFBVSxFQUFFO09BQ0EsUUFBUTttQkE3Q3JCO0VBNkM4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIENvcmRvdmFDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IGNvcmRvdmE6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBKaW5zIE1lbWVcbiAqIEBkZXNjcmlwdGlvblxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIEpJTlMgTUVNRSBTREtcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEppbnNNZW1lIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9qaW5zLW1lbWUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGppbnNNZW1lOiBKaW5zTWVtZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5qaW5zTWVtZS5zZXRBcHBDbGllbnRJRChhcHBDbGllbnRJZDogc3RyaW5nLCBjbGllbnRTZWNyZXQ6IHN0cmluZykudGhlbihcbiAqICAgLy8gQmx1ZXRvb3RoIHNob3VsZCBiZSBlbmFibGVkIGFuZCB0aGUgSklOUyBNRU1FIHBvd2VyZWQgb24gKGJsaW5raW5nIGJsdWUgbGlnaHQpXG4gKiAgIHRoaXMuamluc01lbWUuc3RhcnRTY2FuKCkuc3Vic2NyaWJlKChtZW1lX2FkZHIpID0+IHtcbiAqICAgICB0aGlzLmppbnNNZW1lLmNvbm5lY3QobWVtZV9hZGRyKS5zdWJzY3JpYmUoKGNvbm5lY3RSZXN1bHQpID0+IHtcbiAqICAgICAgIHRoaXMubWVtZVNlcnZpY2Uuc3RhcnREYXRhUmVwb3J0KCkuc3Vic2NyaWJlKChkYXRhUmVwb3J0KSA9PiB7XG4gKiAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZXBvcnQpO1xuICogICAgICAgfSk7XG4gKiAgICAgfSk7XG4gKiAgIH0pO1xuICogLmNhdGNoKGNvbnNvbGUubG9nKCdqaW5zTWVtZS5zZXRBcHBDbGllbnRJRCBhdXRoZW50aWNhdGlvbiBlcnJvcicpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdKSU5TIE1FTUUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1qaW5zLW1lbWUnLFxuICBwbHVnaW5SZWY6ICdKaW5zTWVtZVBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQmx5bmNTeW5jL2NvcmRvdmEtcGx1Z2luLWppbnMtbWVtZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEppbnNNZW1lIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQXV0aGVudGljYXRpb24gYW5kIGF1dGhvcml6YXRpb24gb2YgQXBwIGFuZCBTREsuXG4gICAqIE11c3QgY2FsbCB0aGlzIG1ldGhvZCBmaXJzdC5cbiAgICogU2lnbiB1cCBmb3IgYW4gYXBwIElEIChhbmQgZ2V0IGFuIGFwcC9jbGllbnQgc2VjcmV0KSBhdCBkZXZlbG9wZXJzLmppbnMuY29tXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXRBcHBDbGllbnRJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50U2VjcmV0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEFwcENsaWVudElEKGFwcENsaWVudElkOiBzdHJpbmcsIGNsaWVudFNlY3JldDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFN0YXJ0cyBzY2FubmluZyBmb3IgSklOUyBNRU1FLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BTY2FuJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlXG4gIH0pXG4gIHN0YXJ0U2NhbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogU3RvcHMgc2Nhbm5pbmcgSklOUyBNRU1FLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wU2NhbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogRXN0YWJsaXNoZXMgY29ubmVjdGlvbiB0byBKSU5TIE1FTUUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgY29ubmVjdCh0YXJnZXQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPGFueT4oKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBjb3Jkb3ZhLnBsdWdpbnMuSmluc01lbWVQbHVnaW4uY29ubmVjdChcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZS5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcilcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYXV0byBjb25uZWN0aW9uIG1vZGUuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBdXRvQ29ubmVjdChmbGFnOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBhIGNvbm5lY3Rpb24gdG8gSklOUyBNRU1FIGhhcyBiZWVuIGVzdGFibGlzaGVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0Nvbm5lY3RlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogRGlzY29ubmVjdHMgZnJvbSBKSU5TIE1FTUUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFN0YXJ0cyByZWNlaXZpbmcgcmVhbHRpbWUgZGF0YS5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wRGF0YVJlcG9ydCcsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZVxuICB9KVxuICBzdGFydERhdGFSZXBvcnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFN0b3BzIHJlY2VpdmluZyBkYXRhLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wRGF0YVJlcG9ydCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBTREsgdmVyc2lvbi5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U0RLVmVyc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBKSU5TIE1FTUUgY29ubmVjdGVkIHdpdGggb3RoZXIgYXBwcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29ubmVjdGVkQnlPdGhlcnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgY2FsaWJyYXRpb24gc3RhdHVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQ2FsaWJyYXRlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBkZXZpY2UgdHlwZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29ubmVjdGVkRGV2aWNlVHlwZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBoYXJkd2FyZSB2ZXJzaW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRDb25uZWN0ZWREZXZpY2VTdWJUeXBlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIEZXIFZlcnNpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZXVmVyc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBIVyBWZXJzaW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRIV1ZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgcmVzcG9uc2UgYWJvdXQgd2hldGhlciBkYXRhIHdhcyByZWNlaXZlZCBvciBub3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRGF0YVJlY2VpdmluZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19