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
var FileEncryption = /** @class */ (function (_super) {
    __extends(FileEncryption, _super);
    function FileEncryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileEncryption.prototype.encrypt = function (file, key) { return cordova(this, "encrypt", {}, arguments); };
    FileEncryption.prototype.decrypt = function (file, key) { return cordova(this, "decrypt", {}, arguments); };
    FileEncryption.pluginName = "FileEncryption";
    FileEncryption.plugin = "cordova-safe";
    FileEncryption.pluginRef = "cordova.plugins.disusered";
    FileEncryption.repo = "https://github.com/disusered/cordova-safe";
    FileEncryption.platforms = ["Android", "iOS"];
    FileEncryption = __decorate([
        Injectable()
    ], FileEncryption);
    return FileEncryption;
}(IonicNativePlugin));
export { FileEncryption };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtZW5jcnlwdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4QnBDLGtDQUFpQjs7OztJQVFuRCxnQ0FBTyxhQUFDLElBQVksRUFBRSxHQUFXO0lBV2pDLGdDQUFPLGFBQUMsSUFBWSxFQUFFLEdBQVc7Ozs7OztJQW5CdEIsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQS9CM0I7RUErQm9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRmlsZSBFbmNyeXB0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNpbXBsZSBmaWxlIGVuY3J5cHRpb24gZm9yIENvcmRvdmEuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlRW5jcnlwdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS1lbmNyeXB0aW9uL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZUVuY3J5cHRpb246IEZpbGVFbmNyeXB0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGVFbmNyeXB0aW9uLmRlY3J5cHQoJ2Fzc2V0cy9qc29uL3RvcFNlY3JldC5qc29uJywgJ3NlY3JldEtleScpO1xuICpcbiAqIHRoaXMuZmlsZUVuY3J5cHRpb24uZW5jcnlwdCgnYXNzZXRzL2pzb24vdG9wU2VjcmV0Lmpzb24nLCAnc2VjcmV0S2V5Jyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZUVuY3J5cHRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXNhZmUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZGlzdXNlcmVkJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kaXN1c2VyZWQvY29yZG92YS1zYWZlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZUVuY3J5cHRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFbmNyeXB0IGEgZmlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBBIHN0cmluZyByZXByZXNlbnRpbmcgYSBsb2NhbCBVUklcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIGtleSBmb3IgdGhlIGNyeXB0byBvcGVyYXRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY3J5cHQoZmlsZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY3J5cHQgYSBmaWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhIGxvY2FsIFVSSVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEga2V5IGZvciB0aGUgY3J5cHRvIG9wZXJhdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVjcnlwdChmaWxlOiBzdHJpbmcsIGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==