import { Component } from '@angular/core';
import {ApiCallService} from './../custom/services/apiCall.service'

@Component({
  selector: 'my-apis',
  templateUrl: './apis.component.html',
  providers: [ApiCallService],
})
export class ApisComponent  {
  
	users:any;

	constructor(private ApiCallService: ApiCallService){

  		this.ApiCallService.listUsers()
	        .subscribe(result => {
	        	console.log('this is in componnet')
	        	console.log(result.data);
	        	
	            this.users = result.data

	        });
	}

	callMe(){
		var data = {
			fname: 'Mohan4',
			lname:'Lal4',
			age:23,
			email:'mohanlal@gmail.com',
			password:'lal123',
		}

		this.ApiCallService.createUser(data)
	        .subscribe(result => {
	        	console.log(result);

		    	this.ApiCallService.listUsers()
		        .subscribe(result => {
		            this.users = result.data
		        });
	        });
	}
}
