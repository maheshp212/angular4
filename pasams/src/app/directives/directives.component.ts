import { Component } from '@angular/core';

@Component({
  selector: 'my-directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent  {
  dir:string = "directives";
  fruits:string[] = ['banana', 'kiwi', 'litchi'];
  one:number = 12;
  two:number = 56;

  callMe(){
  	alert('this is custom directive');
  }
}
