import { Component } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'my-custom-url',
  templateUrl: `./customUrl.component.html`,
})

/**
 * when ever we write the providers  we need to intialize them in the contructor
 */
export class customUrlComponent  {
	id:number;
	private sub:any;
	name:string;

	constructor(private router:Router, private route:ActivatedRoute){
		
		this.sub = this.route.params.subscribe((params:Params) => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.name = params['name']; // (+) converts string 'id' to a number

        // In a real app: dispatch action to load the details here.
        });
	}

}	
