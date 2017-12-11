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
var users_service_1 = require("./users.service");
var APIComponent = (function () {
    function APIComponent(UserService) {
        var _this = this;
        this.UserService = UserService;
        this.singleUser = {};
        this.UserService.listUsers()
            .subscribe(function (result) {
            _this.userData = result.data;
            console.log(_this.userData);
        });
    }
    /*	fetchUsersList(){
            this.UserService.listUsers()
            .subscribe((result) => {
                this.userData = result.data;
                console.log(this.userData);
            });
    
        }*/
    APIComponent.prototype.getUser = function (id) {
        var _this = this;
        alert(id);
        this.UserService.getUser(id)
            .subscribe(function (result) {
            _this.singleUser = result.data;
            console.log(_this.userData);
        });
    };
    return APIComponent;
}());
APIComponent = __decorate([
    core_1.Component({
        selector: 'api-call',
        templateUrl: '/app/api/api.component.html',
        providers: [users_service_1.UserService]
    }),
    __metadata("design:paramtypes", [users_service_1.UserService])
], APIComponent);
exports.APIComponent = APIComponent;
//# sourceMappingURL=api.component.js.map