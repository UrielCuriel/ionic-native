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
import { Observable } from 'rxjs';
var DeviceMotion = /** @class */ (function (_super) {
    __extends(DeviceMotion, _super);
    function DeviceMotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceMotion.prototype.getCurrentAcceleration = function () { return cordova(this, "getCurrentAcceleration", {}, arguments); };
    DeviceMotion.prototype.watchAcceleration = function (options) { return cordova(this, "watchAcceleration", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    DeviceMotion.pluginName = "DeviceMotion";
    DeviceMotion.plugin = "cordova-plugin-device-motion";
    DeviceMotion.pluginRef = "navigator.accelerometer";
    DeviceMotion.repo = "https://github.com/apache/cordova-plugin-device-motion";
    DeviceMotion.platforms = ["Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Tizen", "Ubuntu", "Windows", "Windows Phone 8"];
    DeviceMotion = __decorate([
        Injectable()
    ], DeviceMotion);
    return DeviceMotion;
}(IonicNativePlugin));
export { DeviceMotion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1tb3Rpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFpRkEsZ0NBQWlCOzs7O0lBTWpELDZDQUFzQjtJQWN0Qix3Q0FBaUIsYUFDZixPQUEwQzs7Ozs7O0lBckJqQyxZQUFZO1FBRHhCLFVBQVUsRUFBRTtPQUNBLFlBQVk7dUJBbkZ6QjtFQW1Ga0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VNb3Rpb25BY2NlbGVyYXRpb25EYXRhIHtcbiAgLyoqXG4gICAqIEFtb3VudCBvZiBhY2NlbGVyYXRpb24gb24gdGhlIHgtYXhpcy4gKGluIG0vc14yKVxuICAgKi9cbiAgeDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgYWNjZWxlcmF0aW9uIG9uIHRoZSB5LWF4aXMuIChpbiBtL3NeMilcbiAgICovXG4gIHk6IG51bWJlcjtcblxuICAvKipcbiAgICogQW1vdW50IG9mIGFjY2VsZXJhdGlvbiBvbiB0aGUgei1heGlzLiAoaW4gbS9zXjIpXG4gICAqL1xuICB6OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0aW9uIHRpbWVzdGFtcCBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICB0aW1lc3RhbXA6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VNb3Rpb25BY2NlbGVyb21ldGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBSZXF1ZXN0ZWQgcGVyaW9kIG9mIGNhbGxzIHRvIGFjY2VsZXJvbWV0ZXJTdWNjZXNzIHdpdGggYWNjZWxlcmF0aW9uIGRhdGEgaW4gTWlsbGlzZWNvbmRzLiBEZWZhdWx0OiAxMDAwMFxuICAgKi9cbiAgZnJlcXVlbmN5PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIERldmljZSBNb3Rpb25cbiAqIEBkZXNjcmlwdGlvblxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1kZXZpY2UtbW90aW9uYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0RldmljZSBNb3Rpb24gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kZXZpY2UtbW90aW9uKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERldmljZU1vdGlvbiwgRGV2aWNlTW90aW9uQWNjZWxlcmF0aW9uRGF0YSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlLW1vdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlTW90aW9uOiBEZXZpY2VNb3Rpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIEdldCB0aGUgZGV2aWNlIGN1cnJlbnQgYWNjZWxlcmF0aW9uXG4gKiB0aGlzLmRldmljZU1vdGlvbi5nZXRDdXJyZW50QWNjZWxlcmF0aW9uKCkudGhlbihcbiAqICAgKGFjY2VsZXJhdGlvbjogRGV2aWNlTW90aW9uQWNjZWxlcmF0aW9uRGF0YSkgPT4gY29uc29sZS5sb2coYWNjZWxlcmF0aW9uKSxcbiAqICAgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogKTtcbiAqXG4gKiAvLyBXYXRjaCBkZXZpY2UgYWNjZWxlcmF0aW9uXG4gKiB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5kZXZpY2VNb3Rpb24ud2F0Y2hBY2NlbGVyYXRpb24oKS5zdWJzY3JpYmUoKGFjY2VsZXJhdGlvbjogRGV2aWNlTW90aW9uQWNjZWxlcmF0aW9uRGF0YSkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhY2NlbGVyYXRpb24pO1xuICogfSk7XG4gKlxuICogLy8gU3RvcCB3YXRjaFxuICogc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRGV2aWNlTW90aW9uQWNjZWxlcmF0aW9uRGF0YVxuICogRGV2aWNlTW90aW9uQWNjZWxlcm9tZXRlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZXZpY2VNb3Rpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZXZpY2UtbW90aW9uJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmFjY2VsZXJvbWV0ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kZXZpY2UtbW90aW9uJyxcbiAgcGxhdGZvcm1zOiBbXG4gICAgJ0FuZHJvaWQnLFxuICAgICdCbGFja0JlcnJ5IDEwJyxcbiAgICAnQnJvd3NlcicsXG4gICAgJ0ZpcmVmb3ggT1MnLFxuICAgICdpT1MnLFxuICAgICdUaXplbicsXG4gICAgJ1VidW50dScsXG4gICAgJ1dpbmRvd3MnLFxuICAgICdXaW5kb3dzIFBob25lIDgnXG4gIF1cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV2aWNlTW90aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGFjY2VsZXJhdGlvbiBhbG9uZyB0aGUgeCwgeSwgYW5kIHogYXhlcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlTW90aW9uQWNjZWxlcmF0aW9uRGF0YT59IFJldHVybnMgb2JqZWN0IHdpdGggeCwgeSwgeiwgYW5kIHRpbWVzdGFtcCBwcm9wZXJ0aWVzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRBY2NlbGVyYXRpb24oKTogUHJvbWlzZTxEZXZpY2VNb3Rpb25BY2NlbGVyYXRpb25EYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBkZXZpY2UgYWNjZWxlcmF0aW9uLiBDbGVhciB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0ge0FjY2VsZXJvbWV0ZXJPcHRpb25zfSBvcHRpb25zIGxpc3Qgb2Ygb3B0aW9ucyBmb3IgdGhlIGFjY2VsZXJvbWV0ZXIuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPERldmljZU1vdGlvbkFjY2VsZXJhdGlvbkRhdGE+fSBPYnNlcnZhYmxlIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHlvdSBjYW4gc3Vic2NyaWJlIHRvXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2NsZWFyV2F0Y2gnXG4gIH0pXG4gIHdhdGNoQWNjZWxlcmF0aW9uKFxuICAgIG9wdGlvbnM/OiBEZXZpY2VNb3Rpb25BY2NlbGVyb21ldGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPERldmljZU1vdGlvbkFjY2VsZXJhdGlvbkRhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==