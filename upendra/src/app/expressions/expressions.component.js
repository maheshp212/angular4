"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ExpressionsComponent = (function () {
    function ExpressionsComponent() {
        this.a = 30;
        this.b = 50;
        this.name = "mahesh";
    }
    return ExpressionsComponent;
}());
ExpressionsComponent = __decorate([
    core_1.Component({
        selector: 'expressions-app',
        templateUrl: '/app/expressions/expressions.component.html'
    })
], ExpressionsComponent);
exports.ExpressionsComponent = ExpressionsComponent;
//# sourceMappingURL=expressions.component.js.map