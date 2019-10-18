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
var Rollbar = /** @class */ (function (_super) {
    __extends(Rollbar, _super);
    function Rollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rollbar.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    Rollbar.pluginName = "Rollbar";
    Rollbar.plugin = "resgrid-cordova-plugins-rollbar";
    Rollbar.pluginRef = "cordova.plugins.Rollbar";
    Rollbar.repo = "https://github.com/Resgrid/cordova-plugins-rollbar";
    Rollbar.install = "ionic cordova plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN=\"YOUR_ROLLBAR_ACCEESS_TOKEN\" --variable ROLLBAR_ENVIRONMENT=\"ROLLBAR_ENVIRONMENT\"";
    Rollbar.installVariables = ["ROLLBAR_ACCESS_TOKEN", "ROLLBAR_ENVIRONMENT"];
    Rollbar.platforms = ["Android", "iOS"];
    Rollbar = __decorate([
        Injectable()
    ], Rollbar);
    return Rollbar;
}(IonicNativePlugin));
export { Rollbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvbGxiYXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBOEIzQywyQkFBaUI7Ozs7SUFPNUMsc0JBQUk7Ozs7Ozs7O0lBUE8sT0FBTztRQURuQixVQUFVLEVBQUU7T0FDQSxPQUFPO2tCQS9CcEI7RUErQjZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIFJvbGxiYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWRkcyBbUm9sbGJhcl0oaHR0cHM6Ly9yb2xsYmFyLmNvbS8pIEFwcCBtb25pdG9yaW5nIHRvIHlvdXIgYXBwbGljYXRpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFJvbGxiYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JvbGxiYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvbGxiYXI6IFJvbGxiYXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMucm9sbGJhci5pbml0KCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUm9sbGJhcicsXG4gIHBsdWdpbjogJ3Jlc2dyaWQtY29yZG92YS1wbHVnaW5zLXJvbGxiYXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuUm9sbGJhcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUmVzZ3JpZC9jb3Jkb3ZhLXBsdWdpbnMtcm9sbGJhcicsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgcmVzZ3JpZC1jb3Jkb3ZhLXBsdWdpbnMtcm9sbGJhciAtLXZhcmlhYmxlIFJPTExCQVJfQUNDRVNTX1RPS0VOPVwiWU9VUl9ST0xMQkFSX0FDQ0VFU1NfVE9LRU5cIiAtLXZhcmlhYmxlIFJPTExCQVJfRU5WSVJPTk1FTlQ9XCJST0xMQkFSX0VOVklST05NRU5UXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1JPTExCQVJfQUNDRVNTX1RPS0VOJywgJ1JPTExCQVJfRU5WSVJPTk1FTlQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm9sbGJhciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgbW9uaXRvcmluZyBvZiB5b3VyIGFwcGxpY2F0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwbHVnaW4gc3VjY2Vzc2Z1bGx5IGluaXRpYWxpemVzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19