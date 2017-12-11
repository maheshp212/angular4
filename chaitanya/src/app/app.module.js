"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var product_component_1 = require("./product.component");
var fruits_component_1 = require("./fruits.component");
var PageNotFound_component_1 = require("./PageNotFound.component");
var variable_component_1 = require("./variables/variable.component");
var directives_component_1 = require("./directives/directives.component");
var callMe_directive_1 = require("./custom/directives/callMe.directive");
var forms_component_1 = require("./forms/forms.component");
var exponential_pipe_1 = require("./custom/pipes/exponential.pipe");
var hexa_pipe_1 = require("./custom/pipes/hexa.pipe");
var services_component_1 = require("./services/services.component");
var customUrl_component_1 = require("./customUrl/customUrl.component");
var lifeHooks_component_1 = require("./lifeHooks/lifeHooks.component");
var appRoutes = [
    { path: '', component: app_component_1.HomeComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'fruits', component: fruits_component_1.FruitsComponent },
    { path: 'variables', component: variable_component_1.VaribaleComponent },
    { path: 'directives', component: directives_component_1.DirectivesComponent },
    { path: 'forms', component: forms_component_1.FormsComponent },
    { path: 'services', component: services_component_1.ServicesComponent },
    { path: 'custom/:id/:name', component: customUrl_component_1.customUrlComponent },
    { path: 'life-hooks', component: lifeHooks_component_1.lifeCycleHooksComponent },
    { path: '**', component: PageNotFound_component_1.PageNotFoundComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule, http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            product_component_1.ProductComponent,
            fruits_component_1.FruitsComponent,
            PageNotFound_component_1.PageNotFoundComponent,
            app_component_1.HomeComponent,
            variable_component_1.VaribaleComponent,
            directives_component_1.DirectivesComponent,
            directives_component_1.BankAccount,
            callMe_directive_1.callMeDirective,
            forms_component_1.FormsComponent,
            exponential_pipe_1.ExponentialPipe,
            hexa_pipe_1.HexaPipe,
            services_component_1.ServicesComponent,
            customUrl_component_1.customUrlComponent,
            lifeHooks_component_1.lifeCycleHooksComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map