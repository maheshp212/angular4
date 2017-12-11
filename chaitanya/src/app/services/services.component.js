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
var user_service_1 = require("./../custom/services/user.service");
var ServicesComponent = (function () {
    function ServicesComponent(UserService) {
        var _this = this;
        this.UserService = UserService;
        this.UserService.listUsers()
            .subscribe(function (result) {
            console.log(result);
            _this.userdata = result.data;
        });
    }
    ServicesComponent.prototype.getSingleUser = function (uid) {
        var _this = this;
        this.UserService.getSingleUser(uid)
            .subscribe(function (result) {
            _this.singleUser = result.data;
        });
    };
    ServicesComponent.prototype.createUser = function () {
        var _this = this;
        //alert('asdf');
        var user = {
            fname: 'chaitnaya2',
            lname: 'prasanth',
            age: 23,
            email: 'chai2@gmail.com',
            password: '123abc'
        };
        this.UserService.createUser(user)
            .subscribe(function (result) {
            _this.createdUser = result.data;
            // calling the list api 
            _this.UserService.listUsers()
                .subscribe(function (result) {
                console.log(result);
                _this.userdata = result.data;
            });
        });
    };
    ServicesComponent.prototype.updateUser = function (uid) {
        var _this = this;
        //alert('asdf');
        var user = {
            fname: 'qshore',
            lname: 'updated',
            age: 23,
            email: 'qshore@gmail.com',
            password: '123abc'
        };
        this.UserService.updateUser(uid, user)
            .subscribe(function (result) {
            _this.updatedUser = result.data;
            // calling the list api 
            _this.UserService.listUsers()
                .subscribe(function (result) {
                console.log(result);
                _this.userdata = result.data;
            });
        });
    };
    ServicesComponent.prototype.deleteUser = function (uid) {
        var _this = this;
        this.UserService.deleteUser(uid)
            .subscribe(function (result) {
            _this.deletedUser = result.data;
            // calling the list api 
            _this.UserService.listUsers()
                .subscribe(function (result) {
                console.log(result);
                _this.userdata = result.data;
            });
        });
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    core_1.Component({
        selector: 'my-services',
        templateUrl: "./services.component.html",
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], ServicesComponent);
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=services.component.js.map