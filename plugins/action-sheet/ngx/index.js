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
var ActionSheet = /** @class */ (function (_super) {
    __extends(ActionSheet, _super);
    function ActionSheet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience property to select an Android theme value
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5
        };
        return _this;
    }
    ActionSheet.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    ActionSheet.prototype.hide = function (options) { return cordova(this, "hide", {}, arguments); };
    ActionSheet.pluginName = "ActionSheet";
    ActionSheet.plugin = "cordova-plugin-actionsheet";
    ActionSheet.pluginRef = "plugins.actionsheet";
    ActionSheet.repo = "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet";
    ActionSheet.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone 8"];
    ActionSheet = __decorate([
        Injectable()
    ], ActionSheet);
    return ActionSheet;
}(IonicNativePlugin));
export { ActionSheet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FjdGlvbi1zaGVldC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpR3ZDLCtCQUFpQjs7O1FBQ2hEOztXQUVHO1FBQ0gsb0JBQWMsR0FNVjtZQUNGLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsZUFBZSxFQUFFLENBQUM7WUFDbEIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQix5QkFBeUIsRUFBRSxDQUFDO1lBQzVCLDBCQUEwQixFQUFFLENBQUM7U0FDOUIsQ0FBQzs7O0lBU0YsMEJBQUksYUFBQyxPQUE0QjtJQVVqQywwQkFBSSxhQUFDLE9BQTRCOzs7Ozs7SUFuQ3RCLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFsR3hCO0VBa0dpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvblNoZWV0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbGFiZWxzIGZvciB0aGUgYnV0dG9ucy4gVXNlcyB0aGUgaW5kZXggeFxuICAgKi9cbiAgYnV0dG9uTGFiZWxzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIHRpdGxlIGZvciB0aGUgYWN0aW9uc2hlZXRcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3VidGl0bGUgZm9yIHRoZSBhY3Rpb25zaGVldCAoSU9TIG9ubHkpXG4gICAqL1xuICBzdWJ0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlbWUgdG8gYmUgdXNlZCBvbiBBbmRyb2lkXG4gICAqL1xuICBhbmRyb2lkVGhlbWU/OiAxIHwgMiB8IDMgfCA0IHwgNTtcblxuICAvKipcbiAgICogRW5hYmxlIGEgY2FuY2VsIG9uIEFuZHJvaWRcbiAgICovXG4gIGFuZHJvaWRFbmFibGVDYW5jZWxCdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgYSBjYW5jZWwgb24gV2luZG93cyBQaG9uZVxuICAgKi9cbiAgd2lucGhvbmVFbmFibGVDYW5jZWxCdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBZGQgYSBjYW5jZWwgYnV0dG9uIHdpdGggdGV4dFxuICAgKi9cbiAgYWRkQ2FuY2VsQnV0dG9uV2l0aExhYmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGQgYSBkZXN0cnVjdGl2ZSBidXR0b24gd2l0aCB0ZXh0XG4gICAqL1xuICBhZGREZXN0cnVjdGl2ZUJ1dHRvbldpdGhMYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogT24gYW4gaVBhZCwgc2V0IHRoZSBYLFkgcG9zaXRpb25cbiAgICovXG4gIHBvc2l0aW9uPzogW251bWJlciwgbnVtYmVyXTtcblxuICAvKipcbiAgICogQ2hvb3NlIGlmIGRlc3RydWN0aXZlIGJ1dHRvbiB3aWxsIGJlIHRoZSBsYXN0XG4gICAqL1xuICBkZXN0cnVjdGl2ZUJ1dHRvbkxhc3Q/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEFjdGlvbiBTaGVldFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgQWN0aW9uU2hlZXQgcGx1Z2luIHNob3dzIGEgbmF0aXZlIGxpc3Qgb2Ygb3B0aW9ucyB0aGUgdXNlciBjYW4gY2hvb3NlIGZyb20uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1hY3Rpb25zaGVldGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBY3Rpb25TaGVldCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0KS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFjdGlvblNoZWV0LCBBY3Rpb25TaGVldE9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FjdGlvbi1zaGVldC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9uU2hlZXQ6IEFjdGlvblNoZWV0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogbGV0IGJ1dHRvbkxhYmVscyA9IFsnU2hhcmUgdmlhIEZhY2Vib29rJywgJ1NoYXJlIHZpYSBUd2l0dGVyJ107XG4gKlxuICogY29uc3Qgb3B0aW9uczogQWN0aW9uU2hlZXRPcHRpb25zID0ge1xuICogICB0aXRsZTogJ1doYXQgZG8geW91IHdhbnQgd2l0aCB0aGlzIGltYWdlPycsXG4gKiAgIHN1YnRpdGxlOiAnQ2hvb3NlIGFuIGFjdGlvbicsXG4gKiAgIGJ1dHRvbkxhYmVsczogYnV0dG9uTGFiZWxzLFxuICogICBhZGRDYW5jZWxCdXR0b25XaXRoTGFiZWw6ICdDYW5jZWwnLFxuICogICBhZGREZXN0cnVjdGl2ZUJ1dHRvbldpdGhMYWJlbDogJ0RlbGV0ZScsXG4gKiAgIGFuZHJvaWRUaGVtZTogdGhpcy5hY3Rpb25TaGVldC5BTkRST0lEX1RIRU1FUy5USEVNRV9IT0xPX0RBUkssXG4gKiAgIGRlc3RydWN0aXZlQnV0dG9uTGFzdDogdHJ1ZVxuICogfVxuICpcbiAqIHRoaXMuYWN0aW9uU2hlZXQuc2hvdyhvcHRpb25zKS50aGVuKChidXR0b25JbmRleDogbnVtYmVyKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdCdXR0b24gcHJlc3NlZDogJyArIGJ1dHRvbkluZGV4KTtcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQWN0aW9uU2hlZXRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWN0aW9uU2hlZXQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hY3Rpb25zaGVldCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuYWN0aW9uc2hlZXQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIHByb3BlcnR5IHRvIHNlbGVjdCBhbiBBbmRyb2lkIHRoZW1lIHZhbHVlXG4gICAqL1xuICBBTkRST0lEX1RIRU1FUzoge1xuICAgIFRIRU1FX1RSQURJVElPTkFMOiBudW1iZXI7XG4gICAgVEhFTUVfSE9MT19EQVJLOiBudW1iZXI7XG4gICAgVEhFTUVfSE9MT19MSUdIVDogbnVtYmVyO1xuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUks6IG51bWJlcjtcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9MSUdIVDogbnVtYmVyO1xuICB9ID0ge1xuICAgIFRIRU1FX1RSQURJVElPTkFMOiAxLFxuICAgIFRIRU1FX0hPTE9fREFSSzogMixcbiAgICBUSEVNRV9IT0xPX0xJR0hUOiAzLFxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUks6IDQsXG4gICAgVEhFTUVfREVWSUNFX0RFRkFVTFRfTElHSFQ6IDVcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBhIG5hdGl2ZSBBY3Rpb25TaGVldCBjb21wb25lbnQuIFNlZSBiZWxvdyBmb3Igb3B0aW9ucy5cbiAgICogQHBhcmFtIHtBY3Rpb25TaGVldE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIFNlZSB0YWJsZSBiZWxvd1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGluZGV4IG9mIHRoZVxuICAgKiAgIGJ1dHRvbiBwcmVzc2VkICgxIGJhc2VkLCBzbyAxLCAyLCAzLCBldGMuKVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KG9wdGlvbnM/OiBBY3Rpb25TaGVldE9wdGlvbnMpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IGhpZGUgdGhlIG5hdGl2ZSBBY3Rpb25TaGVldFxuICAgKiBAcGFyYW0gIHtBY3Rpb25TaGVldE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIFNlZSB0YWJsZSBiZWxvd1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFjdGlvbnNoZWV0IGlzIGNsb3NlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoaWRlKG9wdGlvbnM/OiBBY3Rpb25TaGVldE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19