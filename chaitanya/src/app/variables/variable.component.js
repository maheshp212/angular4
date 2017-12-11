"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var VaribaleComponent = (function () {
    function VaribaleComponent() {
        /*
            number
            string
            boolean
    
            stringarray
            numberArray
            
    
            object:any
            function
        
            null
    
            tuple
         */
        this.name = "tomato";
        this.age = 23;
        this.two = 12;
        this.correct = true;
        this.fruits = ['banana', 'kiwi', 'orange'];
        this.ages = [23, 45, 57];
        this.tuple = [23, 'asdf', 'qshore', 45];
        this.users = { name: 'qshore', tech: 'angularJs', area: 'hyderabad' };
        this.datacodes = [
            { zip: 19341, stateCode: 'pa', stateName: 'pennsilavia' },
            { zip: 19341, stateCode: 'pa', stateName: 'pennsilavia' },
            { zip: 19341, stateCode: 'pa', stateName: 'pennsilavia' }
        ];
        this.dropDown = [
            { pin: 19341, state: "PA" },
            { pin: 78954, state: "MO" }
        ];
        this.a = null;
    }
    VaribaleComponent.prototype.callMe = function () {
        console.log('hello');
    };
    VaribaleComponent.prototype.companyName = function () {
        console.log('im at qshore');
    };
    return VaribaleComponent;
}());
VaribaleComponent = __decorate([
    core_1.Component({
        selector: 'my-variable',
        /*template: `<h1>variable Page</h1>`,*/
        templateUrl: "./variable.component.html",
    })
], VaribaleComponent);
exports.VaribaleComponent = VaribaleComponent;
//# sourceMappingURL=variable.component.js.map