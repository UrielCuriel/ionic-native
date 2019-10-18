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
var JAnalytics = /** @class */ (function (_super) {
    __extends(JAnalytics, _super);
    function JAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JAnalytics.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    JAnalytics.prototype.initCrashHandler = function () { return cordova(this, "initCrashHandler", {}, arguments); };
    JAnalytics.prototype.stopCrashHandler = function () { return cordova(this, "stopCrashHandler", {}, arguments); };
    JAnalytics.prototype.onPageStart = function (params) { return cordova(this, "onPageStart", {}, arguments); };
    JAnalytics.prototype.onPageEnd = function (params) { return cordova(this, "onPageEnd", {}, arguments); };
    JAnalytics.prototype.addCountEvent = function (params) { return cordova(this, "addCountEvent", {}, arguments); };
    JAnalytics.prototype.addCalculateEvent = function (params) { return cordova(this, "addCalculateEvent", {}, arguments); };
    JAnalytics.prototype.addLoginEvent = function (params) { return cordova(this, "addLoginEvent", {}, arguments); };
    JAnalytics.prototype.addRegisterEvent = function (params) { return cordova(this, "addRegisterEvent", {}, arguments); };
    JAnalytics.prototype.addBrowseEvent = function (params) { return cordova(this, "addBrowseEvent", {}, arguments); };
    JAnalytics.prototype.addPurchaseEvent = function (params) { return cordova(this, "addPurchaseEvent", {}, arguments); };
    JAnalytics.pluginName = "JAnalytics";
    JAnalytics.plugin = "cordova-plugin-janalytics";
    JAnalytics.pluginRef = "JAnalytics";
    JAnalytics.repo = "https://github.com/jpush/cordova-plugin-janalytics";
    JAnalytics.install = "ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY";
    JAnalytics.installVariables = ["APP_KEY"];
    JAnalytics.platforms = ["Android", "iOS"];
    JAnalytics = __decorate([
        Injectable()
    ], JAnalytics);
    return JAnalytics;
}(IonicNativePlugin));
export { JAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2phbmFseXRpY3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0N4Qyw4QkFBaUI7Ozs7SUFNL0MseUJBQUk7SUFLSixxQ0FBZ0I7SUFLaEIscUNBQWdCO0lBS2hCLGdDQUFXLGFBQUMsTUFBVztJQUt2Qiw4QkFBUyxhQUFDLE1BQVc7SUFLckIsa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHNDQUFpQixhQUFDLE1BQVc7SUFLN0Isa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHFDQUFnQixhQUFDLE1BQVc7SUFLNUIsbUNBQWMsYUFBQyxNQUFXO0lBSzFCLHFDQUFnQixhQUFDLE1BQVc7Ozs7Ozs7O0lBeERqQixVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBbkN2QjtFQW1DZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBqQW5hbHl0aWNzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBKQW5hbHl0aWNzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9KQW5hbHl0aWNzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgakFuYWx5dGljczogSkFuYWx5dGljcykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuakFuYWx5dGljcy5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0pBbmFseXRpY3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1qYW5hbHl0aWNzJyxcbiAgcGx1Z2luUmVmOiAnSkFuYWx5dGljcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vanB1c2gvY29yZG92YS1wbHVnaW4tamFuYWx5dGljcycsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1qYW5hbHl0aWNzIC0tdmFyaWFibGUgQVBQX0tFWT1ZT1VSX0FQUF9LRVknLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQUF9LRVknXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSkFuYWx5dGljcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdENyYXNoSGFuZGxlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcENyYXNoSGFuZGxlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgb25QYWdlU3RhcnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgb25QYWdlRW5kKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGFkZENvdW50RXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYWRkQ2FsY3VsYXRlRXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYWRkTG9naW5FdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRSZWdpc3RlckV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGFkZEJyb3dzZUV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGFkZFB1cmNoYXNlRXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19