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
var IOSFilePicker = /** @class */ (function (_super) {
    __extends(IOSFilePicker, _super);
    function IOSFilePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IOSFilePicker.prototype.pickFile = function (utis, position) { return cordova(this, "pickFile", { "callbackOrder": "reverse" }, arguments); };
    IOSFilePicker.pluginName = "iOS File Picker";
    IOSFilePicker.plugin = "cordova-plugin-filepicker";
    IOSFilePicker.pluginRef = "FilePicker";
    IOSFilePicker.repo = "https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin";
    IOSFilePicker.platforms = ["iOS"];
    IOSFilePicker = __decorate([
        Injectable()
    ], IOSFilePicker);
    return IOSFilePicker;
}(IonicNativePlugin));
export { IOSFilePicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtcGlja2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDckMsaUNBQWlCOzs7O0lBVWxELGdDQUFRLGFBQ04sSUFBd0IsRUFDeEIsUUFBZ0M7Ozs7OztJQVp2QixhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBeEMxQjtFQXdDbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJT1NGaWxlUGlja2VyUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgaU9TIEZpbGUgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBPcGVucyB0aGUgZmlsZSBwaWNrZXIgb24gaU9TIGZvciB0aGUgdXNlciB0byBzZWxlY3QgYSBmaWxlLCByZXR1cm5zIGEgZmlsZSBVUkkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJT1NGaWxlUGlja2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXBpY2tlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZVBpY2tlcjogSU9TRmlsZVBpY2tlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlUGlja2VyLnBpY2tGaWxlKClcbiAqICAgLnRoZW4odXJpID0+IGNvbnNvbGUubG9nKHVyaSkpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yJywgZXJyKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSU9TRmlsZVBpY2tlclBvc2l0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnaU9TIEZpbGUgUGlja2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZXBpY2tlcicsXG4gIHBsdWdpblJlZjogJ0ZpbGVQaWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2pjZXNhcm1vYmlsZS9GaWxlUGlja2VyLVBob25lZ2FwLWlPUy1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSU9TRmlsZVBpY2tlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gYSBmaWxlXG4gICAqIEBwYXJhbXMge3N0cmluZyB8IHN0cmluZ1tdfSBbdXRpc11cbiAgICogQHBhcmFtcyB7SU9TRmlsZVBpY2tlclBvc2l0aW9ufSBbcG9zaXRpb25dIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZSB3aGVyZSB0aGUgZmlsZSBwaWNrZXIgc2hvdWxkIHNob3cgdXAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHBpY2tGaWxlKFxuICAgIHV0aXM/OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBwb3NpdGlvbj86IElPU0ZpbGVQaWNrZXJQb3NpdGlvblxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19