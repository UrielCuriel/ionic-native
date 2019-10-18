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
var SmartlookSetupConfig = /** @class */ (function () {
    function SmartlookSetupConfig(smartlookAPIKey, fps) {
        this.smartlookAPIKey = smartlookAPIKey;
        this.fps = fps;
    }
    return SmartlookSetupConfig;
}());
export { SmartlookSetupConfig };
var SmartlookUserIdentifier = /** @class */ (function () {
    function SmartlookUserIdentifier(identifier, sessionProperties) {
        this.identifier = identifier;
        this.sessionProperties = sessionProperties;
    }
    return SmartlookUserIdentifier;
}());
export { SmartlookUserIdentifier };
var SmartlookCustomEvent = /** @class */ (function () {
    function SmartlookCustomEvent(name, eventProperties) {
        this.name = name;
        this.eventProperties = eventProperties;
    }
    return SmartlookCustomEvent;
}());
export { SmartlookCustomEvent };
var SmartlookGlobalEventProperties = /** @class */ (function () {
    function SmartlookGlobalEventProperties(globalEventProperties, immutable) {
        this.globalEventProperties = globalEventProperties;
        this.immutable = immutable;
    }
    return SmartlookGlobalEventProperties;
}());
export { SmartlookGlobalEventProperties };
var SmartlookGlobalEventProperty = /** @class */ (function () {
    function SmartlookGlobalEventProperty(key, value, immutable) {
        this.key = key;
        this.value = value;
        this.immutable = immutable;
    }
    return SmartlookGlobalEventProperty;
}());
export { SmartlookGlobalEventProperty };
var SmartlookGlobalEventPropertyKey = /** @class */ (function () {
    function SmartlookGlobalEventPropertyKey(key) {
        this.key = key;
    }
    return SmartlookGlobalEventPropertyKey;
}());
export { SmartlookGlobalEventPropertyKey };
var Smartlook = /** @class */ (function (_super) {
    __extends(Smartlook, _super);
    function Smartlook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Smartlook.prototype.setupAndStartRecording = function (config) { return cordova(this, "setupAndStartRecording", { "sync": true }, arguments); };
    Smartlook.prototype.setup = function (config) { return cordova(this, "setup", { "sync": true }, arguments); };
    Smartlook.prototype.startRecording = function () { return cordova(this, "startRecording", { "sync": true }, arguments); };
    Smartlook.prototype.stopRecording = function () { return cordova(this, "stopRecording", { "sync": true }, arguments); };
    Smartlook.prototype.isRecording = function () { return cordova(this, "isRecording", {}, arguments); };
    Smartlook.prototype.startFullscreenSensitiveMode = function () { return cordova(this, "startFullscreenSensitiveMode", { "sync": true }, arguments); };
    Smartlook.prototype.stopFullscreenSensitiveMode = function () { return cordova(this, "stopFullscreenSensitiveMode", { "sync": true }, arguments); };
    Smartlook.prototype.isFullscreenSensitiveModeActive = function () { return cordova(this, "isFullscreenSensitiveModeActive", {}, arguments); };
    Smartlook.prototype.setUserIdentifier = function (identifier) { return cordova(this, "setUserIdentifier", { "sync": true }, arguments); };
    Smartlook.prototype.trackCustomEvent = function (event) { return cordova(this, "trackCustomEvent", { "sync": true }, arguments); };
    Smartlook.prototype.startTimedCustomEvent = function (timedEvent) { return cordova(this, "startTimedCustomEvent", { "sync": true }, arguments); };
    Smartlook.prototype.setGlobalEventProperties = function (properties) { return cordova(this, "setGlobalEventProperties", { "sync": true }, arguments); };
    Smartlook.prototype.setGlobalEventProperty = function (property) { return cordova(this, "setGlobalEventProperty", { "sync": true }, arguments); };
    Smartlook.prototype.removeGlobalEventProperty = function (property) { return cordova(this, "removeGlobalEventProperty", { "sync": true }, arguments); };
    Smartlook.prototype.removeAllGlobalEventProperties = function () { return cordova(this, "removeAllGlobalEventProperties", { "sync": true }, arguments); };
    Smartlook.pluginName = "Smartlook";
    Smartlook.plugin = "https://github.com/smartlook/cordova-smartlook.git";
    Smartlook.pluginRef = "cordova.plugins.SmartlookPlugin";
    Smartlook.repo = "https://github.com/smartlook/cordova-smartlook.git";
    Smartlook.platforms = ["Android", "iOS"];
    Smartlook = __decorate([
        Injectable()
    ], Smartlook);
    return Smartlook;
}(IonicNativePlugin));
export { Smartlook };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NtYXJ0bG9vay9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFNdEUsOEJBQVksZUFBdUIsRUFBRSxHQUFZO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7K0JBVkg7Ozs7SUFpQkUsaUNBQVksVUFBa0IsRUFBRSxpQkFBc0I7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7a0NBcEJIOzs7O0lBMkJFLDhCQUFZLElBQVksRUFBRSxlQUFvQjtRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN6QyxDQUFDOytCQTlCSDs7OztJQXFDRSx3Q0FBWSxxQkFBeUIsRUFBRSxTQUFrQjtRQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQzt5Q0F4Q0g7Ozs7SUFnREUsc0NBQVksR0FBVyxFQUFFLEtBQWEsRUFBRSxTQUFrQjtRQUN4RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7dUNBcERIOzs7O0lBMERFLHlDQUFZLEdBQVc7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQzswQ0E1REg7Ozs7SUFpRytCLDZCQUFpQjs7OztJQVM5QywwQ0FBc0IsYUFBQyxNQUE0QjtJQVduRCx5QkFBSyxhQUFDLE1BQTRCO0lBUWxDLGtDQUFjO0lBUWQsaUNBQWE7SUFTYiwrQkFBVztJQVFYLGdEQUE0QjtJQVE1QiwrQ0FBMkI7SUFTM0IsbURBQStCO0lBWS9CLHFDQUFpQixhQUFDLFVBQW1DO0lBV3JELG9DQUFnQixhQUFDLEtBQTJCO0lBWTVDLHlDQUFxQixhQUFDLFVBQWdDO0lBWXRELDRDQUF3QixhQUFDLFVBQTBDO0lBYW5FLDBDQUFzQixhQUFDLFFBQXNDO0lBVTdELDZDQUF5QixhQUFDLFFBQXlDO0lBUW5FLGtEQUE4Qjs7Ozs7O0lBcEpuQixTQUFTO1FBRHJCLFVBQVUsRUFBRTtPQUNBLFNBQVM7b0JBakd0QjtFQWlHK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNtYXJ0bG9va1NldHVwQ29uZmlnIHtcbiAgcHJpdmF0ZSBzbWFydGxvb2tBUElLZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihzbWFydGxvb2tBUElLZXk6IHN0cmluZywgZnBzPzogbnVtYmVyKSB7XG4gICAgdGhpcy5zbWFydGxvb2tBUElLZXkgPSBzbWFydGxvb2tBUElLZXk7XG4gICAgdGhpcy5mcHMgPSBmcHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNtYXJ0bG9va1VzZXJJZGVudGlmaWVyIHtcbiAgcHJpdmF0ZSBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIHByaXZhdGUgc2Vzc2lvblByb3BlcnRpZXM6IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXI6IHN0cmluZywgc2Vzc2lvblByb3BlcnRpZXM/OiB7fSkge1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5zZXNzaW9uUHJvcGVydGllcyA9IHNlc3Npb25Qcm9wZXJ0aWVzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbWFydGxvb2tDdXN0b21FdmVudCB7XG4gIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGV2ZW50UHJvcGVydGllczoge307XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBldmVudFByb3BlcnRpZXM/OiB7fSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ldmVudFByb3BlcnRpZXMgPSBldmVudFByb3BlcnRpZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNtYXJ0bG9va0dsb2JhbEV2ZW50UHJvcGVydGllcyB7XG4gIHByaXZhdGUgZ2xvYmFsRXZlbnRQcm9wZXJ0aWVzOiB7fTtcbiAgcHJpdmF0ZSBpbW11dGFibGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZ2xvYmFsRXZlbnRQcm9wZXJ0aWVzOiB7fSwgaW1tdXRhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5nbG9iYWxFdmVudFByb3BlcnRpZXMgPSBnbG9iYWxFdmVudFByb3BlcnRpZXM7XG4gICAgdGhpcy5pbW11dGFibGUgPSBpbW11dGFibGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNtYXJ0bG9va0dsb2JhbEV2ZW50UHJvcGVydHkge1xuICBwcml2YXRlIGtleTogc3RyaW5nO1xuICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgaW1tdXRhYmxlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpbW11dGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5pbW11dGFibGUgPSBpbW11dGFibGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNtYXJ0bG9va0dsb2JhbEV2ZW50UHJvcGVydHlLZXkge1xuICBwcml2YXRlIGtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBTbWFydGxvb2tcbiAqIEBkZXNjcmlwdGlvblxuICogT2ZmaWNpYWwgU21hcnRsb29rIFNESyBwbHVnaW4uIEZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0ICh3d3cuc21hcnRsb29rLmNvbSkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTbWFydGxvb2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NtYXJ0bG9vay9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNtYXJ0bG9vazogU21hcnRsb29rKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zbWFydGxvb2suc2V0dXBBbmRTdGFydFJlY29yZGluZyhuZXcgU21hcnRsb29rU2V0dXBDb25maWcoXCJrZXlcIikpO1xuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIFNtYXJ0bG9va1NldHVwQ29uZmlnXG4gKiBTbWFydGxvb2tVc2VySWRlbnRpZmllclxuICogU21hcnRsb29rQ3VzdG9tRXZlbnRcbiAqIFNtYXJ0bG9va0dsb2JhbEV2ZW50UHJvcGVydGllc1xuICogU21hcnRsb29rR2xvYmFsRXZlbnRQcm9wZXJ0eVxuICogU21hcnRsb29rR2xvYmFsRXZlbnRQcm9wZXJ0eUtleVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NtYXJ0bG9vaycsXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zbWFydGxvb2svY29yZG92YS1zbWFydGxvb2suZ2l0JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlNtYXJ0bG9va1BsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc21hcnRsb29rL2NvcmRvdmEtc21hcnRsb29rLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNtYXJ0bG9vayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogU2V0dXAgYW5kIHN0YXJ0IFNtYXJ0bG9vayBTREsgcmVjb3JkaW5nLlxuICAgKiBAcGFyYW0gY29uZmlnIFNtYXJ0bG9va1NldHVwQ29uZmlnIG9iamVjdC5cbiAgICogQHBhcmFtIGNvbmZpZy5zbWFydGxvb2tBUElLZXkgKHJlcXVpcmVkKSBTbWFydGxvb2sgQVBJIGtleSAoeW91IGNhbiBvYnRhaW4gaXQgaW4geW91ciBkYXNoYm9hcmQpLlxuICAgKiBAcGFyYW0gY29uZmlnLmZwcyAob3B0aW9uYWwpIHJlY29yZGVkIHZpZGVvIGZyYW1lcmF0ZSAoYWxsb3dlZCB2YWx1ZXMgMi0xMCBmcHMpLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldHVwQW5kU3RhcnRSZWNvcmRpbmcoY29uZmlnOiBTbWFydGxvb2tTZXR1cENvbmZpZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cC9pbml0aWFsaXplIFNtYXJ0bG9vayBTREsuIFRoaXMgbWV0aG9kIERPRVNOJ1Qgc3RhcnQgdGhlIHJlY29yZGluZyAoQHNlZSBzdGFydCgpKVxuICAgKiBAcGFyYW0gY29uZmlnIFNtYXJ0bG9va1NldHVwQ29uZmlnIG9iamVjdC5cbiAgICogQHBhcmFtIGNvbmZpZy5zbWFydGxvb2tBUElLZXkgKHJlcXVpcmVkKSBTbWFydGxvb2sgQVBJIGtleSAoeW91IGNhbiBvYnRhaW4gaXQgaW4geW91ciBkYXNoYm9hcmQpLlxuICAgKiBAcGFyYW0gY29uZmlnLmZwcyAob3B0aW9uYWwpIHJlY29yZGVkIHZpZGVvIGZyYW1lcmF0ZSAoYWxsb3dlZCB2YWx1ZXMgMi0xMCBmcHMpLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldHVwKGNvbmZpZzogU21hcnRsb29rU2V0dXBDb25maWcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgU0RLIHJlY29yZGluZy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydFJlY29yZGluZygpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBTREsgcmVjb3JkaW5nLiBSZWNvcmRpbmcgd2lsbCBzdGFydCBhZ2FpbiB3aGVuIHlvdSBjYWxsIHN0YXJ0KCkuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcFJlY29yZGluZygpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgU0RLIGlzIGN1cnJlbnRseSByZWNvcmRpbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggaXNSZWNvcmRpbmcgYm9vbGVhbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNSZWNvcmRpbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4geW91IHN0YXJ0IHNlbnNpdGl2ZSBtb2RlIFNESyByZWNvcmRzIGJsYW5rIHZpZGVvcyAoc2luZ2xlIGNvbG9yKSBidXQgU0RLIHN0aWxsIHNlbmRzIGFuYWx5dGljIGV2ZW50cy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydEZ1bGxzY3JlZW5TZW5zaXRpdmVNb2RlKCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHNlbnNpdGl2ZSBtb2RlIC0+IFNESyByZWNvcmRzIHZpZGVvLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3BGdWxsc2NyZWVuU2Vuc2l0aXZlTW9kZSgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgZnVsbHNjcmVlbiBzZW5zaXRpdmUgbW9kZSBpcyBhY3RpdmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggaXNGdWxsc2NyZWVuU2Vuc2l0aXZlTW9kZUFjdGl2ZSBib29sZWFuLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0Z1bGxzY3JlZW5TZW5zaXRpdmVNb2RlQWN0aXZlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZGVudGlmeSB1c2VyLlxuICAgKiBAcGFyYW0gaWRlbnRpZmllciBTbWFydGxvb2tVc2VySWRlbnRpZmllciBvYmplY3QuXG4gICAqIEBwYXJhbSBpZGVudGlmaWVyLmlkZW5maWVyIChyZXF1aXJlZCkgaWQgdGhhdCBjYW4gYmUgdXNlZCB0byBpZGVudGlmeSB1c2VyIGFuZCBoaXMgcmVjb3Jkcy5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IHdpbGwgc2VlIHRoaXMgSWQgaW4gU21hcnRsb29rIGRhc2hib2FyZCBzbyB5b3UgY2FuIHBhaXIgcmVjb3JkcyB3aXRoIGNvbmNyZXRlIHVzZXIuXG4gICAqIEBwYXJhbSBpZGVudGlmaWVyLnNlc3Npb25Qcm9wZXJ0aWVzIChvcHRpb25hbCkgY3VzdG9tIHNlc3Npb24gcHJvcGVydGllcyBvYmplY3QuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VXNlcklkZW50aWZpZXIoaWRlbnRpZmllcjogU21hcnRsb29rVXNlcklkZW50aWZpZXIpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgY3VzdG9tIGV2ZW50LlxuICAgKiBAcGFyYW0gZXZlbnQgU21hcnRsb29rQ3VzdG9tRXZlbnQgb2JqZWN0LlxuICAgKiBAcGFyYW0gZXZlbnQubmFtZSAocmVxdWlyZWQpIHN0cmluZyB1c2VkIHRvIGlkZW50aWZ5IGV2ZW50LlxuICAgKiBAcGFyYW0gZXZlbnQuZXZlbnRQcm9wZXJ0aWVzIChvcHRpb25hbCkgZXZlbnQgcHJvcGVydGllcyBvYmplY3QuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tDdXN0b21FdmVudChldmVudDogU21hcnRsb29rQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgY3VzdG9tIGV2ZW50LlxuICAgKiBAcGFyYW0gdGltZWRFdmVudCBTbWFydGxvb2tDdXN0b21FdmVudCBvYmplY3QuXG4gICAqIEBwYXJhbSB0aW1lZEV2ZW50Lm5hbWUgKHJlcXVpcmVkKSBzdHJpbmcgdXNlZCB0byBpZGVudGlmeSB0aW1lZCBldmVudC5cbiAgICogQHBhcmFtIHRpbWVkRXZlbnQuZXZlbnRQcm9wZXJ0aWVzIChvcHRpb25hbCkgdGltZWQgZXZlbnQgcHJvcGVydGllcyBvYmplY3QuIFRoZXNlIHByb3BlcnRpZXMgd2lsbFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgbWVyZ2VkIHdpdGggcHJvcGVydGllcyBvZiB0cmFja2VkIGV2ZW50ICh3aXRoIGxvd2VyIHByaW9yaXR5KS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydFRpbWVkQ3VzdG9tRXZlbnQodGltZWRFdmVudDogU21hcnRsb29rQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdsb2JhbCBldmVudCBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBhZGRlZCB0byBldmVyeSB0cmFja2VkIGV2ZW50LlxuICAgKiBAcGFyYW0gcHJvcGVydGllcyBTbWFydGxvb2tHbG9iYWxFdmVudFByb3BlcnRpZXMgb2JqZWN0LlxuICAgKiBAcGFyYW0gcHJvcGVydGllcy5nbG9iYWxFdmVudFByb3BlcnRpZXMgKHJlcXVpcmVkKSBnbG9iYWwgZXZlbnQgcHJvcGVydGllcyBvYmplY3QuXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzLmltbXV0YWJsZSAocmVxdWlyZWQpIElmIHNldCB0byBUUlVFIHRoZXNlIHByb3BlcnRpZXMgaGF2ZSBoaWdoZXIgcHJpb3JpdHlcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGFuIG11dGFibGUgb25lcyBhbmQgYWxzbyB0aGV5IGNhbm5vdCBiZSBjaGFuZ2VkIChvbmx5IHJlbW92ZWQpLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEdsb2JhbEV2ZW50UHJvcGVydGllcyhwcm9wZXJ0aWVzOiBTbWFydGxvb2tHbG9iYWxFdmVudFByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgU0RLIGlzIGN1cnJlbnRseSByZWNvcmRpbmcuXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSBTbWFydGxvb2tHbG9iYWxFdmVudFByb3BlcnR5IG9iamVjdC5cbiAgICogQHBhcmFtIHByb3BlcnR5LmtleSBnbG9iYWwgcHJvcGVydHkga2V5LlxuICAgKiBAcGFyYW0gcHJvcGVydHkudmFsdWUgZ2xvYmFsIHByb3BlcnR5IHZhbHVlLlxuICAgKiBAcGFyYW0gcHJvcGVydHkuaW1tdXRhYmxlIChyZXF1aXJlZCkgSWYgc2V0IHRvIFRSVUUgdGhlc2UgcHJvcGVydGllcyBoYXZlIGhpZ2hlciBwcmlvcml0eVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYW4gbXV0YWJsZSBvbmVzIGFuZCBhbHNvIHRoZXkgY2Fubm90IGJlIGNoYW5nZWQgKG9ubHkgcmVtb3ZlZCkuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0R2xvYmFsRXZlbnRQcm9wZXJ0eShwcm9wZXJ0eTogU21hcnRsb29rR2xvYmFsRXZlbnRQcm9wZXJ0eSk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgcHJvcGVydHkgZnJvbSBnbG9iYWwgZXZlbnQgcHJvcGVydGllcy5cbiAgICogQHBhcmFtIHByb3BlcnR5IFNtYXJ0bG9va0dsb2JhbEV2ZW50UHJvcGVydHlLZXkgb2JqZWN0LlxuICAgKiBAcGFyYW0gcHJvcGVydHkua2V5IGdsb2JhbCBwcm9wZXJ0eSBrZXkuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlR2xvYmFsRXZlbnRQcm9wZXJ0eShwcm9wZXJ0eTogU21hcnRsb29rR2xvYmFsRXZlbnRQcm9wZXJ0eUtleSk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIHByb3BlcnRpZXMgZnJvbSBnbG9iYWwgZXZlbnQgcHJvcGVydGllcy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVBbGxHbG9iYWxFdmVudFByb3BlcnRpZXMoKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=