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
/**
 * For description on error codes, please visit https://github.com/nordnet/cordova-hot-code-push/wiki/Error-codes
 */
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NOTHING_TO_INSTALL"] = 1] = "NOTHING_TO_INSTALL";
    ErrorCode[ErrorCode["NOTHING_TO_UPDATE"] = 2] = "NOTHING_TO_UPDATE";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_APPLICATION_CONFIG"] = -1] = "FAILED_TO_DOWNLOAD_APPLICATION_CONFIG";
    ErrorCode[ErrorCode["APPLICATION_BUILD_VERSION_TOO_LOW"] = -2] = "APPLICATION_BUILD_VERSION_TOO_LOW";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_CONTENT_MANIFEST"] = -3] = "FAILED_TO_DOWNLOAD_CONTENT_MANIFEST";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_UPDATE_FILES"] = -4] = "FAILED_TO_DOWNLOAD_UPDATE_FILES";
    ErrorCode[ErrorCode["FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER"] = -5] = "FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER";
    ErrorCode[ErrorCode["UPDATE_IS_INVALID"] = -6] = "UPDATE_IS_INVALID";
    ErrorCode[ErrorCode["FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE"] = -7] = "FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE";
    ErrorCode[ErrorCode["FAILED_TO_COPY_NEW_CONTENT_FILES"] = -8] = "FAILED_TO_COPY_NEW_CONTENT_FILES";
    ErrorCode[ErrorCode["LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -9] = "LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND";
    ErrorCode[ErrorCode["LOCAL_VERSION_OF_MANIFEST_NOT_FOUND"] = -10] = "LOCAL_VERSION_OF_MANIFEST_NOT_FOUND";
    ErrorCode[ErrorCode["LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -11] = "LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND";
    ErrorCode[ErrorCode["LOADED_VERSION_OF_MANIFEST_NOT_FOUND"] = -12] = "LOADED_VERSION_OF_MANIFEST_NOT_FOUND";
    ErrorCode[ErrorCode["FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE"] = -13] = "FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE";
    ErrorCode[ErrorCode["CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS"] = -14] = "CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS";
    ErrorCode[ErrorCode["CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS"] = -15] = "CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS";
    ErrorCode[ErrorCode["INSTALLATION_ALREADY_IN_PROGRESS"] = -16] = "INSTALLATION_ALREADY_IN_PROGRESS";
    ErrorCode[ErrorCode["DOWNLOAD_ALREADY_IN_PROGRESS"] = -17] = "DOWNLOAD_ALREADY_IN_PROGRESS";
    ErrorCode[ErrorCode["ASSETS_FOLDER_IS_NOT_YET_INSTALLED"] = -18] = "ASSETS_FOLDER_IS_NOT_YET_INSTALLED";
    ErrorCode[ErrorCode["NEW_APPLICATION_CONFIG_IS_INVALID"] = -19] = "NEW_APPLICATION_CONFIG_IS_INVALID";
})(ErrorCode || (ErrorCode = {}));
var HotCodePush = /** @class */ (function (_super) {
    __extends(HotCodePush, _super);
    function HotCodePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HotCodePush.prototype.requestApplicationUpdate = function (message) { return cordova(this, "requestApplicationUpdate", {}, arguments); };
    HotCodePush.prototype.fetchUpdate = function (options) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    HotCodePush.getPlugin().fetchUpdate(function (error, data) {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(data);
                        }
                    }, options);
                });
            }
        })();
    };
    HotCodePush.prototype.installUpdate = function () { return cordova(this, "installUpdate", { "callbackStyle": "node" }, arguments); };
    HotCodePush.prototype.isUpdateAvailableForInstallation = function () { return cordova(this, "isUpdateAvailableForInstallation", { "callbackStyle": "node" }, arguments); };
    HotCodePush.prototype.getVersionInfo = function () { return cordova(this, "getVersionInfo", { "callbackStyle": "node" }, arguments); };
    HotCodePush.prototype.onUpdateIsReadyToInstall = function () { return cordova(this, "onUpdateIsReadyToInstall", { "eventObservable": true, "event": "chcp_updateIsReadyToInstall" }, arguments); };
    HotCodePush.prototype.onUpdateLoadFailed = function () { return cordova(this, "onUpdateLoadFailed", { "eventObservable": true, "event": "chcp_updateLoadFailed" }, arguments); };
    HotCodePush.prototype.onNothingToUpdate = function () { return cordova(this, "onNothingToUpdate", { "eventObservable": true, "event": "chcp_nothingToUpdate" }, arguments); };
    HotCodePush.prototype.onBeforeInstall = function () { return cordova(this, "onBeforeInstall", { "eventObservable": true, "event": "chcp_beforeInstall" }, arguments); };
    HotCodePush.prototype.onUpdateInstalled = function () { return cordova(this, "onUpdateInstalled", { "eventObservable": true, "event": "chcp_updateInstalled" }, arguments); };
    HotCodePush.prototype.onUpdateInstallFailed = function () { return cordova(this, "onUpdateInstallFailed", { "eventObservable": true, "event": "chcp_updateInstallFailed" }, arguments); };
    HotCodePush.prototype.onNothingToInstall = function () { return cordova(this, "onNothingToInstall", { "eventObservable": true, "event": "chcp_nothingToInstall" }, arguments); };
    HotCodePush.prototype.onBeforeAssetsInstalledOnExternalStorage = function () { return cordova(this, "onBeforeAssetsInstalledOnExternalStorage", { "eventObservable": true, "event": "chcp_beforeAssetsInstalledOnExternalStorage" }, arguments); };
    HotCodePush.prototype.onAssetsInstalledOnExternalStorage = function () { return cordova(this, "onAssetsInstalledOnExternalStorage", { "eventObservable": true, "event": "chcp_assetsInstalledOnExternalStorage" }, arguments); };
    HotCodePush.prototype.onAssetsInstallationError = function () { return cordova(this, "onAssetsInstallationError", { "eventObservable": true, "event": "chcp_assetsInstallationError" }, arguments); };
    HotCodePush.pluginName = "HotCodePush";
    HotCodePush.plugin = "cordova-hot-code-push";
    HotCodePush.pluginRef = "chcp";
    HotCodePush.repo = "https://github.com/nordnet/cordova-hot-code-push";
    HotCodePush.platforms = ["Android", "iOS"];
    HotCodePush = __decorate([
        Injectable()
    ], HotCodePush);
    return HotCodePush;
}(IonicNativePlugin));
export { HotCodePush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hvdC1jb2RlLXB1c2gvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8saURBQW9ELE1BQU0sb0JBQW9CLENBQUM7QUFDdEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWlEbEM7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxTQXNCWDtBQXRCRCxXQUFZLFNBQVM7SUFDbkIscUVBQXNCLENBQUE7SUFDdEIsbUVBQXFCLENBQUE7SUFDckIsNEdBQTBDLENBQUE7SUFDMUMsb0dBQXNDLENBQUE7SUFDdEMsd0dBQXdDLENBQUE7SUFDeEMsZ0dBQW9DLENBQUE7SUFDcEMsc0lBQXVELENBQUE7SUFDdkQsb0VBQXNCLENBQUE7SUFDdEIsc0hBQStDLENBQUE7SUFDL0Msa0dBQXFDLENBQUE7SUFDckMsNEhBQWtELENBQUE7SUFDbEQseUdBQXlDLENBQUE7SUFDekMsK0hBQW9ELENBQUE7SUFDcEQsMkdBQTBDLENBQUE7SUFDMUMsMkhBQWtELENBQUE7SUFDbEQsaUhBQTZDLENBQUE7SUFDN0MseUlBQXlELENBQUE7SUFDekQsbUdBQXNDLENBQUE7SUFDdEMsMkZBQWtDLENBQUE7SUFDbEMsdUdBQXdDLENBQUE7SUFDeEMscUdBQXVDLENBQUE7QUFDekMsQ0FBQyxFQXRCVyxTQUFTLEtBQVQsU0FBUyxRQXNCcEI7O0lBd0NnQywrQkFBaUI7Ozs7SUFPaEQsOENBQXdCLGFBQUMsT0FBZTtJQVV4QyxpQ0FBVyxhQUFDLE9BQW1DOzs7bURBQWdCO2dCQUM3RCxPQUFPLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQ2pDLFVBQUMsS0FBdUIsRUFBRSxJQUFTO3dCQUNqQyxJQUFJLEtBQUssRUFBRTs0QkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2Y7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmO29CQUNILENBQUMsRUFDRCxPQUFPLENBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxtQ0FBYTtJQVdiLHNEQUFnQztJQVdoQyxvQ0FBYztJQVlkLDhDQUF3QjtJQVl4Qix3Q0FBa0I7SUFZbEIsdUNBQWlCO0lBWWpCLHFDQUFlO0lBWWYsdUNBQWlCO0lBWWpCLDJDQUFxQjtJQVlyQix3Q0FBa0I7SUFZbEIsOERBQXdDO0lBWXhDLHdEQUFrQztJQVlsQywrQ0FBeUI7Ozs7OztJQXJMZCxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBcEh4QjtFQW9IaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhQ2hlY2ssIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciBjaGNwOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hWZXJzaW9uIHtcbiAgLyoqXG4gICAqIEFwcGxpY2F0aW9uJ3MgdmVyc2lvbiBuYW1lLiBUaGlzIHZlcnNpb24gaXMgdmlzaWJsZSB0byB0aGUgdXNlciBvbiB0aGUgc3RvcmVzLlxuICAgKi9cbiAgYXBwVmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogQXBwbGljYXRpb24ncyBidWlsZCB2ZXJzaW9uIG51bWJlci5cbiAgICovXG4gIGJ1aWxkVmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogVmVyc2lvbiBvZiB0aGUgd2ViIGNvbnRlbnQsIHRoYXQgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyLiBCYXNpY2FsbHksIHZhbHVlIG9mIHRoZSByZWxlYXNlIHByb3BlcnR5IGZyb20gY2hjcC5qc29uIGZpbGUgaW4geW91ciBsb2NhbCB3d3cgZm9sZGVyLlxuICAgKi9cbiAgY3VycmVudFdlYlZlcnNpb246IHN0cmluZztcbiAgLyoqXG4gICAqIFByZXZpb3VzIHdlYiBjb250ZW50IHZlcnNpb24uIFRoaXMgaXMgYSB2ZXJzaW9uIG9mIG91ciBiYWNrdXAuIENhbiBiZSBlbXB0eSwgaWYgdGhlcmUgd2VyZSBubyB1cGRhdGVzIGluc3RhbGxlZC5cbiAgICovXG4gIHByZXZpb3VzV2ViVmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogVmVyc2lvbiBudW1iZXIgb2YgdGhlIHdlYiBjb250ZW50LCB0aGF0IHdhcyBsb2FkZWQgYnkgdGhlIHBsdWdpbiBhbmQgcmVhZHkgdG8gYmUgaW5zdGFsbGVkLiBCYXNpY2FsbHksIHZhbHVlIG9mIHRoZSByZWxlYXNlIHByb3BlcnR5IGZyb20gY2hjcC5qc29uIGZpbGUgb24geW91ciBzZXJ2ZXIuIENhbiBiZSBlbXB0eSwgaWYgbm8gdXBkYXRlIGlzIHdhaXRpbmcgZm9yIGluc3RhbGxhdGlvbi5cbiAgICovXG4gIHJlYWR5VG9JbnN0YWxsV2ViVmVyc2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvdENvZGVQdXNoVXBkYXRlIHtcbiAgLyoqXG4gICAqIEN1cnJlbnQgdmVyc2lvbiBpbnN0YWxsZWQuXG4gICAqL1xuICBjdXJyZW50VmVyc2lvbjogc3RyaW5nO1xuICAvKipcbiAgICogQXZhaWxhYmxlIHZlcnNpb24gdG8gcmVwbGFjZSB0aGUgY3VycmVudCBvbmUuXG4gICAqL1xuICByZWFkeVRvSW5zdGFsbFZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIb3RDb2RlUHVzaFJlcXVlc3RPcHRpb25zIHtcbiAgLyoqXG4gICAqIFVybCBvZiB0aGUgY2hjcC5qc29uIGNvbmZpZyBvbiB0aGUgc2VydmVyLiBQbHVnaW4gd2lsbCB1c2UgdGhpcyBvbmUgaW5zdGVhZCBvZiA8Y29uZmlnLWZpbGUgdXJsPVwiXCI+IGZyb20gdGhlIGNvbmZpZy54bWwuXG4gICAqL1xuICAnY29uZmlnLWZpbGUnPzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBIVFRQIGhlYWRlcnMsIHRoYXQgd2lsbCBiZSBhZGRlZCB0byBhbGwgcmVxdWVzdHMgaW4gdXBkYXRlIGRvd25sb2FkIHByb2Nlc3MsIGluY2x1ZGluZyBsb2FkaW5nIGNvbmZpZ3MgYW5kIG5ldy9jaGFuZ2VkIGZpbGVzLlxuICAgKi9cbiAgJ3JlcXVlc3QtaGVhZGVycyc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG4vKipcbiAqIEZvciBkZXNjcmlwdGlvbiBvbiBlcnJvciBjb2RlcywgcGxlYXNlIHZpc2l0IGh0dHBzOi8vZ2l0aHViLmNvbS9ub3JkbmV0L2NvcmRvdmEtaG90LWNvZGUtcHVzaC93aWtpL0Vycm9yLWNvZGVzXG4gKi9cbmV4cG9ydCBlbnVtIEVycm9yQ29kZSB7XG4gIE5PVEhJTkdfVE9fSU5TVEFMTCA9IDEsXG4gIE5PVEhJTkdfVE9fVVBEQVRFID0gMixcbiAgRkFJTEVEX1RPX0RPV05MT0FEX0FQUExJQ0FUSU9OX0NPTkZJRyA9IC0xLFxuICBBUFBMSUNBVElPTl9CVUlMRF9WRVJTSU9OX1RPT19MT1cgPSAtMixcbiAgRkFJTEVEX1RPX0RPV05MT0FEX0NPTlRFTlRfTUFOSUZFU1QgPSAtMyxcbiAgRkFJTEVEX1RPX0RPV05MT0FEX1VQREFURV9GSUxFUyA9IC00LFxuICBGQUlMRURfVE9fTU9WRV9MT0FERURfRklMRVNfVE9fSU5TVEFMTEFUSU9OX0ZPTERFUiA9IC01LFxuICBVUERBVEVfSVNfSU5WQUxJRCA9IC02LFxuICBGQUlMRURfVE9fQ09QWV9GSUxFU19GUk9NX1BSRVZJT1VTX1JFTEVBU0UgPSAtNyxcbiAgRkFJTEVEX1RPX0NPUFlfTkVXX0NPTlRFTlRfRklMRVMgPSAtOCxcbiAgTE9DQUxfVkVSU0lPTl9PRl9BUFBMSUNBVElPTl9DT05GSUdfTk9UX0ZPVU5EID0gLTksXG4gIExPQ0FMX1ZFUlNJT05fT0ZfTUFOSUZFU1RfTk9UX0ZPVU5EID0gLTEwLFxuICBMT0FERURfVkVSU0lPTl9PRl9BUFBMSUNBVElPTl9DT05GSUdfTk9UX0ZPVU5EID0gLTExLFxuICBMT0FERURfVkVSU0lPTl9PRl9NQU5JRkVTVF9OT1RfRk9VTkQgPSAtMTIsXG4gIEZBSUxFRF9UT19JTlNUQUxMX0FTU0VUU19PTl9FWFRFUk5BTF9TVE9SQUdFID0gLTEzLFxuICBDQU5UX0lOU1RBTExfV0hJTEVfRE9XTkxPQURfSU5fUFJPR1JFU1MgPSAtMTQsXG4gIENBTlRfRE9XTkxPQURfVVBEQVRFX1dISUxFX0lOU1RBTExBVElPTl9JTl9QUk9HUkVTUyA9IC0xNSxcbiAgSU5TVEFMTEFUSU9OX0FMUkVBRFlfSU5fUFJPR1JFU1MgPSAtMTYsXG4gIERPV05MT0FEX0FMUkVBRFlfSU5fUFJPR1JFU1MgPSAtMTcsXG4gIEFTU0VUU19GT0xERVJfSVNfTk9UX1lFVF9JTlNUQUxMRUQgPSAtMTgsXG4gIE5FV19BUFBMSUNBVElPTl9DT05GSUdfSVNfSU5WQUxJRCA9IC0xOVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvdENvZGVQdXNoRXJyb3Ige1xuICBjb2RlOiBFcnJvckNvZGU7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG90Q29kZVB1c2hFdmVudERhdGEge1xuICBkZXRhaWxzPzoge1xuICAgIGVycm9yPzogSG90Q29kZVB1c2hFcnJvcjtcbiAgfTtcbn1cblxuLyoqXG4gKiBAbmFtZSBIb3QgQ29kZSBQdXNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdENvZGVQdXNoIHBsdWdpbiBmb3IgQ29yZG92YSB0aGF0IHN1cHBvcnRzIGlPUyBhbmQgQW5kcm9pZC4gVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBrZWVwIHlvdXIgaHRtbCwgY3NzIGFuZCBqcyBmaWxlcyBzeW5jZWQgd2l0aCB5b3VyIHNlcnZlci5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBkZXRhaWxlZCB3aWtpIGh0dHBzOi8vZ2l0aHViLmNvbS9ub3JkbmV0L2NvcmRvdmEtaG90LWNvZGUtcHVzaC93aWtpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIb3RDb2RlUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaG90LWNvZGUtcHVzaC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaG90Q29kZVB1c2g6IEhvdENvZGVQdXNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBob3RDb2RlUHVzaC5mZXRjaFVwZGF0ZShvcHRpb25zKS50aGVuKGRhdGEgPT4geyBjb25zb2xlLmxvZygnVXBkYXRlIGF2YWlsYWJsZScpOyB9KTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdIb3RDb2RlUHVzaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtaG90LWNvZGUtcHVzaCcsXG4gIHBsdWdpblJlZjogJ2NoY3AnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25vcmRuZXQvY29yZG92YS1ob3QtY29kZS1wdXNoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG90Q29kZVB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93IGRpYWxvZyB3aXRoIHRoZSByZXF1ZXN0IHRvIHVwZGF0ZSBhcHBsaWNhdGlvbiB0aHJvdWdoIHRoZSBTdG9yZSAoQXBwIFN0b3JlIG9yIEdvb2dsZSBQbGF5KS5cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZSB0byBzaG93IGluIHRoZSBkaWFsb2dcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgd2hlbiB0aGUgdXNlciBpcyByZWRpcmVjdGVkIHRvIHRoZSBzdG9yZSwgcmVqZWN0cyBpZiB0aGUgdXNlciBkZWNsaW5lcy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdEFwcGxpY2F0aW9uVXBkYXRlKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyLXNpZGUuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtIb3RDb2RlUHVzaFJlcXVlc3RPcHRpb25zfSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gdGhlIHJlcXVlc3QuIElmIG5vdCBzZXQgLSBwcmVmZXJlbmNlcyBmcm9tIGNvbmZpZy54bWwgYXJlIHVzZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIHRoZXJlIGlzIGFuIHVwZGF0ZSBhdmFpbGFibGUsIHJlamVjdHMgb3RoZXJ3aXNlLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGZldGNoVXBkYXRlKG9wdGlvbnM/OiBIb3RDb2RlUHVzaFJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIb3RDb2RlUHVzaC5nZXRQbHVnaW4oKS5mZXRjaFVwZGF0ZShcbiAgICAgICAgKGVycm9yOiBIb3RDb2RlUHVzaEVycm9yLCBkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3RhbGwgdXBkYXRlIGlmIHRoZXJlIGlzIGFueXRoaW5nIHRvIGluc3RhbGwuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHdoZW4gdGhlIHVwZGF0ZSBpcyBpbnN0YWxsZWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnXG4gIH0pXG4gIGluc3RhbGxVcGRhdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdXBkYXRlIHdhcyBsb2FkZWQgYW5kIHJlYWR5IHRvIGJlIGluc3RhbGxlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8SG90Q29kZVB1c2hVcGRhdGU+fSBSZXNvbHZlcyBpZiBhbiB1cGRhdGUgaXMgcmVhZHksIHJlamVjdHMgaWYgdGhlcmUgaXMgbm8gdXBkYXRlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJ1xuICB9KVxuICBpc1VwZGF0ZUF2YWlsYWJsZUZvckluc3RhbGxhdGlvbigpOiBQcm9taXNlPEhvdENvZGVQdXNoVXBkYXRlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFwcCdzIHZlcnNpb25zLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIb3RDb2RlUHVzaFZlcnNpb24+fSBSZXNvbHZlcyB3aXRoIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdmVyc2lvbnMuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnXG4gIH0pXG4gIGdldFZlcnNpb25JbmZvKCk6IFByb21pc2U8SG90Q29kZVB1c2hWZXJzaW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBuZXcgcmVsZWFzZSB3YXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCBhbmQgcmVhZHkgdG8gYmUgaW5zdGFsbGVkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnY2hjcF91cGRhdGVJc1JlYWR5VG9JbnN0YWxsJ1xuICB9KVxuICBvblVwZGF0ZUlzUmVhZHlUb0luc3RhbGwoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gcGx1Z2luIGNvdWxkbid0IGxvYWQgdXBkYXRlIGZyb20gdGhlIHNlcnZlci4gRXJyb3IgZGV0YWlscyBhcmUgYXR0YWNoZWQgdG8gdGhlIGV2ZW50LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnY2hjcF91cGRhdGVMb2FkRmFpbGVkJ1xuICB9KVxuICBvblVwZGF0ZUxvYWRGYWlsZWQoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gd2Ugc3VjY2Vzc2Z1bGx5IGxvYWRlZCBhcHBsaWNhdGlvbiBjb25maWcgZnJvbSB0aGUgc2VydmVyLCBidXQgdGhlcmUgaXMgbm90aGluZyBuZXcgaXMgYXZhaWxhYmxlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnY2hjcF9ub3RoaW5nVG9VcGRhdGUnXG4gIH0pXG4gIG9uTm90aGluZ1RvVXBkYXRlKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIGFuIHVwZGF0ZSBpcyBhYm91dCB0byBiZSBpbnN0YWxsZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdjaGNwX2JlZm9yZUluc3RhbGwnXG4gIH0pXG4gIG9uQmVmb3JlSW5zdGFsbCgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiB1cGRhdGUgd2FzIHN1Y2Nlc3NmdWxseSBpbnN0YWxsZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdjaGNwX3VwZGF0ZUluc3RhbGxlZCdcbiAgfSlcbiAgb25VcGRhdGVJbnN0YWxsZWQoKTogT2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBzZW50IHdoZW4gdXBkYXRlIGluc3RhbGxhdGlvbiBmYWlsZWQuIEVycm9yIGRldGFpbHMgYXJlIGF0dGFjaGVkIHRvIHRoZSBldmVudC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2NoY3BfdXBkYXRlSW5zdGFsbEZhaWxlZCdcbiAgfSlcbiAgb25VcGRhdGVJbnN0YWxsRmFpbGVkKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gaW5zdGFsbC4gUHJvYmFibHksIG5vdGhpbmcgd2FzIGxvYWRlZCBiZWZvcmUgdGhhdC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2NoY3Bfbm90aGluZ1RvSW5zdGFsbCdcbiAgfSlcbiAgb25Ob3RoaW5nVG9JbnN0YWxsKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHBsdWdpbiBpcyBhYm91dCB0byBzdGFydCBpbnN0YWxsaW5nIGJ1bmRsZSBjb250ZW50IG9uIHRoZSBleHRlcm5hbCBzdG9yYWdlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxIb3RDb2RlUHVzaEV2ZW50RGF0YT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnY2hjcF9iZWZvcmVBc3NldHNJbnN0YWxsZWRPbkV4dGVybmFsU3RvcmFnZSdcbiAgfSlcbiAgb25CZWZvcmVBc3NldHNJbnN0YWxsZWRPbkV4dGVybmFsU3RvcmFnZSgpOiBPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHNlbnQgd2hlbiBwbHVnaW4gc3VjY2Vzc2Z1bGx5IGNvcGllZCB3ZWIgcHJvamVjdCBmaWxlcyBmcm9tIGJ1bmRsZSBvbiB0aGUgZXh0ZXJuYWwgc3RvcmFnZS4gTW9zdCBsaWtlbHkgeW91IHdpbGwgdXNlIGl0IGZvciBkZWJ1ZyBwdXJwb3NlIG9ubHkuIE9yIGV2ZW4gbmV2ZXIuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdjaGNwX2Fzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlJ1xuICB9KVxuICBvbkFzc2V0c0luc3RhbGxlZE9uRXh0ZXJuYWxTdG9yYWdlKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgc2VudCB3aGVuIHBsdWdpbiBjb3VsZG4ndCBjb3B5IGZpbGVzIGZyb20gYnVuZGxlIG9uIHRoZSBleHRlcm5hbCBzdG9yYWdlLiBJZiB0aGlzIGhhcHBlbnMgLSBwbHVnaW4gd29uJ3Qgd29yay4gQ2FuIG9jY3VyIHdoZW4gdGhlcmUgaXMgbm90IGVub3VnaCBmcmVlIHNwYWNlIG9uIHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhvdENvZGVQdXNoRXZlbnREYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdjaGNwX2Fzc2V0c0luc3RhbGxhdGlvbkVycm9yJ1xuICB9KVxuICBvbkFzc2V0c0luc3RhbGxhdGlvbkVycm9yKCk6IE9ic2VydmFibGU8SG90Q29kZVB1c2hFdmVudERhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==