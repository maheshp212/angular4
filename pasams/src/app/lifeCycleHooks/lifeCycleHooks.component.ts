import { Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
 } from '@angular/core';

@Component({
  selector: 'my-life-cycle',
  templateUrl: './lifeCycleHooks.component.html',
})
export class LifeCycleHooksComponent implements OnChanges, OnInit, DoCheck,
 AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy  {
  
  ngOnChanges(){
    console.log(`ngOnChanges`);
  }

  ngOnInit(){
    console.log(`ngOnInit`);
  }

  // this will be get trigerred for every small change
  ngDoCheck(){
    console.log(`ngDoCheck`);
  }

  ngAfterViewInit(){
    console.log(`ngAfterViewInit`);
  }

  // this will be get trigerred for every small change
  ngAfterViewChecked(){
    console.log(`ngAfterViewChecked`);
  }

  ngAfterContentInit(){
    console.log(`ngAfterContentInit`);
  }

  // this will be get trigerred for every small change
  ngAfterContentChecked(){
    console.log(`ngAfterContentChecked`);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
