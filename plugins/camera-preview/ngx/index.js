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
var CameraPreview = /** @class */ (function (_super) {
    __extends(CameraPreview, _super);
    function CameraPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FOCUS_MODE = {
            FIXED: 'fixed',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CONTINUOUS_PICTURE: 'continuous-picture',
            CONTINUOUS_VIDEO: 'continuous-video',
            EDOF: 'edof',
            INFINITY: 'infinity',
            MACRO: 'macro' // Android Only
        };
        _this.EXPOSURE_MODE = {
            LOCK: 'lock',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CUSTOM: 'custom'
        };
        _this.FLASH_MODE = {
            OFF: 'off',
            ON: 'on',
            AUTO: 'auto',
            RED_EYE: 'red-eye',
            TORCH: 'torch' // Android Only
        };
        _this.COLOR_EFFECT = {
            AQUA: 'aqua',
            BLACKBOARD: 'blackboard',
            MONO: 'mono',
            NEGATIVE: 'negative',
            NONE: 'none',
            POSTERIZE: 'posterize',
            SEPIA: 'sepia',
            SOLARIZE: 'solarize',
            WHITEBOARD: 'whiteboard' // Android Only
        };
        _this.CAMERA_DIRECTION = {
            BACK: 'back',
            FRONT: 'front'
        };
        return _this;
    }
    CameraPreview.prototype.startCamera = function (options) { return cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    CameraPreview.prototype.switchCamera = function () { return cordova(this, "switchCamera", {}, arguments); };
    CameraPreview.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    CameraPreview.prototype.show = function () { return cordova(this, "show", {}, arguments); };
    CameraPreview.prototype.takePicture = function (options) { return cordova(this, "takePicture", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.takeSnapshot = function (options) { return cordova(this, "takeSnapshot", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setColorEffect = function (effect) { return cordova(this, "setColorEffect", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setZoom = function (zoom) { return cordova(this, "setZoom", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getMaxZoom = function () { return cordova(this, "getMaxZoom", {}, arguments); };
    CameraPreview.prototype.getZoom = function () { return cordova(this, "getZoom", {}, arguments); };
    CameraPreview.prototype.setPreviewSize = function (dimensions) { return cordova(this, "setPreviewSize", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getFocusMode = function () { return cordova(this, "getFocusMode", {}, arguments); };
    CameraPreview.prototype.setFocusMode = function (focusMode) { return cordova(this, "setFocusMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFocusModes = function () { return cordova(this, "getSupportedFocusModes", {}, arguments); };
    CameraPreview.prototype.getFlashMode = function () { return cordova(this, "getFlashMode", {}, arguments); };
    CameraPreview.prototype.setFlashMode = function (flashMode) { return cordova(this, "setFlashMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFlashModes = function () { return cordova(this, "getSupportedFlashModes", {}, arguments); };
    CameraPreview.prototype.getSupportedPictureSizes = function () { return cordova(this, "getSupportedPictureSizes", {}, arguments); };
    CameraPreview.prototype.getExposureMode = function () { return cordova(this, "getExposureMode", {}, arguments); };
    CameraPreview.prototype.getExposureModes = function () { return cordova(this, "getExposureModes", {}, arguments); };
    CameraPreview.prototype.setExposureMode = function (lock) { return cordova(this, "setExposureMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensation = function () { return cordova(this, "getExposureCompensation", {}, arguments); };
    CameraPreview.prototype.setExposureCompensation = function (exposureCompensation) { return cordova(this, "setExposureCompensation", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensationRange = function () { return cordova(this, "getExposureCompensationRange", {}, arguments); };
    CameraPreview.prototype.tapToFocus = function (xPoint, yPoint) { return cordova(this, "tapToFocus", {}, arguments); };
    CameraPreview.prototype.onBackButton = function () { return cordova(this, "onBackButton", {}, arguments); };
    CameraPreview.prototype.getHorizontalFOV = function () { return cordova(this, "getHorizontalFOV", {}, arguments); };
    CameraPreview.pluginName = "CameraPreview";
    CameraPreview.plugin = "cordova-plugin-camera-preview";
    CameraPreview.pluginRef = "CameraPreview";
    CameraPreview.repo = "https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview";
    CameraPreview.platforms = ["Android", "iOS"];
    CameraPreview = __decorate([
        Injectable()
    ], CameraPreview);
    return CameraPreview;
}(IonicNativePlugin));
export { CameraPreview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS1wcmV2aWV3L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9KckMsaUNBQWlCOzs7UUFDbEQsZ0JBQVUsR0FBRztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsWUFBWTtZQUN4QixrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ3BDLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFVBQVU7WUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlO1NBQy9CLENBQUM7UUFFRixtQkFBYSxHQUFHO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7UUFFRixnQkFBVSxHQUFHO1lBQ1gsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLFNBQVM7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlO1NBQy9CLENBQUM7UUFFRixrQkFBWSxHQUFHO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsWUFBWTtZQUN4QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFLFdBQVc7WUFDdEIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsWUFBWSxDQUFDLGVBQWU7U0FDekMsQ0FBQztRQUVGLHNCQUFnQixHQUFHO1lBQ2pCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDOzs7SUFXRixtQ0FBVyxhQUFDLE9BQTZCO0lBU3pDLGtDQUFVO0lBU1Ysb0NBQVk7SUFTWiw0QkFBSTtJQVNKLDRCQUFJO0lBYUosbUNBQVcsYUFBQyxPQUFxQztJQWNqRCxvQ0FBWSxhQUFDLE9BQXFDO0lBZWxELHNDQUFjLGFBQUMsTUFBYztJQWE3QiwrQkFBTyxhQUFDLElBQWE7SUFTckIsa0NBQVU7SUFTViwrQkFBTztJQWFQLHNDQUFjLGFBQUMsVUFBb0M7SUFTbkQsb0NBQVk7SUFhWixvQ0FBWSxhQUFDLFNBQWtCO0lBUy9CLDhDQUFzQjtJQVN0QixvQ0FBWTtJQWFaLG9DQUFZLGFBQUMsU0FBa0I7SUFTL0IsOENBQXNCO0lBU3RCLGdEQUF3QjtJQVN4Qix1Q0FBZTtJQVNmLHdDQUFnQjtJQWFoQix1Q0FBZSxhQUFDLElBQWE7SUFTN0IsK0NBQXVCO0lBYXZCLCtDQUF1QixhQUFDLG9CQUE2QjtJQVNyRCxvREFBNEI7SUFXNUIsa0NBQVUsYUFBQyxNQUFjLEVBQUUsTUFBYztJQVN6QyxvQ0FBWTtJQVNaLHdDQUFnQjs7Ozs7O0lBalZMLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYTt3QkFySjFCO0VBcUptQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVByZXZpZXdEaW1lbnNpb25zIHtcbiAgLyoqIFRoZSB3aWR0aCBvZiB0aGUgY2FtZXJhIHByZXZpZXcsIGRlZmF1bHQgdG8gd2luZG93LnNjcmVlbi53aWR0aCAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKiogVGhlIGhlaWdodCBvZiB0aGUgY2FtZXJhIHByZXZpZXcsIGRlZmF1bHQgdG8gd2luZG93LnNjcmVlbi5oZWlnaHQgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVByZXZpZXdPcHRpb25zIHtcbiAgLyoqIFRoZSBsZWZ0IGVkZ2UgaW4gcGl4ZWxzLCBkZWZhdWx0IDAgKi9cbiAgeD86IG51bWJlcjtcblxuICAvKiogVGhlIHRvcCBlZGdlIGluIHBpeGVscywgZGVmYXVsdCAwICovXG4gIHk/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSB3aWR0aCBpbiBwaXhlbHMsIGRlZmF1bHQgd2luZG93LnNjcmVlbi53aWR0aCAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKiogVGhlIGhlaWdodCBpbiBwaXhlbHMsIGRlZmF1bHQgd2luZG93LnNjcmVlbi5oZWlnaHQgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKiBDaG9vc2UgdGhlIGNhbWVyYSB0byB1c2UgJ2Zyb250JyBvciAncmVhcicsIGRlZmF1bHQgJ2Zyb250JyAqL1xuICBjYW1lcmE/OiBzdHJpbmc7XG5cbiAgLyoqIFRhcCB0byB0YWtlIGEgcGhvdG8sIGRlZmF1bHQgdHJ1ZSAocGljdHVyZSBxdWFsaXR5IGJ5IGRlZmF1bHQgOiA4NSkgKi9cbiAgdGFwUGhvdG8/OiBib29sZWFuO1xuXG4gIC8qKiBQcmV2aWV3IGJveCBkcmFnIGFjcm9zcyB0aGUgc2NyZWVuLCBkZWZhdWx0ICdmYWxzZScgKi9cbiAgcHJldmlld0RyYWc/OiBib29sZWFuO1xuXG4gIC8qKiBQcmV2aWV3IGJveCB0byB0aGUgYmFjayBvZiB0aGUgd2VidmlldyAodHJ1ZSA9PiBiYWNrLCBmYWxzZSA9PiBmcm9udCkgLCBkZWZhdWx0IGZhbHNlICovXG4gIHRvQmFjaz86IGJvb2xlYW47XG5cbiAgLyoqIEFscGhhIGNoYW5uZWwgb2YgdGhlIHByZXZpZXcgYm94LCBmbG9hdCwgWzAsMV0sIGRlZmF1bHQgMSAqL1xuICBhbHBoYT86IG51bWJlcjtcblxuICAvKiogVGFwIHRvIHNldCBzcGVjaWZpYyBmb2N1cyBwb2ludC4gTm90ZSwgdGhpcyBhc3N1bWVzIHRoZSBjYW1lcmEgaXMgZnVsbC1zY3JlZW4uIGRlZmF1bHQgZmFsc2UgKi9cbiAgdGFwVG9Gb2N1cz86IGJvb2xlYW47XG5cbiAgLyoqIE9uIEFuZHJvaWQgZGlzYWJsZSBhdXRvbWF0aWMgcm90YXRpb24gb2YgdGhlIGltYWdlIGFuZCBzdHJpcHBpbmcgb2YgRXhpdCBoZWFkZXIuIGRlZmF1bHQgZmFsc2UgKi9cbiAgZGlzYWJsZUV4aWZIZWFkZXJTdHJpcHBpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9ucyB7XG4gIC8qKiBUaGUgd2lkdGggaW4gcGl4ZWxzLCBkZWZhdWx0IDAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKiBUaGUgaGVpZ2h0IGluIHBpeGVscywgZGVmYXVsdCAwICovXG4gIGhlaWdodD86IG51bWJlcjtcbiAgLyoqIFRoZSBwaWN0dXJlIHF1YWxpdHksIDAgLSAxMDAsIGRlZmF1bHQgODUgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgQ2FtZXJhIFByZXZpZXdcbiAqIEBkZXNjcmlwdGlvblxuICogU2hvd2luZyBjYW1lcmEgcHJldmlldyBpbiBIVE1MXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcvY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcuZ2l0YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFByZXZpZXcgZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtcGx1Z2luLWNhbWVyYS1wcmV2aWV3L2NvcmRvdmEtcGx1Z2luLWNhbWVyYS1wcmV2aWV3KS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbWVyYVByZXZpZXcsIENhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9ucywgQ2FtZXJhUHJldmlld09wdGlvbnMsIENhbWVyYVByZXZpZXdEaW1lbnNpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEtcHJldmlldy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhUHJldmlldzogQ2FtZXJhUHJldmlldykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gY2FtZXJhIG9wdGlvbnMgKFNpemUgYW5kIGxvY2F0aW9uKS4gSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCB0aGUgcHJldmlldyB1c2VzIHRoZSByZWFyIGNhbWVyYSBhbmQgZGlzcGxheSB0aGUgcHJldmlldyBpbiB0aGUgYmFjayBvZiB0aGUgd2Vidmlld1xuICogY29uc3QgY2FtZXJhUHJldmlld09wdHM6IENhbWVyYVByZXZpZXdPcHRpb25zID0ge1xuICogICB4OiAwLFxuICogICB5OiAwLFxuICogICB3aWR0aDogd2luZG93LnNjcmVlbi53aWR0aCxcbiAqICAgaGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmhlaWdodCxcbiAqICAgY2FtZXJhOiAncmVhcicsXG4gKiAgIHRhcFBob3RvOiB0cnVlLFxuICogICBwcmV2aWV3RHJhZzogdHJ1ZSxcbiAqICAgdG9CYWNrOiB0cnVlLFxuICogICBhbHBoYTogMVxuICogfVxuICpcbiAqIC8vIHN0YXJ0IGNhbWVyYVxuICogdGhpcy5jYW1lcmFQcmV2aWV3LnN0YXJ0Q2FtZXJhKGNhbWVyYVByZXZpZXdPcHRzKS50aGVuKFxuICogICAocmVzKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2cocmVzKVxuICogICB9LFxuICogICAoZXJyKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coZXJyKVxuICogICB9KTtcbiAqXG4gKiAvLyBTZXQgdGhlIGhhbmRsZXIgdG8gcnVuIGV2ZXJ5IHRpbWUgd2UgdGFrZSBhIHBpY3R1cmVcbiAqIHRoaXMuY2FtZXJhUHJldmlldy5zZXRPblBpY3R1cmVUYWtlbkhhbmRsZXIoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICogICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzdWx0XG4gKiB9KTtcbiAqXG4gKlxuICogLy8gcGljdHVyZSBvcHRpb25zXG4gKiBjb25zdCBwaWN0dXJlT3B0czogQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zID0ge1xuICogICB3aWR0aDogMTI4MCxcbiAqICAgaGVpZ2h0OiAxMjgwLFxuICogICBxdWFsaXR5OiA4NVxuICogfVxuICpcbiAqIC8vIHRha2UgYSBwaWN0dXJlXG4gKiB0aGlzLmNhbWVyYVByZXZpZXcudGFrZVBpY3R1cmUodGhpcy5waWN0dXJlT3B0cykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XG4gKiAgIHRoaXMucGljdHVyZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGVycik7XG4gKiAgIHRoaXMucGljdHVyZSA9ICdhc3NldHMvaW1nL3Rlc3QuanBnJztcbiAqIH0pO1xuICpcbiAqIC8vIHRha2UgYSBzbmFwIHNob3RcbiAqIHRoaXMuY2FtZXJhUHJldmlldy50YWtlU25hcHNob3QodGhpcy5waWN0dXJlT3B0cykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XG4gKiAgIHRoaXMucGljdHVyZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGVycik7XG4gKiAgIHRoaXMucGljdHVyZSA9ICdhc3NldHMvaW1nL3Rlc3QuanBnJztcbiAqIH0pO1xuICpcbiAqXG4gKiAvLyBTd2l0Y2ggY2FtZXJhXG4gKiB0aGlzLmNhbWVyYVByZXZpZXcuc3dpdGNoQ2FtZXJhKCk7XG4gKlxuICogLy8gc2V0IGNvbG9yIGVmZmVjdCB0byBuZWdhdGl2ZVxuICogdGhpcy5jYW1lcmFQcmV2aWV3LnNldENvbG9yRWZmZWN0KCduZWdhdGl2ZScpO1xuICpcbiAqIC8vIFN0b3AgdGhlIGNhbWVyYSBwcmV2aWV3XG4gKiB0aGlzLmNhbWVyYVByZXZpZXcuc3RvcENhbWVyYSgpO1xuICpcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYW1lcmFQcmV2aWV3T3B0aW9uc1xuICogQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zXG4gKiBDYW1lcmFQcmV2aWV3RGltZW5zaW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbWVyYVByZXZpZXcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYW1lcmEtcHJldmlldycsXG4gIHBsdWdpblJlZjogJ0NhbWVyYVByZXZpZXcnLFxuICByZXBvOlxuICAgICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcvY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmFQcmV2aWV3IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBGT0NVU19NT0RFID0ge1xuICAgIEZJWEVEOiAnZml4ZWQnLFxuICAgIEFVVE86ICdhdXRvJyxcbiAgICBDT05USU5VT1VTOiAnY29udGludW91cycsIC8vIElPUyBPbmx5XG4gICAgQ09OVElOVU9VU19QSUNUVVJFOiAnY29udGludW91cy1waWN0dXJlJywgLy8gQW5kcm9pZCBPbmx5XG4gICAgQ09OVElOVU9VU19WSURFTzogJ2NvbnRpbnVvdXMtdmlkZW8nLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBFRE9GOiAnZWRvZicsIC8vIEFuZHJvaWQgT25seVxuICAgIElORklOSVRZOiAnaW5maW5pdHknLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBNQUNSTzogJ21hY3JvJyAvLyBBbmRyb2lkIE9ubHlcbiAgfTtcblxuICBFWFBPU1VSRV9NT0RFID0ge1xuICAgIExPQ0s6ICdsb2NrJywgLy8gSU9TIE9ubHlcbiAgICBBVVRPOiAnYXV0bycsIC8vIElPUyBPbmx5XG4gICAgQ09OVElOVU9VUzogJ2NvbnRpbnVvdXMnLFxuICAgIENVU1RPTTogJ2N1c3RvbSdcbiAgfTtcblxuICBGTEFTSF9NT0RFID0ge1xuICAgIE9GRjogJ29mZicsXG4gICAgT046ICdvbicsXG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFJFRF9FWUU6ICdyZWQtZXllJyxcbiAgICBUT1JDSDogJ3RvcmNoJyAvLyBBbmRyb2lkIE9ubHlcbiAgfTtcblxuICBDT0xPUl9FRkZFQ1QgPSB7XG4gICAgQVFVQTogJ2FxdWEnLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBCTEFDS0JPQVJEOiAnYmxhY2tib2FyZCcsIC8vIEFuZHJvaWQgT25seVxuICAgIE1PTk86ICdtb25vJyxcbiAgICBORUdBVElWRTogJ25lZ2F0aXZlJyxcbiAgICBOT05FOiAnbm9uZScsXG4gICAgUE9TVEVSSVpFOiAncG9zdGVyaXplJyxcbiAgICBTRVBJQTogJ3NlcGlhJyxcbiAgICBTT0xBUklaRTogJ3NvbGFyaXplJywgLy8gQW5kcm9pZCBPbmx5XG4gICAgV0hJVEVCT0FSRDogJ3doaXRlYm9hcmQnIC8vIEFuZHJvaWQgT25seVxuICB9O1xuXG4gIENBTUVSQV9ESVJFQ1RJT04gPSB7XG4gICAgQkFDSzogJ2JhY2snLFxuICAgIEZST05UOiAnZnJvbnQnXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgY2FtZXJhIHByZXZpZXcgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7Q2FtZXJhUHJldmlld09wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHN0YXJ0Q2FtZXJhKG9wdGlvbnM6IENhbWVyYVByZXZpZXdPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIGNhbWVyYSBwcmV2aWV3IGluc3RhbmNlLiAoaU9TICYgQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wQ2FtZXJhKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCBmcm9tIHRoZSByZWFyIGNhbWVyYSBhbmQgZnJvbnQgY2FtZXJhLCBpZiBhdmFpbGFibGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3dpdGNoQ2FtZXJhKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGNhbWVyYSBwcmV2aWV3IGJveC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoaWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNhbWVyYSBwcmV2aWV3IGJveC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2UgdGhlIHBpY3R1cmUgKGJhc2U2NClcbiAgICogQHBhcmFtIHtDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnN9IFtvcHRpb25zXSBzaXplIGFuZCBxdWFsaXR5IG9mIHRoZSBwaWN0dXJlIHRvIHRha2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHRha2VQaWN0dXJlKG9wdGlvbnM/OiBDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFRha2UgYSBzbmFwc2hvdCBvZiBwcmV2aWV3IHdpbmRvdyAoc2l6ZSBzcGVjaWZpZWQgaW4gc3RhcnRDYW1lcmEgb3B0aW9ucylcbiAgICogQHBhcmFtIHtDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnN9IFtvcHRpb25zXSBxdWFsaXR5IG9mIHRoZSBwaWN0dXJlIHRvIHRha2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHRha2VTbmFwc2hvdChvcHRpb25zPzogQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogU2V0IGNhbWVyYSBjb2xvciBlZmZlY3QuXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVmZmVjdCBuYW1lIDogJ25vbmUnIChpT1MgJiBBbmRyb2lkKSwgJ2FxdWEnIChBbmRyb2lkKSwgJ2JsYWNrYm9hcmQnIChBbmRyb2lkKSwgJ21vbm8nIChpT1MgJiBBbmRyb2lkKSwgJ25lZ2F0aXZlJyAoaU9TICYgQW5kcm9pZCksICdwb3N0ZXJpemUnIChpT1MgJiBBbmRyb2lkKSwgJ3NlcGlhJyAoaU9TICYgQW5kcm9pZCksICdzb2xhcml6ZScgKEFuZHJvaWQpIG9yICd3aGl0ZWJvYXJkJyAoQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHNldENvbG9yRWZmZWN0KGVmZmVjdDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB6b29tIChBbmRyb2lkKVxuICAgKiBAcGFyYW0gW3pvb21dIHtudW1iZXJ9IFpvb20gdmFsdWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHNldFpvb20oem9vbT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4aW11bSB6b29tIChBbmRyb2lkKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldE1heFpvb20oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgem9vbSAoQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRab29tKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJldmlldyBTaXplXG4gICAqIEBwYXJhbSB7Q2FtZXJhUHJldmlld0RpbWVuc2lvbnN9IFtkaW1lbnNpb25zXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc2V0UHJldmlld1NpemUoZGltZW5zaW9ucz86IENhbWVyYVByZXZpZXdEaW1lbnNpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZvY3VzIG1vZGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRGb2N1c01vZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmb2N1cyBtb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZm9jdXNNb2RlXSAnZml4ZWQnLCAnYXV0bycsICdjb250aW51b3VzLXBpY3R1cmUnLCAnY29udGludW91cy12aWRlbycgKGlPUyAmIEFuZHJvaWQpLCAnZWRvZicsICdpbmZpbml0eScsICdtYWNybycgKEFuZHJvaWQgT25seSlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHNldEZvY3VzTW9kZShmb2N1c01vZGU/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3VwcG9ydGVkIGZvY3VzIG1vZGVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkRm9jdXNNb2RlcygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZmxhc2ggbW9kZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZsYXNoTW9kZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZsYXNoIG1vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtmbGFzaE1vZGVdICdvZmYnIChpT1MgJiBBbmRyb2lkKSwgJ29uJyAoaU9TICYgQW5kcm9pZCksICdhdXRvJyAoaU9TICYgQW5kcm9pZCksICd0b3JjaCcgKEFuZHJvaWQpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzZXRGbGFzaE1vZGUoZmxhc2hNb2RlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBmbGFzaCBtb2Rlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN1cHBvcnRlZEZsYXNoTW9kZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBwaWN0dXJlIHNpemVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkUGljdHVyZVNpemVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBtb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RXhwb3N1cmVNb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBtb2Rlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEV4cG9zdXJlTW9kZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4cG9zdXJlIG1vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NrXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc2V0RXhwb3N1cmVNb2RlKGxvY2s/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXhwb3N1cmUgY29tcGVuc2F0aW9uIChBbmRyb2lkKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEV4cG9zdXJlQ29tcGVuc2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBleHBvc3VyZSBjb21wZW5zYXRpb24gKEFuZHJvaWQpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZXhwb3N1cmVDb21wZW5zYXRpb25dXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzZXRFeHBvc3VyZUNvbXBlbnNhdGlvbihleHBvc3VyZUNvbXBlbnNhdGlvbj86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBjb21wZW5zYXRpb24gcmFuZ2UgKEFuZHJvaWQpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RXhwb3N1cmVDb21wZW5zYXRpb25SYW5nZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3BlY2lmaWMgZm9jdXMgcG9pbnQuIE5vdGUsIHRoaXMgYXNzdW1lcyB0aGUgY2FtZXJhIGlzIGZ1bGwtc2NyZWVuLlxuICAgKiBAcGFyYW0ge251bWJlcn0geFBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5UG9pbnRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0YXBUb0ZvY3VzKHhQb2ludDogbnVtYmVyLCB5UG9pbnQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIGZvciB0aGUgYmFjayBldmVudCBmb3IgdGhlIHByZXZpZXdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBpZiBiYWNrIGJ1dHRvbiBwcmVzc2VkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uQmFja0J1dHRvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gaW4gdXNlIGRldmljZSBjYW1lcmEgZm92XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SG9yaXpvbnRhbEZPVigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19