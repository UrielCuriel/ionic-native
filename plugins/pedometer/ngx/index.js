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
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
var Pedometer = /** @class */ (function (_super) {
    __extends(Pedometer, _super);
    function Pedometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pedometer.prototype.isStepCountingAvailable = function () { return cordova(this, "isStepCountingAvailable", {}, arguments); };
    Pedometer.prototype.isDistanceAvailable = function () { return cordova(this, "isDistanceAvailable", {}, arguments); };
    Pedometer.prototype.isFloorCountingAvailable = function () { return cordova(this, "isFloorCountingAvailable", {}, arguments); };
    Pedometer.prototype.startPedometerUpdates = function () { return cordova(this, "startPedometerUpdates", { "observable": true, "clearFunction": "stopPedometerUpdates" }, arguments); };
    Pedometer.prototype.stopPedometerUpdates = function () { return cordova(this, "stopPedometerUpdates", {}, arguments); };
    Pedometer.prototype.queryData = function (options) { return cordova(this, "queryData", { "callbackOrder": "reverse" }, arguments); };
    Pedometer.pluginName = "Pedometer";
    Pedometer.plugin = "cordova-plugin-pedometer";
    Pedometer.pluginRef = "pedometer";
    Pedometer.repo = "https://github.com/leecrossley/cordova-plugin-pedometer";
    Pedometer.platforms = ["Android", "iOS"];
    Pedometer = __decorate([
        Injectable()
    ], Pedometer);
    return Pedometer;
}(IonicNativePlugin));
export { Pedometer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BlZG9tZXRlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTBDWiw2QkFBaUI7Ozs7SUFNOUMsMkNBQXVCO0lBV3ZCLHVDQUFtQjtJQVduQiw0Q0FBd0I7SUFleEIseUNBQXFCO0lBU3JCLHdDQUFvQjtJQWVwQiw2QkFBUyxhQUFDLE9BR1Q7Ozs7OztJQXRFVSxTQUFTO1FBRHJCLFVBQVUsRUFBRTtPQUNBLFNBQVM7b0JBNUN0QjtFQTRDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2Ugb2YgYSBwZWRvbWV0ZXIgZGF0YSBvYmplY3Qgd2hpY2ggaXMgcmV0dXJuZWQgYnkgd2F0Y2hpbmcgZm9yIG5ldyBkYXRhIG9yIGJ5IHJlY2lldmluZyBoaXN0b3JpY2FsIGRhdGFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUGVkb21ldGVyRGF0YSB7XG4gIHN0YXJ0RGF0ZT86IG51bWJlcjtcbiAgZW5kRGF0ZT86IG51bWJlcjtcbiAgbnVtYmVyT2ZTdGVwczogbnVtYmVyO1xuICBkaXN0YW5jZTogbnVtYmVyO1xuICBmbG9vcnNBc2NlbmRlZDogbnVtYmVyO1xuICBmbG9vcnNEZXNjZW5kZWQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBQZWRvbWV0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogRmV0Y2ggcGVkZXN0cmlhbi1yZWxhdGVkIHBlZG9tZXRlciBkYXRhLFxuICogc3VjaCBhcyBzdGVwIGNvdW50cyBhbmQgb3RoZXIgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRpc3RhbmNlIHRyYXZlbGxlZC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBlZG9tZXRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGVkb21ldGVyL25neCc7XG4gKlxuICogUGVkb21ldGVyLmlzRGlzdGFuY2VBdmFpbGFibGUoKVxuICogICAudGhlbigoYXZhaWxhYmxlOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhdmFpbGFibGUpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogUGVkb21ldGVyLnN0YXJ0UGVkb21ldGVyVXBkYXRlcygpXG4gKiAgICAuc3Vic2NyaWJlKChkYXRhOiBJUGVkb21ldGVyRGF0YSkgPT4ge1xuICogICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAqICAgIH0pO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGVkb21ldGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcGVkb21ldGVyJyxcbiAgcGx1Z2luUmVmOiAncGVkb21ldGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sZWVjcm9zc2xleS9jb3Jkb3ZhLXBsdWdpbi1wZWRvbWV0ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZWRvbWV0ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgc3RlcCBjb3VudGluZyBpcyBhdmFpbGFibGUuIE9ubHkgd29ya3Mgb24gaU9TLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gZmVhdHVyZSBpcyBzdXBwb3J0ZWQgKHRydWUpIG9yIG5vdCBzdXBwb3J0ZWQgKGZhbHNlKVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1N0ZXBDb3VudGluZ0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzdGFuY2UgZXN0aW1hdGlvbiBpbmRpY2F0ZXMgdGhlIGFiaWxpdHkgdG8gdXNlIHN0ZXAgaW5mb3JtYXRpb24gdG8gc3VwcGx5IHRoZSBhcHByb3hpbWF0ZSBkaXN0YW5jZSB0cmF2ZWxsZWQgYnkgdGhlIHVzZXIuXG4gICAqIFRoaXMgY2FwYWJpbGl0eSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBkZXZpY2VzLCBldmVuIHdpdGggaU9TIDguXG4gICAqIE9ubHkgd29ya3Mgb24gaU9TLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gZmVhdHVyZSBpcyBzdXBwb3J0ZWQgKHRydWUpIG9yIG5vdCBzdXBwb3J0ZWQgKGZhbHNlKVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0Rpc3RhbmNlQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGbG9vciBjb3VudGluZyBpbmRpY2F0ZXMgdGhlIGFiaWxpdHkgdG8gY291bnQgdGhlIG51bWJlciBvZiBmbG9vcnMgdGhlIHVzZXIgd2Fsa3MgdXAgb3IgZG93biB1c2luZyBzdGFpcnMuXG4gICAqIFRoaXMgY2FwYWJpbGl0eSBpcyBub3Qgc3VwcG9ydGVkIG9uIGFsbCBkZXZpY2VzLCBldmVuIHdpdGggaU9TIDguXG4gICAqIE9ubHkgd29ya3Mgb24gaU9TLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gZmVhdHVyZSBpcyBzdXBwb3J0ZWQgKHRydWUpIG9yIG5vdCBzdXBwb3J0ZWQgKGZhbHNlKVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0Zsb29yQ291bnRpbmdBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgZGVsaXZlcnkgb2YgcmVjZW50IHBlZGVzdHJpYW4tcmVsYXRlZCBkYXRhIHRvIHlvdXIgQ29yZG92YSBhcHAuXG4gICAqXG4gICAqIFdoZW4gdGhlIGFwcCBpcyBzdXNwZW5kZWQsIHRoZSBkZWxpdmVyeSBvZiB1cGRhdGVzIHN0b3BzIHRlbXBvcmFyaWx5LlxuICAgKiBVcG9uIHJldHVybmluZyB0byBmb3JlZ3JvdW5kIG9yIGJhY2tncm91bmQgZXhlY3V0aW9uLCB0aGUgcGVkb21ldGVyIG9iamVjdCBiZWdpbnMgdXBkYXRlcyBhZ2Fpbi5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxJUGVkb21ldGVyRGF0YT59IFJldHVybnMgYSBPYnNlcnZhYmxlIHRoYXQgcmVjaWV2ZXMgcmVwZWF0bHkgZGF0YSBmcm9tIHBlZG9tZXRlciBpbiBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BQZWRvbWV0ZXJVcGRhdGVzJ1xuICB9KVxuICBzdGFydFBlZG9tZXRlclVwZGF0ZXMoKTogT2JzZXJ2YWJsZTxJUGVkb21ldGVyRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0aGUgZGVsaXZlcnkgb2YgcmVjZW50IHBlZGVzdHJpYW4gZGF0YSB1cGRhdGVzIHRvIHlvdXIgQ29yZG92YSBhcHAuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBwZWRvbWV0ZXIgd2F0Y2hpbmcgd2FzIHN0b3BwZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFBlZG9tZXRlclVwZGF0ZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBkYXRhIGJldHdlZW4gdGhlIHNwZWNpZmllZCBzdGFydCBhbmQgZW5kIGRhdGVzLlxuICAgKiBUaGUgc3RhcnREYXRlIGFuZCBlbmREYXRlIG9wdGlvbnMgYXJlIHJlcXVpcmVkIGFuZCBjYW4gYmUgY29uc3RydWN0ZWQgaW4gYW55IHZhbGlkIEphdmFTY3JpcHQgd2F5XG4gICAqIChlLmcuIG5ldyBEYXRlKDIwMTUsIDQsIDEsIDE1LCAyMCwgMDApIGlzIGFsc28gdmFsaWQsIGFzIGlzIG1pbGxpc2Vjb25kcykuXG4gICAqIE9ubHkgd29ya3Mgb24gaU9TLlxuICAgKiBAcGFyYW0ge2FueX0gb3B0aW9ucyAgc3RhcnQgZGF0ZSBhbmQgZW4gZGF0ZSB3aGVyZSB5b3Ugd2FudCB0byBnZXQgcGVkb21ldGVyIGRhdGFcbiAgICogQHJldHVybiB7UHJvbWlzZTxJUGVkb21ldGVyRGF0YT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBwZWRvbWV0ZXIgZGF0YSBmb3VuZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBxdWVyeURhdGEob3B0aW9uczoge1xuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgICBlbmREYXRlOiBEYXRlO1xuICB9KTogUHJvbWlzZTxJUGVkb21ldGVyRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19