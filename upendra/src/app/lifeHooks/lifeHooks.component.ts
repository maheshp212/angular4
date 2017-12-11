import {
	Component,
	OnChanges,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy } from '@angular/core';

@Component({
  selector: 'life-hooks-app',
  templateUrl: '/app/lifeHooks/lifeHooks.component.html'
})
export class LifeHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
	age:number = 23;

	ngOnChanges() {
		console.log(`ngOnChanges`);
	}


	ngOnInit(){
		console.log(`ngOnInit`);
		alert(`ngOnInit`);
	}

	
	// this will be get trigreed for every small change
	ngDoCheck(){
		console.log(`ngDoCheck`);
	}
	

	ngAfterViewInit(){
		console.log(`ngAfterViewInit`);
		alert(`ngAfterViewInit`);
	}
	

	// this will be get trigreed for every small change
	ngAfterViewChecked(){
		console.log(`ngAfterViewChecked`);
	}
	

	ngAfterContentInit(){
		console.log(`ngAfterContentInit`);
		alert(`ngAfterContentInit`);
	}
	

	// this will be get trigreed for every small change
	ngAfterContentChecked(){
		console.log(`ngAfterContentChecked`);
	}

	ngOnDestroy(){
		console.log(`ngOnDestroy`);
	}
}
