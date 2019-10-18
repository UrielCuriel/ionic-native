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
var LaunchReview = /** @class */ (function (_super) {
    __extends(LaunchReview, _super);
    function LaunchReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LaunchReview.prototype.launch = function (appId) { return cordova(this, "launch", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    LaunchReview.prototype.rating = function () { return cordova(this, "rating", { "platforms": ["iOS"] }, arguments); };
    LaunchReview.prototype.isRatingSupported = function () { return cordova(this, "isRatingSupported", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    LaunchReview.pluginName = "LaunchReview";
    LaunchReview.plugin = "cordova-launch-review";
    LaunchReview.pluginRef = "LaunchReview";
    LaunchReview.repo = "https://github.com/dpa99c/cordova-launch-review";
    LaunchReview.platforms = ["Android", "iOS"];
    LaunchReview = __decorate([
        Injectable()
    ], LaunchReview);
    return LaunchReview;
}(IonicNativePlugin));
export { LaunchReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xhdW5jaC1yZXZpZXcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUN0QyxnQ0FBaUI7Ozs7SUFXakQsNkJBQU0sYUFBQyxLQUFjO0lBY3JCLDZCQUFNO0lBVU4sd0NBQWlCOzs7Ozs7SUFuQ04sWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQXBDekI7RUFvQ2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTGF1bmNoIFJldmlld1xuICogQGRlc2NyaXB0aW9uXG4gKlxuICogQXNzaXN0cyBpbiBsZWF2aW5nIHVzZXIgcmV2aWV3cy9yYXRpbmdzIGluIHRoZSBBcHAgU3RvcmVzLlxuICogLSBMYXVuY2hlcyB0aGUgcGxhdGZvcm0ncyBBcHAgU3RvcmUgcGFnZSBmb3IgdGhlIGN1cnJlbnQgYXBwIGluIG9yZGVyIGZvciB0aGUgdXNlciB0byBsZWF2ZSBhIHJldmlldy5cbiAqIC0gT24gaU9TICgxMC4zIGFuZCBhYm92ZSkgaW52b2tlcyB0aGUgbmF0aXZlIGluLWFwcCByYXRpbmcgZGlhbG9nIHdoaWNoIGFsbG93cyBhIHVzZXIgdG8gcmF0ZSB5b3VyIGFwcCB3aXRob3V0IG5lZWRpbmcgdG8gb3BlbiB0aGUgQXBwIFN0b3JlLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTGF1bmNoUmV2aWV3IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sYXVuY2gtcmV2aWV3L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsYXVuY2hSZXZpZXc6IExhdW5jaFJldmlldykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5sYXVuY2hSZXZpZXcubGF1bmNoKClcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBsYXVuY2hlZCBzdG9yZSBhcHAnKSk7XG4gKlxuICogaWYodGhpcy5sYXVuY2hSZXZpZXcuaXNSYXRpbmdTdXBwb3J0ZWQoKSl7XG4gKiAgIHRoaXMubGF1bmNoUmV2aWV3LnJhdGluZygpXG4gKiAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBsYXVuY2hlZCByYXRpbmcgZGlhbG9nJykpO1xuICogfVxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTGF1bmNoUmV2aWV3JyxcbiAgcGx1Z2luOiAnY29yZG92YS1sYXVuY2gtcmV2aWV3JyxcbiAgcGx1Z2luUmVmOiAnTGF1bmNoUmV2aWV3JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1sYXVuY2gtcmV2aWV3JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF1bmNoUmV2aWV3IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyBBcHAgU3RvcmUgb24gY3VycmVudCBwbGF0Zm9ybSBpbiBvcmRlciB0byBsZWF2ZSBhIHJldmlldyBmb3IgZ2l2ZW4gYXBwLlxuICAgKiBAcGFyYW0gYXBwSWQge3N0cmluZ30gLSAob3B0aW9uYWwpIHRoZSBwbGF0Zm9ybS1zcGVjaWZpYyBhcHAgSUQgdG8gdXNlIHRvIG9wZW4gdGhlIHBhZ2UgaW4gdGhlIHN0b3JlIGFwcC5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIHBsdWdpbiB3aWxsIHVzZSB0aGUgYXBwIElEIGZvciB0aGUgYXBwIGluIHdoaWNoIHRoZSBwbHVnaW4gaXMgY29udGFpbmVkLlxuICAgKiBPbiBBbmRyb2lkIHRoaXMgaXMgdGhlIGZ1bGwgcGFja2FnZSBuYW1lIG9mIHRoZSBhcHAuIEZvciBleGFtcGxlLCBmb3IgR29vZ2xlIE1hcHM6IGBjb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5tYXBzYFxuICAgKiBPbiBpT1MgdGhpcyBpcyB0aGUgQXBwbGUgSUQgb2YgdGhlIGFwcC4gRm9yIGV4YW1wbGUsIGZvciBHb29nbGUgTWFwczogYDU4NTAyNzM1NGBcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgbGF1bmNoKGFwcElkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgdGhlIG5hdGl2ZSBpbi1hcHAgcmF0aW5nIGRpYWxvZyB3aGljaCBhbGxvd3MgYSB1c2VyIHRvIHJhdGUgeW91ciBhcHAgd2l0aG91dCBuZWVkaW5nIHRvIG9wZW4gdGhlIEFwcCBTdG9yZS5cbiAgICogUmVxdWlyZXMgaU9TIDEwLjMgYW5kIGFib3ZlOiBDYWxsaW5nIHRoaXMgb24gYW55IHBsYXRmb3JtL3ZlcnNpb24gb3RoZXIgdGhhbiBpT1MgMTAuMysgd2lsbCByZXN1bHQgaW4gdGhlIGVycm9yIGNhbGxiYWNrLlxuICAgKiBTdWNjZXNzIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHVwIHRvIDMgdGltZXM6XG4gICAqIC0gRmlyc3Q6IGFmdGVyIGBMYXVuY2hSZXZpZXcucmF0aW5nKClgIGlzIGNhbGxlZCBhbmQgdGhlIHJlcXVlc3QgdG8gc2hvdyB0aGUgZGlhbG9nIGlzIHN1Y2Nlc3NmdWwuIFdpbGwgYmUgcGFzc2VkIHRoZSB2YWx1ZSBgcmVxdWVzdGVkYC5cbiAgICogLSBTZWNvbmQ6IGlmIGFuZCB3aGVuIHRoZSBSYXRpbmcgZGlhbG9nIGlzIGFjdHVhbGx5IGRpc3BsYXllZC4gIFdpbGwgYmUgcGFzc2VkIHRoZSB2YWx1ZSBgc2hvd25gLlxuICAgKiAtIFRoaXJkOiBpZiBhbmQgd2hlbiB0aGUgUmF0aW5nIGRpYWxvZyBpcyBkaXNtaXNzZWQuICBXaWxsIGJlIHBhc3NlZCB0aGUgdmFsdWUgYGRpc21pc3NlZGAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByYXRpbmcoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBjdXJyZW50IHBsYXRmb3JtL3ZlcnNpb24gc3VwcG9ydHMgaW4tYXBwIHJhdGluZ3MgZGlhbG9nLCBpLmUuIGNhbGxpbmcgTGF1bmNoUmV2aWV3LnJhdGluZygpLlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIGN1cnJlbnQgcGxhdGZvcm0gaXMgaU9TIDEwLjMgb3IgYWJvdmUuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgc3luYzogdHJ1ZSB9KVxuICBpc1JhdGluZ1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19