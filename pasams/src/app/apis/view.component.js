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
var apiCall_service_1 = require("./../custom/services/apiCall.service");
var router_1 = require("@angular/router");
var ViewComponent = (function () {
    function ViewComponent(ApiCallService, route) {
        this.ApiCallService = ApiCallService;
        this.route = route;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        this.ApiCallService.getUser(this.id)
            .subscribe(function (result) {
            _this.userInfo = result.data;
        });
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    core_1.Component({
        selector: 'my-view',
        templateUrl: './view.component.html',
        providers: [apiCall_service_1.ApiCallService],
    }),
    __metadata("design:paramtypes", [apiCall_service_1.ApiCallService, router_1.ActivatedRoute])
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map