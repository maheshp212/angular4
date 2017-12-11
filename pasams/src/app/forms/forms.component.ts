import { Component } from '@angular/core';

@Component({
  selector: 'my-forms',
  templateUrl: './forms.component.html',
  styles: ['p{background-color:tomato; font-style:italic}']
})
export class FormsComponent  {
  
  count:number = 0;
  lname:string;
  fname:string;


  callMe(){
    console.log(this.count);
    this.count++;
  }

  submitFun(){
    alert( 'your form is submitted' + this.lname + "***"+ this.fname);
  }
}
