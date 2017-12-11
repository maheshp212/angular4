import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: `[appConfirm]`,
})
export class callGoogleDirective {
	@Input() appConfirm(){
		//location.href="https://google.com";
	};
	@Input() confirmMessage = "Do you want to redirect?";

	@HostListener('click',['$event']) callMe(){
		const conf = window.confirm(this.confirmMessage);
		if(conf){
			this.appConfirm();
		}

	}
}
