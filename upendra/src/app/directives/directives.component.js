"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DirectivesComponent = (function () {
    function DirectivesComponent() {
        /**
         *
         * IF
         * FOR
         * switch
         *
         */
        this.age = 45;
        this.fruits = ['kiwi', 'jam', 'litchi'];
        this.showImageCalled = false;
        this.imagePath = '*';
        this.username = "mahesh";
        this.color = "tomato";
    }
    DirectivesComponent.prototype.visitWeb = function () {
        console.log('i have visitied');
        location.href = "https://google.com";
    };
    DirectivesComponent.prototype.showImage = function () {
        console.log('show image called');
        this.showImageCalled = true;
        this.imagePath = "/home/mahesh/Pictures/telnet.png";
    };
    return DirectivesComponent;
}());
DirectivesComponent = __decorate([
    core_1.Component({
        selector: 'directive-app',
        templateUrl: '/app/directives/directives.component.html',
    })
], DirectivesComponent);
exports.DirectivesComponent = DirectivesComponent;
//# sourceMappingURL=directives.component.js.map