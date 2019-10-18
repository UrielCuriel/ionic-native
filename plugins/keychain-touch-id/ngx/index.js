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
var KeychainTouchId = /** @class */ (function (_super) {
    __extends(KeychainTouchId, _super);
    function KeychainTouchId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeychainTouchId.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    KeychainTouchId.prototype.save = function (key, password) { return cordova(this, "save", {}, arguments); };
    KeychainTouchId.prototype.verify = function (key, message) { return cordova(this, "verify", {}, arguments); };
    KeychainTouchId.prototype.has = function (key) { return cordova(this, "has", {}, arguments); };
    KeychainTouchId.prototype.delete = function (key) { return cordova(this, "delete", {}, arguments); };
    KeychainTouchId.prototype.setLocale = function (locale) { return cordova(this, "setLocale", {}, arguments); };
    KeychainTouchId.pluginName = "KeychainTouchId";
    KeychainTouchId.plugin = "cordova-plugin-keychain-touch-id";
    KeychainTouchId.pluginRef = "plugins.touchid";
    KeychainTouchId.repo = "https://github.com/sjhoeksma/cordova-plugin-keychain-touch-id";
    KeychainTouchId.platforms = ["Android", "iOS"];
    KeychainTouchId = __decorate([
        Injectable()
    ], KeychainTouchId);
    return KeychainTouchId;
}(IonicNativePlugin));
export { KeychainTouchId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWNoYWluLXRvdWNoLWlkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWdDbkMsbUNBQWlCOzs7O0lBT3BELHFDQUFXO0lBWVgsOEJBQUksYUFBQyxHQUFXLEVBQUUsUUFBZ0I7SUFZbEMsZ0NBQU0sYUFBQyxHQUFXLEVBQUUsT0FBZTtJQVVuQyw2QkFBRyxhQUFDLEdBQVc7SUFVZixnQ0FBTSxhQUFDLEdBQVc7SUFTbEIsbUNBQVMsYUFBQyxNQUFjOzs7Ozs7SUE1RGIsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlOzBCQWpDNUI7RUFpQ3FDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgS2V5Y2hhaW4gVG91Y2ggSWRcbiAqIEBkZXNjcmlwdGlvblxuICogQSBjb3Jkb3ZhIHBsdWdpbiBhZGRpbmcgdGhlIGlPUyBUb3VjaElEIC8gQW5kcm9pZCBmaW5nZXJwcmludCB0byB5b3VyXG4gKiBhcHAgYW5kIGFsbG93aW5nIHlvdSB0byBzdG9yZSBhIHBhc3N3b3JkIHNlY3VyZWx5IGluIHRoZSBkZXZpY2Uga2V5Y2hhaW4uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBLZXljaGFpblRvdWNoSWQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2tleWNoYWluLXRvdWNoLWlkL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUga2V5Y2hhaW5Ub3VjaElkOiBLZXljaGFpblRvdWNoSWQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmtleWNoYWluVG91Y2hJZC5pc0F2YWlsYWJsZSgpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnS2V5Y2hhaW5Ub3VjaElkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4ta2V5Y2hhaW4tdG91Y2gtaWQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnRvdWNoaWQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NqaG9la3NtYS9jb3Jkb3ZhLXBsdWdpbi1rZXljaGFpbi10b3VjaC1pZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtleWNoYWluVG91Y2hJZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgVG91Y2ggSUQgLyBGaW5nZXJwcmludCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGVyZSBpcyBoYXJkd2FyZSBzdXBwb3J0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY3J5cHRzIGFuZCBTYXZlcyBhIHBhc3N3b3JkIHVuZGVyIHRoZSBrZXkgaW4gdGhlIGRldmljZSBrZXljaGFpbiwgd2hpY2ggY2FuIGJlIHJldHJpZXZlZCBhZnRlclxuICAgKiBzdWNjZXNzZnVsIGF1dGhlbnRpY2F0aW9uIHVzaW5nIGZpbmdlcnByaW50XG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gdGhlIGtleSB5b3Ugd2FudCB0byBzdG9yZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQge3N0cmluZ30gdGhlIHBhc3N3b3JkIHlvdSB3YW50IHRvIGVuY3J5cHQgYW5kIHN0b3JlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZXJlIGlzIGEgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmUoa2V5OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgZmluZ2VycHJpbnQgZGlhbG9nLCBmb3IgdGhlIGdpdmVuIGtleSwgc2hvd2luZyBhbiBhZGRpdGlvbmFsIG1lc3NhZ2UuIFByb21pc2Ugd2lsbCByZXNvbHZlXG4gICAqIHdpdGggdGhlIHBhc3N3b3JkIHN0b3JlZCBpbiBrZXljaGFpbiBvciB3aWxsIHJlc29sdmUgYW4gZXJyb3IgY29kZSwgd2hlcmUgLTEgaW5kaWNhdGVkIG5vdCBhdmFpbGFibGUuXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gdGhlIGtleSB5b3Ugd2FudCB0byByZXRyaWV2ZSBmcm9tIGtleWNoYWluXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IGEgbWVzc2FnZSB0byB0aGUgdXNlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUga2V5IHZhbHVlIGlzIHN1Y2Nlc3NmdWxseSByZXRyaWV2ZWQgb3IgYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdmVyaWZ5KGtleTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBwYXNzd29yZCBzdG9yZWQgd2l0aGluIHRoZSBrZXljaGFpbiBmb3IgdGhlIGdpdmVuIGtleS5cbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSB0aGUga2V5IHlvdSB3YW50IHRvIGNoZWNrIGZyb20ga2V5Y2hhaW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc3VjY2VzcyBpZiB0aGUga2V5IGlzIGF2YWlsYWJsZSBvciBmYWlsdXJlIGlmIGtleSBpcyBub3QuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhcyhrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgdGhlIHBhc3N3b3JkIHN0b3JlZCB1bmRlciBnaXZlbiBrZXkgZnJvbSB0aGUga2V5Y2hhaW4uXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gdGhlIGtleSB5b3Ugd2FudCB0byBkZWxldGUgZnJvbSBrZXljaGFpblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBzdWNjZXNzIGlmIHRoZSBrZXkgaXMgZGVsZXRlZCBvciBmYWlsdXJlIGlmIGtleSBpcyBub3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIGZpbmdlcnByaW50IGRpYWxvZ1xuICAgKiBAcGFyYW0gbG9jYWxlIHtzdHJpbmd9IGxvY2FsZSBzdWJ0YWcgZnJvbSBbdGhpcyBsaXN0XShodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9sYW5ndWFnZS1zdWJ0YWctcmVnaXN0cnkvbGFuZ3VhZ2Utc3VidGFnLXJlZ2lzdHJ5KS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxufVxuIl19