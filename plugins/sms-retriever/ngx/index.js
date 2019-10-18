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
var SmsRetriever = /** @class */ (function (_super) {
    __extends(SmsRetriever, _super);
    function SmsRetriever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetriever.prototype.startWatching = function () { return cordova(this, "startWatching", {}, arguments); };
    SmsRetriever.prototype.getAppHash = function () { return cordova(this, "getAppHash", {}, arguments); };
    SmsRetriever.pluginName = "SmsRetriever";
    SmsRetriever.plugin = "cordova-plugin-sms-retriever-manager";
    SmsRetriever.pluginRef = "cordova.plugins.smsRetriever";
    SmsRetriever.repo = "https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master";
    SmsRetriever.install = "ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION=\"15.0.1\"";
    SmsRetriever.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetriever.platforms = ["Android"];
    SmsRetriever = __decorate([
        Injectable()
    ], SmsRetriever);
    return SmsRetriever;
}(IonicNativePlugin));
export { SmsRetriever };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Ntcy1yZXRyaWV2ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0N0QyxnQ0FBaUI7Ozs7SUFNakQsb0NBQWE7SUFTYixpQ0FBVTs7Ozs7Ozs7SUFmQyxZQUFZO1FBRHhCLFVBQVUsRUFBRTtPQUNBLFlBQVk7dUJBckN6QjtFQXFDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTbXMgUmV0cmlldmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHJldHJpdmVzIHRoZSBTTVMgd2hpY2ggYXJyaXZlIHdpdGhvdXQgcmVxdWlyaW5nIFJFQUQgcGVybWlzc2lvbnMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTbXNSZXRyaWV2ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Ntcy1yZXRyaWV2ZXInO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNtc1JldHJpZXZlcjogU21zUmV0cmlldmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zbXNSZXRyaWV2ZXIuZ2V0QXBwSGFzaCgpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiB0aGlzLnNtc1JldHJpZXZlci5zdGFydFdhdGNoaW5nKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTbXNSZXRyaWV2ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zbXMtcmV0cmlldmVyLW1hbmFnZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuc21zUmV0cmlldmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oYW5hdGhhcmVzaDI3MTIvaW9uaWMtbmF0aXZlLXNtcy1yZXRyaWV2ZXItcGx1Z2luLW1hc3RlcicsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tc21zLXJldHJpZXZlci1tYW5hZ2VyIC0tdmFyaWFibGUgUExBWV9TRVJWSUNFU19WRVJTSU9OPVwiMTUuMC4xXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1BMQVlfU0VSVklDRVNfVkVSU0lPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNtc1JldHJpZXZlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAvKipcbiAgKiBUaGlzIGZ1bmN0aW9uIHN0YXJ0IHdhdGhjaGluZyBtZXNzYWdlIGFycml2ZSBldmVudCBhbmQgcmV0cml2ZSBtZXNzYWdlIHRleHQuXG4gICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcmV0cml2ZXMgU01TIHRleHQgb3IgVElNRU9VVCBhZnRlciA1IG1pbi5cbiAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFdhdGNoaW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAvKipcbiAgKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGdldCBoYXNoIHN0cmluZyBvZiBBUFAuXG4gICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlIGhhc2ggb2YgQVBQLlxuICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFwcEhhc2goKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==