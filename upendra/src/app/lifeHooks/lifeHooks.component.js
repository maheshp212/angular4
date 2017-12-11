"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LifeHooksComponent = (function () {
    function LifeHooksComponent() {
        this.age = 23;
    }
    LifeHooksComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges");
    };
    LifeHooksComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        alert("ngOnInit");
    };
    // this will be get trigreed for every small change
    LifeHooksComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    LifeHooksComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
        alert("ngAfterViewInit");
    };
    // this will be get trigreed for every small change
    LifeHooksComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    LifeHooksComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
        alert("ngAfterContentInit");
    };
    // this will be get trigreed for every small change
    LifeHooksComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    LifeHooksComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    return LifeHooksComponent;
}());
LifeHooksComponent = __decorate([
    core_1.Component({
        selector: 'life-hooks-app',
        templateUrl: '/app/lifeHooks/lifeHooks.component.html'
    })
], LifeHooksComponent);
exports.LifeHooksComponent = LifeHooksComponent;
//# sourceMappingURL=lifeHooks.component.js.map