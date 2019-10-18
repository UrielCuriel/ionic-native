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
var HCE = /** @class */ (function (_super) {
    __extends(HCE, _super);
    function HCE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HCE.prototype.registerCommandCallback = function (onCommand, fail) { return cordova(this, "registerCommandCallback", {}, arguments); };
    HCE.prototype.registerDeactivatedCallback = function (ok, fail) { return cordova(this, "registerDeactivatedCallback", {}, arguments); };
    HCE.prototype.sendResponse = function (response, success, failure) { return cordova(this, "sendResponse", {}, arguments); };
    HCE.pluginName = "hce";
    HCE.plugin = "cordova-plugin-hce";
    HCE.pluginRef = "hce";
    HCE.repo = "https://github.com/don/cordova-plugin-hce";
    HCE.install = "";
    HCE.installVariables = ["AID_FILTER"];
    HCE.platforms = ["Android"];
    HCE = __decorate([
        Injectable()
    ], HCE);
    return HCE;
}(IonicNativePlugin));
export { HCE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hjZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Qy9DLHVCQUFpQjs7OztJQVF4QyxxQ0FBdUIsYUFBQyxTQUEwQixFQUFFLElBQWU7SUFVbkUseUNBQTJCLGFBQUMsRUFBdUIsRUFBRSxJQUFlO0lBWXBFLDBCQUFZLGFBQ1YsUUFBb0IsRUFDcEIsT0FBa0IsRUFDbEIsT0FBa0I7Ozs7Ozs7O0lBakNULEdBQUc7UUFEZixVQUFVLEVBQUU7T0FDQSxHQUFHO2NBeENoQjtFQXdDeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBoY2VcbiAqIEBkZXNjcmlwdGlvblxuICogSENFIENvcmRvdmEgV3JhcHBlclxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgaGNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9oY2Uvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoY2U6IGhjZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogZnVuY3Rpb24gb25Db21tYW5kKGNvbW1hbmQpe1xuICogICB2YXIgY29tbWFuZEFzQnl0ZXMgPSBuZXcgVWludDhBcnJheShjb21tYW5kKTtcbiAqICAgdmFyIGNvbW1hbmRBc1N0cmluZyA9IGhjZS51dGlsLmJ5dGVBcnJheVRvSGV4U3RyaW5nKGNvbW1hbmRBc0J5dGVzKTtcbiAqXG4gKiAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBjb21tYW5kXG4gKlxuICogICAvLyBzZW5kIHRoZSByZXNwb25zZVxuICogICBoY2Uuc2VuZFJlcG9uc2UoY29tbWFuZFJlc3BvbnNlKTtcbiAqIH1cbiAqIHRoaXMuaGNlLnJlZ2lzdGVyQ29tbWFuZENhbGxiYWNrKCkudGhlbihvbkNvbW1hbmQpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2hjZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhjZScsXG4gIHBsdWdpblJlZjogJ2hjZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZG9uL2NvcmRvdmEtcGx1Z2luLWhjZScsXG4gIGluc3RhbGw6ICcnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FJRF9GSUxURVInXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIQ0UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY29tbWFuZCByZWNlaXZlci5cbiAgICogQHBhcmFtIG9uQ29tbWFuZCB7SENFQ29tbWFuZEV2ZW50fSBUaGUgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIGZhaWwge0Z1bmN0aW9ufSBFcnJvciBldmVudCBoYW5kbGVyLlxuICAgKlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWdpc3RlckNvbW1hbmRDYWxsYmFjayhvbkNvbW1hbmQ6IEhDRUNvbW1hbmRFdmVudCwgZmFpbD86IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXJzIERlYWN0aXZhdGVkIHJlY2VpdmVyLlxuICAgKiBAcGFyYW0gb2sge0hDRURlYWN0aXZhdGVkRXZlbnR9IFN1Y2Nlc3MgZXZlbnQgaGFuZGxlci5cbiAgICogQHBhcmFtIGZhaWwge0Z1bmN0aW9ufSBFcnJvciBldmVudCBoYW5kbGVyLlxuICAgKlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWdpc3RlckRlYWN0aXZhdGVkQ2FsbGJhY2sob2s6IEhDRURlYWN0aXZhdGVkRXZlbnQsIGZhaWw/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgcmVzcG9uc2UgQVBEVS5cbiAgICogQHBhcmFtIHJlc3BvbnNlIHtVaW50OEFycmF5fSBSZXNwb25zZVxuICAgKiBAcGFyYW0gc3VjY2VzcyB7c3RyaW5nfSBTdWNjZXNzIENhbGxiYWNrLlxuICAgKiBAcGFyYW0gc3VjY2VzcyB7c3RyaW5nfSBGYWlsdXJlIENhbGxiYWNrLlxuICAgKlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVzcG9uc2UoXG4gICAgcmVzcG9uc2U6IFVpbnQ4QXJyYXksXG4gICAgc3VjY2Vzcz86IEZ1bmN0aW9uLFxuICAgIGZhaWx1cmU/OiBGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEhDRUNvbW1hbmRFdmVudCA9IChjb21tYW5kOiBVaW50OEFycmF5KSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgSENFRGVhY3RpdmF0ZWRFdmVudCA9IChjb21tYW5kOiBudW1iZXIpID0+IHZvaWQ7XG4iXX0=