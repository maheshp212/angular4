import { 
	Component,
	OnChanges,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
 } from '@angular/core';

@Component({
  selector: 'my-life-cycle-hooks',
  templateUrl: `./lifeHooks.component.html`,
})

export class lifeCycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

	//age:number = 23;

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
