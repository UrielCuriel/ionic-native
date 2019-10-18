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
var CallDirectory = /** @class */ (function (_super) {
    __extends(CallDirectory, _super);
    function CallDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallDirectory.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    CallDirectory.prototype.addIdentification = function (items) { return cordova(this, "addIdentification", {}, arguments); };
    CallDirectory.prototype.removeIdentification = function (items) { return cordova(this, "removeIdentification", {}, arguments); };
    CallDirectory.prototype.removeAllIdentification = function () { return cordova(this, "removeAllIdentification", {}, arguments); };
    CallDirectory.prototype.getAllItems = function () { return cordova(this, "getAllItems", {}, arguments); };
    CallDirectory.prototype.reloadExtension = function () { return cordova(this, "reloadExtension", {}, arguments); };
    CallDirectory.prototype.getLog = function () { return cordova(this, "getLog", {}, arguments); };
    CallDirectory.pluginName = "CallDirectory";
    CallDirectory.plugin = "cordova-plugin-call-directory";
    CallDirectory.pluginRef = "CallDirectory";
    CallDirectory.repo = "https://github.com/GEDYSIntraWare/cordova-plugin-call-directory";
    CallDirectory.install = "cordova plugin add cordova-plugin-call-directory --variable EXT_NAME=\"Cordova-Directory\" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES=\"NO\"";
    CallDirectory.installVariables = ["EXT_NAME", "ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES"];
    CallDirectory.platforms = ["iOS"];
    CallDirectory = __decorate([
        Injectable()
    ], CallDirectory);
    return CallDirectory;
}(IonicNativePlugin));
export { CallDirectory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtZGlyZWN0b3J5L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWtEckMsaUNBQWlCOzs7O0lBT2xELG1DQUFXO0lBVVgseUNBQWlCLGFBQUMsS0FBMEI7SUFVNUMsNENBQW9CLGFBQUMsS0FBMEI7SUFTL0MsK0NBQXVCO0lBU3ZCLG1DQUFXO0lBU1gsdUNBQWU7SUFTZiw4QkFBTTs7Ozs7Ozs7SUEvREssYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhO3dCQW5EMUI7RUFtRG1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbERpcmVjdG9yeUl0ZW0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxsRGlyZWN0b3J5TG9nIHtcbiAgcGx1Z2luOiBzdHJpbmdbXTtcbiAgZXh0ZW5zaW9uOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBAbmFtZSBDYWxsIERpcmVjdG9yeVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBjYW4gYWRkIHBob25lIG51bWJlcnMgdG8gYW4gQ2FsbGtpdCBjYWxsIGRpcmVjdG9yeSBleHRlbnNpb24uIENhbGwgYHJlbG9hZEV4dGVuc2lvbmAgYWZ0ZXIgdXNpbmcgYGFkZElkZW50aWZpY2F0aW9uYCBhbmQgYHJlbW92ZUlkZW50aWZpY2F0aW9uYFxuICogdG8gcHJvY2VzcyB0aGUgY2hhbmdlcyBpbiB0aGUgY2FsbCBkaXJlY3RvcnkgZXh0ZW5zaW9uLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsbERpcmVjdG9yeSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FsbC1kaXJlY3Rvcnkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsRGlyZWN0b3J5OiBDYWxsRGlyZWN0b3J5KSB7IH1cbiAqXG4gKlxuICogbGV0IGl0ZW1zID0gW3tsYWJlbDogXCJIZWxsb1wiLCBudW1iZXI6IFwiMTIzXCJ9XTtcbiAqIHRoaXMuY2FsbERpcmVjdG9yeS5hZGRJZGVudGlmaWNhdGlvbihpdGVtcylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmNhbGxEaXJlY3RvcnkucmVsb2FkRXh0ZW5zaW9uKClcbiAqICAgLnRoZW4ocmVzOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogYGBgXG4gKlxuICogQEludGVyZmFjZXNcbiAqIENhbGxEaXJlY3RvcnlJdGVtXG4gKiBDYWxsRGlyZWN0b3J5TG9nXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FsbERpcmVjdG9yeScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbGwtZGlyZWN0b3J5JyxcbiAgcGx1Z2luUmVmOiAnQ2FsbERpcmVjdG9yeScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vR0VEWVNJbnRyYVdhcmUvY29yZG92YS1wbHVnaW4tY2FsbC1kaXJlY3RvcnknLFxuICBpbnN0YWxsOiAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWNhbGwtZGlyZWN0b3J5IC0tdmFyaWFibGUgRVhUX05BTUU9XCJDb3Jkb3ZhLURpcmVjdG9yeVwiIC0tdmFyaWFibGUgQUxXQVlTX0VNQkVEX1NXSUZUX1NUQU5EQVJEX0xJQlJBUklFUz1cIk5PXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0VYVF9OQU1FJywgJ0FMV0FZU19FTUJFRF9TV0lGVF9TVEFOREFSRF9MSUJSQVJJRVMnXSxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGxEaXJlY3RvcnkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBjYWxsIGRpcmVjdG9yeSBleHRlbnNpb24gaXMgYXZhaWxhYmxlIGFuZCBlbmFibGVkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaWRlbnRpZmljYXRpb24gbnVtYmVyc1xuICAgKiBAcGFyYW0ge0NhbGxEaXJlY3RvcnlJdGVtW119IGl0ZW1zIFNldCBvZiBudW1iZXJzIHdpdGggbGFiZWxzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIG51bWJlcnMgYXJlIGFkZGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFkZElkZW50aWZpY2F0aW9uKGl0ZW1zOiBDYWxsRGlyZWN0b3J5SXRlbVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGlkZW50aWZpY2F0aW9uIG51bWJlcnNcbiAgICogQHBhcmFtIHtDYWxsRGlyZWN0b3J5SXRlbVtdfSBpdGVtcyBTZXQgb2YgbnVtYmVycyB3aXRoIGFyYml0cmFyeSBsYWJlbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBudW1iZXJzIGFyZSByZW1vdmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUlkZW50aWZpY2F0aW9uKGl0ZW1zOiBDYWxsRGlyZWN0b3J5SXRlbVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBpdGVtcyBmcm9tIGNhbGwgZGlyZWN0b3J5LiBSZWZyZXNoZXMgaW1tZWRpYXRlbHkuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgcmVmcmVzaCB3aXRoIG1lc3NhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlQWxsSWRlbnRpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBudW1iZXJzIGFuZCBsYWJlbHMgaW4gY2FsbCBkaXJlY3RvcnlcbiAgICogQHJldHVybiB7Q2FsbERpcmVjdG9yeUl0ZW1bXX0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIGFsbCBpdGVtc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbGxJdGVtcygpOiBQcm9taXNlPENhbGxEaXJlY3RvcnlJdGVtW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIGV4dGVuc2lvbiB0byBwcm9jZXNzIHF1ZXVlZCBjaGFuZ2VzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgcmVmcmVzaCB3aXRoIG1lc3NhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVsb2FkRXh0ZW5zaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsb2cgZnJvbSBwbHVnaW4gYW5kIGNhbGwgZGlyZWN0b3J5IGV4dGVuc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPENhbGxEaXJlY3RvcnlMb2c+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuIG9iamVjdCBvZiBsb2cgbWVzc2FnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TG9nKCk6IFByb21pc2U8Q2FsbERpcmVjdG9yeUxvZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19