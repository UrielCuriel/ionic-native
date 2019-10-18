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
var Keychain = /** @class */ (function (_super) {
    __extends(Keychain, _super);
    function Keychain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keychain.prototype.get = function (key, touchIDMessage) { return cordova(this, "get", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.set = function (key, value, useTouchID) { return cordova(this, "set", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.getJson = function (key, touchIDMessage) { return cordova(this, "getJson", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.setJson = function (key, obj, useTouchId) { return cordova(this, "setJson", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.remove = function (key) { return cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    Keychain.pluginName = "Keychain";
    Keychain.plugin = "cordova-plugin-ios-keychain";
    Keychain.pluginRef = "window.Keychain";
    Keychain.repo = "https://github.com/ionic-team/cordova-plugin-ios-keychain";
    Keychain.platforms = ["iOS"];
    Keychain = __decorate([
        Injectable()
    ], Keychain);
    return Keychain;
}(IonicNativePlugin));
export { Keychain };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWNoYWluL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DMUMsNEJBQWlCOzs7O0lBVzdDLHNCQUFHLGFBQUMsR0FBVyxFQUFFLGNBQXVCO0lBY3hDLHNCQUFHLGFBQUMsR0FBVyxFQUFFLEtBQWdDLEVBQUUsVUFBb0I7SUFhdkUsMEJBQU8sYUFBQyxHQUFXLEVBQUUsY0FBdUI7SUFjNUMsMEJBQU8sYUFBQyxHQUFXLEVBQUUsR0FBUSxFQUFFLFVBQW9CO0lBWW5ELHlCQUFNLGFBQUMsR0FBVzs7Ozs7O0lBaEVQLFFBQVE7UUFEcEIsVUFBVSxFQUFFO09BQ0EsUUFBUTttQkFyQ3JCO0VBcUM4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5cbi8qKlxuICogQG5hbWUgS2V5Y2hhaW5cbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IGFuZCBzZXQgZGF0YSBpbiB0aGUgaU9TIEtleWNoYWluXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb3Mta2V5Y2hhaW5gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbS2V5Y2hhaW4gcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvcy1rZXljaGFpbikuXG4gKlxuICogU2VlIGFsc28gW1NlY3VyZSBTdG9yYWdlXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL25hdGl2ZS9zZWN1cmUtc3RvcmFnZS8pIGZvciBtb3JlIHN1cHBvcnRlZCBwbGF0Zm9ybXMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBLZXljaGFpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUva2V5Y2hhaW4vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGtleWNoYWluOiBLZXljaGFpbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5rZXljaGFpbi5zZXQoa2V5LCB2YWx1ZSkudGhlbigoKSA9PiB7XG4gKiAgIHRoaXMua2V5Y2hhaW4uZ2V0KGtleSlcbiAqICAgICAudGhlbih2YWx1ZSA9PiBjb25zb2xlLmxvZygnR290IHZhbHVlJywgdmFsdWUpKVxuICogICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZycsIGVycikpO1xuICogfSlcbiAqIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZycsIGVycikpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnS2V5Y2hhaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pb3Mta2V5Y2hhaW4nLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Y2hhaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9zLWtleWNoYWluJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtleWNoYWluIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSB2YWx1ZSBmb3IgYSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHJldHJpZXZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdG91Y2hJRE1lc3NhZ2VdIHRoZSBtZXNzYWdlIHRvIHNob3cgdW5kZXJuZWF0aCB0aGUgVG91Y2hJRCBwcm9tcHQgKGlmIGFueSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0KGtleTogc3RyaW5nLCB0b3VjaElETWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZSBmb3IgYSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8Ym9vbGVhbn0gdmFsdWUgdGhlIHZhbHVlIHRvIHNldFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VUb3VjaElEXSB3aGV0aGVyIHRvIHN0b3JlIHRoZSB2YWx1ZSB3aXRoIHNlY3VyaXR5IHN1Y2ggdGhhdCBUb3VjaElEIHdpbGwgYmUgbmVlZGVkIHRvIGdyYWIgaXRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiwgdXNlVG91Y2hJRD86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgSlNPTiB2YWx1ZSBmb3IgYSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHJldHJpZXZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3VjaElETWVzc2FnZSB0aGUgbWVzc2FnZSB0byBzaG93IHVuZGVybmVhdGggdGhlIFRvdWNoSUQgcHJvbXB0IChpZiBhbnkpXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGdldEpzb24oa2V5OiBzdHJpbmcsIHRvdWNoSURNZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIEpTT04gdmFsdWUgZm9yIGEga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHthbnl9IG9iaiB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VzZVRvdWNoSWRdIFdldGhlciB0byBzdG9yZSB0aGUgdmFsdWUgd2l0aCBzZWN1cml0eSBzdWNoIHRoYXQgVG91Y2hJRCB3aWxsIGJlIG5lZWRlZCB0byBncmFiIGl0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHNldEpzb24oa2V5OiBzdHJpbmcsIG9iajogYW55LCB1c2VUb3VjaElkPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSB2YWx1ZSBmb3IgYSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHJlbW92ZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=