import { Component } from '@angular/core';

@Component({
  selector: 'my-forms',
  templateUrl: `./forms.component.html`,
})

export class FormsComponent  {
	count:number = 0;
	name:any;
	pwd:any;
	tel:any;
	time:any;
	email:any;
	inst:string = "QshOrE TechNolGIes"
	age:number = 23;
	today:Date = new Date();
	callMeText:any = "Intial statte";
dropDown:any =[
        {pin:19341, state:"PA"},
        {pin:78954, state:"MO"}];
	
	callMe():void{
		this.count++;
		console.log('count ::' + this.count);
		this.callMeText = "asdfasdf";
	}

	submitForm():void{
		alert('jasdf');
		console.log('this is intiated');
		console.log('name :: ' + this.name);
		console.log('pwd :: ' + this.pwd);
		console.log('tel :: ' + this.pwd);
		console.log('time :: ' + this.time);
	}
}
