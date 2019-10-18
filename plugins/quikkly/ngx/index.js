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
var QuikklyPlugin = /** @class */ (function (_super) {
    __extends(QuikklyPlugin, _super);
    function QuikklyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuikklyPlugin.prototype.openScanner = function () { return cordova(this, "openScanner", {}, arguments); };
    QuikklyPlugin.pluginName = "QuikklyPlugin";
    QuikklyPlugin.plugin = "cordova-plugin-quikkly";
    QuikklyPlugin.pluginRef = "cordova.plugins.quikkly";
    QuikklyPlugin.repo = "https://github.com/quikkly/cordova-plugin-quikkly.git";
    QuikklyPlugin.platforms = ["Android", "iOS"];
    QuikklyPlugin = __decorate([
        Injectable()
    ], QuikklyPlugin);
    return QuikklyPlugin;
}(IonicNativePlugin));
export { QuikklyPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3F1aWtrbHkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZXJDLGlDQUFpQjs7OztJQUVsRCxtQ0FBVzs7Ozs7O0lBRkEsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQWhCMUI7RUFnQm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgUXVpa2tseVBsdWdpblxuICogQGRlc2NyaXB0aW9uIGlvbmljIHdyYXBwZXIgZm9yIGNvcmRvdmEtcGx1Z2luLXF1aWtrbHlcbiAqIFVzZSB0aGUgcXVpa2tseSBzY2FubmVyIGluIHlvdXIgaW9uaWMgYXBwXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUXVpa2tseVBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXF1aWtrbHknLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMucXVpa2tseScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcXVpa2tseS9jb3Jkb3ZhLXBsdWdpbi1xdWlra2x5LmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1aWtrbHlQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgb3BlblNjYW5uZXIoKTogUHJvbWlzZTxzdHJpbmdbXT4geyByZXR1cm4gOyB9XG59XG5cbiJdfQ==