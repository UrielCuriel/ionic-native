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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var ExtendedDeviceInformation = /** @class */ (function (_super) {
    __extends(ExtendedDeviceInformation, _super);
    function ExtendedDeviceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ExtendedDeviceInformation.prototype, "memory", {
        get: function () { return cordovaPropertyGet(this, "memory"); },
        set: function (value) { cordovaPropertySet(this, "memory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "cpumhz", {
        get: function () { return cordovaPropertyGet(this, "cpumhz"); },
        set: function (value) { cordovaPropertySet(this, "cpumhz", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "totalstorage", {
        get: function () { return cordovaPropertyGet(this, "totalstorage"); },
        set: function (value) { cordovaPropertySet(this, "totalstorage", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "freestorage", {
        get: function () { return cordovaPropertyGet(this, "freestorage"); },
        set: function (value) { cordovaPropertySet(this, "freestorage", value); },
        enumerable: true,
        configurable: true
    });
    ExtendedDeviceInformation.pluginName = "ExtendedDeviceInformation";
    ExtendedDeviceInformation.plugin = "cordova-plugin-extended-device-information";
    ExtendedDeviceInformation.pluginRef = "extended-device-information";
    ExtendedDeviceInformation.repo = "https://github.com/danielehrhardt/cordova-plugin-extended-device-information";
    ExtendedDeviceInformation.platforms = ["Android"];
    ExtendedDeviceInformation = __decorate([
        Injectable()
    ], ExtendedDeviceInformation);
    return ExtendedDeviceInformation;
}(IonicNativePlugin));
export { ExtendedDeviceInformation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2V4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ2pDLDZDQUFpQjs7OzswQkFLOUQsNkNBQU07Ozs7OzswQkFNTiw2Q0FBTTs7Ozs7OzBCQU1OLG1EQUFZOzs7Ozs7MEJBTVosa0RBQVc7Ozs7Ozs7Ozs7O0lBdkJBLHlCQUF5QjtRQURyQyxVQUFVLEVBQUU7T0FDQSx5QkFBeUI7b0NBakN0QztFQWlDK0MsaUJBQWlCO1NBQW5ELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRXh0ZW5kZWQgRGV2aWNlIEluZm9ybWF0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHJpZXZlcyBhZGRpdGlvbmFsIGRldmljZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBEZXZpY2UgSGFyZHdhcmVcbiAqICAtIG1lbW9yeVxuICogIC0gY3B1bWh6XG4gKiAgLSB0b3RhbHN0b3JhZ2VcbiAqICAtIGZyZWVzdG9yYWdlXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBFeHRlbmRlZERldmljZUluZm9ybWF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9leHRlbmRlZC1kZXZpY2UtaW5mb3JtYXRpb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBleHRlbmRlZERldmljZUluZm9ybWF0aW9uOiBFeHRlbmRlZERldmljZUluZm9ybWF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zb2xlLmxvZygnVGhlIE1lbW9yeSBpczogJyArIHRoaXMuZXh0ZW5kZWREZXZpY2VJbmZvcm1hdGlvbi5tZW1vcnkpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRXh0ZW5kZWREZXZpY2VJbmZvcm1hdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWV4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbicsXG4gIHBsdWdpblJlZjogJ2V4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbicsXG4gIHJlcG86XG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxlaHJoYXJkdC9jb3Jkb3ZhLXBsdWdpbi1leHRlbmRlZC1kZXZpY2UtaW5mb3JtYXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRGV2aWNlSW5mb3JtYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIG1lbW9yeSBzaXplXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbWVtb3J5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGV2aWNlJ3MgQ1BVIG1oelxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGNwdW1oejogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvdGFsIHN0b3JhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB0b3RhbHN0b3JhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSB0b3RhbCBzdG9yYWdlXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgZnJlZXN0b3JhZ2U6IG51bWJlcjtcbn1cbiJdfQ==