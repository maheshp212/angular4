import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiCallService {

    constructor(private http: Http) {
    }

    listUsers() {
	  return this.http.get(`http://api.qshore.com/users`)
	  		.map((response: Response) => {
	  			console.log('this is service file')

	  			console.log(response);
     			return response.json();
    		});
    }

    createUser(data:any){
        return this.http.post(`http://api.qshore.com/add-user`, data, )
        .map((response: Response) => {
            return response.json();
            });
    }

    getUser(id:number){
        return this.http.get(`http://api.qshore.com/view-user/`+id)
        .map((response: Response) => {
            return response.json();
            });
    }
    
}
