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
var LastCam = /** @class */ (function (_super) {
    __extends(LastCam, _super);
    function LastCam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LastCam.prototype.startCamera = function (options) { return cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    LastCam.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    LastCam.prototype.switchCamera = function () { return cordova(this, "switchCamera", {}, arguments); };
    LastCam.prototype.switchFlash = function () { return cordova(this, "switchFlash", {}, arguments); };
    LastCam.prototype.takePicture = function () { return cordova(this, "takePicture", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCam.prototype.startVideoCapture = function () { return cordova(this, "startVideoCapture", {}, arguments); };
    LastCam.prototype.stopVideoCapture = function () { return cordova(this, "stopVideoCapture", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCam.prototype.recordingTimer = function () { return cordova(this, "recordingTimer", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCam.prototype.watchRecordingTimer = function () { return cordova(this, "watchRecordingTimer", { "successIndex": 0, "errorIndex": 1, "observable": true }, arguments); };
    LastCam.pluginName = "LastCam";
    LastCam.plugin = "cordova-plugin-last-cam";
    LastCam.pluginRef = "LastCam";
    LastCam.repo = "https://github.com/bengejd/cordova-plugin-last-cam";
    LastCam.platforms = ["iOS"];
    LastCam = __decorate([
        Injectable()
    ], LastCam);
    return LastCam;
}(IonicNativePlugin));
export { LastCam };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xhc3QtY2FtL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBb0NMLDJCQUFpQjs7OztJQVU1Qyw2QkFBVyxhQUFDLE9BQThCO0lBUzFDLDRCQUFVO0lBU1YsOEJBQVk7SUFTWiw2QkFBVztJQVlYLDZCQUFXO0lBU1gsbUNBQWlCO0lBWWpCLGtDQUFnQjtJQVloQixnQ0FBYztJQWFkLHFDQUFtQjs7Ozs7O0lBL0ZSLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkF0Q3BCO0VBc0M2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhc3RDYW1TdGFydHVwT3B0aW9ucyB7XG4gIC8qKiBUaGUgbGVmdCBlZGdlIGluIHBpeGVscywgZGVmYXVsdCAwICovXG4gIHg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSB0b3AgZWRnZSBpbiBwaXhlbHMsIGRlZmF1bHQgMCAqL1xuICB5PzogbnVtYmVyO1xuXG4gIC8qKiBUaGUgd2lkdGggaW4gcGl4ZWxzLCBkZWZhdWx0IHdpbmRvdy5zY3JlZW4ud2lkdGggKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzLCBkZWZhdWx0IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKiogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlICdmcm9udCcgb3IgJ2JhY2snLCBkZWZhdWx0ICdmcm9udCcgKi9cbiAgY2FtZXJhPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIExhc3RDYW1cbiAqIEBkZXNjcmlwdGlvblxuICogTGFzdCBDYW0gaXMgYSBDYW1lcmEgUHJldmlldyBwbHVnaW4gdGhhdCBhbGxvd3MgeW91IHRvIHRha2UgY2FwdHVyZSBib3RoIFZpZGVvcyBhbmQgaW1hZ2VzIGluIGFcbiAqIGN1c3RvbSBodG1sIHByZXZpZXcgb2YgeW91ciBjaG9pY2UuXG4gKlxuICogQGludGVyZmFjZXNcbiAqIExhc3RDYW1TdGFydHVwT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xhc3RDYW0nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sYXN0LWNhbScsXG4gIHBsdWdpblJlZjogJ0xhc3RDYW0nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2JlbmdlamQvY29yZG92YS1wbHVnaW4tbGFzdC1jYW0nLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFzdENhbSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgY2FtZXJhIHByZXZpZXcgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7TGFzdENhbVN0YXJ0dXBPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzdGFydENhbWVyYShvcHRpb25zOiBMYXN0Q2FtU3RhcnR1cE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0aGUgY2FtZXJhIHByZXZpZXcgaW5zdGFuY2UuIChpT1MpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcENhbWVyYSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggZnJvbSB0aGUgcmVhciBjYW1lcmEgYW5kIGZyb250IGNhbWVyYSwgaWYgYXZhaWxhYmxlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN3aXRjaENhbWVyYSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdGhlIGZsYXNoIG1vZGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3dpdGNoRmxhc2goKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGFrZSB0aGUgcGljdHVyZSAoYmFzZTY0KVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgdGFrZVBpY3R1cmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHZpZGVvIGNhcHR1cmVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFZpZGVvQ2FwdHVyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0aGUgdmlkZW8gY2FwdHVyZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgc3RvcFZpZGVvQ2FwdHVyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9taXNlIG9mIHRoZSByZWNvcmRpbmdUaW1lci5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAxXG4gIH0pXG4gIHJlY29yZGluZ1RpbWVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIHJlY29yZGluZ1RpbWVyLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDEsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICB3YXRjaFJlY29yZGluZ1RpbWVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=