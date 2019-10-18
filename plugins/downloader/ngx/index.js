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
export var NotificationVisibility;
(function (NotificationVisibility) {
    NotificationVisibility[NotificationVisibility["Visible"] = 0] = "Visible";
    NotificationVisibility[NotificationVisibility["VisibleNotifyCompleted"] = 1] = "VisibleNotifyCompleted";
    NotificationVisibility[NotificationVisibility["VisibilityHidden"] = 2] = "VisibilityHidden";
    NotificationVisibility[NotificationVisibility["VisibleNotifyOnlyCompletion"] = 3] = "VisibleNotifyOnlyCompletion";
})(NotificationVisibility || (NotificationVisibility = {}));
var Downloader = /** @class */ (function (_super) {
    __extends(Downloader, _super);
    function Downloader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Downloader.prototype.download = function (request) { return cordova(this, "download", {}, arguments); };
    Downloader.pluginName = "Downloader";
    Downloader.plugin = "integrator-cordova-plugin-downloader";
    Downloader.pluginRef = "cordova.plugins.Downloader";
    Downloader.repo = "https://github.com/Luka313/integrator-cordova-plugin-downloader.git";
    Downloader.platforms = ["Android"];
    Downloader = __decorate([
        Injectable()
    ], Downloader);
    return Downloader;
}(IonicNativePlugin));
export { Downloader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Rvd25sb2FkZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVksc0JBS1g7QUFMRCxXQUFZLHNCQUFzQjtJQUNoQyx5RUFBVyxDQUFBO0lBQ1gsdUdBQTBCLENBQUE7SUFDMUIsMkZBQW9CLENBQUE7SUFDcEIsaUhBQStCLENBQUE7QUFDakMsQ0FBQyxFQUxXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFLakM7O0lBMEcrQiw4QkFBaUI7Ozs7SUFNL0MsNkJBQVEsYUFBQyxPQUF3Qjs7Ozs7O0lBTnRCLFVBQVU7UUFEdEIsVUFBVSxFQUFFO09BQ0EsVUFBVTtxQkFsSHZCO0VBa0hnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25WaXNpYmlsaXR5IHtcbiAgVmlzaWJsZSA9IDAsXG4gIFZpc2libGVOb3RpZnlDb21wbGV0ZWQgPSAxLFxuICBWaXNpYmlsaXR5SGlkZGVuID0gMixcbiAgVmlzaWJsZU5vdGlmeU9ubHlDb21wbGV0aW9uID0gM1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvd25sb2FkSHR0cEhlYWRlciB7XG4gIGhlYWRlcjogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc3RpbmF0aW9uRGlyZWN0b3J5IHtcbiAgZGlyVHlwZTogc3RyaW5nO1xuICBzdWJQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIExvY2F0aW9uIG9mIHRoZSByZXNvdXJjZSB0byBkb3dubG9hZFxuICAgKi9cbiAgdXJpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdGl0bGUgb2YgdGhpcyBkb3dubG9hZCwgdG8gYmUgZGlzcGxheWVkIGluIG5vdGlmaWNhdGlvbnMgKGlmIGVuYWJsZWQpLlxuICAgKiBJZiBubyB0aXRsZSBpcyBnaXZlbiwgYSBkZWZhdWx0IG9uZSB3aWxsIGJlIGFzc2lnbmVkIGJhc2VkIG9uIHRoZSBkb3dubG9hZCBmaWxlbmFtZSwgb25jZSB0aGUgZG93bmxvYWQgc3RhcnRzLlxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZXQgYSBkZXNjcmlwdGlvbiBvZiB0aGlzIGRvd25sb2FkLCB0byBiZSBkaXNwbGF5ZWQgaW4gbm90aWZpY2F0aW9ucyAoaWYgZW5hYmxlZClcbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogU2V0IHRoZSBNSU1FIGNvbnRlbnQgdHlwZSBvZiB0aGlzIGRvd25sb2FkLiBUaGlzIHdpbGwgb3ZlcnJpZGUgdGhlIGNvbnRlbnQgdHlwZSBkZWNsYXJlZCBpbiB0aGUgc2VydmVyJ3MgcmVzcG9uc2UuXG4gICAqL1xuICBtaW1lVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoaXMgZG93bmxvYWQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgc3lzdGVtJ3MgRG93bmxvYWRzIFVJLiBUcnVlIGJ5IGRlZmF1bHQuXG4gICAqL1xuICB2aXNpYmxlSW5Eb3dubG9hZHNVaT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDb250cm9sIHdoZXRoZXIgYSBzeXN0ZW0gbm90aWZpY2F0aW9uIGlzIHBvc3RlZCBieSB0aGUgZG93bmxvYWQgbWFuYWdlciB3aGlsZSB0aGlzIGRvd25sb2FkIGlzIHJ1bm5pbmcgb3Igd2hlbiBpdCBpcyBjb21wbGV0ZWQuXG4gICAqL1xuICBub3RpZmljYXRpb25WaXNpYmlsaXR5PzogTm90aWZpY2F0aW9uVmlzaWJpbGl0eTtcbiAgLyoqXG4gICAqIFNldCB0aGUgbG9jYWwgZGVzdGluYXRpb24gZm9yIHRoZSBkb3dubG9hZGVkIGZpbGUgdG8gYSBwYXRoIHdpdGhpbiB0aGUgYXBwbGljYXRpb24ncyBleHRlcm5hbCBmaWxlcyBkaXJlY3RvcnlcbiAgICovXG4gIGRlc3RpbmF0aW9uSW5FeHRlcm5hbEZpbGVzRGlyPzogRGVzdGluYXRpb25EaXJlY3Rvcnk7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGxvY2FsIGRlc3RpbmF0aW9uIGZvciB0aGUgZG93bmxvYWRlZCBmaWxlIHRvIGEgcGF0aCB3aXRoaW4gdGhlIHB1YmxpYyBleHRlcm5hbCBzdG9yYWdlIGRpcmVjdG9yeVxuICAgKi9cbiAgZGVzdGluYXRpb25JbkV4dGVybmFsUHVibGljRGlyPzogRGVzdGluYXRpb25EaXJlY3Rvcnk7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGxvY2FsIGRlc3RpbmF0aW9uIGZvciB0aGUgZG93bmxvYWRlZCBmaWxlLlxuICAgKiBNdXN0IGJlIGEgZmlsZSBVUkkgdG8gYSBwYXRoIG9uIGV4dGVybmFsIHN0b3JhZ2UsIGFuZCB0aGUgY2FsbGluZyBhcHBsaWNhdGlvbiBtdXN0IGhhdmUgdGhlIFdSSVRFX0VYVEVSTkFMX1NUT1JBR0UgcGVybWlzc2lvbi5cbiAgICovXG4gIGRlc3RpbmF0aW9uVXJpPzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkIGFuIEhUVFAgaGVhZGVyIHRvIGJlIGluY2x1ZGVkIHdpdGggdGhlIGRvd25sb2FkIHJlcXVlc3QuIFRoZSBoZWFkZXIgd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgaGVhZGVycz86IERvd25sb2FkSHR0cEhlYWRlcltdO1xufVxuXG4vKipcbiAqIEBuYW1lIERvd25sb2FkZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaXMgZGVzaWduZWQgdG8gc3VwcG9ydCBkb3dubG9hZGluZyBmaWxlcyB1c2luZyBBbmRyb2lkIERvd25sb2FkTWFuYWdlci5cbiAqXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEb3dubG9hZGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kb3dubG9hZGVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZG93bmxvYWRlcjogRG93bmxvYWRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogICAgdmFyIHJlcXVlc3Q6IERvd25sb2FkUmVxdWVzdCA9IHtcbiAqICAgICAgICAgICB1cmk6IFlPVVJfVVJJLFxuICogICAgICAgICAgIHRpdGxlOiAnTXlEb3dubG9hZCcsXG4gKiAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICogICAgICAgICAgIG1pbWVUeXBlOiAnJyxcbiAqICAgICAgICAgICB2aXNpYmxlSW5Eb3dubG9hZHNVaTogdHJ1ZSxcbiAqICAgICAgICAgICBub3RpZmljYXRpb25WaXNpYmlsaXR5OiBOb3RpZmljYXRpb25WaXNpYmlsaXR5LlZpc2libGVOb3RpZnlDb21wbGV0ZWQsXG4gKiAgICAgICAgICAgZGVzdGluYXRpb25JbkV4dGVybmFsRmlsZXNEaXI6IHtcbiAqICAgICAgICAgICAgICAgZGlyVHlwZTogJ0Rvd25sb2FkcycsXG4gKiAgICAgICAgICAgICAgIHN1YlBhdGg6ICdNeUZpbGUuYXBrJ1xuICogICAgICAgICAgIH1cbiAqICAgICAgIH07XG4gKlxuICpcbiAqICAgdGhpcy5kb3dubG9hZGVyLmRvd25sb2FkKHJlcXVlc3QpXG4gKiAgIFx0XHRcdC50aGVuKChsb2NhdGlvbjogc3RyaW5nKSA9PiBjb25zb2xlLmxvZygnRmlsZSBkb3dubG9hZGVkIGF0OicrbG9jYXRpb24pKVxuICogICBcdFx0XHQuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBOb3RpZmljYXRpb25WaXNpYmlsaXR5XG4gKiBIZWFkZXJcbiAqIERlc3RpbmF0aW9uRGlyZWN0b3J5XG4gKiBEb3dubG9hZEh0dHBIZWFkZXJcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEb3dubG9hZGVyJyxcbiAgcGx1Z2luOiAnaW50ZWdyYXRvci1jb3Jkb3ZhLXBsdWdpbi1kb3dubG9hZGVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkRvd25sb2FkZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0x1a2EzMTMvaW50ZWdyYXRvci1jb3Jkb3ZhLXBsdWdpbi1kb3dubG9hZGVyLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG93bmxvYWRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqICBTdGFydHMgYSBuZXcgZG93bmxvYWQgYW5kIHJldHVybnMgbG9jYXRpb24gb2YgdGhlIGRvd25sb2FkZWQgZmlsZSBvbiBjb21wbGV0aW9uXG4gICAqICBAcGFyYW0gcmVxdWVzdCB7RG93bmxvYWRSZXF1ZXN0fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkb3dubG9hZChyZXF1ZXN0OiBEb3dubG9hZFJlcXVlc3QpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm47XG4gIH1cbn1cbiJdfQ==