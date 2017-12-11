import { Component } from '@angular/core';

@Component({
  selector: 'my-variable',
  /*template: `<h1>variable Page</h1>`,*/
  templateUrl: `./variable.component.html`,
})

export class VaribaleComponent  {
	/*
		number
		string
		boolean

		stringarray
		numberArray
		

		object:any
		function
	
		null

		tuple
	 */
	name:string = "tomato";
	age:number = 23;
	two:number = 12;
	correct:boolean = true;

	fruits:string[] = ['banana', 'kiwi', 'orange'];
	ages:number[] = [23, 45, 57];

	tuple = [23, 'asdf', 'qshore', 45];

	users:any = { name:'qshore', tech:'angularJs', area:'hyderabad'};
	datacodes:any = [
					{zip:19341, stateCode:'pa', stateName:'pennsilavia' },
					{zip:19341, stateCode:'pa', stateName:'pennsilavia'},
					{zip:19341, stateCode:'pa', stateName:'pennsilavia'}];
    dropDown:any =[
        {pin:19341, state:"PA"},
        {pin:78954, state:"MO"}];
	a:null = null;

	callMe():void{
		console.log('hello');
	}

	companyName():void {
		console.log('im at qshore');
	}
}
