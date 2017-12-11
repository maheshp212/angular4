import { Component } from '@angular/core';

@Component({
  selector: 'directive-app',
  templateUrl: '/app/directives/directives.component.html',
/*  styles: ['h1 { font-weight: normal; }']
  styleUrls: ['app/hero-details.component.css']
*/})
export class DirectivesComponent
{
	/**
	 * 
	 * IF
	 * FOR
	 * switch
	 * 
	 */
	
	
	age:number = 45;
	fruits:string[] = ['kiwi', 'jam', 'litchi'];
	showImageCalled:boolean = false;
	imagePath:string = '*';
	username:string = "mahesh";
	color: string = "tomato";
	visitWeb(){
		console.log('i have visitied');
		location.href="https://google.com";
	}

	showImage(){
		console.log('show image called');
		this.showImageCalled = true;
		this.imagePath = "/home/mahesh/Pictures/telnet.png";
	}

}
