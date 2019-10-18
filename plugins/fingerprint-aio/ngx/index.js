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
var FingerprintAIO = /** @class */ (function (_super) {
    __extends(FingerprintAIO, _super);
    function FingerprintAIO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FingerprintAIO.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIO.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIO.pluginName = "FingerprintAIO";
    FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIO.pluginRef = "Fingerprint";
    FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIO.platforms = ["Android", "iOS"];
    FingerprintAIO = __decorate([
        Injectable()
    ], FingerprintAIO);
    return FingerprintAIO;
}(IonicNativePlugin));
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbmdlcnByaW50LWFpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRXBDLGtDQUFpQjs7OztJQU1uRCxvQ0FBVztJQVVYLDZCQUFJLGFBQUMsT0FBMkI7Ozs7OztJQWhCckIsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQWxFM0I7RUFrRW9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZ2VycHJpbnRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEtleSBmb3IgcGxhdGZvcm0ga2V5Y2hhaW5cbiAgICovXG4gIGNsaWVudElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlY3JldCBwYXNzd29yZC4gT25seSBmb3IgYW5kcm9pZFxuICAgKi9cbiAgY2xpZW50U2VjcmV0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlICd1c2UgYmFja3VwJyBvcHRpb24uIE9ubHkgZm9yIGFuZHJvaWQgKG9wdGlvbmFsKVxuICAgKi9cbiAgZGlzYWJsZUJhY2t1cD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRpdGxlIG9mIGZhbGxiYWNrIGJ1dHRvbi4gT25seSBmb3IgaU9TXG4gICAqL1xuICBsb2NhbGl6ZWRGYWxsYmFja1RpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBpbiBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZS4gT25seSBmb3IgaU9TXG4gICAqL1xuICBsb2NhbGl6ZWRSZWFzb24/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgRmluZ2VycHJpbnQgQUlPXG4gKiBAZGVzY3JpcHRpb25cbiAqIFVzZSBzaW1wbGUgZmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gb24gQW5kcm9pZCBhbmQgaU9TLlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpby4gRm9yIG1vcmUgaW5mbyBhYm91dCBwbHVnaW4sIHZpc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9OaWtsYXNNZXJ6L2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpb1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmluZ2VycHJpbnRBSU8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbmdlcnByaW50LWFpby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFpbzogRmluZ2VycHJpbnRBSU8pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmFpby5zaG93KHtcbiAqICAgICBjbGllbnRJZDogJ0ZpbmdlcnByaW50LURlbW8nLCAvL0FuZHJvaWQ6IFVzZWQgZm9yIGVuY3J5cHRpb24uIGlPUzogdXNlZCBmb3IgZGlhbG9ndWUgaWYgbm8gYGxvY2FsaXplZFJlYXNvbmAgaXMgZ2l2ZW4uXG4gKiAgICAgY2xpZW50U2VjcmV0OiAnbzdhb09NWVVieXhhRDIzb0ZBbkonIC8vTmVjZXNzYXJ5IGZvciBBbmRyb2lkIGVuY3JweXRpb24gb2Yga2V5cy4gVXNlIHJhbmRvbSBzZWNyZXQga2V5LlxuICogICAgIGRpc2FibGVCYWNrdXA6dHJ1ZSwgIC8vT25seSBmb3IgQW5kcm9pZChvcHRpb25hbClcbiAqICAgICBsb2NhbGl6ZWRGYWxsYmFja1RpdGxlOiAnVXNlIFBpbicsIC8vT25seSBmb3IgaU9TXG4gKiAgICAgbG9jYWxpemVkUmVhc29uOiAnUGxlYXNlIGF1dGhlbnRpY2F0ZScgLy9Pbmx5IGZvciBpT1NcbiAqIH0pXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRmluZ2VycHJpbnRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmluZ2VycHJpbnRBSU8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbHVnaW5SZWY6ICdGaW5nZXJwcmludCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaW5nZXJwcmludEFJTyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIGlmIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGlzIGF2YWlsYWJsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWVcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3cob3B0aW9uczogRmluZ2VycHJpbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==