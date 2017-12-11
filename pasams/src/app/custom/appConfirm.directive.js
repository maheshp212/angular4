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
var appConfirmDirective = (function () {
    function appConfirmDirective() {
        this.confirmMessage = 'do you want to call?';
    }
    //@ -- decorator
    appConfirmDirective.prototype.appConfirm = function () { };
    ;
    appConfirmDirective.prototype.eventTrigger = function () {
        //var txt = 'do you want to call?';
        var r = confirm(this.confirmMessage);
        if (r == true) {
            // this.appConfirm();
            this.alerting();
        }
    };
    appConfirmDirective.prototype.alerting = function () {
        alert('this is the independent logic');
    };
    return appConfirmDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], appConfirmDirective.prototype, "appConfirm", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], appConfirmDirective.prototype, "confirmMessage", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], appConfirmDirective.prototype, "eventTrigger", null);
appConfirmDirective = __decorate([
    core_1.Directive({
        selector: '[appConfirm]'
    })
], appConfirmDirective);
exports.appConfirmDirective = appConfirmDirective;
//# sourceMappingURL=appConfirm.directive.js.map