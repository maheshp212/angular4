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
        this.uname = "mahesh";
        this.count = 1;
        this.today = new Date();
    }
    FormsComponent.prototype.onSubmit = function () {
        /*var uname = document.getElementById('uname').value;
        if(uname == ""){
            document.getElementById('uname_error').append('uname is required');
        }*/
        alert('function got called' + this.uname + " ** " + this.fname);
    };
    FormsComponent.prototype.callMe = function () {
        this.count += 1;
        console.log('count :: ' + this.count);
    };
    return FormsComponent;
}());
FormsComponent = __decorate([
    core_1.Component({
        selector: 'forms-app',
        templateUrl: '/app/forms/forms.component.html',
    })
], FormsComponent);
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map