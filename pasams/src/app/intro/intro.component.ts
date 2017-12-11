import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-intro',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './intro.component.html',
})
export class IntroComponent  {
  name:string = 'Angular Intro';
  num:number = 23;
  gender:boolean = true;
  uname:string;
  pwd:string;

  obj:any = {key:'value', key1:'varlue2'}
  fruits:string[] = ['banana', 'kiwi', 'litchi'];
  one:number = 12;
  two:number = 56;

  constructor(private router: Router){}
  
  second() {
    alert('this is intro page');
  }


  login(){
    alert('you have entered username :: ' + this.uname + ', password ::' + this.pwd );
    this.router.navigate(['/child']);
  }
}
