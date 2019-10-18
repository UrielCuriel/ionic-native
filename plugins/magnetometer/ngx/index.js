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
var Magnetometer = /** @class */ (function (_super) {
    __extends(Magnetometer, _super);
    function Magnetometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magnetometer.prototype.getReading = function () { return cordova(this, "getReading", {}, arguments); };
    Magnetometer.prototype.watchReadings = function () { return cordova(this, "watchReadings", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    Magnetometer.pluginName = "Magnetometer";
    Magnetometer.plugin = "cordova-plugin-magnetometer";
    Magnetometer.pluginRef = "cordova.plugins.magnetometer";
    Magnetometer.repo = "https://github.com/sdesalas/cordova-plugin-magnetometer";
    Magnetometer.platforms = ["Android", "iOS"];
    Magnetometer = __decorate([
        Injectable()
    ], Magnetometer);
    return Magnetometer;
}(IonicNativePlugin));
export { Magnetometer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21hZ25ldG9tZXRlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQW1FQSxnQ0FBaUI7Ozs7SUFNakQsaUNBQVU7SUFnQlYsb0NBQWE7Ozs7OztJQXRCRixZQUFZO1FBRHhCLFVBQVUsRUFBRTtPQUNBLFlBQVk7dUJBckV6QjtFQXFFa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBNYWduZXRvbWV0ZXJSZWFkaW5nIHtcbiAgLyoqXG4gICAqIFggcmVhZGluZyBvZiBtYWduZXRvbWV0ZXIuIChOdW1iZXIpXG4gICAqL1xuICB4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFkgcmVhZGluZyBvZiBtYWduZXRvbWV0ZXIuIChOdW1iZXIpXG4gICAqL1xuICB5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFogcmVhZGluZyBvZiBtYWduZXRvbWV0ZXIuIChOdW1iZXIpXG4gICAqL1xuICB6OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZWQgdG90YWwgLSBhbHdheXMgcG9zaXRpdmUgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgbWFnbml0dWRlOiBudW1iZXI7XG5cbn1cblxuLyoqXG4gKiBAbmFtZSBEZXZpY2UgZU1hZ25ldG9tZXRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLW1hZ25ldG9tZXRlcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtEZXZpY2UgT3JpZW50YXRpb24gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL3NkZXNhbGFzL2NvcmRvdmEtcGx1Z2luLW1hZ25ldG9tZXRlcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyBEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nIGlzIGFuIGludGVyZmFjZSBmb3IgY29tcGFzc1xuICogaW1wb3J0IHsgTWFnbmV0b21ldGVyLCBNYWduZXRvbWV0ZXJSZWFkaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2Utb3JpZW50YXRpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hZ25ldG9tZXRlcjogTWFnbmV0b21ldGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBHZXQgdGhlIGRldmljZSBjdXJyZW50IGNvbXBhc3MgaGVhZGluZ1xuICogdGhpcy5kZXZpY2VPcmllbnRhdGlvbi5nZXRSZWFkaW5nKCkudGhlbihcbiAqICAgKGRhdGE6IE1hZ25ldG9tZXRlclJlYWRpbmcpID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiApO1xuICpcbiAqIC8vIFdhdGNoIHRoZSBkZXZpY2UgY29tcGFzcyBoZWFkaW5nIGNoYW5nZVxuICogdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuZGV2aWNlT3JpZW50YXRpb24ud2F0Y2hSZWFkaW5ncygpLnN1YnNjcmliZShcbiAqICAgKGRhdGE6IE1hZ25ldG9tZXRlclJlYWRpbmcpID0+IGNvbnNvbGUubG9nKGRhdGEpXG4gKiApO1xuICpcbiAqIC8vIFN0b3Agd2F0Y2hpbmcgaGVhZGluZyBjaGFuZ2VcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTWFnbmV0b21ldGVyUmVhZGluZ1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01hZ25ldG9tZXRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1hZ25ldG9tZXRlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tYWduZXRvbWV0ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NkZXNhbGFzL2NvcmRvdmEtcGx1Z2luLW1hZ25ldG9tZXRlcicsXG4gIHBsYXRmb3JtczogW1xuICAgICdBbmRyb2lkJyxcbiAgICAnaU9TJyxcbiAgXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYWduZXRvbWV0ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY29tcGFzcyByZWFkaW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxNYWduZXRvbWV0ZXJSZWFkaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmVhZGluZygpOiBQcm9taXNlPE1hZ25ldG9tZXRlclJlYWRpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZXZpY2UgY3VycmVudCBoZWFkaW5nIGF0IGEgcmVndWxhciBpbnRlcnZhbFxuICAgKlxuICAgKiBTdG9wIHRoZSB3YXRjaCBieSB1bnN1YnNjcmliaW5nIGZyb20gdGhlIG9ic2VydmFibGVcbiAgICogQHBhcmFtIHtEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgY29tcGFzcy4gRnJlcXVlbmN5IGFuZCBGaWx0ZXIuIE9wdGlvbmFsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPERldmljZU9yaWVudGF0aW9uQ29tcGFzc0hlYWRpbmc+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBjb250YWlucyB0aGUgY29tcGFzcyBoZWFkaW5nXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnXG4gIH0pXG4gIHdhdGNoUmVhZGluZ3MoXG4gICk6IE9ic2VydmFibGU8TWFnbmV0b21ldGVyUmVhZGluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19