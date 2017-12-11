import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>welcome {{name}}</h1>`,
  templateUrl: `./app.component.html`,
})
export class AppComponent  { name = 'Qshore'; }


@Component({
  selector: 'my-home',
  template: `<h1>HOme Page</h1>`,
})
export class HomeComponent  {}
