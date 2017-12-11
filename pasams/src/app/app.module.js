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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ng2_handsontable_1 = require("ng2-handsontable");
var app_component_1 = require("./app.component");
var trail_component_1 = require("./trail.component");
var trail2_component_1 = require("./trail2.component");
var intro_component_1 = require("./intro/intro.component");
var directives_component_1 = require("./directives/directives.component");
var forms_component_1 = require("./forms/forms.component");
var appConfirm_directive_1 = require("./custom/appConfirm.directive");
var pipes_component_1 = require("./pipes/pipes.component");
var hexa_pipe_1 = require("./custom/pipes/hexa.pipe");
var power_pipe_1 = require("./custom/pipes/power.pipe");
var apis_component_1 = require("./apis/apis.component");
var view_component_1 = require("./apis/view.component");
var lifeCycleHooks_component_1 = require("./lifeCycleHooks/lifeCycleHooks.component");
var Page404_component_1 = require("./Page404/Page404.component");
var child_component_1 = require("./child/child.component");
var appRoutess = [
    { path: '', component: trail_component_1.TrailComponent,
        children: [
            { path: 'child', component: child_component_1.ChildComponent },
        ]
    },
    { path: '', component: trail2_component_1.Trail2Component,
        children: [
            { path: 'intro', component: intro_component_1.IntroComponent },
            { path: 'directives', component: directives_component_1.DirectivesComponent },
            { path: 'forms', component: forms_component_1.FormsComponent },
            { path: 'trail/forms', component: forms_component_1.FormsComponent },
            { path: 'pipes', component: pipes_component_1.PipesComponent },
            { path: 'apiss', component: apis_component_1.ApisComponent },
            { path: 'apis', redirectTo: '/apiss', pathMatch: 'full' },
            { path: 'life-cycle', component: lifeCycleHooks_component_1.LifeCycleHooksComponent },
            { path: 'user-view/:id', component: view_component_1.ViewComponent },
            { path: '**', component: Page404_component_1.Page404Component },
        ]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutess), forms_1.FormsModule, http_1.HttpModule, ngx_bootstrap_1.AccordionModule.forRoot(), ng2_handsontable_1.HotTableModule],
        declarations: [
            app_component_1.AppComponent,
            trail_component_1.TrailComponent,
            trail2_component_1.Trail2Component,
            intro_component_1.IntroComponent,
            directives_component_1.DirectivesComponent,
            forms_component_1.FormsComponent,
            pipes_component_1.PipesComponent,
            apis_component_1.ApisComponent,
            lifeCycleHooks_component_1.LifeCycleHooksComponent,
            Page404_component_1.Page404Component,
            view_component_1.ViewComponent,
            child_component_1.ChildComponent,
            appConfirm_directive_1.appConfirmDirective,
            hexa_pipe_1.HexaPipe,
            power_pipe_1.PowerPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map