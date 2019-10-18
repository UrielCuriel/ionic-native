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
var Broadcaster = /** @class */ (function (_super) {
    __extends(Broadcaster, _super);
    function Broadcaster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Broadcaster.prototype.addEventListener = function (eventName) { return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener", "clearWithArgs": true }, arguments); };
    Broadcaster.prototype.fireNativeEvent = function (eventName, eventData) { return cordova(this, "fireNativeEvent", {}, arguments); };
    Broadcaster.pluginName = "Broadcaster";
    Broadcaster.plugin = "cordova-plugin-broadcaster";
    Broadcaster.pluginRef = "broadcaster";
    Broadcaster.repo = "https://github.com/bsorrentino/cordova-broadcaster";
    Broadcaster.platforms = ["Android", "iOS", "Browser"];
    Broadcaster = __decorate([
        Injectable()
    ], Broadcaster);
    return Broadcaster;
}(IonicNativePlugin));
export { Broadcaster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jyb2FkY2FzdGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBK0JELCtCQUFpQjs7OztJQVdoRCxzQ0FBZ0IsYUFBQyxTQUFpQjtJQVdsQyxxQ0FBZSxhQUFDLFNBQWlCLEVBQUUsU0FBYzs7Ozs7O0lBdEJ0QyxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBakN4QjtFQWlDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBCcm9hZGNhc3RlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhZGRzIGV4Y2hhbmdpbmcgZXZlbnRzIGJldHdlZW4gbmF0aXZlIGNvZGUgYW5kIHlvdXIgYXBwLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQnJvYWRjYXN0ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jyb2FkY2FzdGVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBicm9hZGNhc3RlcjogQnJvYWRjYXN0ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIExpc3RlbiB0byBldmVudHMgZnJvbSBOYXRpdmVcbiAqIHRoaXMuYnJvYWRjYXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignZXZlbnROYW1lJykuc3Vic2NyaWJlKChldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpKTtcbiAqXG4gKiAvLyBTZW5kIGV2ZW50IHRvIE5hdGl2ZVxuICogdGhpcy5icm9hZGNhc3Rlci5maXJlTmF0aXZlRXZlbnQoJ2V2ZW50TmFtZScsIHt9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jyb2FkY2FzdGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYnJvYWRjYXN0ZXInLFxuICBwbHVnaW5SZWY6ICdicm9hZGNhc3RlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYnNvcnJlbnRpbm8vY29yZG92YS1icm9hZGNhc3RlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvYWRjYXN0ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGxpc3RlbiB0byBhbiBldmVudCBzZW50IGZyb20gdGhlIG5hdGl2ZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gd2F0Y2ggd2hlbiBhbiBldmVudCBpcyByZWNlaXZlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWVcbiAgfSlcbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc2VuZHMgZGF0YSB0byB0aGUgbmF0aXZlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge2FueX0gZXZlbnREYXRhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFuIGV2ZW50IGlzIHN1Y2Nlc3NmdWxseSBmaXJlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmaXJlTmF0aXZlRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50RGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==