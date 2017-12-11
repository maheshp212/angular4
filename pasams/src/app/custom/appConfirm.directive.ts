import {Directive,HostListener, Input} from '@angular/core';

@Directive({
	selector : '[appConfirm]'
})
export class appConfirmDirective {
	//@ -- decorator
  @Input() appConfirm(){};
  @Input() confirmMessage= 'do you want to call?' ;
  @HostListener('click') eventTrigger() {
  	//var txt = 'do you want to call?';

  	var r = confirm(this.confirmMessage);
	if (r == true) {
	   // this.appConfirm();
    this.alerting();
	} 
    
  }

  alerting(){
  	alert('this is the independent logic');
  }


}

