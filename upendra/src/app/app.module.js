"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var kiwi_component_1 = require("./kiwi.component");
var variables_component_1 = require("./variables/variables.component");
var expressions_component_1 = require("./expressions/expressions.component");
var directives_component_1 = require("./directives/directives.component");
var callGoogle_directive_1 = require("./customs/callGoogle.directive");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'kiwi', component: kiwi_component_1.KiwiComponent },
    { path: 'variables', component: variables_component_1.VariablesComponent },
    { path: 'expr', component: expressions_component_1.ExpressionsComponent },
    { path: 'directives', component: directives_component_1.DirectivesComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [
            app_component_1.AppComponent,
            kiwi_component_1.KiwiComponent,
            home_component_1.HomeComponent,
            variables_component_1.VariablesComponent,
            expressions_component_1.ExpressionsComponent,
            directives_component_1.DirectivesComponent,
            callGoogle_directive_1.callGoogleDirective
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map