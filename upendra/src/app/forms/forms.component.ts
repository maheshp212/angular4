import { Component } from '@angular/core';

@Component({
  selector: 'forms-app',
  templateUrl: '/app/forms/forms.component.html',
})
export class FormsComponent
{	
	uname:string="mahesh";
	lname:string;
	fname:string;
	email:string;
	count: number = 1;
	today:Date = new Date();

	onSubmit() {
		/*var uname = document.getElementById('uname').value;
		if(uname == ""){
			document.getElementById('uname_error').append('uname is required');
		}*/

		alert('function got called' + this.uname + " ** " + this.fname);

	}
	callMe(){
		this.count += 1;
		console.log('count :: ' + this.count);
	}
}
