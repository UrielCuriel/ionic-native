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
var ZBar = /** @class */ (function (_super) {
    __extends(ZBar, _super);
    function ZBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZBar.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    ZBar.pluginName = "ZBar";
    ZBar.plugin = "cordova-plugin-cszbar";
    ZBar.pluginRef = "cloudSky.zBar";
    ZBar.repo = "https://github.com/tjwoon/csZBar";
    ZBar.platforms = ["Android", "iOS"];
    ZBar = __decorate([
        Injectable()
    ], ZBar);
    return ZBar;
}(IonicNativePlugin));
export { ZBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3piYXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkU5Qyx3QkFBaUI7Ozs7SUFRekMsbUJBQUksYUFBQyxPQUFvQjs7Ozs7O0lBUmQsSUFBSTtRQURoQixVQUFVLEVBQUU7T0FDQSxJQUFJO2VBOUVqQjtFQThFMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBaQmFyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHRpdGxlIHRleHQgKEFuZHJvaWQgb25seSkuXG4gICAqIERlZmF1bHQ6IFwiU2NhbiBRUiBDb2RlXCJcbiAgICovXG4gIHRleHRfdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgaW5zdHJ1Y3Rpb24gdGV4dCAoQW5kcm9pZCBvbmx5KS5cbiAgICogRGVmYXVsdDogXCJQbGVhc2UgcG9pbnQgeW91ciBjYW1lcmEgYXQgdGhlIFFSIGNvZGUuXCJcbiAgICovXG4gIHRleHRfaW5zdHJ1Y3Rpb25zPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgYWN0aXZlIGNhbWVyYSB3aGVuIG9wZW5pbmcgdGhlIHNjYW5uZXIuXG4gICAqIFBvc3NpYmxlIHZhbHVlczogXCJmcm9udFwiLCBcImJhY2tcIlxuICAgKiBEZWZhdWx0OiBcImJhY2tcIlxuICAgKi9cbiAgY2FtZXJhPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgc3RhdGUgb2YgdGhlIGZsYXNoLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IFwib25cIiwgXCJvZmZcIiwgXCJhdXRvXCJcbiAgICogRGVmYXVsdDogXCJhdXRvXCJcbiAgICovXG4gIGZsYXNoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdG8gc2hvdyBvciBoaWRlIGEgbGluZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzY2FubmVyLlxuICAgKiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBkcmF3U2lnaHQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIFpCYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIFpCYXIgU2Nhbm5lciBQbHVnaW4gYWxsb3dzIHlvdSB0byBzY2FuIDJkIGJhcmNvZGVzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY3N6YmFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW3pCYXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS90andvb24vY3NaQmFyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFpCYXIsIFpCYXJPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS96YmFyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6YmFyOiBaQmFyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgb3B0aW9uczogWkJhck9wdGlvbnMgPSB7XG4gKiAgICAgICBmbGFzaDogJ29mZicsXG4gKiAgICAgICBkcmF3U2lnaHQ6IGZhbHNlXG4gKiAgICAgfVxuICpcbiAqIHRoaXMuemJhci5zY2FuKG9wdGlvbnMpXG4gKiAgICAudGhlbihyZXN1bHQgPT4ge1xuICogICAgICAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8gU2Nhbm5lZCBjb2RlXG4gKiAgICB9KVxuICogICAgLmNhdGNoKGVycm9yID0+IHtcbiAqICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy8gRXJyb3IgbWVzc2FnZVxuICogICAgfSk7XG4gKlxuICogYGBgXG4gKlxuICogQGludGVyZmFjZXNcbiAqIFpCYXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWkJhcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNzemJhcicsXG4gIHBsdWdpblJlZjogJ2Nsb3VkU2t5LnpCYXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Rqd29vbi9jc1pCYXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBaQmFyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBzY2FubmVyXG4gICAqIEBwYXJhbSBvcHRpb25zIHsgWkJhck9wdGlvbnMgfSBTY2FuIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzY2FubmVkIHN0cmluZywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzY2FuKG9wdGlvbnM6IFpCYXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19