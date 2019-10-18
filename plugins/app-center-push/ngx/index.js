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
var AppCenterPush = /** @class */ (function (_super) {
    __extends(AppCenterPush, _super);
    function AppCenterPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterPush.prototype.addEventListener = function (eventName) { return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener" }, arguments); };
    AppCenterPush.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterPush.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterPush.pluginName = "AppCenterPush";
    AppCenterPush.plugin = "cordova-plugin-appcenter-push";
    AppCenterPush.pluginRef = "AppCenter.Push";
    AppCenterPush.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push";
    AppCenterPush.platforms = ["Android", "iOS"];
    AppCenterPush = __decorate([
        Injectable()
    ], AppCenterPush);
    return AppCenterPush;
}(IonicNativePlugin));
export { AppCenterPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItcHVzaC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtDQyxpQ0FBaUI7Ozs7SUFVbEQsd0NBQWdCLGFBQUMsU0FBaUI7SUFRbEMsaUNBQVM7SUFVVCxrQ0FBVSxhQUFDLFlBQXFCOzs7Ozs7SUE1QnJCLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYTt3QkFwQzFCO0VBb0NtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEFwcCBDZW50ZXIgUHVzaFxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL3B1c2gvY29yZG92YVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwQ2VudGVyUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLWNlbnRlci1wdXNoL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQ2VudGVyUHVzaDogQXBwQ2VudGVyUHVzaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5hcHBDZW50ZXJQdXNoLnNldEVuYWJsZWQodHJ1ZSkudGhlbigoKSA9PiB7XG4gKiAgICB0aGlzLmFwcENlbnRlclB1c2guYWRkRXZlbnRMaXN0ZW5lcignTXkgRXZlbnQnKS5zdWJzY3JpYmUocHVzaE5vdGlmaWNhdGlvbiA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2coJ1JlY2l2ZWQgcHVzaCBub3RpZmljYXRpb24nLCBwdXNoTm90aWZpY2F0aW9uKTtcbiAqICAgIH0pO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwQ2VudGVyUHVzaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1wdXNoJyxcbiAgcGx1Z2luUmVmOiAnQXBwQ2VudGVyLlB1c2gnLFxuICByZXBvOlxuICAgICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItcHVzaCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcENlbnRlclB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYW4gZXZlbnRcbiAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gIH0pXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgQXBwIENlbnRlciBQdXNoIGlzIGVuYWJsZWRcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgQXBwIENlbnRlciBQdXNoIGF0IHJ1bnRpbWVcbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gc2hvdWxkRW5hYmxlIFNldCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW5hYmxlZChzaG91bGRFbmFibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==