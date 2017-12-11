import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './app.component.html',
})
export class AppComponent  {
  name = 'Angular girish';

  	constructor(private router: Router){
		this.router.navigate(['/intro']);
	}

}
