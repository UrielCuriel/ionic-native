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
var LineLogin = /** @class */ (function (_super) {
    __extends(LineLogin, _super);
    function LineLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLogin.prototype.initialize = function (param) { return cordova(this, "initialize", {}, arguments); };
    LineLogin.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    LineLogin.prototype.loginWeb = function () { return cordova(this, "loginWeb", {}, arguments); };
    LineLogin.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    LineLogin.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    LineLogin.prototype.verifyAccessToken = function () { return cordova(this, "verifyAccessToken", {}, arguments); };
    LineLogin.prototype.refreshAccessToken = function () { return cordova(this, "refreshAccessToken", {}, arguments); };
    LineLogin.pluginName = "LineLogin";
    LineLogin.plugin = "cordova-line-login-plugin";
    LineLogin.pluginRef = "lineLogin";
    LineLogin.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLogin.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLogin.installVariables = ["LINE_CHANNEL_ID"];
    LineLogin.platforms = ["Android", "iOS"];
    LineLogin = __decorate([
        Injectable()
    ], LineLogin);
    return LineLogin;
}(IonicNativePlugin));
export { LineLogin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xpbmUtbG9naW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0Z6Qyw2QkFBaUI7Ozs7SUFPOUMsOEJBQVUsYUFBQyxLQUFzQjtJQVNqQyx5QkFBSztJQVVMLDRCQUFRO0lBU1IsMEJBQU07SUFTTixrQ0FBYztJQVNkLHFDQUFpQjtJQVNqQixzQ0FBa0I7Ozs7Ozs7O0lBOURQLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkFuRnRCO0VBbUYrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpblBhcmFtcyB7XG4gIC8qKlxuICAgKiBMaW5lIENoYW5uZWwgSURcbiAgICovXG4gIGNoYW5uZWxfaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lTG9naW5Qcm9maWxlIHtcbiAgLyoqXG4gICAqIExpbmUgVXNlciBJRFxuICAgKi9cbiAgdXNlcklEOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpbmUgUHJvZmlsZSBJbWFnZSBVUkxcbiAgICovXG4gIHBpY3R1cmVVUkw6IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBQcm9maWxlIE5hbWVcbiAgICovXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsXG4gICAqL1xuICBlbWFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lTG9naW5BY2Nlc3NUb2tlbiB7XG4gIC8qKlxuICAgKiBMaW5lIEFjY2VzcyBUb2tlblxuICAgKi9cbiAgYWNjZXNzVG9rZW46IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBBY2Nlc3MgVG9rZW4gRXhwaXJlIFRpbWVcbiAgICovXG4gIGV4cGlyZVRpbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBMaW5lIExvZ2luXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBsb2dpbiwgbG9ncyBvdXQsIGFjcXVpcmVzLCB2ZXJpZmllcywgYW5kIHJlZnJlc2hlcyB0aGUgYWNjZXNzIHRva2VuLiBUaGUgdmVyc2lvbiBvZiBMaW5lU0RLIHlvdSBhcmUgdXNpbmcgaXMgYXMgZm9sbG93cy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExpbmVMb2dpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbGluZS1sb2dpbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpbmVMb2dpbjogTGluZUxvZ2luKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5saW5lTG9naW4uaW5pdGlhbGl6ZSh7IGNoYW5uZWxfaWQ6IFwieHh4eHh4eHh4eFwiIH0pXG4gKlxuICogdGhpcy5saW5lTG9naW4ubG9naW4oKVxuICogICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogTGluZUxvZ2luUGFyYW1zXG4gKiBMaW5lTG9naW5Qcm9maWxlXG4gKiBMaW5lTG9naW5BY2Nlc3NUb2tlblxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdMaW5lTG9naW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWxpbmUtbG9naW4tcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnbGluZUxvZ2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ucmlraWppL2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4nLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9ucmlraWppL2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4uZ2l0IC0tdmFyaWFibGUgTElORV9DSEFOTkVMX0lEPVwieW91cl9saW5lX2NoYW5uZWxfaWRcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnTElORV9DSEFOTkVMX0lEJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpbmVMb2dpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVcbiAgICogQHBhcmFtIHBhcmFtIExpbmVMb2dpblBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRpYWxpemUocGFyYW06IExpbmVMb2dpblBhcmFtcyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ2luXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGluZUxvZ2luUHJvZmlsZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKCk6IFByb21pc2U8TGluZUxvZ2luUHJvZmlsZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiB3aXRoIFdlYlxuICAgKiAoaU9TIG9ubHkpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGluZUxvZ2luUHJvZmlsZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luV2ViKCk6IFByb21pc2U8TGluZUxvZ2luUHJvZmlsZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IEFjY2VzcyBUb2tlblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPExpbmVMb2dpbkFjY2Vzc1Rva2VuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxMaW5lTG9naW5BY2Nlc3NUb2tlbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgQWNjZXNzVG9rZW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB2ZXJpZnlBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIEFjY2VzcyBUb2tlblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZnJlc2hBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19