import { Component } from '@angular/core';
import {UserService} from './../custom/services/user.service';
@Component({
  selector: 'my-services',
  templateUrl: `./services.component.html`,
  providers: [UserService]
})

/**
 * when ever we write the providers  we need to intialize them in the contructor
 */
export class ServicesComponent  {
	userdata:any;
	singleUser:any;
	createdUser:any;
	updatedUser:any;
	deletedUser:any;
	constructor(public UserService:UserService){

		this.UserService.listUsers()
		.subscribe((result:any) =>{
			console.log(result);
			this.userdata = result.data;
		});
	}

	getSingleUser(uid:number){
		this.UserService.getSingleUser(uid)
		.subscribe((result:any) =>{
			this.singleUser = result.data;
		});		
	}

	createUser(){
		//alert('asdf');
		var user = {
			fname: 'chaitnaya2',
			lname: 'prasanth',
			age: 23,
			email:'chai2@gmail.com',
			password: '123abc'
		}
		this.UserService.createUser(user)
		.subscribe((result:any) =>{
			this.createdUser = result.data;

			// calling the list api 
			this.UserService.listUsers()
			.subscribe((result:any) =>{
				console.log(result);
				this.userdata = result.data;
			});

	});	
}




	updateUser(uid:number){
		//alert('asdf');
		var user = {
			fname: 'qshore',
			lname: 'updated',
			age: 23,
			email:'qshore@gmail.com',
			password: '123abc'
		}
		this.UserService.updateUser(uid, user)
		.subscribe((result:any) =>{
			this.updatedUser = result.data;

			// calling the list api 
			this.UserService.listUsers()
			.subscribe((result:any) =>{
				console.log(result);
				this.userdata = result.data;
			});
		});	


	}



	deleteUser(uid:number){
		this.UserService.deleteUser(uid)
		.subscribe((result:any) =>{
			this.deletedUser = result.data;

			// calling the list api 
			this.UserService.listUsers()
			.subscribe((result:any) =>{
				console.log(result);
				this.userdata = result.data;
			});
		});	


	}
}	
