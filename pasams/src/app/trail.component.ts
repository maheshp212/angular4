import { Component } from '@angular/core';

@Component({
  selector: 'my-trail',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './trail.component.html',
})
export class TrailComponent  {
  name = 'Angular Trail';
}
