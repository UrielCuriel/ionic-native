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
var DocumentPicker = /** @class */ (function (_super) {
    __extends(DocumentPicker, _super);
    function DocumentPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPicker.prototype.getFile = function (option) { return cordova(this, "getFile", {}, arguments); };
    DocumentPicker.pluginName = "IOSDocumentPicker";
    DocumentPicker.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPicker.pluginRef = "DocumentPicker";
    DocumentPicker.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPicker.platforms = ["iOS"];
    DocumentPicker = __decorate([
        Injectable()
    ], DocumentPicker);
    return DocumentPicker;
}(IonicNativePlugin));
export { DocumentPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXBpY2tlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnBDLGtDQUFpQjs7OztJQU9uRCxnQ0FBTyxhQUFDLE1BQWU7Ozs7OztJQVBaLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFoQzNCO0VBZ0NvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGlPUyBEb2N1bWVudFBpY2tlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogT3BlbnMgdGhlIGZpbGUgcGlja2VyIG9uIGlPUyBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGEgZmlsZSwgcmV0dXJucyBhIGZpbGUgVVJJLlxuICogQWxsb3dzIHRoZSB1c2VyIHRvIHVwbG9hZCBmaWxlcyBmcm9tIGlDbG91ZFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXBpY2tlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jUGlja2VyOiBEb2N1bWVudFBpY2tlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5kb2NQaWNrZXIuZ2V0RmlsZSgnYWxsJylcbiAqICAgLnRoZW4odXJpID0+IGNvbnNvbGUubG9nKHVyaSkpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJT1NEb2N1bWVudFBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50cGlja2VyLkRvY3VtZW50UGlja2VyJyxcbiAgcGx1Z2luUmVmOiAnRG9jdW1lbnRQaWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lhbXBvc3NpYmxlL0NvcmRvdmEtRG9jUGlja2VyJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UGlja2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBhIGZpbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25dIGZpbGVzIGJldHdlZW4gJ2ltYWdlJywgJ3BkZicgb3IgJ2FsbCdcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RmlsZShvcHRpb24/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19