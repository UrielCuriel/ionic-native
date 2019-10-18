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
var FirebaseDynamicLinks = /** @class */ (function (_super) {
    __extends(FirebaseDynamicLinks, _super);
    function FirebaseDynamicLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseDynamicLinks.prototype.onDynamicLink = function () { return cordova(this, "onDynamicLink", { "callbackOrder": "reverse", "observable": true }, arguments); };
    FirebaseDynamicLinks.pluginName = "FirebaseDynamicLinks";
    FirebaseDynamicLinks.plugin = " cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinks.pluginRef = "cordova.plugins.firebase.dynamiclinks";
    FirebaseDynamicLinks.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinks.install = "ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN=\"example.com\" --variable APP_PATH=\"/\"";
    FirebaseDynamicLinks.installVariables = ["APP_DOMAIN", "APP_PATH"];
    FirebaseDynamicLinks.platforms = ["Android", "iOS"];
    FirebaseDynamicLinks = __decorate([
        Injectable()
    ], FirebaseDynamicLinks);
    return FirebaseDynamicLinks;
}(IonicNativePlugin));
export { FirebaseDynamicLinks };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWR5bmFtaWMtbGlua3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF5RFEsd0NBQWlCOzs7O0lBU3pELDRDQUFhOzs7Ozs7OztJQVRGLG9CQUFvQjtRQURoQyxVQUFVLEVBQUU7T0FDQSxvQkFBb0I7K0JBM0RqQztFQTJEMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEeW5hbWljTGluayB7XG4gIG1hdGNoVHlwZTogJ1dlYWsnIHwgJ1N0cm9uZyc7XG4gIGRlZXBMaW5rOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIEZpcmViYXNlIER5bmFtaWMgTGlua3NcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIER5bmFtaWMgTGlua3NcbiAqXG4gKiBWYXJpYWJsZXMgQVBQX0RPTUFJTiBhbmQgQVBQX1BBVEggc3BlY2lmeSB3ZWIgVVJMIHdoZXJlIHlvdXIgYXBwIHdpbGwgc3RhcnQgYW4gYWN0aXZpdHkgdG8gaGFuZGxlIHRoZSBsaW5rLiBUaGV5IGFsc28gdXNlZCB0byBzZXR1cCBzdXBwb3J0IGZvciBBcHAgSW5kZXhpbmcuXG4gKiBHbyB0byBmaXJlYmFzZSBjb25zb2xlIGFuZCBleHBvcnQgZ29vZ2xlLXNlcnZpY2VzLmpzb24gYW5kIEdvb2dsZVNlcnZpY2UtSW5mby5wbGlzdC4gUHV0IHRob3NlIGZpbGVzIGludG8gdGhlIHJvb3Qgb2YgeW91ciBjb3Jkb3ZhIGFwcCBmb2xkZXIuXG4gKlxuICogUHJlZmVyZW5jZXM6XG4gKlxuICogUHJlZmVyZW5jZXMgR29vZ2xlSU9TQ2xpZW50SWQgYW5kIEdvb2dsZUFuZHJvaWRDbGllbnRJZCBhcmUgdXNlZCB0byBzZXR1cCBkeW5hbWljIGxpbmtzIHdoZW4geW91IGhhdmUgYW4gYXBwIGZvciBzZXZlcmFsIHBsYXRmb3Jtcy5cbiAqIFlvdSBjYW4gZmluZCB2YWx1ZXMgYXQgeW91ciBHb29nbGVTZXJ2aWNlLUluZm8ucGxpc3QgKGtleSBBTkRST0lEX0NMSUVOVF9JRCkgYW5kIGdvb2dsZS1zZXJ2aWNlcy5qc29uIChrZXkgY2xpZW50WzBdLm9hdXRoX2NsaWVudFswXS5jbGllbnRfaWQpLlxuICpcbiAqIGNvbmZpZy54bWw6XG4gKiBgYGB4bWxcbiAqIDxwbGF0Zm9ybSBuYW1lPVwiaW9zXCI+XG4gKiAgICAgPHByZWZlcmVuY2UgbmFtZT1cIkdvb2dsZUlPU0NsaWVudElkXCIgdmFsdWU9XCIuLi5cIiAvPlxuICogPC9wbGF0Zm9ybT5cbiAqIDxwbGF0Zm9ybSBuYW1lPVwiYW5kcm9pZFwiPlxuICogICAgIDxwcmVmZXJlbmNlIG5hbWU9XCJHb29nbGVBbmRyb2lkQ2xpZW50SWRcIiB2YWx1ZT1cIi4uLlwiIC8+XG4gKiA8L3BsYXRmb3JtPlxuICogYGBgXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlRHluYW1pY0xpbmtzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS1keW5hbWljLWxpbmtzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VEeW5hbWljTGlua3M6IEZpcmViYXNlRHluYW1pY0xpbmtzKSB7IH1cbiAqXG4gKiAuLi5cbiAqIC8vIEhhbmRsZSB0aGUgbG9naWMgaGVyZSBhZnRlciBvcGVuaW5nIHRoZSBhcHAgd2l0aCB0aGUgRHluYW1pYyBsaW5rXG4gKiB0aGlzLmZpcmViYXNlRHluYW1pY0xpbmtzLm9uRHluYW1pY0xpbmsoKVxuICogICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSwgKGVycm9yOmFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBEeW5hbWljTGlua3NPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VEeW5hbWljTGlua3MnLFxuICBwbHVnaW46ICcgY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtZHluYW1pY2xpbmtzJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmR5bmFtaWNsaW5rcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hlbWVyaXN1ay9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1keW5hbWljbGlua3MnLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtZHluYW1pY2xpbmtzIC0tc2F2ZSAtLXZhcmlhYmxlIEFQUF9ET01BSU49XCJleGFtcGxlLmNvbVwiIC0tdmFyaWFibGUgQVBQX1BBVEg9XCIvXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQUF9ET01BSU4nLCAnQVBQX1BBVEgnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VEeW5hbWljTGlua3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY2FsbGJhY2sgdGhhdCBpcyB0cmlnZ2VyZWQgb24gZWFjaCBkeW5hbWljIGxpbmsgY2xpY2suXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8SUR5bmFtaWNMaW5rPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgb25EeW5hbWljTGluaygpOiBPYnNlcnZhYmxlPElEeW5hbWljTGluaz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19