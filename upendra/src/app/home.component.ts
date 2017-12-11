import { Component } from '@angular/core';

@Component({
  selector: 'home-app',
  /*template: `<h1>Hellos {{name}}</h1>`,*/
  templateUrl: '/app/home.component.html'
})
export class HomeComponent
{
  name = 'Angular qshore';
}
