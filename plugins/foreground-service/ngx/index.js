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
var ForegroundService = /** @class */ (function (_super) {
    __extends(ForegroundService, _super);
    function ForegroundService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForegroundService.prototype.start = function (title, text, icon, importance, id) {
        if (importance === void 0) { importance = 1; }
        if (id === void 0) { id = 0; }
        return cordova(this, "start", { "sync": true }, arguments);
    };
    ForegroundService.prototype.stop = function () { return cordova(this, "stop", { "sync": true }, arguments); };
    ForegroundService.pluginName = "ForegroundService";
    ForegroundService.plugin = "cordova-plugin-foreground-service";
    ForegroundService.pluginRef = "cordova.plugins.foregroundService";
    ForegroundService.repo = "https://github.com/DavidBriglio/cordova-plugin-foreground-service";
    ForegroundService.platforms = ["Android"];
    ForegroundService = __decorate([
        Injectable()
    ], ForegroundService);
    return ForegroundService;
}(IonicNativePlugin));
export { ForegroundService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZvcmVncm91bmQtc2VydmljZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnRGpDLHFDQUFpQjs7OztJQStCdEQsaUNBQUssYUFBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLElBQWEsRUFBRSxVQUF5QixFQUFFLEVBQU07UUFBakMsMkJBQUEsRUFBQSxjQUF5QjtRQUFFLG1CQUFBLEVBQUEsTUFBTTs7O0lBVW5GLGdDQUFJOzs7Ozs7SUF6Q08saUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtPQUNBLGlCQUFpQjs0QkFqRDlCO0VBaUR1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRm9yZWdyb3VuZCBTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyBmb3IgYW5kcm9pZCBkZXZpY2VzIHRvIGNvbnRpbnVlIHJ1bm5pbmcgc2VydmljZXMgaW4gdGhlIGJhY2tncm91bmQsIHVzaW5nIGFcbiAqIGZvcmVncm91bmQgb25nb2luZyBub3RpZmljYXRpb24uIFRoaXMgaXMgdGFyZ2V0ZWQgdG93YXJkcyB1c2Ugd2l0aCBwbHVnaW5zIHN1Y2ggYXNcbiAqICdjb3Jkb3ZhLWdlb2xvY2F0aW9uJyB0aGF0IHdpbGwgbm90IHJ1biB3aGlsZSB0aGUgYXBwIGlzIGluIHRoZSBiYWNrZ3JvdW5kIG9uIGFuZHJvaWQgQVBJIDI2Ky5cbiAqXG4gKiBGb3IgYW5kcm9pZCBBUEkgMjgrLCB0aGUgZm9sbG93aW5nIHhtbCBzbmlwcGV0IHNob3VsZCBiZSBpbnNlcnRlZCBpbnRvIGBgYGNvbmZpZy54bWxgYGA6XG4gKlxuICogYGBgXG4gKiAuLi5cbiAqIDxwbGF0Zm9ybSBuYW1lPVwiYW5kcm9pZFwiPlxuICogICA8Y29uZmlnLWZpbGUgcGFyZW50PVwiLypcIiB0YXJnZXQ9XCJBbmRyb2lkTWFuaWZlc3QueG1sXCI+XG4gKiAgICAgPHVzZXMtcGVybWlzc2lvbiBhbmRyb2lkOm5hbWU9XCJhbmRyb2lkLnBlcm1pc3Npb24uRk9SRUdST1VORF9TRVJWSUNFXCIgLz5cbiAqICAgPC9jb25maWctZmlsZT5cbiAqICAgLi4uXG4gKiBgYGBcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRm9yZWdyb3VuZFNlcnZpY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZvcmVncm91bmQtc2VydmljZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgZm9yZWdyb3VuZFNlcnZpY2U6IEZvcmVncm91bmRTZXJ2aWNlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBzdGFydFNlcnZpY2UoKSB7XG4gKiAgLy8gTm90aWZpY2F0aW9uIGltcG9ydGFuY2UgaXMgb3B0aW9uYWwsIHRoZSBkZWZhdWx0IGlzIDEgLSBMb3cgKG5vIHNvdW5kIG9yIHZpYnJhdGlvbilcbiAqICB0aGlzLmZvcmVncm91bmRTZXJ2aWNlLnN0YXJ0KCdHUFMgUnVubmluZycsICdCYWNrZ3JvdW5kIFNlcnZpY2UnLCAnZHJhd2FibGUvZnNpY29uJyk7XG4gKiB9XG4gKlxuICogc3RvcFNlcnZpY2UoKSB7XG4gKiAgLy8gRGlzYWJsZSB0aGUgZm9yZWdyb3VuZCBzZXJ2aWNlXG4gKiAgdGhpcy5mb3JlZ3JvdW5kU2VydmljZS5zdG9wKCk7XG4gKiB9XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRm9yZWdyb3VuZFNlcnZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mb3JlZ3JvdW5kLXNlcnZpY2UnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZm9yZWdyb3VuZFNlcnZpY2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJpZ2xpby9jb3Jkb3ZhLXBsdWdpbi1mb3JlZ3JvdW5kLXNlcnZpY2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcmVncm91bmRTZXJ2aWNlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBmb3JlZ3JvdW5kIHNlcnZpY2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIChjb250ZW50IHRpdGxlKSBBIGJyaWVmIGhlYWRsaW5lIGZvciB0aGUgbm90aWZpY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IChjb250ZW50IHRleHQpIFN1cHBvcnRpbmcgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gVGhlIGRyYXdhYmxlIGljb24gY2FuIGJlIGFueSBkcmF3YWJsZSBpbWFnZSB0aGF0IGV4aXN0cyBpbiB0aGUgcmVzb3VyY2UgZm9sZGVyLiBUaGlzIG1lYW5zIHlvdSBtdXN0IGNvcHkgdGhlIGljb24geW91IHdhbnQgdG8gdXNlIGludG8gdGhlIHBsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvZHJhd2FibGUgZm9sZGVyIHNldC4gSWYgbm8gaWNvbiBjYW4gYmUgZm91bmQgdXNpbmcgdGhlIGljb24gbmFtZSBwYXJhbWV0ZXIsIGEgZGVmYXVsdCBzdGFyIGljb24gd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBGb3IgYW4gZXhhbXBsZSwgaWYgdGhlIGBmc2ljb24ucG5nYCAoc2VlIHhtbCBiZWxvdykgcmVzaWRlcyBoZXJlOiBgYGBzcmMvYXNzZXRzL2ljb24vZnNpY29uLnBuZ2BgYC4gVGhlbiBgYGBpY29uYGBgIHBhcmFtZXRlciB2YWx1ZSB3b3VsZCBiZSBgYGAnZHJhd2FibGUvZnNpY29uJ2BgYC4gSW4gb3JkZXIgZm9yIHRoaXMgZXhhbXBsZSB0byB3b3JrLCB0aGUgZm9sbG93aW5nIHhtbCBzbmlwcGV0IG11c3QgYmUgaW4gYGBgY29uZmlnLnhtbGBgYC5cbiAgICpcbiAgICogYGBgXG4gICAqIDxwbGF0Zm9ybSBuYW1lPVwiYW5kcm9pZFwiPlxuICAgKiAgIDxyZXNvdXJjZS1maWxlIHNyYz1cInd3dy9hc3NldHMvaWNvbi9mc2ljb24ucG5nXCIgdGFyZ2V0PVwiYXBwL3NyYy9tYWluL3Jlcy9kcmF3YWJsZS9mc2ljb24ucG5nXCIgLz5cbiAgICogICAuLi5cbiAgICogYGBgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbXBvcnRhbmNlIE5vdGlmaWNhdGlvbiBpbXBvcnRhbmNlIGRpY3RhdGVzIGhvdyB0aGUgbm90aWZpY2F0aW9uIGlzIGluaXRpYWxseSBwcmVzZW50ZWQ6XG4gICAqXG4gICAqIFZhbHVlIHwgSW1wb3J0YW5jZSB8IERlc2NyaXB0aW9uIHwgRXhhbXBsZXNcbiAgICogLS0tIHwgLS0tIHwgLS0tIHwgLS0tXG4gICAqIDF8SU1QT1JUQU5DRV9MT1d8RG9lcyBub3QgbWFrZSBhIHNvdW5kIG9yIGhlYWRzLXVwIGRpc3BsYXkgKHBsdWdpbidzIGRlZmF1bHQpfE5ldyBjb250ZW50IHRoZSB1c2VyIGhhcyBzdWJzY3JpYmVkIHRvLCBzb2NpYWwgbmV0d29yayBpbnZpdGF0aW9uc1xuICAgKiAyfElNUE9SVEFOQ0VfREVGQVVMVHxNYWtlcyBhIHNvdW5kLCBidXQgbm8gaGVhZHMtdXAgZGlzcGxheXxUcmFmZmljIGFsZXJ0cywgdGFzayByZW1pbmRlcnNcbiAgICogM3xJTVBPUlRBTkNFX0hJR0h8TWFrZXMgYSBzb3VuZCBhbmQgaGVhZHMtdXAgZGlzcGxheXxUZXh0IG1lc3NhZ2VzLCBhbGFybXMsIHBob25lIGNhbGxzXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBUaGUgbm90aWZpY2F0aW9uIGlkIGlzIGEgY3VzdG9taXphYmxlIGludGVnZXIgdGhhdCBpcyB1c2VkIHRvIHJlZmVyZW5jZSB0aGUgbm90aWZpY2F0aW9uIHRoYXQgd2lsbCBiZSBsYXVuY2hlZC4gVGhpcyBpcyBjdXN0b21pemFibGUgdG8gYXZvaWQgY29uZmxpY3Rpbmcgd2l0aCBhbnkgb3RoZXIgbm90aWZpY2F0aW9ucy4gSWYgdGhpcyBpcyBub3QgaW5jbHVkZWQsIGEgWyp1bmlxdWUqXSBkZWZhdWx0IGlkIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogQHNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9wbGF0Zm9ybS1ndWlkYW5jZS9hbmRyb2lkLW5vdGlmaWNhdGlvbnMuaHRtbFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgc3RhcnQodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBpbXBvcnRhbmNlOiAxIHwgMiB8IDMgPSAxLCBpZCA9IDApOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGZvcmVncm91bmQgc2VydmljZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgc3RvcCgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==