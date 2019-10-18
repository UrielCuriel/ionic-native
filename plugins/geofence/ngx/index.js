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
import { IonicNativePlugin, cordova, cordovaFunctionOverride } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Geofence = /** @class */ (function (_super) {
    __extends(Geofence, _super);
    function Geofence() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TransitionType = {
            ENTER: 1,
            EXIT: 2,
            BOTH: 3
        };
        return _this;
    }
    Geofence.prototype.onTransitionReceived = function () { return cordovaFunctionOverride(this, "onTransitionReceived", {}, arguments); };
    Geofence.prototype.initialize = function () { return cordova(this, "initialize", {}, arguments); };
    Geofence.prototype.addOrUpdate = function (geofences) { return cordova(this, "addOrUpdate", {}, arguments); };
    Geofence.prototype.remove = function (geofenceId) { return cordova(this, "remove", {}, arguments); };
    Geofence.prototype.removeAll = function () { return cordova(this, "removeAll", {}, arguments); };
    Geofence.prototype.getWatched = function () { return cordova(this, "getWatched", {}, arguments); };
    /**
     * Called when the user clicks a geofence notification. iOS and Android only.
     *
     * @returns {Observable<any>}
     */
    Geofence.prototype.onNotificationClicked = function () {
        return new Observable(function (observer) {
            typeof window !== 'undefined' &&
                window.geofence &&
                (window.geofence.onNotificationClicked = observer.next.bind(observer));
            return function () { return (window.geofence.onNotificationClicked = function () { }); };
        });
    };
    Geofence.pluginName = "Geofence";
    Geofence.plugin = "cordova-plugin-geofence";
    Geofence.pluginRef = "geofence";
    Geofence.repo = "https://github.com/cowbell/cordova-plugin-geofence";
    Geofence.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    Geofence = __decorate([
        Injectable()
    ], Geofence);
    return Geofence;
}(IonicNativePlugin));
export { Geofence };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlb2ZlbmNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVEQUErRCxNQUFNLG9CQUFvQixDQUFDO0FBQ2pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBbUZKLDRCQUFpQjs7O1FBQzdDLG9CQUFjLEdBQUc7WUFDZixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLENBQUM7U0FDUixDQUFDOzs7SUFPRix1Q0FBb0I7SUFRcEIsNkJBQVU7SUFRViw4QkFBVyxhQUFDLFNBQTRCO0lBU3hDLHlCQUFNLGFBQUMsVUFBNkI7SUFRcEMsNEJBQVM7SUFRVCw2QkFBVTtJQUVWOzs7O09BSUc7SUFDSCx3Q0FBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksVUFBVSxDQUFNLFVBQUEsUUFBUTtZQUNqQyxPQUFPLE1BQU0sS0FBSyxXQUFXO2dCQUMzQixNQUFNLENBQUMsUUFBUTtnQkFDZixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6RSxPQUFPLGNBQU0sT0FBQSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQW5FVSxRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBckZyQjtFQXFGOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhRnVuY3Rpb25PdmVycmlkZSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgR2VvZmVuY2VcbiAqIEBkZXNjcmlwdGlvbiBNb25pdG9ycyBjaXJjdWxhciBnZW9mZW5jZXMgYXJvdW5kIGxhdGl0dWRlL2xvbmdpdHVkZSBjb29yZGluYXRlcywgYW5kIHNlbmRzIGEgbm90aWZpY2F0aW9uIHRvIHRoZSB1c2VyIHdoZW4gdGhlIGJvdW5kYXJ5IG9mIGEgZ2VvZmVuY2UgaXMgY3Jvc3NlZC4gTm90aWZpY2F0aW9ucyBjYW4gYmUgc2VudCB3aGVuIHRoZSB1c2VyIGVudGVycyBhbmQvb3IgZXhpdHMgYSBnZW9mZW5jZS5cbiAqIEdlb2ZlbmNlcyBwZXJzaXN0IGFmdGVyIGRldmljZSByZWJvb3QuIEdlb2ZlbmNlcyB3aWxsIGJlIG1vbml0b3JlZCBldmVuIHdoZW4gdGhlIGFwcCBpcyBub3QgcnVubmluZy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR2VvZmVuY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dlb2ZlbmNlL25neCc7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnZW9mZW5jZTogR2VvZmVuY2UpIHtcbiAqICAgLy8gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luXG4gKiAgIGdlb2ZlbmNlLmluaXRpYWxpemUoKS50aGVuKFxuICogICAgIC8vIHJlc29sdmVkIHByb21pc2UgZG9lcyBub3QgcmV0dXJuIGEgdmFsdWVcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnR2VvZmVuY2UgUGx1Z2luIFJlYWR5JyksXG4gKiAgICAgKGVycikgPT4gY29uc29sZS5sb2coZXJyKVxuICogICApXG4gKiB9XG4gKlxuICogLi4uXG4gKlxuICogcHJpdmF0ZSBhZGRHZW9mZW5jZSgpIHtcbiAqICAgLy9vcHRpb25zIGRlc2NyaWJpbmcgZ2VvZmVuY2VcbiAqICAgbGV0IGZlbmNlID0ge1xuICogICAgIGlkOiAnNjljYTFiODgtNmZiZS00ZTgwLWE0ZDQtZmY0ZDM3NDhhY2RiJywgLy9hbnkgdW5pcXVlIElEXG4gKiAgICAgbGF0aXR1ZGU6ICAgICAgIDM3LjI4NTk1MSwgLy9jZW50ZXIgb2YgZ2VvZmVuY2UgcmFkaXVzXG4gKiAgICAgbG9uZ2l0dWRlOiAgICAgIC0xMjEuOTM2NjUwLFxuICogICAgIHJhZGl1czogICAgICAgICAxMDAsIC8vcmFkaXVzIHRvIGVkZ2Ugb2YgZ2VvZmVuY2UgaW4gbWV0ZXJzXG4gKiAgICAgdHJhbnNpdGlvblR5cGU6IDMsIC8vc2VlICdUcmFuc2l0aW9uIFR5cGVzJyBiZWxvd1xuICogICAgIG5vdGlmaWNhdGlvbjogeyAvL25vdGlmaWNhdGlvbiBzZXR0aW5nc1xuICogICAgICAgICBpZDogICAgICAgICAgICAgMSwgLy9hbnkgdW5pcXVlIElEXG4gKiAgICAgICAgIHRpdGxlOiAgICAgICAgICAnWW91IGNyb3NzZWQgYSBmZW5jZScsIC8vbm90aWZpY2F0aW9uIHRpdGxlXG4gKiAgICAgICAgIHRleHQ6ICAgICAgICAgICAnWW91IGp1c3QgYXJyaXZlZCB0byBHbGl3aWNlIGNpdHkgY2VudGVyLicsIC8vbm90aWZpY2F0aW9uIGJvZHlcbiAqICAgICAgICAgb3BlbkFwcE9uQ2xpY2s6IHRydWUgLy9vcGVuIGFwcCB3aGVuIG5vdGlmaWNhdGlvbiBpcyB0YXBwZWRcbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIHRoaXMuZ2VvZmVuY2UuYWRkT3JVcGRhdGUoZmVuY2UpLnRoZW4oXG4gKiAgICAgICgpID0+IGNvbnNvbGUubG9nKCdHZW9mZW5jZSBhZGRlZCcpLFxuICogICAgICAoZXJyKSA9PiBjb25zb2xlLmxvZygnR2VvZmVuY2UgZmFpbGVkIHRvIGFkZCcpXG4gKiAgICApO1xuICogfVxuICpcbiAqIGBgYFxuICogIyMjIFRyYW5zaXRpb24gVHlwZXMgIyMjXG4gKiBUcmFuc2l0aW9uIHR5cGUgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIGdlb2ZlbmNlIHNob3VsZCB0cmlnZ2VyIHdoZW4gdGhlIHVzZXIgZW50ZXJzIGFuZC9vciBsZWF2ZXMgdGhlIGdlb2ZlbmNlLlxuICpcbiAqICMjIyMgU3VwcG9ydGVkIHZhbHVlcyAjIyMjXG4gKiAtIDE6IEVudGVyXG4gKiAtIDI6IExlYXZlXG4gKiAtIDM6IEJvdGhcbiAqXG4gKiAjIyMgRGVmaW5pbmcgYSBHZW9mZW5jZSAjIyNcbiAqIEdlb2ZlbmNlcyBhcmUgZGVmaW5lZCBieSBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gYGFkZE9yVXBkYXRlKClgLiBPYmplY3QgcHJvcGVydGllcyBhcmU6XG4gKiAtIGlkOiBBbnkgdW5pcXVlIElEIGZvciB0aGUgZ2VvZmVuY2UuIFRoaXMgSUQgaXMgdXNlZCB0byByZW1vdmUgYW5kIHVwZGF0ZSBhIGdlb2ZlbmNlXG4gKiAtIGxhdGl0dWRlOiBMYXRpdHVkZSBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGdlb2ZlbmNlIHJhZGl1c1xuICogLSBsb25naXR1ZGU6IExhdGl0dWRlIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgZ2VvZmVuY2UgcmFkaXVzXG4gKiAtIHJhZGl1czogUmFkaXVzIGZyb20gdGhlIGNlbnRlciB0byB0aGUgZWRnZSBvZiB0aGUgZ2VvZmVuY2VcbiAqIC0gdHJhbnNpdGlvblR5cGU6IFR5cGUgb2YgZ2VvZmVuY2UgdHJhbnNpdGlvbiB0byBtb25pdG9yIGZvci4gU2VlICdUcmFuc2l0aW9uIFR5cGVzJyBhYm92ZVxuICogLSBub3RpZmljYXRpb246IE9iamVjdC4gT3B0aW9ucyBmb3IgZGVmaW5pbmcgdGhlIG5vdGlmaWNhdGlvbiBzZW50IHdoZW4gYSBnZW9mZW5jZSBpcyBjcm9zc2VkXG4gKiAgIC0gaWQ6IEFueSB1bmlxdWUgSURcbiAqICAgLSB0aXRsZTogTm90aWZpY2F0aW9uIHRpdGxlXG4gKiAgIC0gdGV4dDogTm90aWZpY2F0aW9uIGJvZHlcbiAqICAgLSBvcGVuQXBwT25DbGljazogQm9vbGVhbi4gV2hldGhlciB0byBvcGVuIHRoZSBhcHAgd2hlbiB0aGUgbm90aWZpY2F0aW9uIGlzIHRhcHBlZCBieSB0aGUgdXNlclxuICpcbiAqICMjIyBUcm91Ymxlc2hvb3RpbmcgIyMjXG4gKiAjIyMjIEkgZ2V0IGNvbXBpbGUgZXJyb3JzIHdoZW4gSSBydW4gYGlvbmljIGJ1aWxkIGlvc2Agb3IgYGlvbmljIHJ1biBpb3NgLiAjIyMjXG4gKiBUaGlzIGNvdWxkIGJlIGNhdXNlZCBieSB0aGUgQ29yZG92YSBwcm9qZWN0IGRpcmVjdG9yeSBpbiBgL3BsYXRmb3Jtcy9pb3NgIG5vdCBiZWluZyBuYW1lZCBjb3JyZWN0bHkuXG4gKiBUcnkgcnVubmluZyBgaW9uaWMgY29yZG92YSBwbGF0Zm9ybSBybSA8cGxhdGZvcm0+YCB0aGVuIHJ1biBgaW9uaWMgY29yZG92YSBwbGF0Zm9ybSBhZGQgPHBsYXRmb3JtPmAgdG8gcmVjcmVhdGUgdGhlXG4gKiBwbGF0Zm9ybSBkaXJlY3Rvcmllcy5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHZW9mZW5jZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdlb2ZlbmNlJyxcbiAgcGx1Z2luUmVmOiAnZ2VvZmVuY2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nvd2JlbGwvY29yZG92YS1wbHVnaW4tZ2VvZmVuY2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9mZW5jZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgVHJhbnNpdGlvblR5cGUgPSB7XG4gICAgRU5URVI6IDEsXG4gICAgRVhJVDogMixcbiAgICBCT1RIOiAzXG4gIH07XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBnZXQgbm90aWZpZWQgd2hlbiBhIHRyYW5zaXRpb24gaXMgcmVjZWl2ZWRcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFGdW5jdGlvbk92ZXJyaWRlKClcbiAgb25UcmFuc2l0aW9uUmVjZWl2ZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwbHVnaW4uIFVzZXIgd2lsbCBiZSBwcm9tcHRlZCB0byBhbGxvdyB0aGUgYXBwIHRvIHVzZSBsb2NhdGlvbiBhbmQgbm90aWZpY2F0aW9ucy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IGdlb2ZlbmNlIG9yIGFycmF5IG9mIGdlb2ZlbmNlcy4gRm9yIGdlb2ZlbmNlIG9iamVjdCwgc2VlIGFib3ZlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkT3JVcGRhdGUoZ2VvZmVuY2VzOiBPYmplY3QgfCBPYmplY3RbXSk6IFByb21pc2U8dm9pZD4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGdlb2ZlbmNlIG9yIGFycmF5IG9mIGdlb2ZlbmNlcy4gYGdlb2ZlbmNlSURgIGNvcnJlc3BvbmRzIHRvIG9uZSBvciBtb3JlIElEcyBzcGVjaWZpZWQgd2hlbiB0aGVcbiAgICogZ2VvZmVuY2Ugd2FzIGNyZWF0ZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW1vdmUoZ2VvZmVuY2VJZDogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGdlb2ZlbmNlcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUFsbCgpOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZ2VvZmVuY2VzIGN1cnJlbnRseSBiZWluZyBtb25pdG9yZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0V2F0Y2hlZCgpOiBQcm9taXNlPHN0cmluZz4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIGEgZ2VvZmVuY2Ugbm90aWZpY2F0aW9uLiBpT1MgYW5kIEFuZHJvaWQgb25seS5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIG9uTm90aWZpY2F0aW9uQ2xpY2tlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KG9ic2VydmVyID0+IHtcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5nZW9mZW5jZSAmJlxuICAgICAgICAod2luZG93Lmdlb2ZlbmNlLm9uTm90aWZpY2F0aW9uQ2xpY2tlZCA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcikpO1xuICAgICAgcmV0dXJuICgpID0+ICh3aW5kb3cuZ2VvZmVuY2Uub25Ob3RpZmljYXRpb25DbGlja2VkID0gKCkgPT4ge30pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=