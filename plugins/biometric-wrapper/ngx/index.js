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
var BiometricWrapper = /** @class */ (function (_super) {
    __extends(BiometricWrapper, _super);
    function BiometricWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapper.prototype.activateIris = function (args) { return cordova(this, "activateIris", {}, arguments); };
    BiometricWrapper.prototype.activateFingerprint = function (args) { return cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapper.pluginName = "BiometricWrapper";
    BiometricWrapper.plugin = "cordova-plugin-biometric";
    BiometricWrapper.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapper.repo = "";
    BiometricWrapper.install = "";
    BiometricWrapper.installVariables = [];
    BiometricWrapper.platforms = ["Android"];
    BiometricWrapper = __decorate([
        Injectable()
    ], BiometricWrapper);
    return BiometricWrapper;
}(IonicNativePlugin));
export { BiometricWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jpb21ldHJpYy13cmFwcGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDbEMsb0NBQWlCOzs7O0lBT3JELHVDQUFZLGFBQUMsSUFBUztJQVN0Qiw4Q0FBbUIsYUFBQyxJQUFTOzs7Ozs7OztJQWhCbEIsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQjsyQkF0QzdCO0VBc0NzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQmlvbWV0cmljV3JhcHBlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBjYXB0dXJlIGJpb21ldHJpYyhJcmlzIGFuZCBGaW5nZXJwcmludCkgYW5kIHZhbGlkYXRlIHRoZSB1c2VyLlxuICogTWF5IGJlIHVzZWQgaW4gQmFua2luZyBkb21haW5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJpb21ldHJpY1dyYXBwZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jpb21ldHJpYy13cmFwcGVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmlvbWV0cmljV3JhcHBlcjogQmlvbWV0cmljV3JhcHBlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmlvbWV0cmljV3JhcHBlci5hY3RpdmF0ZUlyaXMoeydQSURfWE1MJzogJzxwaWQteG1sLz4nfSlcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiApXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gKTtcbiAqXG4gKiBgYGBcbiAqL1xuXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmlvbWV0cmljV3JhcHBlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJpb21ldHJpYycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5CaW9tZXRyaWNXcmFwcGVyJyxcbiAgcmVwbzogJycsXG4gIGluc3RhbGw6ICcnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJpb21ldHJpY1dyYXBwZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gYWN0aXZhdGUgaXJpcyBhY3Rpdml0eVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBpcmlzIGRhdGEgY2FwdHVyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWN0aXZhdGVJcmlzKGFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gYWN0aXZhdGUgZmluZ2VycHJpbnQgYWN0aXZpdHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gRlAgZGF0YSBjYXB0dXJlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhY3RpdmF0ZUZpbmdlcnByaW50KGFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==