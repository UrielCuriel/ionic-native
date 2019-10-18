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
var NavigationBar = /** @class */ (function (_super) {
    __extends(NavigationBar, _super);
    function NavigationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBar.prototype.setUp = function (autohide) { return cordova(this, "setUp", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBar.prototype.hideNavigationBar = function () { return cordova(this, "hideNavigationBar", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBar.pluginName = "NavigationBar";
    NavigationBar.plugin = "cordova-plugin-navigationbar";
    NavigationBar.pluginRef = "navigationbar";
    NavigationBar.repo = "https://github.com/cranberrygame/cordova-plugin-navigationbar";
    NavigationBar.platforms = ["Android"];
    NavigationBar = __decorate([
        Injectable()
    ], NavigationBar);
    return NavigationBar;
}(IonicNativePlugin));
export { NavigationBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdmlnYXRpb24tYmFyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCckMsaUNBQWlCOzs7O0lBWWxELDZCQUFLLGFBQUMsUUFBa0I7SUFheEIseUNBQWlCOzs7Ozs7SUF6Qk4sYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQTlCMUI7RUE4Qm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgTmF2aWdhdGlvbiBCYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIE5hdmlnYXRpb25CYXIgcGx1Z2luIGFsbG93cyB5b3UgdG8gaGlkZSBhbmQgYXV0byBoaWRlIHRoZSBhbmRyb2lkIG5hdmlnYXRpb24gYmFyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF2aWdhdGlvbkJhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF2aWdhdGlvbi1iYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25CYXI6IE5hdmlnYXRpb25CYXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBhdXRvSGlkZTogYm9vbGVhbiA9IHRydWU7XG4gKiB0aGlzLm5hdmlnYXRpb25CYXIuc2V0VXAoYXV0b0hpZGUpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF2aWdhdGlvbkJhcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdmlnYXRpb25iYXInLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0aW9uYmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcmFuYmVycnlnYW1lL2NvcmRvdmEtcGx1Z2luLW5hdmlnYXRpb25iYXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIGhpZGUgYXV0b21hdGljYWxseSAob3Igbm90KSB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIEBwYXJhbSBhdXRvaGlkZSB7Ym9vbGVhbn1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZSdcbiAgfSlcbiAgc2V0VXAoYXV0b2hpZGU/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnXG4gIH0pXG4gIGhpZGVOYXZpZ2F0aW9uQmFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==