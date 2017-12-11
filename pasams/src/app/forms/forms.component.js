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
    }
    FormsComponent.prototype.callMe = function () {
        console.log(this.count);
        this.count++;
    };
    FormsComponent.prototype.submitFun = function () {
        alert('your form is submitted' + this.lname + "***" + this.fname);
    };
    return FormsComponent;
}());
FormsComponent = __decorate([
    core_1.Component({
        selector: 'my-forms',
        templateUrl: './forms.component.html',
        styles: ['p{background-color:tomato; font-style:italic}']
    })
], FormsComponent);
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map