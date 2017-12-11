import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'ngx-bootstrap';
import { HotTableModule } from 'ng2-handsontable';

import { AppComponent }  from './app.component';
import { TrailComponent }  from './trail.component';
import { Trail2Component }  from './trail2.component';
import { IntroComponent }  from './intro/intro.component';
import { DirectivesComponent }  from './directives/directives.component';
import { FormsComponent }  from './forms/forms.component';
import { appConfirmDirective }  from './custom/appConfirm.directive';
import { PipesComponent }  from './pipes/pipes.component';
import { HexaPipe }  from './custom/pipes/hexa.pipe';
import { PowerPipe }  from './custom/pipes/power.pipe';
import { ApisComponent }  from './apis/apis.component';
import { ViewComponent }  from './apis/view.component';
import {LifeCycleHooksComponent} from './lifeCycleHooks/lifeCycleHooks.component'
import {Page404Component} from './Page404/Page404.component';
import {otherLayoutComponent} from './otherLayout/otherLayout.component'
import {ChildComponent} from './child/child.component'





const appRoutess:Routes = [
  { path: '',component: TrailComponent,
    children: [
        { path: 'child', component: ChildComponent },
    ]
  },
  { path: '',component: Trail2Component,
    children: [
        {path:'intro', component:IntroComponent},
        {path:'directives', component:DirectivesComponent},
        {path:'forms', component:FormsComponent},
        {path:'trail/forms', component:FormsComponent},
        {path:'pipes', component:PipesComponent},
        {path:'apiss', component:ApisComponent},
        { path: 'apis', redirectTo: '/apiss', pathMatch: 'full' },
        {path:'life-cycle', component:LifeCycleHooksComponent},
        {path:'user-view/:id', component:ViewComponent},
        {path:'**', component:Page404Component},
    ]
  },
  
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutess),FormsModule, HttpModule,AccordionModule.forRoot(), HotTableModule ],
  declarations: [ 
  					AppComponent,
  					TrailComponent,
            Trail2Component,
  					IntroComponent,
  					DirectivesComponent,
  					FormsComponent,
            PipesComponent,
            ApisComponent,
            LifeCycleHooksComponent,
            Page404Component,
  					ViewComponent,
            ChildComponent,

            appConfirmDirective,
            HexaPipe,
            PowerPipe


             ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
