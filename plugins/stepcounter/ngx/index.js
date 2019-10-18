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
var Stepcounter = /** @class */ (function (_super) {
    __extends(Stepcounter, _super);
    function Stepcounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stepcounter.prototype.start = function (startingOffset) { return cordova(this, "start", {}, arguments); };
    Stepcounter.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    Stepcounter.prototype.getTodayStepCount = function () { return cordova(this, "getTodayStepCount", {}, arguments); };
    Stepcounter.prototype.getStepCount = function () { return cordova(this, "getStepCount", {}, arguments); };
    Stepcounter.prototype.deviceCanCountSteps = function () { return cordova(this, "deviceCanCountSteps", {}, arguments); };
    Stepcounter.prototype.getHistory = function () { return cordova(this, "getHistory", {}, arguments); };
    Stepcounter.pluginName = "Stepcounter";
    Stepcounter.plugin = "cordova-plugin-stepcounter";
    Stepcounter.pluginRef = "stepcounter";
    Stepcounter.repo = "https://github.com/ihadeed/cordova-plugin-stepcounter";
    Stepcounter.platforms = ["Android"];
    Stepcounter = __decorate([
        Injectable()
    ], Stepcounter);
    return Stepcounter;
}(IonicNativePlugin));
export { Stepcounter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0ZXBjb3VudGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDdkMsK0JBQWlCOzs7O0lBU2hELDJCQUFLLGFBQUMsY0FBc0I7SUFTNUIsMEJBQUk7SUFTSix1Q0FBaUI7SUFTakIsa0NBQVk7SUFTWix5Q0FBbUI7SUFTbkIsZ0NBQVU7Ozs7OztJQXREQyxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBbEN4QjtFQWtDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbi8qKlxuICogQG5hbWUgU3RlcGNvdW50ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIHVzaW5nIGRldmljZSdzIHN0ZXBjb3VudGVyIG9uIEFuZHJvaWQgKEFQSSA+IDE5KVxuICpcbiAqIFVzZSB0b1xuICogLSBzdGFydCBhbmQgc3RvcCBzdGVwY291bnRlciBzZXJ2aWNlXG4gKiAtIHJlYWQgZGV2aWNlJ3Mgc3RlcGNvdW50ZXIgZGF0YVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RlcGNvdW50ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0ZXBjb3VudGVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGVwY291bnRlcjogU3RlcGNvdW50ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBzdGFydGluZ09mZnNldCA9IDA7XG4gKiB0aGlzLnN0ZXBjb3VudGVyLnN0YXJ0KHN0YXJ0aW5nT2Zmc2V0KS50aGVuKG9uU3VjY2VzcyA9PiBjb25zb2xlLmxvZygnc3RlcGNvdW50ZXItc3RhcnQgc3VjY2VzcycsIG9uU3VjY2VzcyksIG9uRmFpbHVyZSA9PiBjb25zb2xlLmxvZygnc3RlcGNvdW50ZXItc3RhcnQgZXJyb3InLCBvbkZhaWx1cmUpKTtcbiAqXG4gKiB0aGlzLnN0ZXBjb3VudGVyLmdldEhpc3RvcnkoKS50aGVuKGhpc3RvcnlPYmogPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLWhpc3Rvcnkgc3VjY2VzcycsIGhpc3RvcnlPYmopLCBvbkZhaWx1cmUgPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLWhpc3RvcnkgZXJyb3InLCBvbkZhaWx1cmUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdGVwY291bnRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0ZXBjb3VudGVyJyxcbiAgcGx1Z2luUmVmOiAnc3RlcGNvdW50ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1wbHVnaW4tc3RlcGNvdW50ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0ZXBjb3VudGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgc3RlcCBjb3VudGVyXG4gICAqXG4gICAqIEBwYXJhbSBzdGFydGluZ09mZnNldCB7bnVtYmVyfSB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0b3RhbCBzdGVwcyBjb3VudGVkIGluIHRoaXMgc2Vzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0KHN0YXJ0aW5nT2Zmc2V0OiBudW1iZXIpOiBQcm9taXNlPG51bWJlciB8IGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBzdGVwIGNvdW50ZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgbnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIHdpdGggdGhlIGFtb3VudCBvZiBzdGVwcyBzaW5jZSB0aGUgc3RhcnQgY29tbWFuZCBoYXMgYmVlbiBjYWxsZWQsIG9yIHJlamVjdHMgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYW1vdW50IG9mIHN0ZXBzIGZvciB0b2RheSAob3IgLTEgaWYgaXQgbm8gZGF0YSBnaXZlbilcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgbnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIHdpdGggdGhlIGFtb3VudCBvZiBzdGVwcyB0b2RheSwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRvZGF5U3RlcENvdW50KCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYW1vdW50IG9mIHN0ZXBzIHNpbmNlIHRoZSBzdGFydCBjb21tYW5kIGhhcyBiZWVuIGNhbGxlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgd2l0aCB0aGUgYW1vdW50IG9mIHN0ZXBzIHNpbmNlIHRoZSBzdGFydCBjb21tYW5kIGhhcyBiZWVuIGNhbGxlZCwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN0ZXBDb3VudCgpOiBQcm9taXNlPG51bWJlciB8IGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUvZmFsc2UgaWYgQW5kcm9pZCBkZXZpY2UgaXMgcnVubmluZyA+QVBJIGxldmVsIDE5ICYmIGhhcyB0aGUgc3RlcCBjb3VudGVyIEFQSSBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgYm9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2Vzcywgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRldmljZUNhbkNvdW50U3RlcHMoKTogUHJvbWlzZTxib29sZWFuIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RlcCBoaXN0b3J5IChKYXZhU2NyaXB0IG9iamVjdClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzLCBvciByZWplY3RzIG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SGlzdG9yeSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19