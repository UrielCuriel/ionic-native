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
var WebServer = /** @class */ (function (_super) {
    __extends(WebServer, _super);
    function WebServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServer.prototype.start = function (port) { return cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServer.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebServer.prototype.onRequest = function () { return cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServer.prototype.sendResponse = function (requestId, responseObject) { return cordova(this, "sendResponse", {}, arguments); };
    WebServer.pluginName = "WebServer";
    WebServer.plugin = "cordova-plugin-webserver";
    WebServer.pluginRef = "window.webserver";
    WebServer.repo = "https://github.com/bykof/cordova-plugin-webserver.git";
    WebServer.platforms = ["Android", "iOS"];
    WebServer = __decorate([
        Injectable()
    ], WebServer);
    return WebServer;
}(IonicNativePlugin));
export { WebServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1zZXJ2ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUErREgsNkJBQWlCOzs7O0lBUzlDLHlCQUFLLGFBQUMsSUFBYTtJQVFuQix3QkFBSTtJQWFKLDZCQUFTO0lBV1QsZ0NBQVksYUFBQyxTQUFpQixFQUFFLGNBQXdCOzs7Ozs7SUF6QzdDLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkFqRXRCO0VBaUUrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlIHtcbiAgc3RhdHVzOiBudW1iZXI7XG4gIGJvZHk/OiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0IHtcbiAgcmVxdWVzdElkOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgaGVhZGVyczogc3RyaW5nO1xuICBtZXRob2Q6ICdQT1NUJyB8ICdHRVQnIHwgJ1BVVCcgfCAnUEFUQ0gnIHwgJ0RFTEVURSc7XG4gIHBhdGg6IHN0cmluZztcbiAgcXVlcnk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBXZWIgU2VydmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc3RhcnQgYSBsb2NhbCBkeW5hbWljIGNvbnRlbnQgd2ViIHNlcnZlciBmb3IgYW5kcm9pZCBhbmQgaU9TIGRldmljZXMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJTZXJ2ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3dlYi1zZXJ2ZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJTZXJ2ZXI6IFdlYlNlcnZlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy53ZWJTZXJ2ZXIub25SZXF1ZXN0KCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICogICBjb25zb2xlLmxvZyhkYXRhKTtcbiAqICAgY29uc3QgcmVzOiBSZXNwb25zZSA9IHtcbiAqICAgICBzdGF0dXM6IDIwMCxcbiAqICAgICBib2R5OiAnJyxcbiAqICAgICBoZWFkZXJzOiB7XG4gKiAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCdcbiAqICAgICB9XG4gKiAgIH07XG4gKlxuICogICB0aGlzLndlYlNlcnZlci5zZW5kUmVzcG9uc2UoZGF0YS5yZXF1ZXN0SWQsIHJlcylcbiAqICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqIH0pO1xuICpcbiAqIHRoaXMud2ViU2VydmVyLnN0YXJ0KDgwKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogUmVzcG9uc2VcbiAqIFJlcXVlc3RcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJTZXJ2ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJzZXJ2ZXInLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cud2Vic2VydmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ieWtvZi9jb3Jkb3ZhLXBsdWdpbi13ZWJzZXJ2ZXIuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViU2VydmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHN0YXJ0IHlvdXIgd2Vic2VydmVyLlxuICAgKiBAcGFyYW0gcG9ydCB7bnVtYmVyfSBQb3J0IG51bWJlciAoZGVmYXVsdCB0byA4MDgwKVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgc3RhcnQocG9ydD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgc3RvcCB5b3VyIHdlYnNlcnZlci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBzdHJlYW1zIEhUVFAgcmVxdWVzdHMgdG8gYW4gb2JzZXJ2ZXIuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8UmVxdWVzdD59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0byByZXNvbHZlIGFzIGEgUmVxdWVzdCBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcCdcbiAgfSlcbiAgb25SZXF1ZXN0KCk6IE9ic2VydmFibGU8UmVxdWVzdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBzZW5kcyBhIHJlc3BvbnNlIHRvIGEgcmVxdWVzdC5cbiAgICogQHBhcmFtIHJlcXVlc3RJZCB7c3RyaW5nfSBSZXF1ZXN0IElEIHRvIHJlc3BvbmQgdG9cbiAgICogQHBhcmFtIHJlc3BvbnNlT2JqZWN0IHtSZXNwb25zZX0gUmVzcG9uc2Ugb2JqZWN0XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRSZXNwb25zZShyZXF1ZXN0SWQ6IHN0cmluZywgcmVzcG9uc2VPYmplY3Q6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19