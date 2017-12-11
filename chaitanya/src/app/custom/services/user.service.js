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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.listUsers = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var list = this.http.get('http://api.qshore.com/users')
            .map(function (response) {
            return response.json();
            //response.json();
        });
        return list;
    };
    UserService.prototype.getSingleUser = function (id) {
        return this.http.get('http://api.qshore.com/view-user/' + id)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post('http://api.qshore.com/add-user', user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (uid, user) {
        return this.http.put('http://api.qshore.com/edit-user/' + uid, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (uid) {
        //http://api.qshore.com/delete-user/11
        return this.http.delete('http://api.qshore.com/delete-user/' + uid)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map