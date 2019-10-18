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
import { IonicNativePlugin, cordova, checkAvailability, getPromise } from '@ionic-native/core';
var Printer = /** @class */ (function (_super) {
    __extends(Printer, _super);
    function Printer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks whether the device is capable of printing (uses `check()` internally)
     * @returns {Promise<boolean>}
     */
    Printer.prototype.isAvailable = function () {
        return this.check()
            .then(function (res) { return Promise.resolve(res.avail); });
    };
    Printer.prototype.check = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    Printer.getPlugin()
                        .check(function (avail, count) {
                        resolve({ avail: avail, count: count });
                    });
                });
            }
        })();
    };
    Printer.prototype.pick = function () { return cordova(this, "pick", {}, arguments); };
    Printer.prototype.print = function (content, options) { return cordova(this, "print", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    Printer.pluginName = "Printer";
    Printer.plugin = "cordova-plugin-printer";
    Printer.pluginRef = "cordova.plugins.printer";
    Printer.repo = "https://github.com/katzer/cordova-plugin-printer";
    Printer.platforms = ["Android", "iOS", "Windows"];
    Printer = __decorate([
        Injectable()
    ], Printer);
    return Printer;
}(IonicNativePlugin));
export { Printer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ByaW50ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8saURBQW9ELFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQWdGckUsMkJBQWlCOzs7O0lBRTVDOzs7T0FHRztJQUNILDZCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBT0QsdUJBQUs7OzttREFBaUI7Z0JBQ3BCLE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBaUI7b0JBQ3ZDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7eUJBQ2hCLEtBQUssQ0FBQyxVQUFDLEtBQWMsRUFBRSxLQUFVO3dCQUNoQyxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQU9ELHNCQUFJO0lBY0osdUJBQUssYUFBQyxPQUE2QixFQUFFLE9BQXNCOzs7Ozs7SUE1Q2hELE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFqRnBCO0VBaUY2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBwcmludCBqb2IgYW5kIHRoZSBkb2N1bWVudFxuICAgKi9cbiAgbmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5ldHdvcmsgVVJMIG9mIHRoZSBwcmludGVyLlxuICAgKiBPbmx5IHN1cHBvcnRlZCBvbiBpT1MuXG4gICAqL1xuICBwcmludGVySWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAqIFRoZSBuZXR3b3JrIFVSTCBvZiB0aGUgcHJpbnRlci5cbiAgICogT25seSBzdXBwb3J0ZWQgb24gaU9TLlxuICAgKiBGb3IgZGUgbmV3IHZlcnNpb24gb2YgY29yZG92YSBwbHVnaW4gXG4gICAqL1xuICBwcmludGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGR1cGxleCBtb2RlIHRvIHVzZSBmb3IgdGhlIHByaW50IGpvYi5cbiAgICogRWl0aGVyIGRvdWJsZS1zaWRlZCAoZHVwbGV4OnRydWUpIG9yIHNpbmdsZS1zaWRlZCAoZHVwbGV4OmZhbHNlKS5cbiAgICogRG91YmxlLXNpZGVkIGJ5IGRlZmF1bHQuXG4gICAqIE9ubHkgc3VwcG9ydGVkIG9uIGlPU1xuICAgKi9cbiAgZHVwbGV4PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwcmludGVkIGNvbnRlbnQsIHBvcnRyYWl0IG9yIGxhbmRzY2FwZVxuICAgKiBQb3J0cmFpdCBieSBkZWZhdWx0LlxuICAgKi9cbiAgbGFuZHNjYXBlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBvbmx5IHByaW50cyBibGFjayB0ZXh0LCBzZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBjYW4gcmVzdWx0IGluIGJldHRlciBwZXJmb3JtYW5jZSBpbiBtYW55IGNhc2VzLlxuICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgKi9cbiAgZ3JheXNjYWxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIFNpemUgYW5kIHBvc2l0aW9uIG9mIHRoZSBwcmludCB2aWV3XG4gICAqL1xuICBib3VuZHM/OiBudW1iZXJbXSB8IGFueTtcbn1cblxuLyoqXG4gKiBAbmFtZSBQcmludGVyXG4gKiBAZGVzY3JpcHRpb24gUHJpbnRzIGRvY3VtZW50cyBvciBIVE1MIHJlbmRlcmVkIGNvbnRlbnRcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUHJpbnRlciwgUHJpbnRPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wcmludGVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwcmludGVyOiBQcmludGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnByaW50ZXIuaXNBdmFpbGFibGUoKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogbGV0IG9wdGlvbnM6IFByaW50T3B0aW9ucyA9IHtcbiAqICAgICAgbmFtZTogJ015RG9jdW1lbnQnLFxuICogICAgICBwcmludGVySWQ6ICdwcmludGVyMDA3JyxcbiAqICAgICAgZHVwbGV4OiB0cnVlLFxuICogICAgICBsYW5kc2NhcGU6IHRydWUsXG4gKiAgICAgIGdyYXlzY2FsZTogdHJ1ZVxuICogICAgfVxuICpcbiAqIHRoaXMucHJpbnRlci5wcmludChjb250ZW50LCBvcHRpb25zKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBQcmludE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQcmludGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcHJpbnRlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5wcmludGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tcHJpbnRlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpbnRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGRldmljZSBpcyBjYXBhYmxlIG9mIHByaW50aW5nICh1c2VzIGBjaGVjaygpYCBpbnRlcm5hbGx5KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrKClcbiAgICAgIC50aGVuKChyZXM6IGFueSkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5hdmFpbCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgcHJpbnRlciBzZXJ2aWNlIGlzIGF2YWlsYWJsZSAoaU9TKSBvciBpZiBwcmludGVyIHNlcnZpY2VzIGFyZSBpbnN0YWxsZWQgYW5kIGVuYWJsZWQgKEFuZHJvaWQpLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZSB3aXRoIGFuIG9iamVjdCBpbmRpY2F0aW5nIHdoZXRoZXIgcHJpbnRpbmcgaXMgYXZhaWxhYmxlLCBhbmQgcHJvdmlkaW5nIHRoZSBudW1iZXIgb2YgcHJpbnRlcnMgYXZhaWxhYmxlXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY2hlY2soKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlOiBGdW5jdGlvbikgPT4ge1xuICAgICAgUHJpbnRlci5nZXRQbHVnaW4oKVxuICAgICAgICAuY2hlY2soKGF2YWlsOiBib29sZWFuLCBjb3VudDogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IGF2YWlsLCBjb3VudCB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgYSBzeXN0ZW0gaW50ZXJmYWNlIGFsbG93aW5nIHRoZSB1c2VyIHRvIHNlbGVjdCBhbiBhdmFpbGFibGUgcHJpbnRlci4gVG8gc3BlYWsgd2l0aCBhIHByaW50ZXIgZGlyZWN0bHkgeW91IG5lZWQgdG8ga25vdyB0aGUgbmV0d29yayBhZGRyZXNzIGJ5IHBpY2tpbmcgdGhlbSBiZWZvcmUgdmlhIGBwcmludGVyLnBpY2tgLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwaWNrKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGNvbnRlbnQgdG8gdGhlIHByaW50ZXIuXG4gICAqIEBwYXJhbSBjb250ZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gVGhlIGNvbnRlbnQgdG8gcHJpbnQuIENhbiBiZSBhIFVSTCBvciBhbiBIVE1MIHN0cmluZy4gSWYgYSBIVE1MIERPTSBPYmplY3QgaXMgcHJvdmlkZWQsIGl0cyBpbm5lckh0bWwgcHJvcGVydHkgdmFsdWUgd2lsbCBiZSB1c2VkLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UHJpbnRPcHRpb25zfSBvcHRpb25hbC4gVGhlIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgcHJpbnRlclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiA0XG4gIH0pXG4gIHByaW50KGNvbnRlbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBvcHRpb25zPzogUHJpbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19