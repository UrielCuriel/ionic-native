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
var DeviceAccounts = /** @class */ (function (_super) {
    __extends(DeviceAccounts, _super);
    function DeviceAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceAccounts.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    DeviceAccounts.prototype.getByType = function (type) { return cordova(this, "getByType", {}, arguments); };
    DeviceAccounts.prototype.getEmails = function () { return cordova(this, "getEmails", {}, arguments); };
    DeviceAccounts.prototype.getEmail = function () { return cordova(this, "getEmail", {}, arguments); };
    DeviceAccounts.prototype.getPermissions = function () { return cordova(this, "getPermissions", {}, arguments); };
    DeviceAccounts.prototype.getPermissionsByType = function (type) { return cordova(this, "getPermissionsByType", {}, arguments); };
    DeviceAccounts.pluginName = "DeviceAccounts";
    DeviceAccounts.plugin = "cordova-device-accounts-v2";
    DeviceAccounts.pluginRef = "DeviceAccounts";
    DeviceAccounts.repo = "https://github.com/xUnholy/cordova-device-accounts-v2";
    DeviceAccounts.platforms = ["Android"];
    DeviceAccounts = __decorate([
        Injectable()
    ], DeviceAccounts);
    return DeviceAccounts;
}(IonicNativePlugin));
export { DeviceAccounts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1hY2NvdW50cy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQ3BDLGtDQUFpQjs7OztJQU1uRCw0QkFBRztJQVVILGtDQUFTLGFBQUMsSUFBWTtJQVN0QixrQ0FBUztJQVNULGlDQUFRO0lBU1IsdUNBQWM7SUFVZCw2Q0FBb0IsYUFBQyxJQUFZOzs7Ozs7SUFyRHRCLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkEzQzNCO0VBMkNvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRBY2NvdW50IHtcbiAgLyoqIEFjY291bnQgY3JlYXRvciAqL1xuICBDUkVBVE9SOiBBbmRyb2lkQWNjb3VudDtcblxuICAvKiogQWNjb3VudCBuYW1lICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogQWNjb3VudCB0eXBlICovXG4gIHR5cGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBEZXZpY2UgQWNjb3VudHNcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0cyB0aGUgR29vZ2xlIGFjY291bnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgQW5kcm9pZCBkZXZpY2VcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERldmljZUFjY291bnRzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2UtYWNjb3VudHMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZUFjY291bnRzOiBEZXZpY2VBY2NvdW50cykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5kZXZpY2VBY2NvdW50cy5nZXQoKVxuICogICAudGhlbihhY2NvdW50cyA9PiBjb25zb2xlLmxvZyhhY2NvdW50cykpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQW5kcm9pZEFjY291bnRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZXZpY2VBY2NvdW50cycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtZGV2aWNlLWFjY291bnRzLXYyJyxcbiAgcGx1Z2luUmVmOiAnRGV2aWNlQWNjb3VudHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3hVbmhvbHkvY29yZG92YS1kZXZpY2UtYWNjb3VudHMtdjInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERldmljZUFjY291bnRzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIEdldHMgYWxsIGFjY291bnRzIHJlZ2lzdGVyZWQgb24gdGhlIEFuZHJvaWQgRGV2aWNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFuZHJvaWRBY2NvdW50W10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQoKTogUHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXQgYWxsIGFjY291bnRzIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgZm9yIHJlcXVlc3RlZCB0eXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFuZHJvaWRBY2NvdW50W10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRCeVR5cGUodHlwZTogc3RyaW5nKTogUHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXQgYWxsIGVtYWlscyByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlIChhY2NvdW50cyB3aXRoICdjb20uZ29vZ2xlJyB0eXBlKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEVtYWlscygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXQgdGhlIGZpcnN0IGVtYWlsIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2VcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RW1haWwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogIEdldCBwZXJtaXNzaW9ucyBmb3IgYWNjZXNzIHRvIGVtYWlsIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgOC4wK1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRQZXJtaXNzaW9ucygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAgR2V0IHBlcm1pc3Npb25zIGZvciBhY2Nlc3MgdG8gZW1haWwgcmVnaXN0ZXJlZCBvbiBBbmRyb2lkIGRldmljZSA4LjArIGZvciByZXF1ZXN0ZWQgdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRQZXJtaXNzaW9uc0J5VHlwZSh0eXBlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19