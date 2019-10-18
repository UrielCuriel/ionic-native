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
var Autostart = /** @class */ (function (_super) {
    __extends(Autostart, _super);
    function Autostart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Autostart.prototype.enable = function () { return cordova(this, "enable", { "sync": true }, arguments); };
    Autostart.prototype.disable = function () { return cordova(this, "disable", { "sync": true }, arguments); };
    Autostart.pluginName = "Autostart";
    Autostart.plugin = "cordova-plugin-autostart";
    Autostart.pluginRef = "cordova.plugins.autoStart";
    Autostart.repo = "https://github.com/ToniKorin/cordova-plugin-autostart";
    Autostart.platforms = ["Android"];
    Autostart = __decorate([
        Injectable()
    ], Autostart);
    return Autostart;
}(IonicNativePlugin));
export { Autostart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1dG9zdGFydC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnpDLDZCQUFpQjs7OztJQU05QywwQkFBTTtJQU9OLDJCQUFPOzs7Ozs7SUFiSSxTQUFTO1FBRHJCLFVBQVUsRUFBRTtPQUNBLFNBQVM7b0JBaEN0QjtFQWdDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBdXRvc3RhcnRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYXV0b21hdGljYWxseSBzdGFydHMgeW91ciBBbmRyb2lkIGFwcCBhZnRlciBldmVyeSBib290IG9yIGF1dG8tdXBkYXRlLlxuICogWW91IGNhbiBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYXV0b3N0YXJ0IGZ1bmN0aW9uIGluIHlvdXIgYXBwLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXV0b3N0YXJ0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hdXRvc3RhcnQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvc3RhcnQ6IEF1dG9zdGFydCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5hdXRvc3RhcnQuZW5hYmxlKCk7XG4gKlxuICogdGhpcy5hdXRvc3RhcnQuZGlzYWJsZSgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0F1dG9zdGFydCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWF1dG9zdGFydCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5hdXRvU3RhcnQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RvbmlLb3Jpbi9jb3Jkb3ZhLXBsdWdpbi1hdXRvc3RhcnQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dG9zdGFydCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBhdXRvbWF0aWMgc3RhcnR1cCBhZnRlciB0aGUgYm9vdFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVuYWJsZSgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBhdXRvbWF0aWMgc3RhcnR1cCBhZnRlciB0aGUgYm9vdFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRpc2FibGUoKTogdm9pZCB7XG4gIH1cblxufVxuIl19