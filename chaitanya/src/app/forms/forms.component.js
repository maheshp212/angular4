"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FormsComponent = (function () {
    function FormsComponent() {
        this.count = 0;
        this.inst = "QshOrE TechNolGIes";
        this.age = 23;
        this.today = new Date();
        this.callMeText = "Intial statte";
        this.dropDown = [
            { pin: 19341, state: "PA" },
            { pin: 78954, state: "MO" }
        ];
    }
    FormsComponent.prototype.callMe = function () {
        this.count++;
        console.log('count ::' + this.count);
        this.callMeText = "asdfasdf";
    };
    FormsComponent.prototype.submitForm = function () {
        alert('jasdf');
        console.log('this is intiated');
        console.log('name :: ' + this.name);
        console.log('pwd :: ' + this.pwd);
        console.log('tel :: ' + this.pwd);
        console.log('time :: ' + this.time);
    };
    return FormsComponent;
}());
FormsComponent = __decorate([
    core_1.Component({
        selector: 'my-forms',
        templateUrl: "./forms.component.html",
    })
], FormsComponent);
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map