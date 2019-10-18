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
var Uptime = /** @class */ (function (_super) {
    __extends(Uptime, _super);
    function Uptime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uptime.prototype.getUptime = function (includeDeepSleep) { return cordova(this, "getUptime", {}, arguments); };
    Uptime.pluginName = "Uptime";
    Uptime.plugin = "cordova-plugin-uptime";
    Uptime.pluginRef = "Uptime";
    Uptime.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    Uptime.platforms = ["Android", "iOS"];
    Uptime = __decorate([
        Injectable()
    ], Uptime);
    return Uptime;
}(IonicNativePlugin));
export { Uptime };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VwdGltZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QjVDLDBCQUFpQjs7OztJQU8zQywwQkFBUyxhQUFDLGdCQUF5Qjs7Ozs7O0lBUHhCLE1BQU07UUFEbEIsVUFBVSxFQUFFO09BQ0EsTUFBTTtpQkE5Qm5CO0VBOEI0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFVwdGltZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyB0aGUgdGltZSBzcGVudCBpbiBtaWxsaXNlY29uZHMgc2luY2UgYm9vdCAodXB0aW1lKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFVwdGltZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdXB0aW1lL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB1cHRpbWU6IFVwdGltZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy51cHRpbWUuZ2V0VXB0aW1lKGluY2x1ZGVEZWVwU2xlZXApXG4gKiAgIC50aGVuKHVwdGltZSA9PiBjb25zb2xlLmxvZyh1cHRpbWUpKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdVcHRpbWUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi11cHRpbWUnLFxuICBwbHVnaW5SZWY6ICdVcHRpbWUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3MxbHZpdS9jb3Jkb3ZhLXBsdWdpbi11cHRpbWUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcHRpbWUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybiBzeXN0ZW0gdXB0aW1lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZURlZXBTbGVlcCBTZXQgdG8gdHJ1ZSB0byBpbmNsdWRlIHN5c3RlbSBkZWVwIHNsZWVwXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXR1cm4gdGhlIHVwdGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VXB0aW1lKGluY2x1ZGVEZWVwU2xlZXA6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19