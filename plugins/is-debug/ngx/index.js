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
var IsDebug = /** @class */ (function (_super) {
    __extends(IsDebug, _super);
    function IsDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebug.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebug.pluginName = "IsDebug";
    IsDebug.plugin = "cordova-plugin-is-debug";
    IsDebug.pluginRef = "cordova.plugins.IsDebug";
    IsDebug.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebug.platforms = ["Android", "iOS"];
    IsDebug = __decorate([
        Injectable()
    ], IsDebug);
    return IsDebug;
}(IonicNativePlugin));
export { IsDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lzLWRlYnVnL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCM0MsMkJBQWlCOzs7O0lBTTVDLDRCQUFVOzs7Ozs7SUFOQyxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBL0JwQjtFQStCNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBJcyBEZWJ1Z1xuICogQGRlc2NyaXB0aW9uXG4gKiBEZXRlY3QgaWYgdGhlIGFwcCBpcyBydW5uaW5nIGluIGRlYnVnIG1vZGUgb3Igbm90LlxuICogRGVidWcgbW9kZSBpcyB3aGVuIHRoZSBhcHAgaXMgYnVpbHQgYW5kIGluc3RhbGxlZCBsb2NhbGx5IHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgY29yZG92YSBjbGkgZXRjLCBjb21wYXJlZCB0byByZWxlYXNlIG1vZGUgd2hlbiB0aGUgYXBwIHdhcyBkb3dubG9hZGVkIGZyb20gdGhlIGFwcCAvIHBsYXkgc3RvcmUgdmlhIGFuIGVuZCB1c2VyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSXNEZWJ1ZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaXMtZGVidWcvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGlzRGVidWc6IElzRGVidWcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaXNEZWJ1Zy5nZXRJc0RlYnVnKClcbiAqICAgLnRoZW4oaXNEZWJ1ZyA9PiBjb25zb2xlLmxvZygnSXMgZGVidWc6JywgaXNEZWJ1ZykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJc0RlYnVnJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taXMtZGVidWcnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuSXNEZWJ1ZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvY29yZG92YS1wbHVnaW4taXMtZGVidWcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJc0RlYnVnIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGFuIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Y1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRydWUgaWYgdGhlIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Yy4gSXQgd2lsbCByZXNvbHZlIHRvIGZhbHNlIGlmIHRoZSBhcHAgd2FzIGRvd25sb2FkZWQgZnJvbSB0aGUgYXBwIC8gcGxheSBzdG9yZSBieSB0aGUgZW5kIHVzZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElzRGVidWcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=