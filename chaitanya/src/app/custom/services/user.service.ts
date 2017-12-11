import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService{
	constructor(private http:Http){

	}

	listUsers(){
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

		var list = this.http.get('http://api.qshore.com/users')
		.map((response:Response)=>{
			return response.json();
			//response.json();
		});

		return list;
	}

	getSingleUser(id:number){
		
		return this.http.get('http://api.qshore.com/view-user/'+id)
			.map((response:Response)=>{
				return response.json();
			});
	}

	createUser(user:any) {
		return this.http.post('http://api.qshore.com/add-user', user)
			.map((response:Response)=>{
				return response.json();
			});
	}

	updateUser(uid:number, user:any) {
		return this.http.put('http://api.qshore.com/edit-user/'+uid, user)
			.map((response:Response)=>{
				return response.json();
			});
	}

	deleteUser(uid:number) {
		//http://api.qshore.com/delete-user/11
		return this.http.delete('http://api.qshore.com/delete-user/'+uid)
			.map((response:Response)=>{
				return response.json();
			});
	}

}