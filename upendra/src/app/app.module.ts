import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { KiwiComponent }  from './kiwi.component';
import { VariablesComponent }  from './variables/variables.component';
import { ExpressionsComponent }  from './expressions/expressions.component';
import { DirectivesComponent }  from './directives/directives.component';
import { callGoogleDirective }  from './customs/callGoogle.directive';


import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'kiwi', component:KiwiComponent},
  {path: 'variables', component:VariablesComponent},
  {path: 'expr', component:ExpressionsComponent},
  {path: 'directives', component:DirectivesComponent},
    // Dfault Layout end
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ 
  					AppComponent,
  					KiwiComponent,
  					HomeComponent,
  					VariablesComponent,
  					ExpressionsComponent,
  					DirectivesComponent,
            callGoogleDirective
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
