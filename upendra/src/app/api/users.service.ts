import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	constructor(private http: Http) {
        // mahesj pael
	}

    listUsers(){
    	/*
    	get (url)
    	put(url, data, headers)
    	post (url, data, headers)
    	delete(url)
    	*/
    	return this.http.get(`http://api.qshore.com/users`)
    	.map((response: Response) => {
    		return response.json();
    	});

		/*return this.http.get(`http://api.qshore.com/users`)
    	.map(function(response: Response){
    		return response.json();
    	}); */   	
    }

    getUser(id: number){
    	
    	return this.http.get(`http://api.qshore.com/view-user/` + id)
    	.map((response: Response) => {
    		return response.json();
    	});
    }
}
