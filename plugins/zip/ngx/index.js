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
var Zip = /** @class */ (function (_super) {
    __extends(Zip, _super);
    function Zip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zip.prototype.unzip = function (sourceZip, destUrl, onProgress) { return cordova(this, "unzip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    Zip.pluginName = "Zip";
    Zip.plugin = "cordova-plugin-zip";
    Zip.pluginRef = "zip";
    Zip.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    Zip.platforms = ["Android", "iOS"];
    Zip = __decorate([
        Injectable()
    ], Zip);
    return Zip;
}(IonicNativePlugin));
export { Zip };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ppcC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9DLHVCQUFpQjs7OztJQWF4QyxtQkFBSyxhQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFVBQXFCOzs7Ozs7SUFicEQsR0FBRztRQURmLFVBQVUsRUFBRTtPQUNBLEdBQUc7Y0FoQ2hCO0VBZ0N5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFppcFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRvIHVuemlwIGZpbGVzIGluIEFuZHJvaWQgYW5kIGlPUy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFppcCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvemlwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6aXA6IFppcCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy56aXAudW56aXAoJ3BhdGgvdG8vc291cmNlLnppcCcsICdwYXRoL3RvL2Rlc3QnLCAocHJvZ3Jlc3MpID0+IGNvbnNvbGUubG9nKCdVbnppcHBpbmcsICcgKyBNYXRoLnJvdW5kKChwcm9ncmVzcy5sb2FkZWQgLyBwcm9ncmVzcy50b3RhbCkgKiAxMDApICsgJyUnKSlcbiAqICAudGhlbigocmVzdWx0KSA9PiB7XG4gKiAgICBpZihyZXN1bHQgPT09IDApIGNvbnNvbGUubG9nKCdTVUNDRVNTJyk7XG4gKiAgICBpZihyZXN1bHQgPT09IC0xKSBjb25zb2xlLmxvZygnRkFJTEVEJyk7XG4gKiAgfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWmlwJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4temlwJyxcbiAgcGx1Z2luUmVmOiAnemlwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Nb2JpbGVDaHJvbWVBcHBzL2NvcmRvdmEtcGx1Z2luLXppcCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFppcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogRXh0cmFjdHMgZmlsZXMgZnJvbSBhIFpJUCBhcmNoaXZlXG4gICAqIEBwYXJhbSBzb3VyY2VaaXAge3N0cmluZ30gU291cmNlIFpJUCBmaWxlXG4gICAqIEBwYXJhbSBkZXN0VXJsIHtzdHJpbmd9IERlc3RpbmF0aW9uIGZvbGRlclxuICAgKiBAcGFyYW0gb25Qcm9ncmVzcyB7RnVuY3Rpb259IG9wdGlvbmFsIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBvbiBwcm9ncmVzcyB1cGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgbnVtYmVyLiAwIGlzIHN1Y2Nlc3MsIC0xIGlzIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDRcbiAgfSlcbiAgdW56aXAoc291cmNlWmlwOiBzdHJpbmcsIGRlc3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19