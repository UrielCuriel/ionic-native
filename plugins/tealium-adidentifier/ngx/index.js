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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var TealiumAdIdentifier = /** @class */ (function (_super) {
    __extends(TealiumAdIdentifier, _super);
    function TealiumAdIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifier.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifier.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifier.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifier.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifier.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifier.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifier.platforms = ["Android", "iOS"];
    TealiumAdIdentifier.install = "";
    TealiumAdIdentifier = __decorate([
        Injectable()
    ], TealiumAdIdentifier);
    return TealiumAdIdentifier;
}(IonicNativePlugin));
export { TealiumAdIdentifier };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0tYWRpZGVudGlmaWVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWtDRix1Q0FBaUI7Ozs7SUFPeEQsMkNBQWEsYUFBQyxZQUFvQjtJQVVsQyx5Q0FBVyxhQUFDLFlBQW9COzs7Ozs7O0lBakJyQixtQkFBbUI7UUFEL0IsVUFBVSxFQUFFO09BQ0EsbUJBQW1COzhCQW5DaEM7RUFtQ3lDLGlCQUFpQjtTQUE3QyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAcGFpZFxuICogQG5hbWUgVGVhbGl1bUFkSWRlbnRpZmllclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBkZXBlbmRzIG9uIHRoZSBbVGVhbGl1bSBDb3Jkb3ZhIFBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL3RlYWxpdW0vY29yZG92YS1wbHVnaW4pLiBXaXRob3V0IGl0LCB0aGlzIG1vZHVsZSB3aWxsIG5vdCBkbyBhbnl0aGluZy5cbiAqIE1ha2VzIHRoZSBJREZBIGFuZCBHb29nbGUgQWQgSWRlbnRpZmllciBhdmFpbGFibGUgaW4gdGhlIFRlYWxpdW0gZGF0YSBsYXllci5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYFxuICogaW1wb3J0IHsgVGVhbGl1bUFkSWRlbnRpZmllciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGVhbGl1bS1hZGlkZW50aWZpZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhZElkZW50aWZpZXI6IFRlYWxpdW1BZElkZW50aWZpZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFkSWRlbnRpZmllci5zZXRQZXJzaXN0ZW50KFwibWFpblwiKTtcbiAqIHRoaXMuYWRJZGVudGlmaWVyLnNldFZvbGF0aWxlKFwibWFpblwiKTtcbiAqXG4gKiBgYGBcbiAqL1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RlYWxpdW1BZElkZW50aWZpZXInLFxuICBwbHVnaW46ICd0ZWFsaXVtLWNvcmRvdmEtYWRpZGVudGlmaWVyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ3dpbmRvdy50ZWFsaXVtQWRJZGVudGlmaWVyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlYWxpdW0vY29yZG92YS1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbiAgaW5zdGFsbDogJycgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlYWxpdW1BZElkZW50aWZpZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgYWQgaWRlbnRpZmllciBpbmZvcm1hdGlvbiBhcyBwZXJzaXN0ZW50IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFBlcnNpc3RlbnQoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgYWQgaWRlbnRpZmllciBpbmZvcm1hdGlvbiBhcyB2b2xhdGlsZSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRWb2xhdGlsZShpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=