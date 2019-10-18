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
var Anyline = /** @class */ (function (_super) {
    __extends(Anyline, _super);
    function Anyline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anyline.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    Anyline.pluginName = "Anyline";
    Anyline.plugin = "io-anyline-cordova";
    Anyline.pluginRef = "Anyline";
    Anyline.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    Anyline.platforms = ["Android", "iOS"];
    Anyline = __decorate([
        Injectable()
    ], Anyline);
    return Anyline;
}(IonicNativePlugin));
export { Anyline };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FueWxpbmUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBdUMzQywyQkFBaUI7Ozs7SUFPNUMsc0JBQUksYUFBQyxPQUF1Qjs7Ozs7O0lBUGpCLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkF4Q3BCO0VBd0M2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFueWxpbmVPcHRpb25zIHtcbiAgLy8gVmFsaWQgTGljZW5zZSBLZXlcbiAgbGljZW5zZUtleTogc3RyaW5nO1xuXG4gIC8vIFNjYW5uaW5nIG9wdGlvbnNcbiAgY29uZmlnOiBhbnk7XG59XG5cbi8qKlxuICogQG5hbWUgQW55bGluZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBbnlsaW5lIHByb3ZpZGVzIGFuIGVhc3ktdG8tdXNlIFNESyBmb3IgYXBwbGljYXRpb25zIHRvIGVuYWJsZSBPcHRpY2FsIENoYXJhY3RlciBSZWNvZ25pdGlvbiAoT0NSKSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFueWxpbmUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FueWxpbmUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbnlsaW5lOiBBbnlsaW5lKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hbnlsaW5lLnNjYW4ob3B0aW9ucylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbnlsaW5lJyxcbiAgcGx1Z2luOiAnaW8tYW55bGluZS1jb3Jkb3ZhJyxcbiAgcGx1Z2luUmVmOiAnQW55bGluZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQW55bGluZS9hbnlsaW5lLW9jci1jb3Jkb3ZhLW1vZHVsZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFueWxpbmUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTY2FuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtBbnlsaW5lT3B0aW9uc30gU2Nhbm5pbmcgb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBDb2RlIGlzIGNhcHR1cmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNjYW4ob3B0aW9uczogQW55bGluZU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19