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
var UserAgent = /** @class */ (function (_super) {
    __extends(UserAgent, _super);
    function UserAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserAgent.prototype.set = function (userAgent) { return cordova(this, "set", {}, arguments); };
    UserAgent.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    UserAgent.prototype.reset = function () { return cordova(this, "reset", {}, arguments); };
    UserAgent.pluginName = "UserAgent";
    UserAgent.plugin = "cordova-plugin-useragent";
    UserAgent.pluginRef = "UserAgent";
    UserAgent.repo = "https://github.com/danielsogl/cordova-plugin-useragent";
    UserAgent.platforms = ["Android", "iOS"];
    UserAgent = __decorate([
        Injectable()
    ], UserAgent);
    return UserAgent;
}(IonicNativePlugin));
export { UserAgent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VzZXItYWdlbnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBeUN6Qyw2QkFBaUI7Ozs7SUFROUMsdUJBQUcsYUFBQyxTQUFpQjtJQVNyQix1QkFBRztJQVNILHlCQUFLOzs7Ozs7SUExQk0sU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQTFDdEI7RUEwQytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgVXNlciBBZ2VudFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgVXNlckFnZW50IHBsdWdpbiBwcm92aWRlcyBmdW5jdGlvbnMgdG8gc2V0IHRoZSBIVFRQICB1c2VyLWFnZW50IGhlYWRlci4gRm9yIG1vcmUgaW5mbyBhYm91dCBVc2VyLUFnZW50cywgcGxlYXNlIFtzZWUgdGhlIEhUVFAgVXNlci1BZ2VudCBkb2NzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0hlYWRlcnMvVXNlci1BZ2VudCkuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXVzZXJhZ2VudGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtVc2VyLUFnZW50IHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vTG91aXNUL2NvcmRvdmEtdXNlcmFnZW50KS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFVzZXJBZ2VudCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdXNlci1hZ2VudC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJBZ2VudDogVXNlckFnZW50KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy51c2VyQWdlbnQuc2V0KCdNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81MS4wLjI3MDQuMTAzIFNhZmFyaS81MzcuMzYnKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqICogdGhpcy51c2VyQWdlbnQuZ2V0KClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiAqIHRoaXMudXNlckFnZW50LnJlc2V0KClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdVc2VyQWdlbnQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi11c2VyYWdlbnQnLFxuICBwbHVnaW5SZWY6ICdVc2VyQWdlbnQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHNvZ2wvY29yZG92YS1wbHVnaW4tdXNlcmFnZW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckFnZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjdXJyZW50IHVzZXItYWdlbnQgdG8gdGhlIG9uZSBzZW50IGJ5IGFyZ3VtZW50LlxuICAgKiBAcGFyYW0gdXNlckFnZW50IHtzdHJpbmd9IFVzZXItQWdlbnRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVzZXItYWdlbnQgY2hhbmdlc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXQodXNlckFnZW50OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHVzZXItYWdlbnQgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdXNlci1hZ2VudCBpcyByZXR1cm5lZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlci1hZ2VudCBiYWNrIHRvIGRlZmF1bHRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVzZXItYWdlbnQgcmVzZXRzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc2V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==