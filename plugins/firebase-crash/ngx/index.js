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
var FirebaseCrash = /** @class */ (function (_super) {
    __extends(FirebaseCrash, _super);
    function FirebaseCrash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrash.prototype.log = function (message) { return cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrash.prototype.logError = function (message) { return cordova(this, "logError", { "sync": true }, arguments); };
    FirebaseCrash.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseCrash.pluginName = "FirebaseCrash";
    FirebaseCrash.plugin = "cordova-plugin-firebase-crash";
    FirebaseCrash.pluginRef = "cordova.plugins.firebase.crashlytics";
    FirebaseCrash.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-crash";
    FirebaseCrash.platforms = ["Android", "iOS"];
    FirebaseCrash = __decorate([
        Injectable()
    ], FirebaseCrash);
    return FirebaseCrash;
}(IonicNativePlugin));
export { FirebaseCrash };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWNyYXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCckMsaUNBQWlCOzs7O0lBUWxELDJCQUFHLGFBQUMsT0FBZTtJQVduQixnQ0FBUSxhQUFDLE9BQWU7SUFXeEIsaUNBQVMsYUFBQyxNQUFjOzs7Ozs7SUE5QmIsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQTlCMUI7RUE4Qm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRmlyZWJhc2VDcmFzaFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBicmluZ3MgY3Jhc2ggcmVwb3J0aW5nIGZyb20gR29vZ2xlIEZpcmViYXNlIHRvIHlvdXIgQ29yZG92YSBwcm9qZWN0ISBBbmRyb2lkIGFuZCBpT1Mgc3VwcG9ydGVkLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlyZWJhc2VDcmFzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlyZWJhc2UtY3Jhc2gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VDcmFzaDogRmlyZWJhc2VDcmFzaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maXJlYmFzZUNyYXNoLnNldFVzZXJJZCgnMTIzNDU2Nzg5Jyk7XG4gKiB0aGlzLmZpcmViYXNlQ3Jhc2gubG9nKCdtZXNzYWdlJyk7XG4gKiB0aGlzLmZpcmViYXNlQ3Jhc2gubG9nRXJyb3IoJ25vbiBmYXRhbCBleGNlcHRpb24nKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZUNyYXNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY3Jhc2gnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZmlyZWJhc2UuY3Jhc2hseXRpY3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY3Jhc2gnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUNyYXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQWRkIGxvZ2dpbmcgdGhhdCB3aWxsIGJlIHNlbnQgd2l0aCB5b3VyIGNyYXNoIGRhdGEgaW4gY2FzZSBvZiBhcHAgY3Jhc2guXG4gICAqIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2NyYXNobHl0aWNzL2N1c3RvbWl6ZS1jcmFzaC1yZXBvcnRzP2F1dGh1c2VyPTAjYWRkX2N1c3RvbV9sb2dzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBsb2cobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9nIG5vbi1mYXRhbCBleGNlcHRpb25zIGluIGFkZGl0aW9uIHRvIGF1dG9tYXRpY2FsbHkgcmVwb3J0ZWQgYXBwIGNyYXNoZXMuXG4gICAqIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2NyYXNobHl0aWNzL2N1c3RvbWl6ZS1jcmFzaC1yZXBvcnRzP2F1dGh1c2VyPTAjbG9nX25vbi1mYXRhbF9leGNlcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBsb2dFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB1c2VyIGlkZW50aWZpZXIgcHJvcGVydHkgZm9yIGNyYXNobHl0aWNzIHJlcG9ydGluZy5cbiAgICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvY3Jhc2hseXRpY3MvY3VzdG9taXplLWNyYXNoLXJlcG9ydHM/YXV0aHVzZXI9MCNzZXRfdXNlcl9pZHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCB2YWx1ZSB0byBzZXQgdGhlIHVzZXJJZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=