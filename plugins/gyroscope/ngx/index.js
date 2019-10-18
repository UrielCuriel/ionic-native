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
var Gyroscope = /** @class */ (function (_super) {
    __extends(Gyroscope, _super);
    function Gyroscope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watching for gyroscope sensor changes
     * @param {GyroscopeOptions} [options]
     * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
     */
    Gyroscope.prototype.watch = function (options) {
        return new Observable(function (observer) {
            var watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.gyroscope.clearWatch(watchId); };
        });
    };
    Gyroscope.prototype.getCurrent = function (options) { return cordova(this, "getCurrent", { "callbackOrder": "reverse" }, arguments); };
    Gyroscope.pluginName = "Gyroscope";
    Gyroscope.plugin = "cordova-plugin-gyroscope";
    Gyroscope.pluginRef = "navigator.gyroscope";
    Gyroscope.repo = "https://github.com/NeoLSN/cordova-plugin-gyroscope";
    Gyroscope.platforms = ["Android", "iOS"];
    Gyroscope = __decorate([
        Injectable()
    ], Gyroscope);
    return Gyroscope;
}(IonicNativePlugin));
export { Gyroscope };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2d5cm9zY29wZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWlGWiw2QkFBaUI7Ozs7SUFDOUM7Ozs7T0FJRztJQUNILHlCQUFLLEdBQUwsVUFBTSxPQUEwQjtRQUM5QixPQUFPLElBQUksVUFBVSxDQUNuQixVQUFDLFFBQWE7WUFDWixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvRyxPQUFPLGNBQU0sT0FBQSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQztRQUN2RCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFVRCw4QkFBVSxhQUFDLE9BQTBCOzs7Ozs7SUF2QjFCLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkFuRnRCO0VBbUYrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG4vKipcbiAqICBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR3lyb3Njb3BlT3JpZW50YXRpb24ge1xuICAvKipcbiAgICogIFJlcHJlc2VudCB4LWF4aXNcbiAgICovXG4gIHg6IG51bWJlcjtcblxuICAvKipcbiAgICogIFJlcHJlc2VudCB5LWF4aXNcbiAgICovXG4gIHk6IG51bWJlcjtcblxuICAvKipcbiAgICogIFJlcHJlc2VudCB6LWF4aXNcbiAgICovXG4gIHo6IG51bWJlcjtcblxuICAvKipcbiAgICogIFJlcHJlc2VudCB0aW1lc3RhbXAgb2Ygc2Vuc29yIHJlYWQuIERlZmF1bHQgaXMgMTAwMDBtc1xuICAgKi9cbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbi8qKlxuICogIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHeXJvc2NvcGVPcHRpb25zIHtcbiAgLyoqXG4gICAqICBSZXByZXNlbnQgaG93IG9mdGVuIChpbiBtaWxsaXNlY29uZHMpIHNlbnNvciBzaG91bGQgYmUgcmVhZC4gIERlZmF1bHQgaXMgMTAwMDAgbXNcbiAgICovXG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIEd5cm9zY29wZVxuICogQGRlc2NyaXB0aW9uIFJlYWQgR3lyb3Njb3BlIHNlbnNvciBkYXRhXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEd5cm9zY29wZSwgR3lyb3Njb3BlT3JpZW50YXRpb24sIEd5cm9zY29wZU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2d5cm9zY29wZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGd5cm9zY29wZTogR3lyb3Njb3BlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogbGV0IG9wdGlvbnM6IEd5cm9zY29wZU9wdGlvbnMgPSB7XG4gKiAgICBmcmVxdWVuY3k6IDEwMDBcbiAqIH1cbiAqXG4gKiB0aGlzLmd5cm9zY29wZS5nZXRDdXJyZW50KG9wdGlvbnMpXG4gKiAgIC50aGVuKChvcmllbnRhdGlvbjogR3lyb3Njb3BlT3JpZW50YXRpb24pID0+IHtcbiAqICAgICAgY29uc29sZS5sb2cob3JpZW50YXRpb24ueCwgb3JpZW50YXRpb24ueSwgb3JpZW50YXRpb24ueiwgb3JpZW50YXRpb24udGltZXN0YW1wKTtcbiAqICAgIH0pXG4gKiAgIC5jYXRjaCgpXG4gKlxuICpcbiAqIHRoaXMuZ3lyb3Njb3BlLndhdGNoKClcbiAqICAgIC5zdWJzY3JpYmUoKG9yaWVudGF0aW9uOiBHeXJvc2NvcGVPcmllbnRhdGlvbikgPT4ge1xuICogICAgICAgY29uc29sZS5sb2cob3JpZW50YXRpb24ueCwgb3JpZW50YXRpb24ueSwgb3JpZW50YXRpb24ueiwgb3JpZW50YXRpb24udGltZXN0YW1wKTtcbiAqICAgIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEd5cm9zY29wZU9yaWVudGF0aW9uXG4gKiBHeXJvc2NvcGVPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR3lyb3Njb3BlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ3lyb3Njb3BlJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmd5cm9zY29wZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmVvTFNOL2NvcmRvdmEtcGx1Z2luLWd5cm9zY29wZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEd5cm9zY29wZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFdhdGNoaW5nIGZvciBneXJvc2NvcGUgc2Vuc29yIGNoYW5nZXNcbiAgICogQHBhcmFtIHtHeXJvc2NvcGVPcHRpb25zfSBbb3B0aW9uc11cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxHeXJvc2NvcGVPcmllbnRhdGlvbj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIEd5cm9zY29wZU9yaWVudGF0aW9uXG4gICAqL1xuICB3YXRjaChvcHRpb25zPzogR3lyb3Njb3BlT3B0aW9ucyk6IE9ic2VydmFibGU8R3lyb3Njb3BlT3JpZW50YXRpb24+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8R3lyb3Njb3BlT3JpZW50YXRpb24+KFxuICAgICAgKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgd2F0Y2hJZCA9IG5hdmlnYXRvci5neXJvc2NvcGUud2F0Y2gob2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSwgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBuYXZpZ2F0b3IuZ3lyb3Njb3BlLmNsZWFyV2F0Y2god2F0Y2hJZCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBkYXRhIGZyb20gZ3lyb3Njb3BlIHNlbnNvclxuICAgKiBAcGFyYW0ge0d5cm9zY29wZU9wdGlvbnN9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEd5cm9zY29wZU9yaWVudGF0aW9uPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBHeXJvc2NvcGVPcmllbnRhdGlvblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBnZXRDdXJyZW50KG9wdGlvbnM/OiBHeXJvc2NvcGVPcHRpb25zKTogUHJvbWlzZTxHeXJvc2NvcGVPcmllbnRhdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19