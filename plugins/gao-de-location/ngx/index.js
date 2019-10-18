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
var GaoDeLocation = /** @class */ (function (_super) {
    __extends(GaoDeLocation, _super);
    function GaoDeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GaoDeLocation.prototype.getCurrentPosition = function () { return cordova(this, "getCurrentPosition", {}, arguments); };
    GaoDeLocation.pluginName = "GaoDeLocation";
    GaoDeLocation.plugin = "cordova-plugin-gaodelocation-chenyu";
    GaoDeLocation.pluginRef = "GaoDe";
    GaoDeLocation.repo = "https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git";
    GaoDeLocation.install = "ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key";
    GaoDeLocation.installVariables = ["ANDROID_API_KEY", "IOS_API_KEY"];
    GaoDeLocation.platforms = ["Android", "iOS"];
    GaoDeLocation = __decorate([
        Injectable()
    ], GaoDeLocation);
    return GaoDeLocation;
}(IonicNativePlugin));
export { GaoDeLocation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dhby1kZS1sb2NhdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnJDLGlDQUFpQjs7OztJQU1sRCwwQ0FBa0I7Ozs7Ozs7O0lBTlAsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQWhDMUI7RUFnQ21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgR2FvIERlIExvY2F0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJlY2F1c2UgdGhlIG9yaWdpbmFsIEdQUyBwb3NpdGlvbmluZyB1c2VzIEdvb2dsZSBCcm93c2VyIHBvc2l0aW9uaW5nLCBhbmQgR29vZ2xlIHdpdGhkcmF3cyBmcm9tIENoaW5hLCByZXN1bHRpbmcgaW4gR1BTIEFuZHJvaWQgcG9zaXRpb25pbmcgY2FuIG5vdCBiZSBwb3NpdGlvbmVkLlxuICogR2FvZGUgbG9jYXRpb24gY2FuIGRpcmVjdGx5IHJldHVybiBhZGRyZXNzIGluZm9ybWF0aW9uR2FvZGUgbG9jYXRpb24gY2FuIGRpcmVjdGx5IHJldHVybiBhZGRyZXNzIGluZm9ybWF0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHYW9EZUxvY2F0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nYW8tZGUtbG9jYXRpb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnYW9EZUxvY2F0aW9uOiBHYW9EZUxvY2F0aW9uKSB7IH1cbiAqXG4gKiB0aGlzLmdhb0RlTG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClcbiAqIC50aGVuKChyZXM6IFBvc2l0aW9uT3B0aW9ucykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHYW9EZUxvY2F0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2FvZGVsb2NhdGlvbi1jaGVueXUnLFxuICBwbHVnaW5SZWY6ICdHYW9EZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vd2FsaXUvY29yZG92YS1wbHVnaW4tZ2FvZGVsb2NhdGlvbi1jaGVueXUuZ2l0JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nYW9kZWxvY2F0aW9uLWNoZW55dSAtLXZhcmlhYmxlICBBTkRST0lEX0FQSV9LRVk9eW91ciBhbmRyb2lkIGtleSAtLXZhcmlhYmxlICBJT1NfQVBJX0tFWT15b3VyIGlvcyBrZXknLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FORFJPSURfQVBJX0tFWScsICdJT1NfQVBJX0tFWSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHYW9EZUxvY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUsIGNvdW50cnksIHByb3ZpbmNlLCBjaXR5LCBwb3N0YWwgY29kZSwgc3BlY2lmaWMgYWRkcmVzcywgcmVnaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBvc2l0aW9uT3B0aW9ucz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRQb3NpdGlvbigpOiBQcm9taXNlPFBvc2l0aW9uT3B0aW9ucz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25PcHRpb25zIHtcbiAgLypcbiAgKiBsYXRpdHVkZVxuICAqICovXG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIC8qXG4gICAqIGxvbmdpdHVkZVxuICAgKiAqL1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgLypcbiAgICogaW9zIEhvcml6b250YWwgYWNjdXJhY3ksYW5kcm9pZCBhY2N1cmFjeVxuICAgKiAqL1xuICBhY2N1cmFjeTogc3RyaW5nO1xuICAvKlxuICAgKiBQb3N0YWwgQ29kZVxuICAgKiAqL1xuICBhZGNvZGU6IHN0cmluZztcbiAgLypcbiAgICogRGV0YWlsZWQgYWRkcmVzc1xuICAgKiAqL1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIC8qXG4gICAqIGNpdHlcbiAgICogKi9cbiAgY2l0eTogc3RyaW5nO1xuICAvKlxuICAgKiBjaXR5IENvZGVcbiAgICogKi9cbiAgY2l0eWNvZGU6IHN0cmluZztcbiAgLypcbiAgICogY291bnRyeVxuICAgKiAqL1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIC8qXG4gICogZGlzdHJpY3RcbiAgKiAqL1xuICBkaXN0cmljdDogc3RyaW5nO1xuICAvKlxuICAqIEFkZHJlc3MgbmFtZVxuICAqICovXG4gIHBvaTogc3RyaW5nO1xuICAvKlxuICAqIHByb3ZpbmNlXG4gICogKi9cbiAgcHJvdmluY2U6IHN0cmluZztcbiAgLypcbiAgKiBUaGUgc3RhdGUgb2YgdGhlIGNhbGxpbmcgcGx1Zy1pblxuICAqICovXG4gIHN0YXR1czogc3RyaW5nO1xuICAvKlxuICAqIExvY2F0aW9uIHR5cGVcbiAgKiAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qXG4gICogQW5kcm9pZCBMb2NhdGlvbiB0aW1lLCBpb3Mgdm9pZFxuICAqICoqL1xuICB0aW1lPzogc3RyaW5nO1xuICAvKlxuICAqIGJhY2t0aW1lLCBpb3Mgdm9pZFxuICAqICoqL1xuICBiYWNrdGltZT86IHN0cmluZztcbiAgLypcbiAgKiBhbmdsZVxuICAqICovXG4gIGJlYXJpbmc/OiBzdHJpbmc7XG4gIC8qXG4gICAqIE51bWJlciBvZiBzYXRlbGxpdGVzLCBpb3Mgdm9pZFxuICAgKiAqL1xuICBzYXRlbGxpdGVzPzogc3RyaW5nO1xufVxuIl19