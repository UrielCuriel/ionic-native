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
import { fromEvent } from 'rxjs';
var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    Banner.prototype.show = function (opts) { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Banner.plugin = "cordova-admob-plus";
    Banner.pluginName = "AdMob";
    Banner.pluginRef = "admob.banner";
    Banner.repo = "https://github.com/admob-plus/admob-plus";
    Banner.platforms = ["Android", "iOS"];
    Banner = __decorate([], Banner);
    return Banner;
}());
export { Banner };
var Interstitial = /** @class */ (function () {
    function Interstitial() {
    }
    Interstitial.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    Interstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Interstitial.plugin = "cordova-admob-plus";
    Interstitial.pluginName = "AdMob";
    Interstitial.pluginRef = "admob.interstitial";
    Interstitial = __decorate([], Interstitial);
    return Interstitial;
}());
export { Interstitial };
var RewardVideo = /** @class */ (function () {
    function RewardVideo() {
    }
    RewardVideo.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    RewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    RewardVideo.plugin = "cordova-admob-plus";
    RewardVideo.pluginName = "AdMob";
    RewardVideo.pluginRef = "admob.rewardVideo";
    RewardVideo = __decorate([], RewardVideo);
    return RewardVideo;
}());
export { RewardVideo };
var AdMob = /** @class */ (function (_super) {
    __extends(AdMob, _super);
    function AdMob() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMob.prototype.setAppMuted = function (value) { return cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMob.prototype.setAppVolume = function (value) { return cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMob.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMob.platforms = ["Android", "iOS"];
    AdMob.plugin = "cordova-admob-plus";
    AdMob.pluginName = "AdMob";
    AdMob.pluginRef = "admob";
    AdMob.repo = "https://github.com/admob-plus/admob-plus";
    AdMob = __decorate([
        Injectable()
    ], AdMob);
    return AdMob;
}(IonicNativePlugin));
export { AdMob };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkbW9iLXBsdXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQXFCekMscUJBQUk7SUFLSixxQkFBSSxhQUFDLElBQTZCOzs7Ozs7SUFQekIsTUFBTSxrQkFBTixNQUFNO2lCQXJCbkI7O1NBcUJhLE1BQU07Ozs7SUFtQmYsMkJBQUksYUFBQyxJQUE2QjtJQUtsQywyQkFBSTs7OztJQVBLLFlBQVksa0JBQVosWUFBWTt1QkF0Q3pCOztTQXNDYSxZQUFZOzs7O0lBbUJyQiwwQkFBSSxhQUFDLElBQTZCO0lBS2xDLDBCQUFJOzs7O0lBUEssV0FBVyxrQkFBWCxXQUFXO3NCQXZEeEI7O1NBdURhLFdBQVc7O0lBb0JHLHlCQUFpQjs7O1FBQ3hDLFlBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7OztJQUdoQywyQkFBVyxhQUFDLEtBQWM7SUFLMUIsNEJBQVksYUFBQyxLQUFhO0lBSTFCLGtCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ1osT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQWpCUSxLQUFLO1FBRGpCLFVBQVUsRUFBRTtPQUNBLEtBQUs7Z0JBM0VsQjtFQTJFMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBBZFVuaXRJRE9wdGlvbiA9IHN0cmluZyB8IHtcbiAgICBhbmRyb2lkOiBzdHJpbmc7XG4gICAgaW9zOiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIEBuYW1lIEFkTW9iIFBsdXNcbiAqIEBkZXNjcmlwdGlvblxuICogQWRNb2IgUGx1cyBpcyB0aGUgc3VjY2Vzc29yIG9mIGNvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWUsIHdoaWNoIHByb3ZpZGVzIGEgY2xlYW5lciBBUEkgYW5kIGJ1aWxkIHdpdGggbW9kZXJuIHRvb2xzLlxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxuICAgIHBsdWdpbk5hbWU6ICdBZE1vYicsXG4gICAgcGx1Z2luUmVmOiAnYWRtb2IuYmFubmVyJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkbW9iLXBsdXMvYWRtb2ItcGx1cycsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGhpZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2hvdyhvcHRzOiB7IGlkPzogQWRVbml0SURPcHRpb24gfSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXG4gICAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcbiAgICBwbHVnaW5SZWY6ICdhZG1vYi5pbnRlcnN0aXRpYWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcnN0aXRpYWwge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZChvcHRzOiB7IGlkPzogQWRVbml0SURPcHRpb24gfSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcbiAgICBwbHVnaW5OYW1lOiAnQWRNb2InLFxuICAgIHBsdWdpblJlZjogJ2FkbW9iLnJld2FyZFZpZGVvJyxcbn0pXG5leHBvcnQgY2xhc3MgUmV3YXJkVmlkZW8ge1xuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgbG9hZChvcHRzOiB7IGlkPzogQWRVbml0SURPcHRpb24gfSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn1cblxuQFBsdWdpbih7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG4gICAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcbiAgICBwbHVnaW5OYW1lOiAnQWRNb2InLFxuICAgIHBsdWdpblJlZjogJ2FkbW9iJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkbW9iLXBsdXMvYWRtb2ItcGx1cycsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkTW9iIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIGJhbm5lciA9IG5ldyBCYW5uZXIoKTtcbiAgICBpbnRlcnN0aXRpYWwgPSBuZXcgSW50ZXJzdGl0aWFsKCk7XG4gICAgcmV3YXJkVmlkZW8gPSBuZXcgUmV3YXJkVmlkZW8oKTtcblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXBwTXV0ZWQodmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzZXRBcHBWb2x1bWUodmFsdWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGZyb21FdmVudChkb2N1bWVudCwgZXZlbnQpO1xuICAgIH1cbn1cbiJdfQ==