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
var ColoredBrowserTabs = /** @class */ (function (_super) {
    __extends(ColoredBrowserTabs, _super);
    function ColoredBrowserTabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColoredBrowserTabs.prototype.openTab = function (url, color) { return cordova(this, "openTab", { "observable": true, "successIndex": 2, "errorIndex": 3 }, arguments); };
    ColoredBrowserTabs.prototype.openTabWithAnimation = function (url, anim, color) { return cordova(this, "openTabWithAnimation", { "observable": true, "successIndex": 3, "errorIndex": 4 }, arguments); };
    ColoredBrowserTabs.pluginName = "ColoredBrowserTabs";
    ColoredBrowserTabs.plugin = "cordova-plugin-colored-browser-tabs";
    ColoredBrowserTabs.pluginRef = "ColoredBrowserTabs";
    ColoredBrowserTabs.repo = "https://github.com/TobyEb/cordova-plugin-colored-browser-tabs";
    ColoredBrowserTabs.platforms = ["Android", "iOS"];
    ColoredBrowserTabs = __decorate([
        Injectable()
    ], ColoredBrowserTabs);
    return ColoredBrowserTabs;
}(IonicNativePlugin));
export { ColoredBrowserTabs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvbG9yZWQtYnJvd3Nlci10YWJzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUNNLHNDQUFpQjs7OztJQVF2RCxvQ0FBTyxhQUFDLEdBQVcsRUFBRSxLQUFjO0lBWW5DLGlEQUFvQixhQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsS0FBYzs7Ozs7O0lBcEJuRCxrQkFBa0I7UUFEOUIsVUFBVSxFQUFFO09BQ0Esa0JBQWtCOzZCQW5DL0I7RUFtQ3dDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBDb2xvcmVkIEJyb3dzZXIgVGFic1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBvcGVucyBDaHJvbWUgQ3VzdG9tIFRhYnMgb24gQW5kcm9pZCBvciBTYWZhcmlWaWV3Q29udHJvbGxlciBvbiBpT1NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbG9yZWRCcm93c2VyVGFicyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29sb3JlZC1icm93c2VyLXRhYnMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBicm93c2VyVGFiczogQ29sb3JlZEJyb3dzZXJUYWJzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5icm93c2VyVGFicy5vcGVuVGFiKCd3d3cuZXhhbXBsZS51cmwnLCAnI2ZmZmZmZicpXG4gKiAgIC5zdWJzY3JpYmUoKVxuICpcbiAqIHRoaXMuYnJvd3NlclRhYnMub3BlblRhYldpdGhBbmltYXRpb24oJ3d3dy5leGFtcGxlLnVybCcsICdzbGlkZV94JywgJyNmZmZmZmYnKVxuICogICAuc3Vic2NyaWJlKClcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDb2xvcmVkQnJvd3NlclRhYnMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jb2xvcmVkLWJyb3dzZXItdGFicycsXG4gIHBsdWdpblJlZjogJ0NvbG9yZWRCcm93c2VyVGFicycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVG9ieUViL2NvcmRvdmEtcGx1Z2luLWNvbG9yZWQtYnJvd3Nlci10YWJzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sb3JlZEJyb3dzZXJUYWJzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2FsbCB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSB0YWJcbiAgICogQHBhcmFtIHVybCAtIHRoZSB1cmwgeW91IHdhbnQgdG8gb3BlblxuICAgKiBAcGFyYW0gY29sb3IgLSB0aGUgY29sb3Igd2l0aCB3aGljaCB5b3Ugd2FudCB0byBkZWZpbmUgdGhlIHRvb2xiYXIgY29sb3JcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGEgT2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSwgc3VjY2Vzc0luZGV4OiAyLCBlcnJvckluZGV4OiAzIH0pXG4gIG9wZW5UYWIodXJsOiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgdGFiXG4gICAqIEBwYXJhbSB1cmwgLSB0aGUgdXJsIHlvdSB3YW50IHRvIG9wZW5cbiAgICogQHBhcmFtIGFuaW0gLSB0aGUgYW5pbWF0aW9uIHlvdSB3YW50IGZvciBlbnRlciBhbmQgZXhpdCwgeW91IGNhbiBjaG9vc2UgYmV0d2VlbiBzbGlkZV94IC8gc2xpZGVfeSBhbmQgZmFkZVxuICAgKiAgICAgICAgb25seSB3b3JrcyBpbiBBbmRyb2lkLCBpT1MganVzdCBzaG93cyB0aGUgZGVmYXVsdCBhbmltYXRpb25cbiAgICogQHBhcmFtIGNvbG9yIC0gdGhlIGNvbG9yIHdpdGggd2hpY2ggeW91IHdhbnQgdG8gZGVmaW5lIHRoZSB0b29sYmFyIGNvbG9yXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhIE9ic2VydmFibGUgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUsIHN1Y2Nlc3NJbmRleDogMywgZXJyb3JJbmRleDogNCB9KVxuICBvcGVuVGFiV2l0aEFuaW1hdGlvbih1cmw6IHN0cmluZywgYW5pbTogc3RyaW5nLCBjb2xvcj86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=