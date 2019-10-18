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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var DNS = /** @class */ (function (_super) {
    __extends(DNS, _super);
    function DNS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNS.prototype.resolve = function (hostname) { return cordova(this, "resolve", {}, arguments); };
    DNS.pluginName = "DNS";
    DNS.plugin = "cordova-plugin-dns";
    DNS.pluginRef = "cordova.plugins.dns";
    DNS.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNS.platforms = ["Android"];
    DNS = __decorate([
        Injectable()
    ], DNS);
    return DNS;
}(IonicNativePlugin));
export { DNS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Rucy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE4QmxCLHVCQUFpQjs7OztJQU94QyxxQkFBTyxhQUFDLFFBQWdCOzs7Ozs7SUFQYixHQUFHO1FBRGYsVUFBVSxFQUFFO09BQ0EsR0FBRztjQS9CaEI7RUErQnlCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRE5TXG4gKiBAZGVzY3JpcHRpb24gQSBwbHVnaW4gZm9yIEFwYWNoZSBDb3Jkb3ZhIHRoYXQgZW5hYmxlcyBhcHBsaWNhdGlvbnMgdG8gbWFudWFsbHkgcmVzb2x2ZSBob3N0bmFtZXMgaW50byBhbiB1bmRlcmx5aW5nIG5ldHdvcmsgYWRkcmVzcy4gVGhpcyBpcyBtb3N0bHkgdXNlZnVsIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoZSBkZXZpY2UncyBETlMgc2VydmVyIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBETlMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Rucy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRuczogRE5TKSB7IH1cbiAqXG4gKiAuLi5cbiAqIHRoaXMuZG5zLnJlc29sdmUoaG9zdG5hbWUpXG4gKiAgIC50aGVuKFxuICogICAgIGFkZHJlc3MgPT4gY29uc29sZS5sb2coJ1Jlc29sdmVkICcgKyBob3N0bmFtZSArICcgdG8gJyArIGFkZHJlc3MpLFxuICogICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgaG9zdG5hbWUgKyAnOiAnICsgZXJyb3IpXG4gKiAgICk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRE5TJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG5zJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmRucycsXG4gIHJlcG86ICdodHRwczovL2JpdGJ1Y2tldC5vcmcvemVnZWJhL2NvcmRvdmEtcGx1Z2luLWRucycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRE5TIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVzb2x2ZSBob3N0bmFtZXMgaW50byBhbiB1bmRlcmx5aW5nIG5ldHdvcmsgYWRkcmVzcy5cbiAgICogQHBhcmFtIGhvc3RuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzb2x1dGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzb2x2ZShob3N0bmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==