import { Component,OnInit } from '@angular/core';
import {ApiCallService} from './../custom/services/apiCall.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'my-view',
  templateUrl: './view.component.html',
  providers: [ApiCallService],
})
export class ViewComponent implements OnInit  {
  
	userInfo:any;
	id:number;
	constructor(private ApiCallService: ApiCallService, private route: ActivatedRoute){
	}
	ngOnInit(){

			this.route.params.subscribe(params => {
	            this.id = +params['id']; // (+) converts string 'id' to a number
	        });
			
			this.ApiCallService.getUser(this.id)
	        .subscribe(result => {
	            this.userInfo = result.data
	        });
	}

	
}
