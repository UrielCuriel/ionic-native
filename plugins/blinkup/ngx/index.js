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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
var BlinkUp = /** @class */ (function (_super) {
    __extends(BlinkUp, _super);
    function BlinkUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkUp.prototype.startBlinkUp = function (options) { return cordova(this, "startBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.flashWifiBlinkUp = function (options) { return cordova(this, "flashWifiBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.flashWPSBlinkUp = function (options) { return cordova(this, "flashWPSBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.abortBlinkUp = function () { return cordova(this, "abortBlinkUp", { "observable": true }, arguments); };
    BlinkUp.prototype.clearBlinkUpData = function () { return cordova(this, "clearBlinkUpData", { "observable": true }, arguments); };
    BlinkUp.pluginName = "BlinkUp";
    BlinkUp.plugin = "cordova-plugin-blinkup";
    BlinkUp.pluginRef = "blinkup";
    BlinkUp.repo = "https://github.com/SensorShare/cordova-plugin-blinkup";
    BlinkUp.platforms = ["Android", "iOS"];
    BlinkUp = __decorate([
        Injectable()
    ], BlinkUp);
    return BlinkUp;
}(IonicNativePlugin));
export { BlinkUp };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsaW5rdXAvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE0RGQsMkJBQWlCOzs7O0lBVTVDLDhCQUFZLGFBQUMsT0FBdUI7SUFhcEMsa0NBQWdCLGFBQUMsT0FBMkI7SUFhNUMsaUNBQWUsYUFBQyxPQUEwQjtJQVcxQyw4QkFBWTtJQVdaLGtDQUFnQjs7Ozs7O0lBMURMLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkE5RHBCO0VBOEQ2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBvZiBhIGJsaW5rIHVwIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtVcE9wdGlvbnMge1xuICBhcGlLZXk6IHN0cmluZztcbiAgZGV2ZWxvcG1lbnRQbGFuSWQ/OiBzdHJpbmc7XG4gIGlzSW5EZXZlbG9wbWVudD86IGJvb2xlYW47XG4gIHRpbWVvdXRNcz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2Ugb2YgYSBibGluayB1cCB3aWZpIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtVcFdpZmlPcHRpb25zIHtcbiAgYXBpS2V5OiBzdHJpbmc7XG4gIHRpbWVvdXRNcz86IG51bWJlcjtcbiAgc3NpZDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBvZiBhIGJsaW5rIHVwIHdwcyBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rVXBXUFNPcHRpb25zIHtcbiAgYXBpS2V5OiBzdHJpbmc7XG4gIHRpbWVvdXRNcz86IG51bWJlcjtcbiAgd3BzUGluOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQmxpbmtVcFxuICogQGRlc2NyaXB0aW9uXG4gKiBFbGVjdHJpYyBJbXAgQmxpbmtVcCBpb25pYyBwbHVnaW4uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCbGlua1VwIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ibGlua3VwL25neCc7XG4gKlxuICogY29uc3Qgb3B0aW9ucyA9IDxCbGlua1VwV2lmaU9wdGlvbnM+e1xuICogICAgYXBpS2V5OiAnQVBJX0tFWScsXG4gKiAgICB0aW1lb3V0TXM6IDYwMDAwLFxuICogICAgc3NpZDogJ01ZX1NTSUQnLFxuICogICAgcGFzc3dvcmQ6ICdNWV9QQVNTV09SRCdcbiAqICB9XG4gKiAgQmxpbmtVcC5mbGFzaFdpZmlCbGlua1VwKG9wdGlvbnMpLnN1YnNjcmliZShcbiAqICAgICAocmVzdWx0KSA9PiBjb25zb2xlLmxvZygnRG9uZScpLFxuICogICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiAgIClcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JsaW5rVXAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1ibGlua3VwJyxcbiAgcGx1Z2luUmVmOiAnYmxpbmt1cCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vU2Vuc29yU2hhcmUvY29yZG92YS1wbHVnaW4tYmxpbmt1cCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsaW5rVXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBzdGFydEJsaW5rVXAgLSBzdGFydHMgdGhlIGJsaW5rdXAgcHJvY2Vzc1xuICAgKiBAcGFyYW0ge21vZHVsZTpibGlua3VwLkJsaW5rVXBPcHRpb25zfSBvcHRpb25zIEJsaW5rVXAgT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHN0YXJ0QmxpbmtVcChvcHRpb25zOiBCbGlua1VwT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGZsYXNoV2lmaUJsaW5rVXAgLSBpbnZva2VzIHRoZSBmbGFzaCB3aWZpIHByb2Nlc3NcbiAgICogQHBhcmFtIHttb2R1bGU6Ymxpbmt1cC5CbGlua1VwV2lmaU9wdGlvbnN9IG9wdGlvbnMgQmxpbmtVcCBXaWZpIE9wdGlvbnNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBmbGFzaFdpZmlCbGlua1VwKG9wdGlvbnM6IEJsaW5rVXBXaWZpT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGZsYXNoV1BTQmxpbmtVcCAtIGludm9rZXMgdGhlIGZsYXNoIHdwcyBwcm9jZXNzXG4gICAqIEBwYXJhbSB7bW9kdWxlOmJsaW5rdXAuQmxpbmtVcFdQU09wdGlvbnN9IG9wdGlvbnMgQmxpbmtVcCBXUFMgT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIGZsYXNoV1BTQmxpbmtVcChvcHRpb25zOiBCbGlua1VwV1BTT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGFib3J0QmxpbmtVcCAtIGFib3J0IGJsaW5rdXAgcHJvY2Vzc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgYWJvcnRCbGlua1VwKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsZWFyQmxpbmtVcERhdGEgLSBjbGVhciB3aWZpIGRhdGFcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIGNsZWFyQmxpbmtVcERhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==