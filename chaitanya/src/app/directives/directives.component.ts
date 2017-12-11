import { Component } from '@angular/core';
@Component({
  selector: 'bank-account',
  inputs: ['bankName: bank-name', 'id: account-id'],
  template: `
    <br><span class="bank">Bank Name: {{bankName}}</span>
    <br><span id="acc-id">Account Id: {{id}}</span>
    <button (click)="callMe()"> Click </button>
    <br>
  `,
  //styles: ['span { background-color:blue; }']
  styles: ['.bank{color:red}' , '#acc-id {color:skyblue}']
})
export class BankAccount {
  id: string;
 
  // this property is not bound, and won't be automatically updated by Angular
  normalizedBankName: string;
  callMe():void{
  	console.log(this.id);
  }
}

@Component({
  selector: 'my-directives',
  templateUrl: `./directives.component.html`,
  styles: ['p { background-color:blue; }', 'li { color: blue; }']
})

export class DirectivesComponent  {

	age:number = 23;
	fruits:string[] = ['banana', 'papaya', 'kiwi', 'litchi'];

	users = [
		{name:'mahesh', email:'mahesh@gmail.com', loc:'hyd' },
		{name:'ramesh', email:'ramesh@gmail.com', loc:'vskp' },
		{name:'suresh', email:'suresh@gmail.com', loc:'delhi' },
		{name:'naresh', email:'naresh@gmail.com', loc:'goa' },
	];
	visitGoogle(){
		console.log('Hello visit Google has been called');
	}
	respondMe(){
		console.log('Im fine');
	}

}
