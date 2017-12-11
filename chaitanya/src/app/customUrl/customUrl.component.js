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
var router_2 = require("@angular/router");
var customUrlComponent = (function () {
    function customUrlComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.name = params['name']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
    }
    return customUrlComponent;
}());
customUrlComponent = __decorate([
    core_1.Component({
        selector: 'my-custom-url',
        templateUrl: "./customUrl.component.html",
    }),
    __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute])
], customUrlComponent);
exports.customUrlComponent = customUrlComponent;
//# sourceMappingURL=customUrl.component.js.map