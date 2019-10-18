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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, instanceAvailability, cordovaInstance, checkAvailability } from '@ionic-native/core';
var FileTransfer = /** @class */ (function (_super) {
    __extends(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    FileTransfer.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransfer.pluginName = "FileTransfer";
    FileTransfer.plugin = "cordova-plugin-file-transfer";
    FileTransfer.pluginRef = "FileTransfer";
    FileTransfer.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransfer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    FileTransfer = __decorate([
        Injectable()
    ], FileTransfer);
    return FileTransfer;
}(IonicNativePlugin));
export { FileTransfer };
var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if (checkAvailability(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return cordovaInstance(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return cordovaInstance(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return cordovaInstance(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    FileTransferObject = __decorate([
        __metadata("design:paramtypes", [])
    ], FileTransferObject);
    return FileTransferObject;
}());
export { FileTransferObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sNERBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sb0JBQW9CLENBQUM7O0lBeUxNLGdDQUFpQjs7O1FBQ2pEOzs7Ozs7Ozs7V0FTRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLGtCQUFrQixFQUFFLENBQUM7WUFDckIsZUFBZSxFQUFFLENBQUM7WUFDbEIsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLENBQUM7WUFDWixnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BCLENBQUM7OztJQUVGOzs7T0FHRztJQUNILDZCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUF6QlUsWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQWhNekI7RUFnTWtDLGlCQUFpQjtTQUF0QyxZQUFZOztJQXNDdkI7UUFDRSxJQUNFLGlCQUFpQixDQUNmLFlBQVksQ0FBQyxZQUFZLEVBQUUsRUFDM0IsSUFBSSxFQUNKLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FDN0IsS0FBSyxJQUFJLEVBQ1Y7WUFDQSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQWVELG1DQUFNLGFBQ0osT0FBZSxFQUNmLEdBQVcsRUFDWCxPQUEyQixFQUMzQixhQUF1QjtJQWtCekIscUNBQVEsYUFDTixNQUFjLEVBQ2QsTUFBYyxFQUNkLGFBQXVCLEVBQ3ZCLE9BQThCO0lBVWhDLHVDQUFVLGFBQUMsUUFBdUM7OztzREFBUTtnQkFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2FBQzVDOzs7SUFTRCxrQ0FBSzs7O0lBM0VNLGtCQUFrQjs7T0FBbEIsa0JBQWtCOzZCQW5PL0I7O1NBbU9hLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHlcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50LlxuICAgKiBEZWZhdWx0cyB0byAnZmlsZScuXG4gICAqL1xuICBmaWxlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsZSBuYW1lIHRvIHVzZSB3aGVuIHNhdmluZyB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuICAgKiBEZWZhdWx0cyB0byAnaW1hZ2UuanBnJy5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIC0gZWl0aGVyIFBVVCBvciBQT1NULlxuICAgKiBEZWZhdWx0cyB0byBQT1NULlxuICAgKi9cbiAgaHR0cE1ldGhvZD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YSB0byB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvIGltYWdlL2pwZWcuXG4gICAqL1xuICBtaW1lVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2Ygb3B0aW9uYWwga2V5L3ZhbHVlIHBhaXJzIHRvIHBhc3MgaW4gdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHBhcmFtcz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVwbG9hZCB0aGUgZGF0YSBpbiBjaHVua2VkIHN0cmVhbWluZyBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgY2h1bmtlZE1vZGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIG1hcCBvZiBoZWFkZXIgbmFtZS9oZWFkZXIgdmFsdWVzLiBVc2UgYW4gYXJyYXkgdG8gc3BlY2lmeSBtb3JlXG4gICAqIHRoYW4gb25lIHZhbHVlLiBPbiBpT1MsIEZpcmVPUywgYW5kIEFuZHJvaWQsIGlmIGEgaGVhZGVyIG5hbWVkXG4gICAqIENvbnRlbnQtVHlwZSBpcyBwcmVzZW50LCBtdWx0aXBhcnQgZm9ybSBkYXRhIHdpbGwgTk9UIGJlIHVzZWQuXG4gICAqL1xuICBoZWFkZXJzPzogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZFJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHNlbnQgdG8gdGhlIHNlcnZlciBhcyBwYXJ0IG9mIHRoZSB1cGxvYWQuXG4gICAqL1xuICBieXRlc1NlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2VDb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZXNwb25zZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVHJhbnNmZXJFcnJvciB7XG4gIC8qKlxuICAgKiBPbmUgb2YgdGhlIHByZWRlZmluZWQgZXJyb3IgY29kZXMgbGlzdGVkIGJlbG93LlxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHNvdXJjZS5cbiAgICovXG4gIHNvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHRhcmdldC5cbiAgICovXG4gIHRhcmdldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIVFRQIHN0YXR1cyBjb2RlLiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2VcbiAgICogY29kZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBIVFRQIGNvbm5lY3Rpb24uXG4gICAqL1xuICBodHRwX3N0YXR1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zZSBib2R5LiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFaXRoZXIgZS5nZXRNZXNzYWdlIG9yIGUudG9TdHJpbmcuXG4gICAqL1xuICBleGNlcHRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBGaWxlIFRyYW5zZmVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHVwbG9hZCBhbmQgZG93bmxvYWQgZmlsZXMuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIFRoaXMgcGx1Z2luIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgWEhSMlxuICogaHR0cHM6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvYmxvZy8yMDE3LzEwLzE4L2Zyb20tZmlsZXRyYW5zZmVyLXRvLXhocjIuaHRtbFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVRyYW5zZmVyLCBGaWxlVXBsb2FkT3B0aW9ucywgRmlsZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXRyYW5zZmVyL25neCc7XG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyOiBGaWxlVHJhbnNmZXIsIHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3QgZmlsZVRyYW5zZmVyOiBGaWxlVHJhbnNmZXJPYmplY3QgPSB0aGlzLnRyYW5zZmVyLmNyZWF0ZSgpO1xuICpcbiAqIC8vIFVwbG9hZCBhIGZpbGU6XG4gKiBmaWxlVHJhbnNmZXIudXBsb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gRG93bmxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLmRvd25sb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gQWJvcnQgYWN0aXZlIHRyYW5zZmVyOlxuICogZmlsZVRyYW5zZmVyLmFib3J0KCk7XG4gKlxuICogLy8gZnVsbCBleGFtcGxlXG4gKiB1cGxvYWQoKSB7XG4gKiAgIGxldCBvcHRpb25zOiBGaWxlVXBsb2FkT3B0aW9ucyA9IHtcbiAqICAgICAgZmlsZUtleTogJ2ZpbGUnLFxuICogICAgICBmaWxlTmFtZTogJ25hbWUuanBnJyxcbiAqICAgICAgaGVhZGVyczoge31cbiAqICAgICAgLi4uLi5cbiAqICAgfVxuICpcbiAqICAgZmlsZVRyYW5zZmVyLnVwbG9hZCgnPGZpbGUgcGF0aD4nLCAnPGFwaSBlbmRwb2ludD4nLCBvcHRpb25zKVxuICogICAgLnRoZW4oKGRhdGEpID0+IHtcbiAqICAgICAgLy8gc3VjY2Vzc1xuICogICAgfSwgKGVycikgPT4ge1xuICogICAgICAvLyBlcnJvclxuICogICAgfSlcbiAqIH1cbiAqXG4gKiBkb3dubG9hZCgpIHtcbiAqICAgY29uc3QgdXJsID0gJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb20vZmlsZS5wZGYnO1xuICogICBmaWxlVHJhbnNmZXIuZG93bmxvYWQodXJsLCB0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSArICdmaWxlLnBkZicpLnRoZW4oKGVudHJ5KSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkIGNvbXBsZXRlOiAnICsgZW50cnkudG9VUkwoKSk7XG4gKiAgIH0sIChlcnJvcikgPT4ge1xuICogICAgIC8vIGhhbmRsZSBlcnJvclxuICogICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqXG4gKiBUbyBzdG9yZSBmaWxlcyBpbiBhIGRpZmZlcmVudC9wdWJsaWNseSBhY2Nlc3NpYmxlIGRpcmVjdG9yeSwgcGxlYXNlIHJlZmVyIHRvIHRoZSBmb2xsb3dpbmcgbGlua1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlI3doZXJlLXRvLXN0b3JlLWZpbGVzXG4gKlxuICogQGludGVyZmFjZXNcbiAqIEZpbGVVcGxvYWRPcHRpb25zXG4gKiBGaWxlVXBsb2FkUmVzdWx0XG4gKiBGaWxlVHJhbnNmZXJFcnJvclxuICogQGNsYXNzZXNcbiAqIEZpbGVUcmFuc2Zlck9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2ZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGxhdGZvcm1zOiBbXG4gICAgJ0FtYXpvbiBGaXJlIE9TJyxcbiAgICAnQW5kcm9pZCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdpT1MnLFxuICAgICdVYnVudHUnLFxuICAgICdXaW5kb3dzJyxcbiAgICAnV2luZG93cyBQaG9uZSdcbiAgXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFcnJvciBjb2RlIHJlamVjdGVkIGZyb20gdXBsb2FkIHdpdGggRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogRGVmaW5lZCBpbiBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcbiAgICogICAgICBJTlZBTElEX1VSTF9FUlI6IDIsICAgICBSZXR1cm4gd2hlbiB1cmwgd2FzIGludmFsaWRcbiAgICogICAgICBDT05ORUNUSU9OX0VSUjogMywgICAgICBSZXR1cm4gb24gY29ubmVjdGlvbiBlcnJvclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xuICAgKiAgICAgIE5PVF9NT0RJRklFRF9FUlI6IDUgICAgIFJldHVybiBvbiAnMzA0IE5vdCBNb2RpZmllZCcgSFRUUCByZXNwb25zZVxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKi9cbiAgRmlsZVRyYW5zZmVyRXJyb3JDb2RlID0ge1xuICAgIEZJTEVfTk9UX0ZPVU5EX0VSUjogMSxcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXG4gICAgQ09OTkVDVElPTl9FUlI6IDMsXG4gICAgQUJPUlRfRVJSOiA0LFxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDVcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBGaWxlVHJhbnNmZXIgb2JqZWN0XG4gICAqIEByZXR1cm4ge0ZpbGVUcmFuc2Zlck9iamVjdH1cbiAgICovXG4gIGNyZWF0ZSgpOiBGaWxlVHJhbnNmZXJPYmplY3Qge1xuICAgIHJldHVybiBuZXcgRmlsZVRyYW5zZmVyT2JqZWN0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2Zlcidcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoXG4gICAgICBjaGVja0F2YWlsYWJpbGl0eShcbiAgICAgICAgRmlsZVRyYW5zZmVyLmdldFBsdWdpblJlZigpLFxuICAgICAgICBudWxsLFxuICAgICAgICBGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luTmFtZSgpXG4gICAgICApID09PSB0cnVlXG4gICAgKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoRmlsZVRyYW5zZmVyLmdldFBsdWdpbigpKSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGZpbGUgdG8gYSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlVXJsICBGaWxlc3lzdGVtIFVSTCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZSBvciBhIGRhdGEgVVJJLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgY2FuIGFsc28gYmUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICBVUkwgb2YgdGhlIHNlcnZlciB0byByZWNlaXZlIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge0ZpbGVVcGxvYWRPcHRpb25zfSBbb3B0aW9uc10gIE9wdGlvbmFsIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBzaW5jZSBBbmRyb2lkIHJlamVjdHMgc2VsZi1zaWduZWQgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gdXNlLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVVcGxvYWRSZXN1bHQgYW5kIHJlamVjdHMgd2l0aCBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIHVwbG9hZChcbiAgICBmaWxlVXJsOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEZpbGVVcGxvYWRPcHRpb25zLFxuICAgIHRydXN0QWxsSG9zdHM/OiBib29sZWFuXG4gICk6IFByb21pc2U8RmlsZVVwbG9hZFJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb3dubG9hZHMgYSBmaWxlIGZyb20gc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlICBVUkwgb2YgdGhlIHNlcnZlciB0byBkb3dubG9hZCB0aGUgZmlsZSwgYXMgZW5jb2RlZCBieSBlbmNvZGVVUkkoKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldCAgRmlsZXN5c3RlbSB1cmwgcmVwcmVzZW50aW5nIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2UuIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdGhpcyBjYW4gYWxzbyBiZSB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2UuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIEFuZHJvaWQgcmVqZWN0cyBzZWxmLXNpZ25lZCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiB1c2UuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIGFuZCBpT1MuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbT3B0aW9uYWxdIHBhcmFtZXRlcnMsIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGhlYWRlcnMgKHN1Y2ggYXMgQXV0aG9yaXphdGlvbiAoQmFzaWMgQXV0aGVudGljYXRpb24pLCBldGMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgRmlsZUVudHJ5IG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIGRvd25sb2FkKFxuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHRydXN0QWxsSG9zdHM/OiBib29sZWFuLFxuICAgIG9wdGlvbnM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBsaXN0ZW5lciB0aGF0IGdldHMgY2FsbGVkIHdoZW5ldmVyIGEgbmV3IGNodW5rIG9mIGRhdGEgaXMgdHJhbnNmZXJyZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIExpc3RlbmVyIHRoYXQgdGFrZXMgYSBwcm9ncmVzcyBldmVudC5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgc3luYzogdHJ1ZSB9KVxuICBvblByb2dyZXNzKGxpc3RlbmVyOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9ucHJvZ3Jlc3MgPSBsaXN0ZW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBYm9ydHMgYW4gaW4tcHJvZ3Jlc3MgdHJhbnNmZXIuIFRoZSBvbmVycm9yIGNhbGxiYWNrIGlzIHBhc3NlZCBhIEZpbGVUcmFuc2ZlckVycm9yXG4gICAqIG9iamVjdCB3aGljaCBoYXMgYW4gZXJyb3IgY29kZSBvZiBGaWxlVHJhbnNmZXJFcnJvci5BQk9SVF9FUlIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFib3J0KCk6IHZvaWQge1xuICB9XG59XG4iXX0=