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
var Webengage = /** @class */ (function (_super) {
    __extends(Webengage, _super);
    function Webengage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webengage.prototype.engage = function (config) { return cordova(this, "engage", {}, arguments); };
    Webengage.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    Webengage.prototype.track = function (eventName, attributes) { return cordova(this, "track", {}, arguments); };
    Webengage.prototype.screen = function (screenName, screenData) { return cordova(this, "screen", {}, arguments); };
    Webengage.pluginName = "Webengage";
    Webengage.plugin = "cordova-plugin-webengage";
    Webengage.pluginRef = "webengage";
    Webengage.repo = "https://github.com/WebEngage/cordova-plugin";
    Webengage.platforms = ["Android", "iOS"];
    Webengage = __decorate([
        Injectable()
    ], Webengage);
    return Webengage;
}(IonicNativePlugin));
export { Webengage };
var WebengageUser = /** @class */ (function (_super) {
    __extends(WebengageUser, _super);
    function WebengageUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUser.prototype.login = function (userId) { return cordova(this, "login", {}, arguments); };
    WebengageUser.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    WebengageUser.prototype.setAttribute = function (key, value) { return cordova(this, "setAttribute", {}, arguments); };
    WebengageUser.pluginName = "Webengage";
    WebengageUser.plugin = "cordova-plugin-webengage";
    WebengageUser.pluginRef = "webengage.user";
    WebengageUser = __decorate([
        Injectable()
    ], WebengageUser);
    return WebengageUser;
}(IonicNativePlugin));
export { WebengageUser };
var WebengagePush = /** @class */ (function (_super) {
    __extends(WebengagePush, _super);
    function WebengagePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePush.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengagePush.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengagePush.pluginName = "Webengage";
    WebengagePush.plugin = "cordova-plugin-webengage";
    WebengagePush.pluginRef = "webengage.push";
    WebengagePush = __decorate([
        Injectable()
    ], WebengagePush);
    return WebengagePush;
}(IonicNativePlugin));
export { WebengagePush };
var WebengageNotification = /** @class */ (function (_super) {
    __extends(WebengageNotification, _super);
    function WebengageNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotification.prototype.onShown = function (callback) { return cordova(this, "onShown", {}, arguments); };
    WebengageNotification.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengageNotification.prototype.onDismiss = function (callback) { return cordova(this, "onDismiss", {}, arguments); };
    WebengageNotification.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageNotification.pluginName = "Webengage";
    WebengageNotification.plugin = "cordova-plugin-webengage";
    WebengageNotification.pluginRef = "webengage.notification";
    WebengageNotification = __decorate([
        Injectable()
    ], WebengageNotification);
    return WebengageNotification;
}(IonicNativePlugin));
export { WebengageNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYmVuZ2FnZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEyQnpDLDZCQUFpQjs7OztJQU85QywwQkFBTSxhQUFDLE1BQVk7SUFXbkIsMkJBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTtJQVcvQix5QkFBSyxhQUFDLFNBQWlCLEVBQUUsVUFBZ0I7SUFXekMsMEJBQU0sYUFBQyxVQUFrQixFQUFFLFVBQWdCOzs7Ozs7SUF4Q2hDLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkE1QnRCO0VBNEIrQixpQkFBaUI7U0FBbkMsU0FBUzs7SUFzRGEsaUNBQWlCOzs7O0lBT2xELDZCQUFLLGFBQUMsTUFBYztJQVNwQiw4QkFBTTtJQVdOLG9DQUFZLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7SUEzQnpCLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYTt3QkFsRjFCO0VBa0ZtQyxpQkFBaUI7U0FBdkMsYUFBYTs7SUF5Q1MsaUNBQWlCOzs7O0lBT2xELCtCQUFPLGFBQUMsUUFBYTtJQVdyQiwrQkFBTyxhQUFDLEdBQVcsRUFBRSxLQUFVOzs7O0lBbEJwQixhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBM0gxQjtFQTJIbUMsaUJBQWlCO1NBQXZDLGFBQWE7O0lBZ0NpQix5Q0FBaUI7Ozs7SUFPMUQsdUNBQU8sYUFBQyxRQUFhO0lBVXJCLHVDQUFPLGFBQUMsUUFBYTtJQVVyQix5Q0FBUyxhQUFDLFFBQWE7SUFXdkIsdUNBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTs7OztJQXRDcEIscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQjtnQ0EzSmxDO0VBMkoyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgV2ViZW5nYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIElvbmljLU5hdGl2ZSB3cmFwcGVyIHRoYXQgd3JhcHMgV2ViZW5nYWdlIENvcmRvdmEgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYmVuZ2FnZSwgV2ViZW5nYWdlVXNlciwgV2ViZW5nYWdlUHVzaCwgV2ViZW5nYWdlTm90aWZpY2F0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS93ZWJlbmdhZ2Uvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJlbmdhZ2U6IFdlYmVuZ2FnZSwgcHJpdmF0ZSB3ZWJlbmdhZ2VVc2VyOiBXZWJlbmdhZ2VVc2VyLCBwcml2YXRlIHdlYmVuZ2FnZVB1c2g6IFdlYmVuZ2FnZVB1c2gsIHByaXZhdGUgd2ViZW5nYWdlTm90aWZpY2F0aW9uOiBXZWJlbmdhZ2VOb3RpZmljYXRpb24gKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLndlYmVuZ2FnZS5lbmdhZ2UoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vV2ViRW5nYWdlL2NvcmRvdmEtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgV2ViRW5nYWdlIFNES1xuICAgKiBAcGFyYW0ge2FueX0gW2NvbmZpZ11cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmdhZ2UoY29uZmlnPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBXZWJFbmdhZ2UgU0RLIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHthbnl9IFthdHRyaWJ1dGVzXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIHNjcmVlblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7YW55fSBbc2NyZWVuRGF0YV1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzY3JlZW4oc2NyZWVuTmFtZTogc3RyaW5nLCBzY3JlZW5EYXRhPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnVzZXInXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVVzZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2dzIHVzZXIgaW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9ncyB1c2VyIG91dFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYXR0cmlidXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QXR0cmlidXRlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnB1c2gnXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBwdXNoIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uQ2xpY2soY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcHVzaCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2Uubm90aWZpY2F0aW9uJ1xufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VOb3RpZmljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIHNob3duXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uU2hvd24oY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIGluLWFwcCBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkNsaWNrKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIGRpc21pc3NlZFxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkRpc21pc3MoY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgaW4tYXBwIG5vdGlmaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=