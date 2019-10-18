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
var DeviceFeedback = /** @class */ (function (_super) {
    __extends(DeviceFeedback, _super);
    function DeviceFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceFeedback.prototype.acoustic = function () { return cordova(this, "acoustic", { "sync": true }, arguments); };
    DeviceFeedback.prototype.haptic = function (type) { return cordova(this, "haptic", { "sync": true }, arguments); };
    DeviceFeedback.prototype.isFeedbackEnabled = function () { return cordova(this, "isFeedbackEnabled", {}, arguments); };
    DeviceFeedback.pluginName = "DeviceFeedback";
    DeviceFeedback.plugin = "cordova-plugin-velda-devicefeedback";
    DeviceFeedback.pluginRef = "plugins.deviceFeedback";
    DeviceFeedback.repo = "https://github.com/VVelda/device-feedback";
    DeviceFeedback.platforms = ["Android"];
    DeviceFeedback = __decorate([
        Injectable()
    ], DeviceFeedback);
    return DeviceFeedback;
}(IonicNativePlugin));
export { DeviceFeedback };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1mZWVkYmFjay9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRHBDLGtDQUFpQjs7OztJQUtuRCxpQ0FBUTtJQU9SLCtCQUFNLGFBQUMsSUFBWTtJQU9uQiwwQ0FBaUI7Ozs7OztJQW5CTixjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBbEQzQjtFQWtEb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VGZWVkYmFja1N0YXR1cyB7XG4gIC8qKiBIYXB0aWMgRmVlZGJhY2sgKi9cbiAgaGFwdGljOiBib29sZWFuO1xuXG4gIC8qKiBBY291c3RpYyBGZWVkYmFjayAqL1xuICBhY291c3RpYzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBEZXZpY2UgRmVlZGJhY2tcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFBsdWdpbiB0aGF0IGxldHMgeW91IHByb3ZpZGUgaGFwdGljIG9yIGFjb3VzdGljIGZlZWRiYWNrIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERldmljZUZlZWRiYWNrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2UtZmVlZGJhY2svbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZUZlZWRiYWNrOiBEZXZpY2VGZWVkYmFjaykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZGV2aWNlRmVlZGJhY2suYWNvdXN0aWMoKTtcbiAqXG4gKiB0aGlzLmRldmljZUZlZWRiYWNrLmhhcHRpYygwKTtcbiAqXG4gKiB0aGlzLmRldmljZUZlZWRiYWNrLmlzRmVlZGJhY2tFbmFibGVkKCkudGhlbihmZWVkYmFjayA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coZmVlZGJhY2spO1xuICogICAgIC8vIHtcbiAqICAgICAvLyAgIGFjb3VzdGljOiB0cnVlLFxuICogICAgIC8vICAgaGFwdGljOiB0cnVlXG4gKiAgICAgLy8gfVxuICogICB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbm50ZXJmYWNlc1xuICogRGV2aWNlRmVlZGJhY2tFbmFibGVkXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGV2aWNlRmVlZGJhY2snLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi12ZWxkYS1kZXZpY2VmZWVkYmFjaycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuZGV2aWNlRmVlZGJhY2snLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1ZWZWxkYS9kZXZpY2UtZmVlZGJhY2snLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERldmljZUZlZWRiYWNrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUHJvdmlkZSBzb3VuZCBmZWVkYmFjayB0byB1c2VyLCBuZXZlcnRoZWxlc3MgcmVzcGVjdCB1c2VyJ3Mgc2V0dGluZ3MgYW5kIGN1cnJlbnQgYWN0aXZlIGRldmljZSBwcm9maWxlIGFzIG5hdGl2ZSBmZWVkYmFjayBkby5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhY291c3RpYygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgdmlicmF0ZSBmZWVkYmFjayB0byB1c2VyLCBuZXZlcnRoZWxlc3MgcmVzcGVjdCB1c2VyJ3MgdGFjdGlsZSBmZWVkYmFjayBzZXR0aW5nIGFzIG5hdGl2ZSBmZWVkYmFjayBkby5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgU3BlY2lmeSB0eXBlIG9mIHZpYnJhdGlvbiBmZWVkYmFjay4gMCBmb3IgbG9uZyBwcmVzcywgMSBmb3IgdmlydHVhbCBrZXksIG9yIDMgZm9yIGtleWJvYXJkIHRhcC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBoYXB0aWModHlwZTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBoYXB0aWMgYW5kIGFjb3VzdGljIGZlZWRiYWNrIGlzIGVuYWJsZWQgYnkgdXNlciBzZXR0aW5ncy5cbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlRmVlZGJhY2tFbmFibGVkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNGZWVkYmFja0VuYWJsZWQoKTogUHJvbWlzZTxEZXZpY2VGZWVkYmFja1N0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19