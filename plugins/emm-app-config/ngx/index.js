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
var EmmAppConfig = /** @class */ (function (_super) {
    __extends(EmmAppConfig, _super);
    function EmmAppConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmmAppConfig.prototype.getValue = function (configKey) { return cordova(this, "getValue", { "sync": true }, arguments); };
    EmmAppConfig.prototype.registerChangedListener = function () { return cordova(this, "registerChangedListener", { "observable": true }, arguments); };
    EmmAppConfig.platforms = ["Android", "iOS"];
    EmmAppConfig.plugin = "cordova-plugin-emm-app-config";
    EmmAppConfig.pluginName = "EmmAppConfig";
    EmmAppConfig.pluginRef = "cordova.plugins.EmmAppConfig";
    EmmAppConfig.repo = "https://github.com/oracle/cordova-plugin-emm-app-config";
    EmmAppConfig = __decorate([
        Injectable()
    ], EmmAppConfig);
    return EmmAppConfig;
}(IonicNativePlugin));
export { EmmAppConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2VtbS1hcHAtY29uZmlnL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBdUNBLGdDQUFpQjs7OztJQU94QiwrQkFBUSxhQUFDLFNBQWtCO0lBUXJCLDhDQUF1Qjs7Ozs7O0lBZjNDLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkF6Q3pCO0VBeUNrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEVtbSBBcHAgQ29uZmlnXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGluZm9ybWF0aW9uIG9uIEVNTSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tZW1tLWFwcC1jb25maWdgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBFTU0gQXBwIENvbmZpZyBQbHVnaW4gRG9jc10oaHR0cHM6Ly9naXRodWIuY29tL29yYWNsZS9jb3Jkb3ZhLXBsdWdpbi1lbW0tYXBwLWNvbmZpZykuXG4gKlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRW1tQXBwQ29uZmlnIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9lbW0tYXBwLWNvbmZpZy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVtbUFwcENvbmZpZzogRW1tQXBwQ29uZmlnKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBHZXQgYWxsIHRoZSB2YWx1ZXMgb2YgdGhlIGVtbSBhcHAgY29uZmlndXJhdGlvblxuICogY29uc3QgdmFsdWVzID0gdGhpcy5lbW1BcHBDb25maWcuZ2V0VmFsdWUoKTtcbiAqXG4gKiAvLyBHZXQgc3BlY2lmaWMgdmFsdWUgb2YgdGhlIGVtbSBhcHAgY29uZmlndXJhdGlvblxuICogY29uc3QgdmFsdWUgPSB0aGlzLmVtbUFwcENvbmZpZy5nZXRWYWx1ZSgnc2VydmVyVXJsJyk7XG4gKlxuICogLy8gR2V0IGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIGVtbSBhcHAgY29uZmlnIGNoYW5nZXNcbiAqIHRoaXMuZW1tQXBwQ29uZmlnLnJlZ2lzdGVyQ2hhbmdlZExpc3RlbmVyKClcbiAqICAgLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygnQXBwIGNvbmZpZyBjaGFuZ2VzJykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWVtbS1hcHAtY29uZmlnJyxcbiAgcGx1Z2luTmFtZTogJ0VtbUFwcENvbmZpZycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5FbW1BcHBDb25maWcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL29yYWNsZS9jb3Jkb3ZhLXBsdWdpbi1lbW0tYXBwLWNvbmZpZycsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtbUFwcENvbmZpZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogR2V0IHZhbHVlIGZyb20gdGhlIEVtbSBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgKiBAcGFyYW0gY29uZmlnS2V5IHtzdHJpbmd9ICBLZXkgb2YgdGhlIHZhbHVlIHRvIGdldCwgb3IgbnVsbCB0byBnZXQgYWxsIHRoZSB2YWx1ZXMgYXMgYW4gb2JqZWN0LlxuICAgKiBAcmV0dXJuIHthbnl9IFJldHVybnMgY29uZmlndXJhdGlvbiBvbiBhbiBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KSBnZXRWYWx1ZShjb25maWdLZXk/OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gaXMgY2hhbmdlZC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KSByZWdpc3RlckNoYW5nZWRMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19