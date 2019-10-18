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
/**
 * Bit flag values for setSystemUiVisibility()
 * @see  https://developer.android.com/reference/android/view/View.html#setSystemUiVisibility(int)
 */
export var AndroidSystemUiFlags;
(function (AndroidSystemUiFlags) {
    /** View has requested the system UI (status bar) to be visible (the default). SYSTEM_UI_FLAG_VISIBLE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Visible"] = 0] = "Visible";
    /** View has requested the system UI to enter an unobtrusive "low profile" mode. SYSTEM_UI_FLAG_LOW_PROFILE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LowProfile"] = 1] = "LowProfile";
    /** View has requested that the system navigation be temporarily hidden. SYSTEM_UI_FLAG_HIDE_NAVIGATION */
    AndroidSystemUiFlags[AndroidSystemUiFlags["HideNavigation"] = 2] = "HideNavigation";
    /** View has requested to go into the normal fullscreen mode so that its content can take over the screen while still allowing the user to interact with the application. SYSTEM_UI_FLAG_FULLSCREEN */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Fullscreen"] = 4] = "Fullscreen";
    /** When using other layout flags, we would like a stable view of the content insets given to fitSystemWindows(Rect). SYSTEM_UI_FLAG_LAYOUT_STABLE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutStable"] = 256] = "LayoutStable";
    /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_HIDE_NAVIGATION, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutHideNavigation"] = 512] = "LayoutHideNavigation";
    /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_FULLSCREEN, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutFullscreen"] = 1024] = "LayoutFullscreen";
    /** View would like to remain interactive when hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Immersive"] = 2048] = "Immersive";
    /** View would like to remain interactive when hiding the status bar with SYSTEM_UI_FLAG_FULLSCREEN and/or hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE_STICKY */
    AndroidSystemUiFlags[AndroidSystemUiFlags["ImmersiveSticky"] = 4096] = "ImmersiveSticky";
    /** Requests the status bar to draw in a mode that is compatible with light status bar backgrounds. SYSTEM_UI_FLAG_LIGHT_STATUS_BAR */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LightStatusBar"] = 8192] = "LightStatusBar";
})(AndroidSystemUiFlags || (AndroidSystemUiFlags = {}));
var AndroidFullScreen = /** @class */ (function (_super) {
    __extends(AndroidFullScreen, _super);
    function AndroidFullScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidFullScreen.prototype.isSupported = function () { return cordova(this, "isSupported", {}, arguments); };
    AndroidFullScreen.prototype.isImmersiveModeSupported = function () { return cordova(this, "isImmersiveModeSupported", {}, arguments); };
    AndroidFullScreen.prototype.immersiveWidth = function () { return cordova(this, "immersiveWidth", {}, arguments); };
    AndroidFullScreen.prototype.immersiveHeight = function () { return cordova(this, "immersiveHeight", {}, arguments); };
    AndroidFullScreen.prototype.leanMode = function () { return cordova(this, "leanMode", {}, arguments); };
    AndroidFullScreen.prototype.showSystemUI = function () { return cordova(this, "showSystemUI", {}, arguments); };
    AndroidFullScreen.prototype.showUnderStatusBar = function () { return cordova(this, "showUnderStatusBar", {}, arguments); };
    AndroidFullScreen.prototype.showUnderSystemUI = function () { return cordova(this, "showUnderSystemUI", {}, arguments); };
    AndroidFullScreen.prototype.immersiveMode = function () { return cordova(this, "immersiveMode", {}, arguments); };
    AndroidFullScreen.prototype.setSystemUiVisibility = function (visibility) { return cordova(this, "setSystemUiVisibility", {}, arguments); };
    AndroidFullScreen.pluginName = "AndroidFullScreen";
    AndroidFullScreen.plugin = "cordova-plugin-fullscreen";
    AndroidFullScreen.pluginRef = "AndroidFullScreen";
    AndroidFullScreen.repo = "https://github.com/mesmotronic/cordova-plugin-fullscreen";
    AndroidFullScreen.platforms = ["Android"];
    AndroidFullScreen = __decorate([
        Injectable()
    ], AndroidFullScreen);
    return AndroidFullScreen;
}(IonicNativePlugin));
export { AndroidFullScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FuZHJvaWQtZnVsbC1zY3JlZW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEU7OztHQUdHO0FBQ0gsTUFBTSxDQUFOLElBQVksb0JBcUJYO0FBckJELFdBQVksb0JBQW9CO0lBQzlCLHdHQUF3RztJQUN4RyxxRUFBVyxDQUFBO0lBQ1gsOEdBQThHO0lBQzlHLDJFQUFjLENBQUE7SUFDZCwwR0FBMEc7SUFDMUcsbUZBQWtCLENBQUE7SUFDbEIsc01BQXNNO0lBQ3RNLDJFQUFjLENBQUE7SUFDZCxxSkFBcUo7SUFDckosaUZBQWtCLENBQUE7SUFDbEIsMEtBQTBLO0lBQzFLLGlHQUEwQixDQUFBO0lBQzFCLGdLQUFnSztJQUNoSywwRkFBdUIsQ0FBQTtJQUN2Qix5SUFBeUk7SUFDekksNEVBQWdCLENBQUE7SUFDaEIsNE1BQTRNO0lBQzVNLHdGQUFzQixDQUFBO0lBQ3RCLHNJQUFzSTtJQUN0SSxzRkFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBckJXLG9CQUFvQixLQUFwQixvQkFBb0IsUUFxQi9COztJQThCc0MscUNBQWlCOzs7O0lBTXRELHVDQUFXO0lBU1gsb0RBQXdCO0lBU3hCLDBDQUFjO0lBU2QsMkNBQWU7SUFTZixvQ0FBUTtJQVNSLHdDQUFZO0lBU1osOENBQWtCO0lBU2xCLDZDQUFpQjtJQVNqQix5Q0FBYTtJQVdiLGlEQUFxQixhQUFDLFVBQWdDOzs7Ozs7SUF6RjNDLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7T0FDQSxpQkFBaUI7NEJBMUQ5QjtFQTBEdUMsaUJBQWlCO1NBQTNDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEJpdCBmbGFnIHZhbHVlcyBmb3Igc2V0U3lzdGVtVWlWaXNpYmlsaXR5KClcbiAqIEBzZWUgIGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3JlZmVyZW5jZS9hbmRyb2lkL3ZpZXcvVmlldy5odG1sI3NldFN5c3RlbVVpVmlzaWJpbGl0eShpbnQpXG4gKi9cbmV4cG9ydCBlbnVtIEFuZHJvaWRTeXN0ZW1VaUZsYWdzIHtcbiAgLyoqIFZpZXcgaGFzIHJlcXVlc3RlZCB0aGUgc3lzdGVtIFVJIChzdGF0dXMgYmFyKSB0byBiZSB2aXNpYmxlICh0aGUgZGVmYXVsdCkuIFNZU1RFTV9VSV9GTEFHX1ZJU0lCTEUgKi9cbiAgVmlzaWJsZSA9IDAsXG4gIC8qKiBWaWV3IGhhcyByZXF1ZXN0ZWQgdGhlIHN5c3RlbSBVSSB0byBlbnRlciBhbiB1bm9idHJ1c2l2ZSBcImxvdyBwcm9maWxlXCIgbW9kZS4gU1lTVEVNX1VJX0ZMQUdfTE9XX1BST0ZJTEUgKi9cbiAgTG93UHJvZmlsZSA9IDEsXG4gIC8qKiBWaWV3IGhhcyByZXF1ZXN0ZWQgdGhhdCB0aGUgc3lzdGVtIG5hdmlnYXRpb24gYmUgdGVtcG9yYXJpbHkgaGlkZGVuLiBTWVNURU1fVUlfRkxBR19ISURFX05BVklHQVRJT04gKi9cbiAgSGlkZU5hdmlnYXRpb24gPSAyLFxuICAvKiogVmlldyBoYXMgcmVxdWVzdGVkIHRvIGdvIGludG8gdGhlIG5vcm1hbCBmdWxsc2NyZWVuIG1vZGUgc28gdGhhdCBpdHMgY29udGVudCBjYW4gdGFrZSBvdmVyIHRoZSBzY3JlZW4gd2hpbGUgc3RpbGwgYWxsb3dpbmcgdGhlIHVzZXIgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgYXBwbGljYXRpb24uIFNZU1RFTV9VSV9GTEFHX0ZVTExTQ1JFRU4gKi9cbiAgRnVsbHNjcmVlbiA9IDQsXG4gIC8qKiBXaGVuIHVzaW5nIG90aGVyIGxheW91dCBmbGFncywgd2Ugd291bGQgbGlrZSBhIHN0YWJsZSB2aWV3IG9mIHRoZSBjb250ZW50IGluc2V0cyBnaXZlbiB0byBmaXRTeXN0ZW1XaW5kb3dzKFJlY3QpLiBTWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFICovXG4gIExheW91dFN0YWJsZSA9IDI1NixcbiAgLyoqIFZpZXcgd291bGQgbGlrZSBpdHMgd2luZG93IHRvIGJlIGxhaWQgb3V0IGFzIGlmIGl0IGhhcyByZXF1ZXN0ZWQgU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OLCBldmVuIGlmIGl0IGN1cnJlbnRseSBoYXNuJ3QuIFNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT04gKi9cbiAgTGF5b3V0SGlkZU5hdmlnYXRpb24gPSA1MTIsXG4gIC8qKiBWaWV3IHdvdWxkIGxpa2UgaXRzIHdpbmRvdyB0byBiZSBsYWlkIG91dCBhcyBpZiBpdCBoYXMgcmVxdWVzdGVkIFNZU1RFTV9VSV9GTEFHX0ZVTExTQ1JFRU4sIGV2ZW4gaWYgaXQgY3VycmVudGx5IGhhc24ndC4gU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU4gKi9cbiAgTGF5b3V0RnVsbHNjcmVlbiA9IDEwMjQsXG4gIC8qKiBWaWV3IHdvdWxkIGxpa2UgdG8gcmVtYWluIGludGVyYWN0aXZlIHdoZW4gaGlkaW5nIHRoZSBuYXZpZ2F0aW9uIGJhciB3aXRoIFNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTi4gU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFICovXG4gIEltbWVyc2l2ZSA9IDIwNDgsXG4gIC8qKiBWaWV3IHdvdWxkIGxpa2UgdG8gcmVtYWluIGludGVyYWN0aXZlIHdoZW4gaGlkaW5nIHRoZSBzdGF0dXMgYmFyIHdpdGggU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTiBhbmQvb3IgaGlkaW5nIHRoZSBuYXZpZ2F0aW9uIGJhciB3aXRoIFNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTi4gU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWSAqL1xuICBJbW1lcnNpdmVTdGlja3kgPSA0MDk2LFxuICAvKiogUmVxdWVzdHMgdGhlIHN0YXR1cyBiYXIgdG8gZHJhdyBpbiBhIG1vZGUgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggbGlnaHQgc3RhdHVzIGJhciBiYWNrZ3JvdW5kcy4gU1lTVEVNX1VJX0ZMQUdfTElHSFRfU1RBVFVTX0JBUiAqL1xuICBMaWdodFN0YXR1c0JhciA9IDgxOTJcbn1cblxuLyoqXG4gKiBAbmFtZSBBbmRyb2lkIEZ1bGwgU2NyZWVuXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGVuYWJsZXMgZGV2ZWxvcGVycyB0byBvZmZlciB1c2VycyBhIHRydWUgZnVsbCBzY3JlZW4gZXhwZXJpZW5jZSBpbiB0aGVpciBDb3Jkb3ZhIGFuZCBQaG9uZUdhcCBhcHBzIGZvciBBbmRyb2lkLlxuICogVXNpbmcgQW5kcm9pZCA0LjArLCB5b3UgY2FuIHVzZSB0cnVlIGZ1bGwgc2NyZWVuIGluIFwibGVhbiBtb2RlXCIsIHRoZSB3YXkgeW91IHNlZSBpbiBhcHBzIGxpa2UgWW91VHViZSwgZXhwYW5kaW5nIHRoZSBhcHAgcmlnaHQgdG8gdGhlIGVkZ2VzIG9mIHRoZSBzY3JlZW4sIGhpZGluZyB0aGUgc3RhdHVzIGFuZCBuYXZpZ2F0aW9uIGJhcnMgdW50aWwgdGhlIHVzZXIgbmV4dCBpbnRlcmFjdHMuIFRoaXMgaXMgaWRlYWxseSBzdWl0ZWQgdG8gdmlkZW8gb3IgY3V0LXNjZW5lIGNvbnRlbnQuXG4gKiBJbiBBbmRyb2lkIDQuNCssIGhvd2V2ZXIsIHlvdSBjYW4gbm93IGVudGVyIHRydWUgZnVsbCBzY3JlZW4sIGZ1bGx5IGludGVyYWN0aXZlIGltbWVyc2l2ZSBtb2RlLiBJbiB0aGlzIG1vZGUsIHlvdXIgYXBwIHdpbGwgcmVtYWluIGluIHRydWUgZnVsbCBzY3JlZW4gdW50aWwgeW91IGNob29zZSBvdGhlcndpc2U7IHVzZXJzIGNhbiBzd2lwZSBkb3duIGZyb20gdGhlIHRvcCBvZiB0aGUgc2NyZWVuIHRvIHRlbXBvcmFyaWx5IGRpc3BsYXkgdGhlIHN5c3RlbSBVSS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQW5kcm9pZEZ1bGxTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FuZHJvaWQtZnVsbC1zY3JlZW4vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWRGdWxsU2NyZWVuOiBBbmRyb2lkRnVsbFNjcmVlbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5hbmRyb2lkRnVsbFNjcmVlbi5pc0ltbWVyc2l2ZU1vZGVTdXBwb3J0ZWQoKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnSW1tZXJzaXZlIG1vZGUgc3VwcG9ydGVkJykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQW5kcm9pZEZ1bGxTY3JlZW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mdWxsc2NyZWVuJyxcbiAgcGx1Z2luUmVmOiAnQW5kcm9pZEZ1bGxTY3JlZW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21lc21vdHJvbmljL2NvcmRvdmEtcGx1Z2luLWZ1bGxzY3JlZW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZHJvaWRGdWxsU2NyZWVuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSXMgdGhpcyBwbHVnaW4gc3VwcG9ydGVkP1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1N1cHBvcnRlZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSXMgaW1tZXJzaXZlIG1vZGUgc3VwcG9ydGVkP1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0ltbWVyc2l2ZU1vZGVTdXBwb3J0ZWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuIGluIGltbWVyc2l2ZSBtb2RlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGltbWVyc2l2ZVdpZHRoKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHNjcmVlbiBpbiBpbW1lcnNpdmUgbW9kZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbW1lcnNpdmVIZWlnaHQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlkZSBzeXN0ZW0gVUkgdW50aWwgdXNlciBpbnRlcmFjdHMuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxlYW5Nb2RlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHN5c3RlbSBVSS5cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd1N5c3RlbVVJKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlbmQgeW91ciBhcHAgdW5kZXJuZWF0aCB0aGUgc3RhdHVzIGJhciAoQW5kcm9pZCA0LjQrIG9ubHkpLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93VW5kZXJTdGF0dXNCYXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZCB5b3VyIGFwcCB1bmRlcm5lYXRoIHRoZSBzeXN0ZW0gVUkgKEFuZHJvaWQgNC40KyBvbmx5KS5cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd1VuZGVyU3lzdGVtVUkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgc3lzdGVtIFVJIGFuZCBrZWVwIGl0IGhpZGRlbiAoQW5kcm9pZCA0LjQrIG9ubHkpLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbW1lcnNpdmVNb2RlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSBzZXQgdGhlIHRoZSBzeXN0ZW0gVUkgdG8gYSBjdXN0b20gbW9kZS4gVGhpcyBtaXJyb3JzIHRoZSBBbmRyb2lkIG1ldGhvZCBvZiB0aGUgc2FtZSBuYW1lLiAoQW5kcm9pZCA0LjQrIG9ubHkpLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3JlZmVyZW5jZS9hbmRyb2lkL3ZpZXcvVmlldy5odG1sI3NldFN5c3RlbVVpVmlzaWJpbGl0eShpbnQpXG4gICAqIEBwYXJhbSB7QW5kcm9pZFN5c3RlbVVpRmxhZ3N9IHZpc2liaWxpdHkgQml0d2lzZS1PUiBvZiBmbGFncyBpbiBBbmRyb2lkU3lzdGVtVWlGbGFnc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRTeXN0ZW1VaVZpc2liaWxpdHkodmlzaWJpbGl0eTogQW5kcm9pZFN5c3RlbVVpRmxhZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==