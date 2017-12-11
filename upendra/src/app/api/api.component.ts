import { Component } from '@angular/core';
import {UserService} from './users.service';


@Component({
  selector: 'api-call',
  templateUrl: '/app/api/api.component.html',
  providers : [UserService]
})
export class APIComponent {
	userData:any;
	singleUser:any = {};
	constructor(private UserService: UserService) {
		this.UserService.listUsers()
		.subscribe((result) => {
			this.userData = result.data;
			console.log(this.userData);
		});

	}

/*	fetchUsersList(){
		this.UserService.listUsers()
		.subscribe((result) => {
			this.userData = result.data;
			console.log(this.userData);
		});

	}*/

	getUser(id:number){
		alert(id);

		this.UserService.getUser(id)
		.subscribe((result) => {
			this.singleUser = result.data;
			console.log(this.userData);
		});
	}
}