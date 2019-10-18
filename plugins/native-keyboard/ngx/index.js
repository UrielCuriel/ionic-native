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
var NativeKeyboard = /** @class */ (function (_super) {
    __extends(NativeKeyboard, _super);
    function NativeKeyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeKeyboard.prototype.showMessenger = function (options) { return cordova(this, "showMessenger", { "sync": true }, arguments); };
    NativeKeyboard.prototype.hideMessenger = function (options) { return cordova(this, "hideMessenger", { "sync": true }, arguments); };
    NativeKeyboard.prototype.showMessengerKeyboard = function () { return cordova(this, "showMessengerKeyboard", {}, arguments); };
    NativeKeyboard.prototype.hideMessengerKeyboard = function () { return cordova(this, "hideMessengerKeyboard", {}, arguments); };
    NativeKeyboard.prototype.updateMessenger = function (options) { return cordova(this, "updateMessenger", {}, arguments); };
    NativeKeyboard.pluginName = "NativeKeyboard";
    NativeKeyboard.plugin = "cordova-plugin-native-keyboard";
    NativeKeyboard.pluginRef = "NativeKeyboard";
    NativeKeyboard.repo = "https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard";
    NativeKeyboard.platforms = ["Android", "iOS"];
    NativeKeyboard = __decorate([
        Injectable()
    ], NativeKeyboard);
    return NativeKeyboard;
}(IonicNativePlugin));
export { NativeKeyboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1rZXlib2FyZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE0TVAsa0NBQWlCOzs7O0lBT25ELHNDQUFhLGFBQUMsT0FBOEI7SUFRNUMsc0NBQWEsYUFBQyxPQUE4QjtJQVE1Qyw4Q0FBcUI7SUFRckIsOENBQXFCO0lBU3JCLHdDQUFlLGFBQUMsT0FBNkM7Ozs7OztJQXhDbEQsY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQTdNM0I7RUE2TW9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlS2V5Ym9hcmRPcHRpb25zIHtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBpbnZva2VkIHdoZW4gdGhlIHVzZXIgc3VibWl0cyBoaXMgaW5wdXQuIFJlY2VpdmVzIHRoZSB0ZXh0IGFzIGEgc2luZ2xlIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91ciBwYWdlIGlzIFVURi04IGVuY29kZWQgc28gQ2hpbmVzZSBhbmQgRW1vamkgYXJlIHJlbmRlcmVkIE9LLlxuICAgKi9cbiAgb25TdWJtaXQ6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGludm9rZWQgd2hlbiB0aGUga2V5Ym9hcmQgaXMgYWJvdXQgdG8gcG9wIHVwLiBSZWNlaXZlcyB0aGUgaGVpZ2h0IGFzIGEgc2luZ2xlIHByb3BlcnR5LiAoaU9TIG9ubHkpXG4gICAqL1xuICBvbktleWJvYXJkV2lsbFNob3c6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGludm9rZWQgd2hlbiB0aGUga2V5Ym9hcmQgcG9wcGVkIHVwLiBSZWNlaXZlcyB0aGUgaGVpZ2h0IGFzIGEgc2luZ2xlIHByb3BlcnR5LlxuICAgKi9cbiAgb25LZXlib2FyZERpZFNob3c6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGludm9rZWQgd2hlbiB0aGUga2V5Ym9hcmQgaXMgYWJvdXQgdG8gY2xvc2UuIChpT1Mgb25seSlcbiAgICovXG4gIG9uS2V5Ym9hcmRXaWxsSGlkZTogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gaW52b2tlZCB3aGVuIHRoZSBrZXlib2FyZCBjbG9zZWQuXG4gICAqL1xuICBvbktleWJvYXJkRGlkSGlkZTogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gaW52b2tlZCB3aGVuIGFueSBrZXkgaXMgcHJlc3NlZCwgc2VuZHMgdGhlIGVudGlyZSB0ZXh0IGFzIHJlc3BvbnNlLlxuICAgKi9cbiAgb25UZXh0Q2hhbmdlZDogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEhpZ2hseSByZWNvbW1lbmRlZCB0byBwYXNzIGluIGlmIHlvdSB3YW50IHRvIHJlcGxpY2F0ZSB0aGUgYmVoYXZpb3Igb2YgdGhlIHZpZGVvJ3MgYWJvdmUgKHNjcm9sbCBkb3duIHdoZW4gdGhlIGtleWJvYXJkIG9wZW5zKS4gUGFzcyBpbiB0aGUgc2Nyb2xsYWJsZSBET00gZWxlbWVudCBjb250YWluaW5nIHRoZSBtZXNzYWdlcy5cbiAgICovXG4gIGF1dG9zY3JvbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogSWYgYGF1dG9zY3JvbGxFbGVtZW50YCB3YXMgc2V0IHlvdSBjYW4gYWxzbyBtYWtlIHRoZSBsaXN0IHNjcm9sbCBkb3duIGluaXRpYWxseSwgd2hlbiB0aGUgbWVzc2VuZ2VyIGJhciAod2l0aG91dCB0aGUga2V5Ym9hcmQgcG9wcGluZyB1cCkgaXMgc2hvd24uXG4gICAqL1xuICBzY3JvbGxUb0JvdHRvbUFmdGVyTWVzc2VuZ2VyU2hvd3M6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldHRpbmcgdGhpcyB0byBgdHJ1ZWAgaXMgbGlrZSB0aGUgdmlkZW8ncyBhYm92ZTogdGhlIGtleWJvYXJkIGRvZXNuJ3QgY2xvc2UgdXBvbiBzdWJtaXQuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAqL1xuICBrZWVwT3BlbkFmdGVyU3VibWl0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNYWtlcyB0aGUgbWVzc2VuZ2VyIGJhciBzbGlkZSBpbiBmcm9tIHRoZSBib3R0b20uIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAqL1xuICBhbmltYXRlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3BlbiB0aGUga2V5Ym9hcmQgd2hlbiBzaG93aW5nIHRoZSBtZXNzZW5nZXIuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAqL1xuICBzaG93S2V5Ym9hcmQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHRleHQgc2V0IGluIHRoZSBtZXNzZW5nZXIgaW5wdXQgYmFyLlxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIHR5cGVkIHRleHQuIERlZmF1bHRzIHRvIGAjNDQ0NDQ0YC5cbiAgICovXG4gIHRleHRDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMaWtlIGEgcmVndWxhciBIVE1MIGlucHV0IHBsYWNlaG9sZGVyLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciB0ZXh0LiBEZWZhdWx0cyB0byBgI0NDQ0NDQ2AuXG4gICAqL1xuICBwbGFjZWhvbGRlckNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBtZXNzZW5nZXIgYmFyLiBEZWZhdWx0cyB0byBgI0Y2RjZGNmAuXG4gICAqL1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRleHR2aWV3LiBMb29rcyBuaWNlc3Qgb24gQW5kcm9pZCBpZiBpdCdzIHRoZSBzYW1lIGNvbG9yIGFzIHRoZSBgYmFja2dyb3VuZENvbG9yYCBwcm9wZXJ0eS4gRGVmYXVsdHMgdG8gYCNGNkY2RjZgLlxuICAgKi9cbiAgdGV4dFZpZXdCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJvcmRlciBjb2xvciBvZiB0aGUgdGV4dHZpZXcuIERlZmF1bHRzIHRvIGAjNjY2NjY2YC4gKGlPUyBvbmx5KVxuICAgKi9cbiAgdGV4dFZpZXdCb3JkZXJDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXR0aW5nIHRoaXMgPiAwIHdpbGwgbWFrZSBhIGNvdW50ZXIgc2hvdyB1cCBvbiBpT1MgKGFuZCBpZ25vcmUgc3VwZXJmbHVvdXMgaW5wdXQgb24gQW5kcm9pZCwgZm9yIG5vdylcbiAgICovXG4gIG1heENoYXJzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgYXJlOiBgXCJub25lXCJgLCBgXCJzcGxpdFwiYCwgYFwiY291bnRkb3duXCJgLCBgXCJjb3VudGRvd25yZXZlcnNlZFwiYC4gTm90ZSB0aGF0IGlmIGBtYXhDaGFyc2AgaXMgc2V0LCBgXCJub25lXCJgIHdpbGwgc3RpbGwgc2hvdyBhIGNvdW50ZXIuIERlZmF1bHRzIHRvIGBcIm5vbmVcImAuIChpT1Mgb25seSlcbiAgICovXG4gIGNvdW50ZXJTdHlsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGFyZTogXCJkZWZhdWx0XCIsIFwiZGVjaW1hbHBhZFwiLCBcInBob25lcGFkXCIsIFwibnVtYmVycGFkXCIsIFwibmFtZXBob25lcGFkXCIsIFwibnVtYmVyXCIsIFwiZW1haWxcIiwgXCJ0d2l0dGVyXCIsIFwidXJsXCIsIFwiYWxwaGFiZXRcIiwgXCJzZWFyY2hcIiwgXCJhc2NpaVwiLiAoaU9TIG9ubHkpXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgYXJlOiBcImxpZ2h0XCIsIFwiZGFya1wiLiAoaU9TIG9ubHkpXG4gICAqL1xuICBhcHBlYXJhbmNlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoaW5ncyBsaWtlIHRoZSBFbW9qaSBrZXlib2FyZCBhbmQgdGhlIFByZWRpY2l2ZSB0ZXh0IGVudHJ5IGJhciAoaU9TIG9ubHkpXG4gICAqL1xuICBzZWN1cmU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBsZWZ0QnV0dG9uOiBOYXRpdmVLZXlib2FyZExlZnRCdXR0b247XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICByaWdodEJ1dHRvbjogTmF0aXZlS2V5Ym9hcmRCdXR0b247XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVLZXlib2FyZEJ1dHRvbiB7XG4gIC8qKlxuICAgKiBFaXRoZXIgXCJ0ZXh0XCIgKEFuZHJvaWQgb25seSBjdXJyZW50bHkpLCBcImZvbnRhd2Vzb21lXCIgb3IgXCJpb25pY29uXCIuXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZXBlbmRzIG9uIHRoZSB0eXBlLiBFeGFtcGxlczogZm9yIFwidGV4dFwiIHVzZSBcIlNlbmRcIiwgZm9yIFwiZm9udGF3ZXNvbWVcIiB1c2UgXCJmYS1iYXR0ZXJ5LXF1YXJ0ZXJcIiwgZm9yIFwiaW9uaWNvblwiIHVzZSBcIlxcdWY0OGFcIiAoZ28gdG8gaHR0cDovL2lvbmljb25zLmNvbSwgcmlnaHQtY2xpY2sgYW5kIGluc3BlY3QgdGhlIGljb24gYW5kIHVzZSB0aGUgdmFsdWUgeW91IGZpbmQgaW4gOmJlZm9yZSkuIE5vdGUgdGhhdCBzb21lIGZvbnRpY29ucyBhcmUgbm90IHN1cHBvcnRlZCBhcyB0aGUgZW1iZWRkZWQgZm9udHMgaW4gdGhlIHBsdWdpbiBtYXkgbGFnIGJlaGluZCBhIGxpdHRsZS4gU28gdHJ5IG9uZSBvZiB0aGUgb2xkZXIgaWNvbnMgZmlyc3QuXG4gICAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKipcbiAgICogSWYgdHlwZSBpcyBcInRleHRcIiB5b3UgY2FuIHNldCB0aGlzIHRvIGVpdGhlciBcIm5vcm1hbFwiLCBcImJvbGRcIiBvciBcIml0YWxpY1wiLlxuICAgKi9cbiAgdGV4dFN0eWxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIGludm9rZWQgd2hlbiB0aGUgYnV0dG9uIGlzIHByZXNzZWQuIFVzZSB0aGlzIGJ1dHRvbiB0byBwcm9tcHQgdGhlIHVzZXIgd2hhdCBoZSB3YW50cyB0byBkbyBuZXh0IGJ5IGZvciBpbnN0YW5jZSByZW5kZXJpbmcgYW4gQWN0aW9uU2hlZXQuXG4gICAqL1xuICBvblByZXNzOiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVLZXlib2FyZExlZnRCdXR0b24gZXh0ZW5kcyBOYXRpdmVLZXlib2FyZEJ1dHRvbiB7XG4gIC8qKlxuICAgKiBTZXQgdG8gYHRydWVgIHRvIGRpc2FibGUgdGhlIGJ1dHRvbiBvbmNlIHRleHQgaGFzIGJlZW4gZW50ZXJlZC5cbiAgICovXG4gIGRpc2FibGVkV2hlblRleHRFbnRlcmVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUtleWJvYXJkVXBkYXRlTWVzc2VuZ2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBtZXNzZW5nZXIncyB0ZXh0IGJ5IHRoaXMuIFRoZSBjdXJyZW50IHRleHQgcmVtYWlucyBpZiBvbWl0dGVkLlxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGN1cnNvciBhbnl3aGVyZSBpbiB0aGUgdGV4dCByYW5nZS4gRGVmYXVsdHMgdG8gdGhlIGVuZCBvZiB0aGUgdGV4dC5cbiAgICovXG4gIGNhcmV0SW5kZXg6IG51bWJlcjtcbiAgLyoqXG4gICAqIElmIGBmYWxzZWAgb3Igb21pdHRlZCBubyBjaGFuZ2VzIHRvIHRoZSBrZXlib2FyZCBzdGF0ZSBhcmUgbWFkZS5cbiAgICovXG4gIHNob3dLZXlib2FyZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAcGFpZFxuICogQG5hbWUgTmF0aXZlIEtleWJvYXJkXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgY3Jvc3MgcGxhdGZvcm0gV2hhdHNBcHAgLyBNZXNzZW5nZXIgLyBTbGFjayAtc3R5bGUga2V5Ym9hcmQgZXZlbi4gRm9yIHlvdXIgQ29yZG92YSBhcHAuXG4gKlxuICpcbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBOYXRpdmVLZXlib2FyZCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLWtleWJvYXJkL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlS2V5Ym9hcmQ6IE5hdGl2ZUtleWJvYXJkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTmF0aXZlS2V5Ym9hcmRPcHRpb25zXG4gKiBOYXRpdmVLZXlib2FyZEJ1dHRvblxuICogTmF0aXZlS2V5Ym9hcmRMZWZ0QnV0dG9uXG4gKiBOYXRpdmVLZXlib2FyZFVwZGF0ZU1lc3Nlbmdlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXRpdmVLZXlib2FyZCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1rZXlib2FyZCcsXG4gIHBsdWdpblJlZjogJ05hdGl2ZUtleWJvYXJkJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmUta2V5Ym9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXRpdmVLZXlib2FyZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogU2hvdyBtZXNzZW5nZXJcbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZUtleWJvYXJkT3B0aW9uc31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaG93TWVzc2VuZ2VyKG9wdGlvbnM6IE5hdGl2ZUtleWJvYXJkT3B0aW9ucyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgbWVzc2VuZ2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVLZXlib2FyZE9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaGlkZU1lc3NlbmdlcihvcHRpb25zOiBOYXRpdmVLZXlib2FyZE9wdGlvbnMpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IHBvcCB1cCB0aGUga2V5Ym9hcmQgYWdhaW4gaWYgdGhlIHVzZXIgZGlzbWlzc2VkIGl0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dNZXNzZW5nZXJLZXlib2FyZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IGhpZGUgdGhlIGtleWJvYXJkIChidXQgbm90IHRoZSBtZXNzZW5nZXIgYmFyKVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoaWRlTWVzc2VuZ2VyS2V5Ym9hcmQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFuaXB1bGF0ZSB0aGUgbWVzc2VuZ2VyIHdoaWxlIGl0J3Mgb3Blbi4gRm9yIGluc3RhbmNlIGlmIHlvdSB3YW50IHRvIHVwZGF0ZSB0aGUgdGV4dCBwcm9ncmFtbWF0aWNhbGx5IGJhc2VkIG9uIHdoYXQgdGhlIHVzZXIgdHlwZWQuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVwZGF0ZU1lc3NlbmdlcihvcHRpb25zOiBOYXRpdmVLZXlib2FyZFVwZGF0ZU1lc3Nlbmdlck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=