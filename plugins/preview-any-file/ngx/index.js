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
var PreviewAnyFile = /** @class */ (function (_super) {
    __extends(PreviewAnyFile, _super);
    function PreviewAnyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewAnyFile.prototype.preview = function (url) { return cordova(this, "preview", {}, arguments); };
    PreviewAnyFile.pluginName = "PreviewAnyFile";
    PreviewAnyFile.plugin = "cordova-plugin-preview-any-file";
    PreviewAnyFile.pluginRef = "PreviewAnyFile";
    PreviewAnyFile.repo = "https://github.com/mostafa-mansour1/previewAnyFile";
    PreviewAnyFile.install = "";
    PreviewAnyFile.installVariables = [];
    PreviewAnyFile.platforms = ["Android", "iOS"];
    PreviewAnyFile = __decorate([
        Injectable()
    ], PreviewAnyFile);
    return PreviewAnyFile;
}(IonicNativePlugin));
export { PreviewAnyFile };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ByZXZpZXctYW55LWZpbGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0NwQyxrQ0FBaUI7Ozs7SUFPbkQsZ0NBQU8sYUFBQyxHQUFXOzs7Ozs7OztJQVBSLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFuQzNCO0VBbUNvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBQcmV2aWV3QW55RmlsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBXaGF0ZXZlciB0aGUgZmlsZSBpcyBQREYgZG9jdW1lbnQsIFdvcmQgZG9jdW1lbnQsIEV4Y2VsLCBvZmZpY2UgZG9jdW1lbnQsemlwIGFyY2hpdmUgZmlsZSwgaW1hZ2UsIHRleHQsIGh0bWwgb3IgYW55dGhpbmcgZWxzZSwgeW91IGNhbiBwZXJmb3JtIGEgcHJldmlldyBieSB0aGlzIGNvcmRvdmEgUGx1Z2luIHRvIHByZXZpZXcgYW55IGZpbGUgaW4gbmF0aXZlIG1vZGUgYnkgcHJvdmlkaW5nIHRoZSBsb2NhbCBvciBleHRlcm5hbCBVUkwuXG4gKlxuICogIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tcHJldmlldy1hbnktZmlsZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtwcmV2aWV3QW55RmlsZSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL21vc3RhZmEtbWFuc291cjEvcHJldmlld0FueUZpbGUpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUHJldmlld0FueUZpbGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3ByZXZpZXctYW55LWZpbGUnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHByZXZpZXdBbnlGaWxlOiBQcmV2aWV3QW55RmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMucHJldmlld0FueUZpbGUucHJldmlldygnZmlsZTovL2ZpbGVwYXRoLmV4dCcpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUHJldmlld0FueUZpbGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wcmV2aWV3LWFueS1maWxlJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ1ByZXZpZXdBbnlGaWxlJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21vc3RhZmEtbWFuc291cjEvcHJldmlld0FueUZpbGUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmV2aWV3QW55RmlsZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIHRoaXMgZnVuY3Rpb24gcmV0dXJuIFNVQ0NFU1MgaW4gc3VjY2VzcyBjYWxsYmFjayBpZiB0aGUgZmlsZSBzdWNjZXNzZnVsbHkgb3BlbmVkLCBpZiB0aGUgY29udGVudCBpcyBiYXNlNjQgeW91IGhhdmUgdG8gd3JpdGUgaXQgaW50byBmaWxlIGJ5IGNvcmRvdmEtcGx1Z2luLWZpbGVcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBmdWxsIGFic29sdXRlIFVSTCBmb3IgdGhlIGZpbGUsIGlmIHRoZSBwYXRoIGlzIGNvbnRlbnQ6Ly8geW91IG5lZWQgdG8gcmVzb2x2ZSB0aGUgbmF0aXZlIHVybCwgaWYgdGhlIHBhdGggaXMgaHR0cHM6Ly8gaXQgbWF5IG5vdCB3b3JrIGluIGFuZHJvaWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBmaWxlIG9wZW5lZCByZWplY3QgaWYgbm90O1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmV2aWV3KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==