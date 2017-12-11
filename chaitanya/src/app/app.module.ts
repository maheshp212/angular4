import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, HomeComponent }  from './app.component';
import { ProductComponent }  from './product.component';
import { FruitsComponent }  from './fruits.component';
import { PageNotFoundComponent }  from './PageNotFound.component';
import { VaribaleComponent }  from './variables/variable.component';
import { BankAccount, DirectivesComponent }  from './directives/directives.component';
import { callMeDirective }  from './custom/directives/callMe.directive';
import { FormsComponent }  from './forms/forms.component';
import { ExponentialPipe }  from './custom/pipes/exponential.pipe';
import { HexaPipe }  from './custom/pipes/hexa.pipe';
import { ServicesComponent }  from './services/services.component';
import { customUrlComponent }  from './customUrl/customUrl.component';
import { lifeCycleHooksComponent }  from './lifeHooks/lifeHooks.component';

const appRoutes:Routes = [
	{path:'', component:HomeComponent},
	{path:'product', component:ProductComponent},
	{path:'fruits', component:FruitsComponent},
	{path:'variables', component:VaribaleComponent},
	{path:'directives', component:DirectivesComponent},
	{path:'forms', component:FormsComponent},
	{path:'services', component:ServicesComponent},
	{path:'custom/:id/:name', component:customUrlComponent},
	{path:'life-hooks', component:lifeCycleHooksComponent},
	{path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes),FormsModule, HttpModule ],
  declarations: [ 
  					AppComponent, 
  					ProductComponent,
  					FruitsComponent,
  					PageNotFoundComponent,
  					HomeComponent,
  					VaribaleComponent,
            DirectivesComponent,
            BankAccount,
            callMeDirective,
            FormsComponent,
            ExponentialPipe,
            HexaPipe,
            ServicesComponent,
            customUrlComponent,
            lifeCycleHooksComponent
				],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
