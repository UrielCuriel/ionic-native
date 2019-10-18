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
var PowerManagement = /** @class */ (function (_super) {
    __extends(PowerManagement, _super);
    function PowerManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerManagement.prototype.acquire = function () { return cordova(this, "acquire", {}, arguments); };
    PowerManagement.prototype.dim = function () { return cordova(this, "dim", {}, arguments); };
    PowerManagement.prototype.release = function () { return cordova(this, "release", {}, arguments); };
    PowerManagement.prototype.setReleaseOnPause = function (set) { return cordova(this, "setReleaseOnPause", {}, arguments); };
    PowerManagement.pluginName = "PowerManagement";
    PowerManagement.plugin = "cordova-plugin-powermanagement-orig";
    PowerManagement.pluginRef = "powerManagement";
    PowerManagement.repo = "https://github.com/Viras-/cordova-plugin-powermanagement";
    PowerManagement.platforms = ["Android", "iOS", "Windows", "Windows Phone"];
    PowerManagement = __decorate([
        Injectable()
    ], PowerManagement);
    return PowerManagement;
}(IonicNativePlugin));
export { PowerManagement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bvd2VyLW1hbmFnZW1lbnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkJuQyxtQ0FBaUI7Ozs7SUFNcEQsaUNBQU87SUFTUCw2QkFBRztJQVNILGlDQUFPO0lBV1AsMkNBQWlCLGFBQUMsR0FBWTs7Ozs7O0lBbkNuQixlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWU7MEJBOUI1QjtFQThCcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbi8qKlxuICogQG5hbWUgUG93ZXIgTWFuYWdlbWVudFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgUG93ZXJNYW5hZ2VtZW50IHBsdWdpbiBvZmZlcnMgYWNjZXNzIHRvIHRoZSBkZXZpY2VzIHBvd2VyLW1hbmFnZW1lbnQgZnVuY3Rpb25hbGl0eS5cbiAqIEl0IHNob3VsZCBiZSB1c2VkIGZvciBhcHBsaWNhdGlvbnMgd2hpY2gga2VlcCBydW5uaW5nIGZvciBhIGxvbmcgdGltZSB3aXRob3V0IGFueSB1c2VyIGludGVyYWN0aW9uLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUG93ZXJNYW5hZ2VtZW50IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wb3dlci1tYW5hZ2VtZW50L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwb3dlck1hbmFnZW1lbnQ6IFBvd2VyTWFuYWdlbWVudCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5wb3dlck1hbmFnZW1lbnQuYWNxdWlyZSgpXG4gKiAgIC50aGVuKG9uU3VjY2VzcylcbiAqICAgLmNhdGNoKG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1Bvd2VyTWFuYWdlbWVudCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXBvd2VybWFuYWdlbWVudC1vcmlnJyxcbiAgcGx1Z2luUmVmOiAncG93ZXJNYW5hZ2VtZW50JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9WaXJhcy0vY29yZG92YS1wbHVnaW4tcG93ZXJtYW5hZ2VtZW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvd2VyTWFuYWdlbWVudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEFjcXVpcmUgYSB3YWtlbG9jayBieSBjYWxsaW5nIHRoaXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjcXVpcmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBhY3F1aXJlcyBhIHBhcnRpYWwgd2FrZWxvY2ssIGFsbG93aW5nIHRoZSBzY3JlZW4gdG8gYmUgZGltbWVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaW0oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVsZWFzZSB0aGUgd2FrZWxvY2suIEl0J3MgaW1wb3J0YW50IHRvIGRvIHRoaXMgd2hlbiB5b3UncmUgZmluaXNoZWQgd2l0aCB0aGUgd2FrZWxvY2ssIHRvIGF2b2lkIHVubmVjZXNzYXJ5IGJhdHRlcnkgZHJhaW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbGVhc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIHBsdWdpbiB3aWxsIGF1dG9tYXRpY2FsbHkgcmVsZWFzZSBhIHdha2Vsb2NrIHdoZW4geW91ciBhcHAgaXMgcGF1c2VkIChlLmcuIHdoZW4gdGhlIHNjcmVlbiBpcyB0dXJuZWQgb2ZmLCBvciB0aGUgdXNlciBzd2l0Y2hlcyB0byBhbm90aGVyIGFwcCkuXG4gICAqIEl0IHdpbGwgcmVhY3F1aXJlIHRoZSB3YWtlbG9jayB1cG9uIGFwcCByZXN1bWUuIElmIHlvdSB3b3VsZCBwcmVmZXIgdG8gZGlzYWJsZSB0aGlzIGJlaGF2aW91ciwgeW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHNldCB7Ym9vbGVhbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmVsZWFzZU9uUGF1c2Uoc2V0OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==