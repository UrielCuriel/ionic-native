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
var DeviceOrientation = /** @class */ (function (_super) {
    __extends(DeviceOrientation, _super);
    function DeviceOrientation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceOrientation.prototype.getCurrentHeading = function () { return cordova(this, "getCurrentHeading", {}, arguments); };
    DeviceOrientation.prototype.watchHeading = function (options) { return cordova(this, "watchHeading", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    DeviceOrientation.pluginName = "DeviceOrientation";
    DeviceOrientation.plugin = "cordova-plugin-device-orientation";
    DeviceOrientation.pluginRef = "navigator.compass";
    DeviceOrientation.repo = "https://github.com/apache/cordova-plugin-device-orientation";
    DeviceOrientation.platforms = ["Amazon Fire OS", "Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Tizen", "Ubuntu", "Windows", "Windows Phone"];
    DeviceOrientation = __decorate([
        Injectable()
    ], DeviceOrientation);
    return DeviceOrientation;
}(IonicNativePlugin));
export { DeviceOrientation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1vcmllbnRhdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXVGSyxxQ0FBaUI7Ozs7SUFNdEQsNkNBQWlCO0lBZ0JqQix3Q0FBWSxhQUNWLE9BQXlDOzs7Ozs7SUF2QmhDLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7T0FDQSxpQkFBaUI7NEJBekY5QjtFQXlGdUMsaUJBQWlCO1NBQTNDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZU9yaWVudGF0aW9uQ29tcGFzc0hlYWRpbmcge1xuICAvKipcbiAgICogVGhlIGhlYWRpbmcgaW4gZGVncmVlcyBmcm9tIDAtMzU5Ljk5IGF0IGEgc2luZ2xlIG1vbWVudCBpbiB0aW1lLiAoTnVtYmVyKVxuICAgKi9cbiAgbWFnbmV0aWNIZWFkaW5nOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWFkaW5nIHJlbGF0aXZlIHRvIHRoZSBnZW9ncmFwaGljIE5vcnRoIFBvbGUgaW4gZGVncmVlcyAwLTM1OS45OSBhdCBhIHNpbmdsZSBtb21lbnQgaW4gdGltZS4gQSBuZWdhdGl2ZSB2YWx1ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgdHJ1ZSBoZWFkaW5nIGNhbid0IGJlIGRldGVybWluZWQuIChOdW1iZXIpXG4gICAqL1xuICB0cnVlSGVhZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGV2aWF0aW9uIGluIGRlZ3JlZXMgYmV0d2VlbiB0aGUgcmVwb3J0ZWQgaGVhZGluZyBhbmQgdGhlIHRydWUgaGVhZGluZy4gKE51bWJlcilcbiAgICovXG4gIGhlYWRpbmdBY2N1cmFjeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgdGltZSBhdCB3aGljaCB0aGlzIGhlYWRpbmcgd2FzIGRldGVybWluZWQuIChET01UaW1lU3RhbXApXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NPcHRpb25zIHtcbiAgLyoqXG4gICAqIEhvdyBvZnRlbiB0byByZXRyaWV2ZSB0aGUgY29tcGFzcyBoZWFkaW5nIGluIG1pbGxpc2Vjb25kcy4gKE51bWJlcikgKERlZmF1bHQ6IDEwMClcbiAgICovXG4gIGZyZXF1ZW5jeT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGNoYW5nZSBpbiBkZWdyZWVzIHJlcXVpcmVkIHRvIGluaXRpYXRlIGEgd2F0Y2hIZWFkaW5nIHN1Y2Nlc3MgY2FsbGJhY2suIFdoZW4gdGhpcyB2YWx1ZSBpcyBzZXQsIGZyZXF1ZW5jeSBpcyBpZ25vcmVkLiAoTnVtYmVyKVxuICAgKi9cbiAgZmlsdGVyPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIERldmljZSBPcmllbnRhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWRldmljZS1vcmllbnRhdGlvbmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtEZXZpY2UgT3JpZW50YXRpb24gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kZXZpY2Utb3JpZW50YXRpb24pLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gRGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZyBpcyBhbiBpbnRlcmZhY2UgZm9yIGNvbXBhc3NcbiAqIGltcG9ydCB7IERldmljZU9yaWVudGF0aW9uLCBEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2Utb3JpZW50YXRpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZU9yaWVudGF0aW9uOiBEZXZpY2VPcmllbnRhdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gR2V0IHRoZSBkZXZpY2UgY3VycmVudCBjb21wYXNzIGhlYWRpbmdcbiAqIHRoaXMuZGV2aWNlT3JpZW50YXRpb24uZ2V0Q3VycmVudEhlYWRpbmcoKS50aGVuKFxuICogICAoZGF0YTogRGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZykgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICk7XG4gKlxuICogLy8gV2F0Y2ggdGhlIGRldmljZSBjb21wYXNzIGhlYWRpbmcgY2hhbmdlXG4gKiB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5kZXZpY2VPcmllbnRhdGlvbi53YXRjaEhlYWRpbmcoKS5zdWJzY3JpYmUoXG4gKiAgIChkYXRhOiBEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nKSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICogKTtcbiAqXG4gKiAvLyBTdG9wIHdhdGNoaW5nIGhlYWRpbmcgY2hhbmdlXG4gKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIERldmljZU9yaWVudGF0aW9uQ29tcGFzc09wdGlvbnNcbiAqIERldmljZU9yaWVudGF0aW9uQ29tcGFzc0hlYWRpbmdcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZXZpY2VPcmllbnRhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRldmljZS1vcmllbnRhdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb21wYXNzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlLW9yaWVudGF0aW9uJyxcbiAgcGxhdGZvcm1zOiBbXG4gICAgJ0FtYXpvbiBGaXJlIE9TJyxcbiAgICAnQW5kcm9pZCcsXG4gICAgJ0JsYWNrQmVycnkgMTAnLFxuICAgICdCcm93c2VyJyxcbiAgICAnRmlyZWZveCBPUycsXG4gICAgJ2lPUycsXG4gICAgJ1RpemVuJyxcbiAgICAnVWJ1bnR1JyxcbiAgICAnV2luZG93cycsXG4gICAgJ1dpbmRvd3MgUGhvbmUnXG4gIF1cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV2aWNlT3JpZW50YXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY29tcGFzcyBoZWFkaW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q3VycmVudEhlYWRpbmcoKTogUHJvbWlzZTxEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGV2aWNlIGN1cnJlbnQgaGVhZGluZyBhdCBhIHJlZ3VsYXIgaW50ZXJ2YWxcbiAgICpcbiAgICogU3RvcCB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSB7RGV2aWNlT3JpZW50YXRpb25Db21wYXNzT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIGNvbXBhc3MuIEZyZXF1ZW5jeSBhbmQgRmlsdGVyLiBPcHRpb25hbFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgY29udGFpbnMgdGhlIGNvbXBhc3MgaGVhZGluZ1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdjbGVhcldhdGNoJ1xuICB9KVxuICB3YXRjaEhlYWRpbmcoXG4gICAgb3B0aW9ucz86IERldmljZU9yaWVudGF0aW9uQ29tcGFzc09wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxEZXZpY2VPcmllbnRhdGlvbkNvbXBhc3NIZWFkaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=