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
import { Observable } from 'rxjs';
var GoogleNearby = /** @class */ (function (_super) {
    __extends(GoogleNearby, _super);
    function GoogleNearby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearby.prototype.publish = function (message) { return cordova(this, "publish", {}, arguments); };
    GoogleNearby.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearby.pluginName = "GoogleNearby";
    GoogleNearby.plugin = "cordova-plugin-google-nearby";
    GoogleNearby.pluginRef = "window.nearby";
    GoogleNearby.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearby.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearby.installVariables = ["API_KEY"];
    GoogleNearby.platforms = ["Android"];
    GoogleNearby = __decorate([
        Injectable()
    ], GoogleNearby);
    return GoogleNearby;
}(IonicNativePlugin));
export { GoogleNearby };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1uZWFyYnkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFrQ0EsZ0NBQWlCOzs7O0lBT2pELDhCQUFPLGFBQUMsT0FBZTtJQVl2QixnQ0FBUzs7Ozs7Ozs7SUFuQkUsWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQXBDekI7RUFvQ2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgR29vZ2xlIE5lYXJieVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhZGRzIHN1cHBvcnQgZm9yIHRoZSBHb29nbGUgTmVhcmJ5IE1lc3NhZ2VzIEFQSS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEdvb2dsZU5lYXJieSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ29vZ2xlLW5lYXJieS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZU5lYXJieTogR29vZ2xlTmVhcmJ5KSB7IH1cbiAqXG4gKiB0aGlzLmdvb2dsZU5lYXJieS5wdWJsaXNoKCdIZWxsbycpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5nb29nbGVOZWFyYnkuc3Vic2NyaWJlKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU5lYXJieScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZS1uZWFyYnknLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cubmVhcmJ5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oYWhhaGFubmVzL2NvcmRvdmEtcGx1Z2luLWdvb2dsZS1uZWFyYnknLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ29vZ2xlLW5lYXJieSAtLXZhcmlhYmxlIEFQSV9LRVk9XCIxMjM0NTY3ODlcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBJX0tFWSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZU5lYXJieSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFB1Ymxpc2ggYSBtZXNzYWdlXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gcHVibGlzaFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbWVzc2FnZSBnb3QgcHVibGlzaGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHB1Ymxpc2gobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHJlY2VpdmUgbWVzc2FnZXNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyByZWNlaXZlZCBtZXNzYWdlc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3Vuc3Vic2NyaWJlJ1xuICB9KVxuICBzdWJzY3JpYmUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==