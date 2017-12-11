"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var lifeCycleHooksComponent = (function () {
    function lifeCycleHooksComponent() {
    }
    //age:number = 23;
    lifeCycleHooksComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges");
    };
    lifeCycleHooksComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    // this will be get trigerred for every small change
    lifeCycleHooksComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    lifeCycleHooksComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    // this will be get trigerred for every small change
    lifeCycleHooksComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    lifeCycleHooksComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    // this will be get trigerred for every small change
    lifeCycleHooksComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    lifeCycleHooksComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
    };
    return lifeCycleHooksComponent;
}());
lifeCycleHooksComponent = __decorate([
    core_1.Component({
        selector: 'my-life-cycle-hooks',
        templateUrl: "./lifeHooks.component.html",
    })
], lifeCycleHooksComponent);
exports.lifeCycleHooksComponent = lifeCycleHooksComponent;
//# sourceMappingURL=lifeHooks.component.js.map