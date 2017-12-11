"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BankAccount = (function () {
    function BankAccount() {
    }
    BankAccount.prototype.callMe = function () {
        console.log(this.id);
    };
    return BankAccount;
}());
BankAccount = __decorate([
    core_1.Component({
        selector: 'bank-account',
        inputs: ['bankName: bank-name', 'id: account-id'],
        template: "\n    <br><span class=\"bank\">Bank Name: {{bankName}}</span>\n    <br><span id=\"acc-id\">Account Id: {{id}}</span>\n    <button (click)=\"callMe()\"> Click </button>\n    <br>\n  ",
        //styles: ['span { background-color:blue; }']
        styles: ['.bank{color:red}', '#acc-id {color:skyblue}']
    })
], BankAccount);
exports.BankAccount = BankAccount;
var DirectivesComponent = (function () {
    function DirectivesComponent() {
        this.age = 23;
        this.fruits = ['banana', 'papaya', 'kiwi', 'litchi'];
        this.users = [
            { name: 'mahesh', email: 'mahesh@gmail.com', loc: 'hyd' },
            { name: 'ramesh', email: 'ramesh@gmail.com', loc: 'vskp' },
            { name: 'suresh', email: 'suresh@gmail.com', loc: 'delhi' },
            { name: 'naresh', email: 'naresh@gmail.com', loc: 'goa' },
        ];
    }
    DirectivesComponent.prototype.visitGoogle = function () {
        console.log('Hello visit Google has been called');
    };
    DirectivesComponent.prototype.respondMe = function () {
        console.log('Im fine');
    };
    return DirectivesComponent;
}());
DirectivesComponent = __decorate([
    core_1.Component({
        selector: 'my-directives',
        templateUrl: "./directives.component.html",
        styles: ['p { background-color:blue; }', 'li { color: blue; }']
    })
], DirectivesComponent);
exports.DirectivesComponent = DirectivesComponent;
//# sourceMappingURL=directives.component.js.map