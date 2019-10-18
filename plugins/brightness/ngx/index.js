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
var Brightness = /** @class */ (function (_super) {
    __extends(Brightness, _super);
    function Brightness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brightness.prototype.setBrightness = function (value) { return cordova(this, "setBrightness", {}, arguments); };
    Brightness.prototype.getBrightness = function () { return cordova(this, "getBrightness", {}, arguments); };
    Brightness.prototype.setKeepScreenOn = function (value) { return cordova(this, "setKeepScreenOn", {}, arguments); };
    Brightness.pluginName = "Brightness";
    Brightness.plugin = "cordova-plugin-brightness";
    Brightness.pluginRef = "cordova.plugins.brightness";
    Brightness.repo = "https://github.com/mgcrea/cordova-plugin-brightness";
    Brightness.platforms = ["Android", "iOS"];
    Brightness = __decorate([
        Injectable()
    ], Brightness);
    return Brightness;
}(IonicNativePlugin));
export { Brightness };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JyaWdodG5lc3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBOEJ4Qyw4QkFBaUI7Ozs7SUFRL0Msa0NBQWEsYUFBQyxLQUFhO0lBVzNCLGtDQUFhO0lBU2Isb0NBQWUsYUFBQyxLQUFjOzs7Ozs7SUE1Qm5CLFVBQVU7UUFEdEIsVUFBVSxFQUFFO09BQ0EsVUFBVTtxQkEvQnZCO0VBK0JnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJyaWdodG5lc3NcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIEJyaWdodG5lc3MgcGx1Z2luIGxldCB5b3UgY29udHJvbCB0aGUgZGlzcGxheSBicmlnaHRuZXNzIG9mIHlvdXIgZGV2aWNlLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYnJpZ2h0bmVzc2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtCcmlnaHRuZXNzIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vbWdjcmVhL2NvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3MpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQnJpZ2h0bmVzcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYnJpZ2h0bmVzcy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJpZ2h0bmVzczogQnJpZ2h0bmVzcykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGJyaWdodG5lc3NWYWx1ZSA9IDAuODtcbiAqIHRoaXMuYnJpZ2h0bmVzcy5zZXRCcmlnaHRuZXNzKGJyaWdodG5lc3NWYWx1ZSk7XG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQnJpZ2h0bmVzcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3MnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYnJpZ2h0bmVzcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWdjcmVhL2NvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3MnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcmlnaHRuZXNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2V0cyB0aGUgYnJpZ2h0bmVzcyBvZiB0aGUgZGlzcGxheS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIEZsb2F0aW5nIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW4gd2hpY2ggY2FzZSAxIG1lYW5zIDEwMCUgYnJpZ2h0bmVzcyBhbmQgMCBtZWFucyAwJSBicmlnaHRuZXNzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHNldHRpbmcgYnJpZ2h0bmVzcyB3YXMgc3VjY2Vzc2Z1bC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QnJpZ2h0bmVzcyh2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIGN1cnJlbnQgYnJpZ2h0bmVzcyBvZiB0aGUgZGV2aWNlIGRpc3BsYXkuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGVcbiAgICogYnJpZ2h0bmVzcyB2YWx1ZSBvZiB0aGUgZGV2aWNlIGRpc3BsYXkgKGZsb2F0aW5nIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEpLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRCcmlnaHRuZXNzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEtlZXBzIHRoZSBzY3JlZW4gb24uIFByZXZlbnRzIHRoZSBkZXZpY2UgZnJvbSBzZXR0aW5nIHRoZSBzY3JlZW4gdG8gc2xlZXAuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0S2VlcFNjcmVlbk9uKHZhbHVlOiBib29sZWFuKTogdm9pZCB7fVxufVxuIl19