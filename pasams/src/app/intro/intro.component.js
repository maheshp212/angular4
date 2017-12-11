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
var router_1 = require("@angular/router");
var IntroComponent = (function () {
    function IntroComponent(router) {
        this.router = router;
        this.name = 'Angular Intro';
        this.num = 23;
        this.gender = true;
        this.obj = { key: 'value', key1: 'varlue2' };
        this.fruits = ['banana', 'kiwi', 'litchi'];
        this.one = 12;
        this.two = 56;
    }
    IntroComponent.prototype.second = function () {
        alert('this is intro page');
    };
    IntroComponent.prototype.login = function () {
        alert('you have entered username :: ' + this.uname + ', password ::' + this.pwd);
        this.router.navigate(['/child']);
    };
    return IntroComponent;
}());
IntroComponent = __decorate([
    core_1.Component({
        selector: 'my-intro',
        //template: `<h1>Hello {{name}}</h1>`,
        templateUrl: './intro.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], IntroComponent);
exports.IntroComponent = IntroComponent;
//# sourceMappingURL=intro.component.js.map