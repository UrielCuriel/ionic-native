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
var InAppReview = /** @class */ (function (_super) {
    __extends(InAppReview, _super);
    function InAppReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReview.prototype.requestReview = function () { return cordova(this, "requestReview", {}, arguments); };
    InAppReview.pluginName = "InAppReview";
    InAppReview.plugin = "com.omarben.inappreview";
    InAppReview.pluginRef = "inappreview";
    InAppReview.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReview.platforms = ["iOS"];
    InAppReview = __decorate([
        Injectable()
    ], InAppReview);
    return InAppReview;
}(IonicNativePlugin));
export { InAppReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1yZXZpZXcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUN2QywrQkFBaUI7Ozs7SUFNaEQsbUNBQWE7Ozs7OztJQU5GLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFwQ3hCO0VBb0NpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyogdHNsaW50OmRpc2FibGUgKi9cbi8qKlxuICogQG5hbWUgSW4gQXBwIFJldmlld1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHVzZSB0aGUgaU9TIGNsYXNzIFNLU3RvcmXigItSZXZpZXfigItDb250cm9sbGVyIHRvIG9wZW4gdGhlIGluQXBwIHJldmlldyBwb3B1cCBhdmFpbGFibGUgc2luY2UgaU9TIDEwLjNcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uYWxpdHkgb25seSB3b3JrcyBvbiBpT1MgZGV2aWNlc1xuICpcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluQXBwUmV2aWV3IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtcmV2aWV3L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5BcHBSZXZpZXc6IEluQXBwUmV2aWV3KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5pbkFwcFJldmlldy5yZXF1ZXN0UmV2aWV3KClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuLyogdHNsaW50OmVuYWJsZSAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcFJldmlldycsXG4gIHBsdWdpbjogJ2NvbS5vbWFyYmVuLmluYXBwcmV2aWV3JyxcbiAgcGx1Z2luUmVmOiAnaW5hcHByZXZpZXcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL29tYXhsaXZlL2NvbS5vbWFyYmVuLmluYXBwcmV2aWV3JyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwUmV2aWV3IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiB0aGUgaW5BcHAgcmV2aWV3IHBvcHVwXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RSZXZpZXcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=