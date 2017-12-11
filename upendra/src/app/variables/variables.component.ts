import { Component } from '@angular/core';

@Component({
  selector: 'variable-app',
  templateUrl: '/app/variables/variables.component.html'
})
export class VariablesComponent
{
    /*
      string
      number
      boolean

      array
      object

      function**
     */
  name:string = 'mahesh';
  age:number = 26;
  gender:boolean = true;


  frutis:string[] = ['kiwi', 'litchi', 'orange'];
  users:any = {nam:'mahesh', age:34, btech:true};
}
