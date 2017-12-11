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
var ApisComponent = (function () {
    function ApisComponent(ApiCallService) {
        var _this = this;
        this.ApiCallService = ApiCallService;
        this.ApiCallService.listUsers()
            .subscribe(function (result) {
            console.log('this is in componnet');
            console.log(result.data);
            _this.users = result.data;
        });
    }
    ApisComponent.prototype.callMe = function () {
        var _this = this;
        var data = {
            fname: 'Mohan4',
            lname: 'Lal4',
            age: 23,
            email: 'mohanlal@gmail.com',
            password: 'lal123',
        };
        this.ApiCallService.createUser(data)
            .subscribe(function (result) {
            console.log(result);
            _this.ApiCallService.listUsers()
                .subscribe(function (result) {
                _this.users = result.data;
            });
        });
    };
    return ApisComponent;
}());
ApisComponent = __decorate([
    core_1.Component({
        selector: 'my-apis',
        templateUrl: './apis.component.html',
        providers: [apiCall_service_1.ApiCallService],
    }),
    __metadata("design:paramtypes", [apiCall_service_1.ApiCallService])
], ApisComponent);
exports.ApisComponent = ApisComponent;
//# sourceMappingURL=apis.component.js.map