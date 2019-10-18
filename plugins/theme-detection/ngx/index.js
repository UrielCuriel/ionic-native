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
var ThemeDetection = /** @class */ (function (_super) {
    __extends(ThemeDetection, _super);
    function ThemeDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetection.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThemeDetection.prototype.isDarkModeEnabled = function () { return cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetection.pluginName = "ThemeDetection";
    ThemeDetection.plugin = "cordova-plugin-theme-detection";
    ThemeDetection.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetection.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetection.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetection.installVariables = [];
    ThemeDetection.platforms = ["iOS", "Android"];
    ThemeDetection = __decorate([
        Injectable()
    ], ThemeDetection);
    return ThemeDetection;
}(IonicNativePlugin));
export { ThemeDetection };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RoZW1lLWRldGVjdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnRHBDLGtDQUFpQjs7OztJQVFuRCxvQ0FBVztJQVVYLDBDQUFpQjs7Ozs7Ozs7SUFsQk4sY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQWpEM0I7RUFpRG9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVEZXRlY3Rpb25SZXNwb25zZSB7XG4gIC8vIEJvb2xlYW4gdmFsdWUgYWJvdXQgdGhlIHN0YXR1cyBvZiB0aGUgcmVxdWVzdFxuICB2YWx1ZTogYm9vbGVhbjtcblxuICAvLyBNZXNzYWdlIGZvciByZWFkYWJsZSB1c2FnZVxuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIFRoZW1lIERldGVjdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBkZXRlY3Qgd2hldGhlciBkYXJrIG1vZGUgaXMgZW5hYmxlZCBvciBub3RcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRoZW1lRGV0ZWN0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90aGVtZS1kZXRlY3Rpb24nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lRGV0ZWN0aW9uOiBUaGVtZURldGVjdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy50aGVtZURldGVjdGlvbi5pc0F2YWlsYWJsZSgpXG4gKiAgIC50aGVuKChyZXM6IFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2UpID0+IHtcbiAqICAgICAgaWYocmVzLnZhbHVlKSB7XG4gKiAgICAgICAgdGhpcy50aGVtZURldGVjdGlvbi5pc0RhcmtNb2RlRW5hYmxlZCgpLnRoZW4oKHJlczogVGhlbWVEZXRlY3Rpb25SZXNwb25zZSkgPT4ge1xuICogICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAqICAgICAgICB9KVxuICogICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogICAgICB9XG4gKiAgIH0pXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RoZW1lRGV0ZWN0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGhlbWUtZGV0ZWN0aW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlRoZW1lRGV0ZWN0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJpdXNiYWNrZXMvY29yZG92YS1wbHVnaW4tdGhlbWUtZGV0ZWN0aW9uJyxcbiAgaW5zdGFsbDogJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi10aGVtZS1kZXRlY3Rpb24nLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGhlbWVEZXRlY3Rpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT59XG4gICAqICBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuIG9iamVjdCB0aGF0IGhhcyBhIGJvb2xlYW4gcHJvcGVydHkgd2hpY2ggZ2l2ZXMgaW5mb3JtYXRpb24gaWYgdGhlIGRldGVjdGlvbiBpcyBhdmFpbGFibGUgb3Igbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2U+fVxuICAgKiAgUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhbiBvYmplY3QgdGhhdCBoYXMgYSBib29sZWFuIHByb3BlcnR5IHdoaWNoIGdpdmVzIGluZm9ybWF0aW9uIGlmIGRhcmsgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0RhcmtNb2RlRW5hYmxlZCgpOiBQcm9taXNlPFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19