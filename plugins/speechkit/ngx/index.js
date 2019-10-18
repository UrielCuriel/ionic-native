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
var SpeechKit = /** @class */ (function (_super) {
    __extends(SpeechKit, _super);
    function SpeechKit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechKit.prototype.tts = function (text, language, voice) { return cordova(this, "tts", {}, arguments); };
    SpeechKit.prototype.asr = function (language) { return cordova(this, "asr", { "platforms": ["Android"] }, arguments); };
    SpeechKit.pluginName = "SpeechKit";
    SpeechKit.plugin = "cordova-plugin-nuance-speechkit";
    SpeechKit.pluginRef = "plugins.speechkit";
    SpeechKit.repo = "https://github.com/Shmarkus/cordova-plugin-nuance-speechkit";
    SpeechKit.platforms = ["Android", "iOS"];
    SpeechKit = __decorate([
        Injectable()
    ], SpeechKit);
    return SpeechKit;
}(IonicNativePlugin));
export { SpeechKit };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwZWVjaGtpdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QnpDLDZCQUFpQjs7OztJQU85Qyx1QkFBRyxhQUNELElBQVksRUFDWixRQUFnQixFQUNoQixLQUFhO0lBVWYsdUJBQUcsYUFDRCxRQUFnQjs7Ozs7O0lBckJQLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkE5QnRCO0VBOEIrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNwZWVjaEtpdFxuICogQGRlc2NyaXB0aW9uXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBOdWFuY2UgU3BlZWNoS2l0IFNESyBvbiBJb25pY1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3BlZWNoS2l0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGVlY2hraXQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwZWVjaGtpdDogU3BlZWNoS2l0KSB7IH1cbiAqXG4gKlxuICogLy8gZmluZCB2b2ljZSBuYW1lcyB0aGF0IG1hdGNoIGxhbmd1YWdlIGZyb206IGh0dHBzOi8vZGV2ZWxvcGVyLm51YW5jZS5jb20vcHVibGljL2luZGV4LnBocD90YXNrPXN1cHBvcnRlZExhbmd1YWdlc1xuICogdGhpcy5zcGVlY2hraXQudHRzKCdUZXh0IHRvIGJlIHJlYWQgb3V0IGxvdWQnLCAnRU5HLUdCUicsICdTZXJlbmEnKS50aGVuKFxuICogICAobXNnKSA9PiB7IGNvbnNvbGUubG9nKG1zZyk7IH0sXG4gKiAgIChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKTsgfVxuICogKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NwZWVjaEtpdCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW51YW5jZS1zcGVlY2hraXQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnNwZWVjaGtpdCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vU2htYXJrdXMvY29yZG92YS1wbHVnaW4tbnVhbmNlLXNwZWVjaGtpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwZWVjaEtpdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogU3BlYWsgdGV4dCBvdXQgbG91ZCBpbiBnaXZlbiBsYW5ndWFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0dHMoXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGxhbmd1YWdlOiBzdHJpbmcsXG4gICAgdm9pY2U6IHN0cmluZ1xuICApOiBQcm9taXNlPHN0cmluZz4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVHJ5IHRvIHJlY29nbml6ZSB3aGF0IHRoZSB1c2VyIHNhaWRcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG4gIH0pXG4gIGFzcihcbiAgICBsYW5ndWFnZTogc3RyaW5nXG4gICk6IFByb21pc2U8c3RyaW5nPiB7IHJldHVybjsgfVxuXG59XG4iXX0=