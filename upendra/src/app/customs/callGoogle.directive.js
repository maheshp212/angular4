"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var callGoogleDirective = (function () {
    function callGoogleDirective() {
        this.confirmMessage = "Do you want to redirect?";
    }
    callGoogleDirective.prototype.appConfirm = function () {
        //location.href="https://google.com";
    };
    ;
    callGoogleDirective.prototype.callMe = function () {
        var conf = window.confirm(this.confirmMessage);
        if (conf) {
            this.appConfirm();
        }
    };
    return callGoogleDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], callGoogleDirective.prototype, "appConfirm", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], callGoogleDirective.prototype, "confirmMessage", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], callGoogleDirective.prototype, "callMe", null);
callGoogleDirective = __decorate([
    core_1.Directive({
        selector: "[appConfirm]",
    })
], callGoogleDirective);
exports.callGoogleDirective = callGoogleDirective;
//# sourceMappingURL=callGoogle.directive.js.map