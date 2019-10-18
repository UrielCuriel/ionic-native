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
var SSHConnect = /** @class */ (function (_super) {
    __extends(SSHConnect, _super);
    function SSHConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSHConnect.prototype.connect = function (user, password, host, port) { return cordova(this, "connect", {}, arguments); };
    SSHConnect.prototype.executeCommand = function (command) { return cordova(this, "executeCommand", {}, arguments); };
    SSHConnect.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    SSHConnect.pluginName = "SSHConnect";
    SSHConnect.plugin = "cordova-plugin-ssh-connect";
    SSHConnect.pluginRef = "cordova.plugins.sshConnect";
    SSHConnect.repo = "https://github.com/JosePerez27/cordova-plugin-ssh-connect";
    SSHConnect.platforms = ["Android"];
    SSHConnect = __decorate([
        Injectable()
    ], SSHConnect);
    return SSHConnect;
}(IonicNativePlugin));
export { SSHConnect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NzaC1jb25uZWN0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDeEMsOEJBQWlCOzs7O0lBVy9DLDRCQUFPLGFBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFVbEUsbUNBQWMsYUFBQyxPQUFlO0lBUzlCLCtCQUFVOzs7Ozs7SUE5QkMsVUFBVTtRQUR0QixVQUFVLEVBQUU7T0FDQSxVQUFVO3FCQXhDdkI7RUF3Q2dDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU1NIIENvbm5lY3RcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gdG8gbWFrZSBjb25uZWN0aW9ucyBhbmQgZXhlY3V0ZSBjb21tYW5kcyB0aHJvdWdoIFNTSFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU1NIQ29ubmVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3NoLWNvbm5lY3Qvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzc2hDb25uZWN0OiBTU0hDb25uZWN0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zc2hDb25uZWN0LmNvbm5lY3QoJ3VzZXInLCAncGFzc3dvcmQnLCAnaG9zdCcsIHBvcnQpXG4gKiAgIC50aGVuKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5zc2hDb25uZWN0LmV4ZWN1dGVDb21tYW5kKCdjb21tYW5kJylcbiAqICAgLnRoZW4ocmVzcCA9PiBjb25zb2xlLmxvZyhyZXNwKSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLnNzaENvbm5lY3QuZGlzY29ubmVjdCgpXG4gKiAgIC50aGVuKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU1NIQ29ubmVjdCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNzaC1jb25uZWN0JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnNzaENvbm5lY3QnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0pvc2VQZXJlejI3L2NvcmRvdmEtcGx1Z2luLXNzaC1jb25uZWN0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTU0hDb25uZWN0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBFc3RhYmxpc2ggYSByZW1vdGUgc3NoIGNvbm5lY3Rpb25cbiAgICogQHBhcmFtIHt1c2VyfSB1c2VyICBUaGUgcmVtb3RlIGhvc3QgdXNlclxuICAgKiBAcGFyYW0ge3Bhc3N3b3JkfSBwYXNzd29yZCAgVGhlIHJlbW90ZSBob3N0IHBhc3N3b3JkXG4gICAqIEBwYXJhbSB7aG9zdH0gaG9zdCAgVGhlIHJlbW90ZSBkZXZpY2UgdG8gY29ubmVjdFxuICAgKiBAcGFyYW0ge3BvcnR9IHBvcnQgIFRoZSBTU0ggcG9ydCBmb3IgY29ubmVjdGlvbiAodXN1YWxseSBwb3J0IDIyKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYW4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHN1Y2Nlc3Mgb2YgdGhlIGNvbm5lY3Rpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdCh1c2VyOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBhIGNvbW1hbmQgb24gdGhlIHJlbW90ZSBob3N0IGNvbm5lY3RlZCBieSBzc2hcbiAgICogQHBhcmFtIHtjb21tYW5kfSBjb21tYW5kICBUaGUgY29tbWFuZCB0byBleGVjdXRlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhbiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcHJpbnRlZCB0ZXh0IG9uIHRoZSByZW1vdGUgY29uc29sZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBleGVjdXRlQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0IHRoZSBTU0ggc2Vzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYW4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHN1Y2Nlc3Mgb2YgdGhlIGRpc2Nvbm5lY3Rpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19