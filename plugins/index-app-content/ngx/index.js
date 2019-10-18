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
import { IonicNativePlugin, cordovaFunctionOverride, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var IndexAppContent = /** @class */ (function (_super) {
    __extends(IndexAppContent, _super);
    function IndexAppContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexAppContent.prototype.isIndexingAvailable = function () { return cordova(this, "isIndexingAvailable", {}, arguments); };
    IndexAppContent.prototype.setItems = function (items) { return cordova(this, "setItems", {}, arguments); };
    IndexAppContent.prototype.clearItemsForDomains = function (domains) { return cordova(this, "clearItemsForDomains", {}, arguments); };
    IndexAppContent.prototype.clearItemsForIdentifiers = function (identifiers) { return cordova(this, "clearItemsForIdentifiers", {}, arguments); };
    IndexAppContent.prototype.onItemPressed = function () { return cordovaFunctionOverride(this, "onItemPressed", {}, arguments); };
    IndexAppContent.prototype.setIndexingInterval = function (intervalMinutes) { return cordova(this, "setIndexingInterval", {}, arguments); };
    IndexAppContent.pluginName = "IndexAppContent";
    IndexAppContent.plugin = "cordova-plugin-indexappcontent";
    IndexAppContent.pluginRef = "window.plugins.indexAppContent";
    IndexAppContent.repo = "https://github.com/johanblomgren/cordova-plugin-indexappcontent";
    IndexAppContent.platforms = ["iOS"];
    IndexAppContent = __decorate([
        Injectable()
    ], IndexAppContent);
    return IndexAppContent;
}(IonicNativePlugin));
export { IndexAppContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luZGV4LWFwcC1jb250ZW50L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVEQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF1RUcsbUNBQWlCOzs7O0lBT3BELDZDQUFtQjtJQVVuQixrQ0FBUSxhQUFDLEtBQWtCO0lBVTNCLDhDQUFvQixhQUFDLE9BQWlCO0lBVXRDLGtEQUF3QixhQUFDLFdBQXFCO0lBVTlDLHVDQUFhO0lBVWIsNkNBQW1CLGFBQUMsZUFBdUI7Ozs7OztJQXpEaEMsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlOzBCQTlFNUI7RUE4RXFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YUZ1bmN0aW9uT3ZlcnJpZGUsXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbmRleEl0ZW0ge1xuICBkb21haW46IHN0cmluZztcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVcmwgdG8gaW1hZ2VcbiAgICovXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJdGVtIGtleXdvcmRzXG4gICAqL1xuICBrZXl3b3Jkcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBMaWZldGltZSBpbiBtaW51dGVzXG4gICAqL1xuICBsaWZldGltZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBJbmRleCBBcHAgQ29udGVudFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBnaXZlcyB5b3UgYSBKYXZhc2NyaXB0IEFQSSB0byBpbnRlcmFjdCB3aXRoIENvcmUgU3BvdGxpZ2h0IG9uIGlPUyAoPT4gaU9TIDkpLlxuICogWW91IGNhbiBhZGQsIHVwZGF0ZSBhbmQgZGVsZXRlIGl0ZW1zIHRvIHRoZSBzcG90bGlnaHQgc2VhcmNoIGluZGV4LlxuICogU3BvdGxpZ2h0IFNlYXJjaCB3aWxsIGluY2x1ZGUgdGhlc2UgaXRlbXMgaW4gdGhlIHJlc3VsdCBsaXN0LiBZb3UgY2FuIGRlZXAtbGluayB0aGUgc2VhcmNoIHJlc3VsdHMgd2l0aCB5b3VyIGFwcC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluZGV4QXBwQ29udGVudCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW5kZXgtYXBwLWNvbnRlbnQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbmRleEFwcENvbnRlbnQ6IEluZGV4QXBwQ29udGVudCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdmFyIGl0ZW1zID0gW1xuICogICAgICB7XG4gKiAgICAgICAgZG9tYWluOiAnY29tLm15LmRvbWFpbicsXG4gKiAgICAgICAgaWRlbnRpZmllcjogJzg4YXNkZjdkc2YnLFxuICogICAgICAgIHRpdGxlOiAnRm9vJyxcbiAqICAgICAgICBkZXNjcmlwdGlvbjogJ0JhcicsXG4gKiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2F0aW9uL29mL215L2ltYWdlLmpwZycsXG4gKiAgICB9LFxuICogICAge1xuICogICAgICAgIGRvbWFpbjogJ2NvbS5vdGhlci5kb21haW4nLFxuICogICAgICAgIGlkZW50aWZpZXI6ICc5YXNkNjdnNmEnLFxuICogICAgICAgIHRpdGxlOiAnQmF6JyxcbiAqICAgICAgICBkZXNjcmlwdGlvbjogJ1dvb3QnLFxuICogICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhdGlvbi9vZi9teS9pbWFnZTIuanBnJyxcbiAqICAgICB9XG4gKiBdO1xuICpcbiAqIHRoaXMuaW5kZXhBcHBDb250ZW50LnNldEl0ZW1zKGl0ZW1zKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luZGV4QXBwQ29udGVudCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWluZGV4YXBwY29udGVudCcsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLmluZGV4QXBwQ29udGVudCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vam9oYW5ibG9tZ3Jlbi9jb3Jkb3ZhLXBsdWdpbi1pbmRleGFwcGNvbnRlbnQnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5kZXhBcHBDb250ZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhlIG9wdGlvbiB0byBpbmRleCBhcHAgY29udGVudCBtaWdodCBub3QgYmUgYXZhaWxhYmxlIGF0IGFsbCBkdWUgdG8gZGV2aWNlIGxpbWl0YXRpb25zIG9yIHVzZXIgc2V0dGluZ3MuXG4gICAqIFRoZXJlZm9yZSBpdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0byBjaGVjayB1cGZyb250IGlmIGluZGV4aW5nIGlzIHBvc3NpYmxlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdHJ1ZSBpZiBpbmRleGluZyBpcyBhdmFpbGFibGUsIGZhbHNlIGlmIG5vdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0luZGV4aW5nQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb3IgY2hhbmdlIGl0ZW1zIHRvIHNwb3RsaWdodCBpbmRleFxuICAgKiBAcGFyYW0ge0luZGV4SXRlbVtdfSBpdGVtcyBBcnJheSBvZiBpdGVtcyB0byBpbmRleFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgaWYgaW5kZXggc2V0IHdhcyBzdWNjZXNzZnVsbHlcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0SXRlbXMoaXRlbXM6IEluZGV4SXRlbVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGl0ZW1zIHN0b3JlZCBmb3IgYSBnaXZlbiBhcnJheSBvZiBkb21haW5zXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGRvbWFpbnMgQXJyYXkgb2YgZG9tYWlucyB0byBjbGVhclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJlc29sdmUgaWYgc3VjY2Vzc2Z1bGx5XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFySXRlbXNGb3JEb21haW5zKGRvbWFpbnM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGl0ZW1zIHN0b3JlZCBmb3IgYSBnaXZlbiBhcnJheSBvZiBpZGVudGlmaWVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBpZGVudGlmaWVycyBBcnJheSBvZiBpZGVudGlmaWVycyB0byBjbGVhclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJlc29sdmUgaWYgc3VjY2Vzc2Z1bGx5XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFySXRlbXNGb3JJZGVudGlmaWVycyhpZGVudGlmaWVyczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHRhcHMgb24gYSBzZWFyY2ggcmVzdWx0IGluIHNwb3RsaWdodCB0aGVuIHRoZSBhcHAgd2lsbCBiZSBsYXVuY2hlZC5cbiAgICogWW91IGNhbiByZWdpc3RlciBhIEphdmFzY3JpcHQgaGFuZGxlciB0byBnZXQgaW5mb3JtZWQgd2hlbiB0aGlzIGhhcHBlbnMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIGhlIHVzZXIgcHJlc3NlcyBvbiB0aGUgaG9tZSBzY3JlZW4gaWNvblxuICAgKi9cbiAgQENvcmRvdmFGdW5jdGlvbk92ZXJyaWRlKClcbiAgb25JdGVtUHJlc3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgbWlnaHQgd2FudCB0byBhdm9pZCB0byB1cGRhdGUgc3BvdGxpZ2h0IGluZGV4IHRvbyBmcmVxdWVudGx5LlxuICAgKiBXaXRob3V0IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBhIHN1YnNlcXVlbnQgY2FsbCB0byBtYW5pcHVsYXRlIHRoZSBpbmRleCBpcyBvbmx5IHBvc3NpYmxlIGFmdGVyIDE0NDAgbWludXRlcyAoPSAyNCBob3VycykhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbE1pbnV0ZXMgdmFsdWUgPT4gMFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRJbmRleGluZ0ludGVydmFsKGludGVydmFsTWludXRlczogbnVtYmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=