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
var WebSocketServer = /** @class */ (function (_super) {
    __extends(WebSocketServer, _super);
    function WebSocketServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebSocketServer.prototype.getInterfaces = function () { return cordova(this, "getInterfaces", {}, arguments); };
    WebSocketServer.prototype.start = function (port, options) { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    WebSocketServer.prototype.onFunctionToObservable = function (fnName) {
        return new Observable(function (observer) {
            var id = window.cordova.plugins.wsserver[fnName](observer.next.bind(observer), observer.error.bind(observer));
            return function () { return window.cordova.plugins.wsserver.removeCallback(id); };
        });
    };
    /**
     * Watches for new messages
     * @return {Observable<WebSocketMessage>}
     */
    WebSocketServer.prototype.watchMessage = function () {
        return this.onFunctionToObservable('onMessage');
    };
    /**
     * Watches for new opened connections
     * @return {Observable<WebSocketConnection>}
     */
    WebSocketServer.prototype.watchOpen = function () {
        return this.onFunctionToObservable('onOpen');
    };
    /**
     * Watches for closed connections
     * @return {Observable<WebSocketClose>}
     */
    WebSocketServer.prototype.watchClose = function () {
        return this.onFunctionToObservable('onClose');
    };
    /**
     * Watches for any websocket failures
     * @return {Observable<WebSocketFailure>}
     */
    WebSocketServer.prototype.watchFailure = function () {
        return this.onFunctionToObservable('onFailure');
    };
    WebSocketServer.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebSocketServer.prototype.send = function (conn, msg) { return cordova(this, "send", {}, arguments); };
    WebSocketServer.prototype.close = function (conn, code, reason) { return cordova(this, "close", {}, arguments); };
    WebSocketServer.pluginName = "WebSocketServer";
    WebSocketServer.plugin = "cordova-plugin-websocket-server";
    WebSocketServer.pluginRef = "cordova.plugins.wsserver";
    WebSocketServer.repo = "https://github.com/becvert/cordova-plugin-websocket-server";
    WebSocketServer.platforms = ["Android", "iOS"];
    WebSocketServer = __decorate([
        Injectable()
    ], WebSocketServer);
    return WebSocketServer;
}(IonicNativePlugin));
export { WebSocketServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1zb2NrZXQtc2VydmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBNEdHLG1DQUFpQjs7OztJQU9wRCx1Q0FBYTtJQWNiLCtCQUFLLGFBQUMsSUFBWSxFQUFFLE9BQXlCO0lBSXJDLGdEQUFzQixHQUE5QixVQUFrQyxNQUFjO1FBQzlDLE9BQU8sSUFBSSxVQUFVLENBQUksVUFBQSxRQUFRO1lBQy9CLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzVCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM5QixDQUFDO1lBRUYsT0FBTyxjQUFNLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1DQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU9ELDhCQUFJO0lBV0osOEJBQUksYUFBQyxJQUF5QixFQUFFLEdBQVc7SUFZM0MsK0JBQUssYUFBQyxJQUF5QixFQUFFLElBQVksRUFBRSxNQUFjOzs7Ozs7SUFoR2xELGVBQWU7UUFEM0IsVUFBVSxFQUFFO09BQ0EsZUFBZTswQkE5RzVCO0VBOEdxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldEludGVyZmFjZXMge1xuICBba2V5OiBzdHJpbmddOiBXZWJTb2NrZXRJbnRlcmZhY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0SW50ZXJmYWNlIHtcbiAgaXB2NEFkZHJlc3Nlczogc3RyaW5nW107XG4gIGlwdjZBZGRyZXNzZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldE9wdGlvbnMge1xuICBvcmlnaW5zPzogc3RyaW5nW107XG4gIHByb3RvY29scz86IHN0cmluZ1tdO1xuICB0Y3BOb0RlbGF5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRJZGVudGlmaWVyIHtcbiAgdXVpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldFNlcnZlckRldGFpbHMge1xuICBhZGRyOiBzdHJpbmc7XG4gIHBvcnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRGYWlsdXJlIGV4dGVuZHMgV2ViU29ja2V0U2VydmVyRGV0YWlscyB7XG4gIHJlYXNvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldE1lc3NhZ2Uge1xuICBjb25uOiBXZWJTb2NrZXRDb25uZWN0aW9uO1xuICBtc2c6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRDbG9zZSB7XG4gIGNvbm46IFdlYlNvY2tldENvbm5lY3Rpb247XG4gIGNvZGU6IG51bWJlcjtcbiAgcmVhc29uOiBzdHJpbmc7XG4gIHdhc0NsZWFuOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldENvbm5lY3Rpb24gZXh0ZW5kcyBXZWJTb2NrZXRJZGVudGlmaWVyIHtcbiAgcmVtb3RlQXR0cjogc3RyaW5nO1xuICBzdGF0ZTogJ29wZW4nIHwgJ2Nsb3NlZCc7XG4gIGh0dHBGaWVsZHM6IEh0dHBGaWVsZHM7XG4gIHJlc291cmNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cEZpZWxkcyB7XG4gICdBY2NlcHQtRW5jb2RpbmcnOiBzdHJpbmc7XG4gICdBY2NlcHQtTGFuZ3VhZ2UnOiBzdHJpbmc7XG4gICdDYWNoZS1Db250cm9sJzogc3RyaW5nO1xuICBDb25uZWN0aW9uOiBzdHJpbmc7XG4gIEhvc3Q6IHN0cmluZztcbiAgT3JpZ2luOiBzdHJpbmc7XG4gIFByYWdtYTogc3RyaW5nO1xuICAnU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zJzogc3RyaW5nO1xuICAnU2VjLVdlYlNvY2tldC1LZXknOiBzdHJpbmc7XG4gICdTZWMtV2ViU29ja2V0LVZlcnNpb24nOiBzdHJpbmc7XG4gIFVwZ3JhZGU6IHN0cmluZztcbiAgJ1VzZXItQWdlbnQnOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgV2ViU29ja2V0IFNlcnZlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJ1biBhIHNpbmdsZSwgbGlnaHR3ZWlnaHQsIGJhcmVib25lIFdlYlNvY2tldCBTZXJ2ZXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJTb2NrZXRTZXJ2ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3dlYi1zb2NrZXQtc2VydmVyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdzc2VydmVyOiBXZWJTb2NrZXRTZXJ2ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIHN0YXJ0IHdlYnNvY2tldCBzZXJ2ZXJcbiAqIHRoaXMud3NzZXJ2ZXIuc3RhcnQoODg4OCwge30pLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6IHNlcnZlciA9PiBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uICR7c2VydmVyLmFkZHJ9OiR7c2VydmVyLnBvcnR9YCksXG4gKiAgIGVycm9yOiBlcnJvciA9PiBjb25zb2xlLmxvZyhgVW5leHBlY3RlZCBlcnJvcmAsIGVycm9yKTtcbiAqIH0pO1xuICpcbiAqIC8vIHdhdGNoIGZvciBhbnkgbWVzc2FnZXNcbiAqIHRoaXMud3NzZXJ2ZXIud2F0Y2hNZXNzYWdlKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBtZXNzYWdlICR7cmVzdWx0Lm1zZ30gZnJvbSAke3Jlc3VsdC5jb25uLnV1aWR9YCk7XG4gKiB9KTtcbiAqXG4gKiAvLyBzZW5kIG1lc3NhZ2UgdG8gY29ubmVjdGlvbiB3aXRoIHNwZWNpZmllZCB1dWlkXG4gKiB0aGlzLndzc2VydmVyLnNlbmQoeyB1dWlkOiAnOGU3YzRmNDgtZGU2OC00YjZmLThmY2EtMTA2N2EzNTM5NjhkJyB9LCAnSGVsbG8gV29ybGQnKTtcbiAqXG4gKiAvLyBzdG9wIHdlYnNvY2tldCBzZXJ2ZXJcbiAqIHRoaXMud3NzZXJ2ZXIuc3RvcCgpLnRoZW4oc2VydmVyID0+IHtcbiAqICAgY29uc29sZS5sb2coYFN0b3AgbGlzdGVuaW5nIG9uICR7c2VydmVyLmFkZHJ9OiR7c2VydmVyLnBvcnR9YCk7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJTb2NrZXRTZXJ2ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJzb2NrZXQtc2VydmVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLndzc2VydmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iZWN2ZXJ0L2NvcmRvdmEtcGx1Z2luLXdlYnNvY2tldC1zZXJ2ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRTZXJ2ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGlzIGRldmljZSdzIGludGVyZmFjZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTxXZWJTb2NrZXRJbnRlcmZhY2VzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW50ZXJmYWNlcygpOiBQcm9taXNlPFdlYlNvY2tldEludGVyZmFjZXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgd2Vic29ja2V0IHNlcnZlclxuICAgKiBAcGFyYW0gcG9ydCB7bnVtYmVyfSBMb2NhbCBwb3J0IG9uIHdoaWNoIHRoZSBzZXJ2aWNlIHJ1bnMuICgwIG1lYW5zIGFueSBmcmVlIHBvcnQpXG4gICAqIEBwYXJhbSBvcHRpb25zIHtXZWJTb2NrZXRPcHRpb25zfSBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHdlYnNvY2tldFxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+fSBSZXR1cm5zIE9ic2VydmFibGUgd2hlcmUgYWxsIGdlbmVyaWMgZXJyb3IgY2FuIGJlIGNhdGNoZWQgKG1vc3RseSBKU09ORXhjZXB0aW9ucylcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wJ1xuICB9KVxuICBzdGFydChwb3J0OiBudW1iZXIsIG9wdGlvbnM6IFdlYlNvY2tldE9wdGlvbnMpOiBPYnNlcnZhYmxlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIG9uRnVuY3Rpb25Ub09ic2VydmFibGU8VD4oZm5OYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4ob2JzZXJ2ZXIgPT4ge1xuICAgICAgY29uc3QgaWQgPSB3aW5kb3cuY29yZG92YS5wbHVnaW5zLndzc2VydmVyW2ZuTmFtZV0oXG4gICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgIG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNvcmRvdmEucGx1Z2lucy53c3NlcnZlci5yZW1vdmVDYWxsYmFjayhpZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2hlcyBmb3IgbmV3IG1lc3NhZ2VzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8V2ViU29ja2V0TWVzc2FnZT59XG4gICAqL1xuICB3YXRjaE1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRNZXNzYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMub25GdW5jdGlvblRvT2JzZXJ2YWJsZSgnb25NZXNzYWdlJyk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2hlcyBmb3IgbmV3IG9wZW5lZCBjb25uZWN0aW9uc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFdlYlNvY2tldENvbm5lY3Rpb24+fVxuICAgKi9cbiAgd2F0Y2hPcGVuKCk6IE9ic2VydmFibGU8V2ViU29ja2V0Q29ubmVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uT3BlbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgZm9yIGNsb3NlZCBjb25uZWN0aW9uc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFdlYlNvY2tldENsb3NlPn1cbiAgICovXG4gIHdhdGNoQ2xvc2UoKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRDbG9zZT4ge1xuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uQ2xvc2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGZvciBhbnkgd2Vic29ja2V0IGZhaWx1cmVzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8V2ViU29ja2V0RmFpbHVyZT59XG4gICAqL1xuICB3YXRjaEZhaWx1cmUoKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRGYWlsdXJlPiB7XG4gICAgcmV0dXJuIHRoaXMub25GdW5jdGlvblRvT2JzZXJ2YWJsZSgnb25GYWlsdXJlJyk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCB3ZWJzb2NrZXQgc2VydmVyIGFuZCBjbG9zZXMgYWxsIGNvbm5lY3Rpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8V2ViU29ja2V0U2VydmVyRGV0YWlscz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgTWVzc2FnZSB0byBhIGNvbm5lY3RlZCBkZXZpY2VcbiAgICogQHBhcmFtIGNvbm4ge1dlYlNvY2tldElkZW50aWZpZXJ9IENvbm5lY3Rpb24gdG8gc2VuZCBtZXNzYWdlIHRvXG4gICAqIEBwYXJhbSBtc2cge3N0cmluZ30gTWVzc2FnZSB0byBzZW5kXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmQoY29ubjogV2ViU29ja2V0SWRlbnRpZmllciwgbXNnOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2Ugc3BlY2lmaWMgY29ubmVjdGlvbiB1c2luZyB1dWlkXG4gICAqIEBwYXJhbSBjb25uIHtXZWJTb2NrZXRJZGVudGlmaWVyfSBDb25uZWN0aW9uIHRvIGNsb3NlXG4gICAqIEBwYXJhbSBjb2RlIHtudW1iZXJ9IENsb3NlIGNvZGUsIGRldGVybWluZXMgaWYgaXQgd2FzIGNsZWFuXG4gICAqIEBwYXJhbSByZWFzb24ge3N0cmluZ30gUmVhc29uIGZvciBjbG9zaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsb3NlKGNvbm46IFdlYlNvY2tldElkZW50aWZpZXIsIGNvZGU6IG51bWJlciwgcmVhc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==