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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var WebIntent = /** @class */ (function (_super) {
    __extends(WebIntent, _super);
    function WebIntent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntent.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntent.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntent.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntent.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntent.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntent.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntent.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntent.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntent.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntent.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntent.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntent.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntent.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntent.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: true,
        configurable: true
    });
    WebIntent.pluginName = "WebIntent";
    WebIntent.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntent.pluginRef = "plugins.intentShim";
    WebIntent.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntent.platforms = ["Android"];
    WebIntent = __decorate([
        Injectable()
    ], WebIntent);
    return WebIntent;
}(IonicNativePlugin));
export { WebIntent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1pbnRlbnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBS04sTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXdFSCw2QkFBaUI7Ozs7SUEyRjlDLGlDQUFhLGFBQUMsT0FBc0I7SUFVcEMsMENBQXNCLGFBQUMsT0FBc0I7SUFVN0MsNEJBQVEsYUFBQyxLQUFhO0lBVXRCLDRCQUFRLGFBQUMsS0FBYTtJQVN0QiwwQkFBTTtJQVdOLDRCQUFRO0lBVVIsaUNBQWEsYUFBQyxPQUFzQjtJQVVwQyxnQ0FBWSxhQUFDLE9BQXNCO0lBWW5DLDZDQUF5QixhQUFDLE9BQXlDO0lBUW5FLCtDQUEyQjtJQU0zQixvQ0FBZ0I7SUFNaEIsNkJBQVM7SUFVVCw4QkFBVSxhQUFDLEVBQWM7WUFBWixjQUFVOzs7MEJBck12QixrQ0FBVzs7Ozs7OzBCQU9YLGtDQUFXOzs7Ozs7MEJBT1gsaUNBQVU7Ozs7OzswQkFPVixvQ0FBYTs7Ozs7OzBCQU9iLG1DQUFZOzs7Ozs7MEJBT1osa0NBQVc7Ozs7OzswQkFPWCxrQ0FBVzs7Ozs7OzBCQU9YLG9DQUFhOzs7Ozs7MEJBT2IseUNBQWtCOzs7Ozs7MEJBT2xCLGtDQUFXOzs7Ozs7MEJBT1gsNkNBQXNCOzs7Ozs7MEJBT3RCLCtDQUF3Qjs7Ozs7Ozs7Ozs7SUFuRmIsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQS9FdEI7RUErRStCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZW50Q2xpcEl0ZW0ge1xuICB1cmk6IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgZXh0ZW5zaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVudCB7XG4gIGFjdGlvbjogc3RyaW5nO1xuICBjbGlwSXRlbXM6IEludGVudENsaXBJdGVtW107XG4gIGNvbXBvbmVudDogc3RyaW5nO1xuICBleHRyYXM6IG9iamVjdDtcbiAgZmxhZ3M6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXJPcHRpb25zIHtcbiAgZmlsdGVyQWN0aW9ucz86IHN0cmluZ1tdO1xuICBmaWx0ZXJDYXRlZ29yaWVzPzogc3RyaW5nW107XG4gIGZpbHRlckRhdGFTY2hlbWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZW50T3B0aW9ucyB7XG4gIHJlcXVlc3RDb2RlPzogbnVtYmVyO1xuICB0eXBlPzogc3RyaW5nO1xuICBwYWNrYWdlPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG4gIGV4dHJhcz86IG9iamVjdDtcbiAgYWN0aW9uPzogc3RyaW5nO1xuICBjb21wb25lbnQ/OiB7XG4gICAgcGFja2FnZTogc3RyaW5nO1xuICAgIGNsYXNzOiBzdHJpbmc7XG4gIH07XG4gIGZsYWdzPzogbnVtYmVyW107XG59XG5cbi8qKlxuICogQG5hbWUgV2ViIEludGVudFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIFBsdWdpbiBwcm92aWRlcyBhIGdlbmVyYWwgcHVycG9zZSBzaGltIGxheWVyIGZvciB0aGUgQW5kcm9pZCBpbnRlbnQgbWVjaGFuaXNtLCBleHBvc2luZyB2YXJpb3VzIHdheXMgdG8gaGFuZGxlIHNlbmRpbmcgYW5kIHJlY2VpdmluZyBpbnRlbnRzLlxuICogQHVzYWdlXG4gKiBGb3IgdXNhZ2UgaW5mb3JtYXRpb24gcGxlYXNlIHJlZmVyIHRvIHRoZSBwbHVnaW4ncyBHaXRodWIgcmVwby5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJJbnRlbnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3dlYi1pbnRlbnQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYkludGVudDogV2ViSW50ZW50KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCBvcHRpb25zID0ge1xuICogICBhY3Rpb246IHRoaXMud2ViSW50ZW50LkFDVElPTl9WSUVXLFxuICogICB1cmw6ICdwYXRoL3RvL2ZpbGUnLFxuICogICB0eXBlOiAnYXBwbGljYXRpb24vdm5kLmFuZHJvaWQucGFja2FnZS1hcmNoaXZlJ1xuICogfVxuICpcbiAqIHRoaXMud2ViSW50ZW50LnN0YXJ0QWN0aXZpdHkob3B0aW9ucykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEludGVudE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJJbnRlbnQnLFxuICBwbHVnaW46ICdjb20tZGFycnluY2FtcGJlbGwtY29yZG92YS1wbHVnaW4taW50ZW50JyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5pbnRlbnRTaGltJyxcbiAgcmVwbzpcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL2RhcnJ5bmNhbXBiZWxsL2RhcnJ5bmNhbXBiZWxsLWNvcmRvdmEtcGx1Z2luLWludGVudCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViSW50ZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fU0VORDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9WSUVXOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFWFRSQV9URVhUOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFWFRSQV9TVUJKRUNUOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFWFRSQV9TVFJFQU06IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVYVFJBX0VNQUlMOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX0NBTEw6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fU0VORFRPOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX0dFVF9DT05URU5UOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX1BJQ0s6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fSU5TVEFMTF9QQUNLQUdFOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX1VOSU5TVEFMTF9QQUNLQUdFOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhdW5jaGVzIGFuIEFuZHJvaWQgaW50ZW50XG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydEFjdGl2aXR5KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBuZXcgYWN0aXZpdHkgYW5kIHJldHVybiB0aGUgcmVzdWx0IHRvIHRoZSBhcHBsaWNhdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRBY3Rpdml0eUZvclJlc3VsdChvcHRpb25zOiBJbnRlbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgYXBwIHdhcyBpbnZva2VkIHdpdGggc3BlY2lmaWVkIGV4dHJhXG4gICAqIEBwYXJhbSBleHRyYSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNFeHRyYShleHRyYTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZXh0cmEgdGhhdCB0aGlzIGFwcCB3YXMgaW52b2tlZCB3aXRoXG4gICAqIEBwYXJhbSBleHRyYSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRFeHRyYShleHRyYTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgVXJpIHRoZSBhcHAgd2FzIGludm9rZWQgd2l0aFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRVcmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgaW50ZW50IHVzZWQgd2hlbmV2ZXIgdGhlIGFwcGxpY2F0aW9uIGFjdGl2aXR5IGlzIGxhdW5jaGVkXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEludGVudD59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBvbkludGVudCgpOiBPYnNlcnZhYmxlPEludGVudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGN1c3RvbSBpbnRlbnQgcGFzc2luZyBvcHRpb25hbCBleHRyYXNcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRCcm9hZGNhc3Qob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgdGhhdCBhIGdpdmVuIGFwcGxpY2F0aW9uIHNlcnZpY2UgYmUgc3RhcnRlZFxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRTZXJ2aWNlKG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBicm9hZGNhc3QgcmVjZWl2ZXIgZm9yIHRoZSBzcGVjaWZpZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gZmlsdGVycyB7UmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICByZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyKGZpbHRlcnM6IFJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgYSBicm9hZGNhc3QgcmVjZWl2ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1bnJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXIoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG9uQWN0aXZpdHlSZXN1bHQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnRlbnQoKTogUHJvbWlzZTxJbnRlbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHJlc3VsdCBiYWNrIHRvIHRoZSBJbnRlbnQgdGhhdCBzdGFydGVkIHRoaXMgQWN0aXZpdHkuXG4gICAqIFRoZSBkYXRhIGNhbiBiZSBwYXNzZWQgdXNpbmcgJ2V4dHJhcycuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRSZXN1bHQoeyBleHRyYXM6IHt9IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19