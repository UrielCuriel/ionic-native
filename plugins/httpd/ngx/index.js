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
var Httpd = /** @class */ (function (_super) {
    __extends(Httpd, _super);
    function Httpd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Httpd.prototype.startServer = function (options) { return cordova(this, "startServer", { "observable": true, "clearFunction": "stopServer" }, arguments); };
    Httpd.prototype.getUrl = function () { return cordova(this, "getUrl", {}, arguments); };
    Httpd.prototype.getLocalPath = function () { return cordova(this, "getLocalPath", {}, arguments); };
    Httpd.pluginName = "Httpd";
    Httpd.plugin = "cordova-plugin-httpd";
    Httpd.pluginRef = "cordova.plugins.CorHttpd";
    Httpd.repo = "https://github.com/floatinghotpot/cordova-httpd";
    Httpd.platforms = ["Android", "iOS", "macOS"];
    Httpd = __decorate([
        Injectable()
    ], Httpd);
    return Httpd;
}(IonicNativePlugin));
export { Httpd };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h0dHBkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBdURQLHlCQUFpQjs7OztJQVUxQywyQkFBVyxhQUFDLE9BQXNCO0lBU2xDLHNCQUFNO0lBU04sNEJBQVk7Ozs7OztJQTVCRCxLQUFLO1FBRGpCLFVBQVUsRUFBRTtPQUNBLEtBQUs7Z0JBekRsQjtFQXlEMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBIdHRwZE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIHB1YmxpYyByb290IGRpcmVjdG9yeSBmb3IgeW91ciB3ZWIgc2VydmVyLiBUaGlzIHBhdGggaXMgcmVsYXRpdmUgdG8geW91ciBhcHAncyB3d3cgZGlyZWN0b3J5LlxuICAgKiBEZWZhdWx0IGlzIGN1cnJlbnQgZGlyZWN0b3J5LlxuICAgKi9cbiAgd3d3X3Jvb3Q/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcG9ydCBudW1iZXIgdG8gdXNlLlxuICAgKiBEZWZhdWx0IGlzIDg4ODhcbiAgICovXG4gIHBvcnQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXR0aW5nIHRoaXMgb3B0aW9uIHRvIGZhbHNlIHdpbGwgYWxsb3cgcmVtb3RlIGFjY2VzcyB0byB5b3VyIHdlYiBzZXJ2ZXIgKG92ZXIgYW55IElQKS5cbiAgICogRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIGxvY2FsaG9zdF9vbmx5PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBIdHRwZFxuICogQGRlc2NyaXB0aW9uXG4gKiBFbWJlZGRlZCBodHRwZCBmb3IgQ29yZG92YSBhcHBzLiBMaWdodCB3ZWlnaHQgSFRUUCBzZXJ2ZXIuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEh0dHBkLCBIdHRwZE9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h0dHBkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBodHRwZDogSHR0cGQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBsZXQgb3B0aW9uczogSHR0cGRPcHRpb25zID0ge1xuICogICAgICB3d3dfcm9vdDogJ2h0dHBkX3Jvb3QnLCAvLyByZWxhdGl2ZSBwYXRoIHRvIGFwcCdzIHd3dyBkaXJlY3RvcnlcbiAqICAgICAgcG9ydDogODAsXG4gKiAgICAgIGxvY2FsaG9zdF9vbmx5OiBmYWxzZVxuICogIH1cbiAqXG4gKiB0aGlzLmh0dHBkLnN0YXJ0U2VydmVyKG9wdGlvbnMpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICogIGNvbnNvbGUubG9nKCdTZXJ2ZXIgaXMgbGl2ZScpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSHR0cGRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSHR0cGQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1odHRwZCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Db3JIdHRwZCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZmxvYXRpbmdob3Rwb3QvY29yZG92YS1odHRwZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdtYWNPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnRzIGEgd2ViIHNlcnZlci5cbiAgICogQHBhcmFtIG9wdGlvbnMge0h0dHBkT3B0aW9uc31cbiAgICogQHJldHVybnMge09ic2VydmFibGU8c3RyaW5nPn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlLiBTdWJzY3JpYmUgdG8gcmVjZWl2ZSB0aGUgVVJMIGZvciB5b3VyIHdlYiBzZXJ2ZXIgKGlmIHN1Y2NlZWRlZCkuIFVuc3Vic2NyaWJlIHRvIHN0b3AgdGhlIHNlcnZlci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wU2VydmVyJ1xuICB9KVxuICBzdGFydFNlcnZlcihvcHRpb25zPzogSHR0cGRPcHRpb25zKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgVVJMIG9mIHRoZSBydW5uaW5nIHNlcnZlclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIFVSTCBvZiB0aGUgd2ViIHNlcnZlci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VXJsKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9jYWwgcGF0aCBvZiB0aGUgcnVubmluZyB3ZWJzZXJ2ZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2NhbCBwYXRoIG9mIHRoZSB3ZWIgc2VydmVyLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMb2NhbFBhdGgoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==