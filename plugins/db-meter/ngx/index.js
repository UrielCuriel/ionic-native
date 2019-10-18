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
var DBMeter = /** @class */ (function (_super) {
    __extends(DBMeter, _super);
    function DBMeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DBMeter.prototype.start = function () { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    DBMeter.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    DBMeter.prototype.isListening = function () { return cordova(this, "isListening", {}, arguments); };
    DBMeter.prototype.delete = function () { return cordova(this, "delete", {}, arguments); };
    DBMeter.pluginName = "DBMeter";
    DBMeter.plugin = "cordova-plugin-dbmeter";
    DBMeter.pluginRef = "DBMeter";
    DBMeter.repo = "https://github.com/akofman/cordova-plugin-dbmeter";
    DBMeter.platforms = ["Android", "iOS"];
    DBMeter = __decorate([
        Injectable()
    ], DBMeter);
    return DBMeter;
}(IonicNativePlugin));
export { DBMeter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RiLW1ldGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMENMLDJCQUFpQjs7OztJQVM1Qyx1QkFBSztJQVNMLHNCQUFJO0lBU0osNkJBQVc7SUFTWCx3QkFBTTs7Ozs7O0lBcENLLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkE1Q3BCO0VBNEM2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIERCIE1ldGVyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZGVmaW5lcyBhIGdsb2JhbCBEQk1ldGVyIG9iamVjdCwgd2hpY2ggcGVybWl0cyB0byBnZXQgdGhlIGRlY2liZWwgdmFsdWVzIGZyb20gdGhlIG1pY3JvcGhvbmUuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERCTWV0ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RiLW1ldGVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkYk1ldGVyOiBEQk1ldGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gU3RhcnQgbGlzdGVuaW5nXG4gKiBsZXQgc3Vic2NyaXB0aW9uID0gdGhpcy5kYk1ldGVyLnN0YXJ0KCkuc3Vic2NyaWJlKFxuICogICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpXG4gKiApO1xuICpcbiAqIC8vIENoZWNrIGlmIHdlIGFyZSBsaXN0ZW5pbmdcbiAqIHRoaXMuZGJNZXRlci5pc0xpc3RlbmluZygpLnRoZW4oXG4gKiAgIGlzTGlzdGVuaW5nID0+IGNvbnNvbGUubG9nKGlzTGlzdGVuaW5nKVxuICogKTtcbiAqXG4gKiAvLyBTdG9wIGxpc3RlbmluZ1xuICogc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKlxuICogLy8gRGVsZXRlIERCTWV0ZXIgaW5zdGFuY2UgZnJvbSBtZW1vcnlcbiAqIHRoaXMuZGJNZXRlci5kZWxldGUoKS50aGVuKFxuICogICAoKSA9PiBjb25zb2xlLmxvZygnRGVsZXRlZCBEQiBNZXRlciBpbnN0YW5jZScpLFxuICogICBlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgREIgTWV0ZXIgaW5zdGFuY2UnKVxuICogKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RCTWV0ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kYm1ldGVyJyxcbiAgcGx1Z2luUmVmOiAnREJNZXRlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWtvZm1hbi9jb3Jkb3ZhLXBsdWdpbi1kYm1ldGVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgREJNZXRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0YXJ0cyBsaXN0ZW5pbmdcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLiBTdWJzY3JpYmUgdG8gc3RhcnQgbGlzdGVuaW5nLiBVbnN1YnNjcmliZSB0byBzdG9wIGxpc3RlbmluZy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wJ1xuICB9KVxuICBzdGFydCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBsaXN0ZW5pbmdcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBEQiBNZXRlciBpcyBsaXN0ZW5pbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCB0ZWxscyB1cyB3aGV0aGVyIHRoZSBEQiBtZXRlciBpcyBsaXN0ZW5pbmdcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNMaXN0ZW5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgREIgTWV0ZXIgaW5zdGFuY2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgaWYgdGhlIGluc3RhbmNlIGhhcyBiZWVuIGRlbGV0ZWQsIGFuZCByZWplY3RzIGlmIGVycm9ycyBvY2N1ci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=