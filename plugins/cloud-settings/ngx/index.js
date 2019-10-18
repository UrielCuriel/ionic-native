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
var CloudSettings = /** @class */ (function (_super) {
    __extends(CloudSettings, _super);
    function CloudSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettings.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    CloudSettings.prototype.save = function (settings, overwrite) { return cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettings.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    CloudSettings.prototype.onRestore = function (handler) { return cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettings.prototype.enableDebug = function () { return cordova(this, "enableDebug", {}, arguments); };
    CloudSettings.pluginName = "CloudSettings";
    CloudSettings.plugin = "cordova-plugin-cloud-settings";
    CloudSettings.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettings.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettings.install = "ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettings.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettings.platforms = ["Android", "iOS"];
    CloudSettings = __decorate([
        Injectable()
    ], CloudSettings);
    return CloudSettings;
}(IonicNativePlugin));
export { CloudSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nsb3VkLXNldHRpbmdzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdDckMsaUNBQWlCOzs7O0lBTWxELDhCQUFNO0lBZU4sNEJBQUksYUFBQyxRQUFhLEVBQUUsU0FBbUI7SUFTdkMsNEJBQUk7SUFTSixpQ0FBUyxhQUFDLE9BQWlCO0lBTzNCLG1DQUFXOzs7Ozs7OztJQTlDQSxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBekMxQjtFQXlDbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBDbG91ZCBTZXR0aW5nc1xuICogQGRlc2NyaXB0aW9uXG4gKiBTdG9yZXMgYXBwIHNldHRpbmdzIGluIGNsb3VkIHN0b3JhZ2Ugc28gaWYgdGhlIHVzZXIgcmUtaW5zdGFsbHMgdGhlIGFwcCBvciBpbnN0YWxscyBpdCBvbiBhIGRpZmZlcmVudCBkZXZpY2UsIHRoZSBzZXR0aW5ncyB3aWxsIGJlIHJlc3RvcmVkIGFuZCBhdmFpbGFibGUgaW4gdGhlIG5ldyBpbnN0YWxsYXRpb24uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDbG91ZFNldHRpbmdzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jbG91ZC1zZXR0aW5ncy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsb3VkU2V0dGluZ3M6IENsb3VkU2V0dGluZ3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuY2xvdWRTZXR0aW5ncy5leGlzdHMoKVxuICogICAudGhlbigoZXhpc3RzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHNldHRpbmdzIGV4aXN0OiBcIiArIGV4aXN0cykgKVxuICpcbiAqIHRoaXMuY2xvdWRTZXR0aW5ncy5sb2FkKClcbiAqICAgLnRoZW4oKHNldHRpbmdzOiBhbnkpID0+IHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncylcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5jbG91ZFNldHRpbmdzLnNhdmUodGhpcy5zZXR0aW5ncylcbiAqICAgLnRoZW4oKHNhdmVkU2V0dGluZ3M6IGFueSkgPT4gY29uc29sZS5sb2coXCJTYXZlZCBzZXR0aW5nczogXCIgKyBKU09OLnN0cmluZ2lmeShzYXZlZFNldHRpbmdzKSkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nsb3VkU2V0dGluZ3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2luLmNsb3Vkc2V0dGluZ3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncycsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncyAtLXZhcmlhYmxlIEFORFJPSURfQkFDS1VQX1NFUlZJQ0VfS0VZPW15YXBpa2V5JyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX0JBQ0tVUF9TRVJWSUNFX0tFWSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG91ZFNldHRpbmdzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIGFueSBzdG9yZWQgY2xvdWQgc2V0dGluZ3MgY3VycmVudGx5IGV4aXN0IGZvciB0aGUgY3VycmVudCB1c2VyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBXaWxsIGJlIHBhc3NlZCBhIGJvb2xlYW4gZmxhZyB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciBhbiBzdG9yZSBzZXR0aW5ncyBleGlzdCBmb3IgdGhlIHVzZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGV4aXN0cygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHNldHRpbmdzIHRvIGNsb3VkIGJhY2t1cC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzIC0gYSBKU09OIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgdGhlIHVzZXIgc2V0dGluZ3MgdG8gc2F2ZSB0byBjbG91ZCBiYWNrdXAuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW292ZXJ3cml0ZV0gLSAob3B0aW9uYWwpIGlmIHRydWUsIGV4aXN0aW5nIHNldHRpbmdzIHdpbGwgYmUgcmVwbGFjZWQgcmF0aGVyIHRoYW4gdXBkYXRlZC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqIElmIGZhbHNlLCBleGlzdGluZyBzZXR0aW5ncyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBuZXcgc2V0dGluZ3MgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gV2lsbCBiZSBwYXNzZWQgYSBzaW5nbGUgb2JqZWN0IGFyZ3VtZW50IHdoaWNoIGNvbnRhaW5zIHRoZSBzYXZlZCBzZXR0aW5ncyBhcyBhIEpTT04gb2JqZWN0LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHNhdmUoc2V0dGluZ3M6IGFueSwgb3ZlcndyaXRlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBjdXJyZW50IHNldHRpbmdzLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudCB3aGljaCBjb250YWlucyB0aGUgc2F2ZWQgc2V0dGluZ3MgYXMgYSBKU09OIG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpZi93aGVuIHNldHRpbmdzIG9uIHRoZSBkZXZpY2UgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgY2xvdWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiBkZXZpY2Ugc2V0dGluZ3MgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgY2xvdWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb25SZXN0b3JlKGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBPdXRwdXRzIHZlcmJvc2UgbG9nIG1lc3NhZ2VzIGZyb20gdGhlIG5hdGl2ZSBwbHVnaW4gY29tcG9uZW50cyB0byB0aGUgSlMgY29uc29sZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5hYmxlRGVidWcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=