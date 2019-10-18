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
var Alipay = /** @class */ (function (_super) {
    __extends(Alipay, _super);
    function Alipay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alipay.prototype.pay = function (order, success, error) { return cordova(this, "pay", {}, arguments); };
    Alipay.pluginName = "Alipay";
    Alipay.plugin = "cordova-plugin-gubnoi-alipay";
    Alipay.pluginRef = "cordova.plugins.alipay";
    Alipay.repo = "https://github.com/jing-zhou/cordova-plugin-alipay";
    Alipay.install = "ionic cordova plugin add cordova-plugin-gubnoi-alipay --variable APP_ID=your_app_id";
    Alipay.installVariables = ["APP_ID"];
    Alipay.platforms = ["Android", "iOS"];
    Alipay = __decorate([
        Injectable()
    ], Alipay);
    return Alipay;
}(IonicNativePlugin));
export { Alipay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXBheS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQzVDLDBCQUFpQjs7OztJQU8zQyxvQkFBRyxhQUFDLEtBQWEsRUFBRSxPQUE2QixFQUFFLEtBQTJCOzs7Ozs7OztJQVBsRSxNQUFNO1FBRGxCLFVBQVUsRUFBRTtPQUNBLE1BQU07aUJBdkNuQjtFQXVDNEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBbGlwYXlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZmFjaWxpdGF0ZXMgdGhlIHVzYWdlIG9mIEFsaXBheSDmlK/ku5jlrp0gaW4gYW4gSW9uaWMgYXBwcyB3aXRoIHRoZSBpbnRlZ3JhdGVkIEFsaXBheVNESyBkYXRlZCBvbiAyMDE4MDYwMS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWd1Ym5vaS1hbGlwYXlgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qaW5nLXpob3UvY29yZG92YS1wbHVnaW4tYWxpcGF5IC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFsaXBheSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYWxpcGF5L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbGlwYXk6IEFsaXBheSkge1xuICpcbiAqIC8vYWxpcGF5T3JkZXIgaXMgYSBzdHJpbmcgdGhhdCBoYXMgYmVlbiBnZW5lcmF0ZWQgYW5kIHNpZ25lZCBieSB0aGUgc2VydmVyIHNpZGUuXG4gKiB0aGlzLmFsaXBheS5wYXkoYWxpcGF5T3JkZXIsIHN1Y2Nlc3MsIGVycm9yKVxuICogICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAqICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFN1Y2Nlc3NcbiAqICAgIH0pXG4gKiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICogICAgICAgY29uc29sZS5sb2coZXJyb3IpOyAvLyBGYWlsZWRcbiAqICAgIH0pO1xuICpcbiAqIH1cbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbGlwYXknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1ndWJub2ktYWxpcGF5JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmFsaXBheScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vamluZy16aG91L2NvcmRvdmEtcGx1Z2luLWFsaXBheScsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ3Vibm9pLWFsaXBheSAtLXZhcmlhYmxlIEFQUF9JRD15b3VyX2FwcF9pZCcsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0lEJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsaXBheSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gQWxpcGF5IHRvIHBlcmZvcm0gQXBwIHBheVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXIgYWxpcGF5IG9yZGVyIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHN1Y2Nlc3MgcmV0dXJuLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBheShvcmRlcjogc3RyaW5nLCBzdWNjZXNzPzogKHJlcz86IGFueSkgPT4gdm9pZCwgZXJyb3I/OiAoZXJyPzogYW55KSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==