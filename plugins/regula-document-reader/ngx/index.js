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
var RegulaDocumentReader = /** @class */ (function (_super) {
    __extends(RegulaDocumentReader, _super);
    function RegulaDocumentReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegulaDocumentReader.prototype.initReader = function (license) { return cordova(this, "initReader", {}, arguments); };
    RegulaDocumentReader.prototype.scanDocument = function () { return cordova(this, "scanDocument", {}, arguments); };
    RegulaDocumentReader.pluginName = "Regula Document Reader";
    RegulaDocumentReader.plugin = "cordova-plugin-documentreader";
    RegulaDocumentReader.pluginRef = "DocumentReader";
    RegulaDocumentReader.repo = "https://github.com/regulaforensics/cordova-plugin-documentreader.git";
    RegulaDocumentReader.platforms = ["iOS", "Android"];
    RegulaDocumentReader.install = "ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION=\"To take photo\"";
    RegulaDocumentReader = __decorate([
        Injectable()
    ], RegulaDocumentReader);
    return RegulaDocumentReader;
}(IonicNativePlugin));
export { RegulaDocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JlZ3VsYS1kb2N1bWVudC1yZWFkZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkI5Qix3Q0FBaUI7Ozs7SUFPekQseUNBQVUsYUFBQyxPQUFZO0lBUXZCLDJDQUFZOzs7Ozs7O0lBZkQsb0JBQW9CO1FBRGhDLFVBQVUsRUFBRTtPQUNBLG9CQUFvQjsrQkE5QmpDO0VBOEIwQyxpQkFBaUI7U0FBOUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQHBhaWRcbiAqIEBiZXRhXG4gKiBAbmFtZSBSZWd1bGEgRG9jdW1lbnQgUmVhZGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBsdWdpbiBmb3IgcmVhZGluZyBhbmQgdmFsaWRhdGlvbiBvZiBpZGVudGlmaWNhdGlvbiBkb2N1bWVudHMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBSZWd1bGFEb2N1bWVudFJlYWRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcmVndWxhLWRvY3VtZW50LXJlYWRlci9uZ3gnO1xuICpcbiAqIGxldCBsaWNlbnNlOyAvLyByZWFkIHJlZ3VsYS5saWNlbnNlIGZpbGVcbiAqIFJlZ3VsYURvY3VtZW50UmVhZGVyLmluaXRSZWFkZXIobGljZW5zZSk7IC8vIGluaXRpYWxpemUgcmVhZGVyXG4gKiBSZWd1bGFEb2N1bWVudFJlYWRlci5zY2FuRG9jdW1lbnQoKS50aGVuKChyZXN1bHQpID0+IHtcbiAqIFx0XHQvLyByZWFkIHJlc3VsdFxuICogfSlcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1JlZ3VsYSBEb2N1bWVudCBSZWFkZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudHJlYWRlcicsXG4gIHBsdWdpblJlZjogJ0RvY3VtZW50UmVhZGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvY29yZG92YS1wbHVnaW4tZG9jdW1lbnRyZWFkZXIuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIGluc3RhbGw6ICdpb25pYyBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWRvY3VtZW50cmVhZGVyIC0tdmFyaWFibGUgQ0FNRVJBX1VTQUdFX0RFU0NSSVBUSU9OPVwiVG8gdGFrZSBwaG90b1wiJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVndWxhRG9jdW1lbnRSZWFkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHNjYW5uZXJcbiAgICogQHBhcmFtIGxpY2Vuc2Uge2FueX0gTGljZW5zZSBkYXRhXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRSZWFkZXIobGljZW5zZTogYW55KTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHRoZSBzY2FubmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nW10+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcmVzdWx0cyB3YXMgZ290LCBhbmQgZmFpbHMgd2hlbiBub3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2NhbkRvY3VtZW50KCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==