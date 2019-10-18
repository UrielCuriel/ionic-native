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
export var DocumentScannerSourceType;
(function (DocumentScannerSourceType) {
    /**
     * Scan directly from device camera.
     * This is the default.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["CAMERA"] = 1] = "CAMERA";
    /**
     * Scan from an image already stored on device.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["GALLERY"] = 0] = "GALLERY";
})(DocumentScannerSourceType || (DocumentScannerSourceType = {}));
var DocumentScanner = /** @class */ (function (_super) {
    __extends(DocumentScanner, _super);
    function DocumentScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScanner.prototype.scanDoc = function (opts) { return cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScanner.pluginName = "DocumentScanner";
    DocumentScanner.plugin = "cordova-plugin-document-scanner";
    DocumentScanner.pluginRef = "scan";
    DocumentScanner.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScanner.platforms = ["Android", "iOS"];
    DocumentScanner = __decorate([
        Injectable()
    ], DocumentScanner);
    return DocumentScanner;
}(IonicNativePlugin));
export { DocumentScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXNjYW5uZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVkseUJBV1g7QUFYRCxXQUFZLHlCQUF5QjtJQUNuQzs7O09BR0c7SUFDSCw2RUFBVSxDQUFBO0lBRVY7O09BRUc7SUFDSCwrRUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQVhXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFXcEM7O0lBa0VvQyxtQ0FBaUI7Ozs7SUFVcEQsaUNBQU8sYUFBQyxJQUE2Qjs7Ozs7O0lBVjFCLGVBQWU7UUFEM0IsVUFBVSxFQUFFO09BQ0EsZUFBZTswQkFoRjVCO0VBZ0ZxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgZW51bSBEb2N1bWVudFNjYW5uZXJTb3VyY2VUeXBlIHtcbiAgLyoqXG4gICAqIFNjYW4gZGlyZWN0bHkgZnJvbSBkZXZpY2UgY2FtZXJhLlxuICAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICAgKi9cbiAgQ0FNRVJBID0gMSxcblxuICAvKipcbiAgICogU2NhbiBmcm9tIGFuIGltYWdlIGFscmVhZHkgc3RvcmVkIG9uIGRldmljZS5cbiAgICovXG4gIEdBTExFUlkgPSAwXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRTY2FubmVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBDaG9vc2UgdG8gc2NhbiBmcm9tIGNhbWVyYSBvciBleGlzdGluZyBpbWFnZSBmaWxlLiBPbmx5IHZhbGlkIGZvciBBbmRyb2lkLlxuICAgKi9cbiAgc291cmNlVHlwZT86IERvY3VtZW50U2Nhbm5lclNvdXJjZVR5cGU7XG5cbiAgLyoqXG4gICAqIEZpbGVuYW1lIHRvIHNhdmUgc2Nhbm5lZCBpbWFnZSB0byAobWludXMgZXh0ZW5zaW9uLCB3aGljaCBpcyBhbHdheXMgXCIucG5nXCIpLlxuICAgKiBPbmx5IHZhbGlkIGZvciBpT1MuIENhbGxlciBpcyByZXNwb25zaWJsZSBmb3IgY2xlYW5pbmcgdXAgYW55IGZpbGVzIGNyZWF0ZWRcbiAgICogaWYgdGhpcyBwYXJhbWV0ZXIgaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gdGhlIGRlZmF1bHQgdmFsdWUsXG4gICAqIHdoaWNoIGlzIFwiaW1hZ2VcIi5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBRdWFsaXR5IHRvIHVzZSB3aGVuIGNhcHR1cmluZyB0aGUgaW1hZ2UsIG11c3QgYmUgYSBmbG9hdCB2YWx1ZVxuICAgKiBmcm9tIDEuMChkZWZhdWx0IC0gSGlnaGVzdCBxdWFsaXR5KSB0byA1LjAoTG93ZXN0IFF1YWxpdHkpLiBBbnkgdmFsdWVcbiAgICogaW4gYmV0d2VlbiB3aWxsIGJlIGFjY2VwdGVkLiBBbnkgdmFsdWUgbm90IGVxdWFsIHRvIG9yIG5vdCBiZXR3ZWVuIHRoZXNlIHZhbHVlc1xuICAgKiAgd2lsbCBkZWZhdWx0IHRvIHRoZSBoaWdoZXN0IHF1YWxpdHkgb2YgMS4wLlxuICAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogSWYgdGhlIGltYWdlIHNob3VsZCBiZSByZXR1cm5lZCBhcyBhIGJhc2U2NCBlbmNvZGluZyBpbnN0ZWFkIG9mIGFzIGEgZmlsZSBVUkwuXG4gICAqIElmIHRydWUsIHRoZSBwbHVnaW4gd2lsbCByZXR1cm4gdGhlIHNjYW5uZWQgaW1hZ2UgYXMgYmFzZTY0LiBJZiBmYWxzZSxcbiAgICogdGhlIHBsdWdpbiB3aWxsIHJldHVybiB0aGUgaW1hZ2UgVVJMIG9mIHRoZSBpbWFnZS5cbiAgICovXG4gIHJldHVybkJhc2U2ND86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgRG9jdW1lbnQgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm9jZXNzZXMgaW1hZ2VzIG9mIGRvY3VtZW50cywgY29tcGVuc2F0aW5nIGZvciBwZXJzcGVjdGl2ZS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERvY3VtZW50U2Nhbm5lciwgRG9jdW1lbnRTY2FubmVyT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZG9jdW1lbnQtc2Nhbm5lcic7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnRTY2FubmVyOiBEb2N1bWVudFNjYW5uZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBvcHRzOiBEb2N1bWVudFNjYW5uZXJPcHRpb25zID0ge307XG4gKiB0aGlzLmRvY3VtZW50U2Nhbm5lci5zY2FuRG9jdW1lbnQob3B0cylcbiAqICAgLnRoZW4oKHJlczogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogRG9jdW1lbnRTY2FubmVyT3B0aW9uc1xuICogQGVudW1zXG4gKiBEb2N1bWVudFNjYW5uZXJTb3VyY2VUeXBlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRG9jdW1lbnRTY2FubmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG9jdW1lbnQtc2Nhbm5lcicsXG4gIHBsdWdpblJlZjogJ3NjYW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05ldXRyaW5vc1BsYXRmb3JtL2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXNjYW5uZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFNjYW5uZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFNjYW4gYSBkb2N1bWVudFxuICAgKiBAcGFyYW0gb3B0cyB7RG9jdW1lbnRTY2FubmVyT3B0aW9uc30gb3B0aW9uYWwgcGFyYW1ldGVyIGZvciBjb250cm9sbGluZyBzY2FubmluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IGZpbGUgVVJMIG9mIHNjYW5uZWQgZG9jdW1lbnQgaW1hZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgc2NhbkRvYyhvcHRzPzogRG9jdW1lbnRTY2FubmVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=