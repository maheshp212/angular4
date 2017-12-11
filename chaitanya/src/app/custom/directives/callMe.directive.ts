import { Directive,Input, HostListener } from '@angular/core';

@Directive({
	selector:`[appConfirm]`
//	selector:`[appConfirm]`
})

export class callMeDirective  {
	@Input() appConfirm(){}
	@Input() confirmMessag = 'Do you want to call???'
	@HostListener('click',['$event'])
	callMe(){
		const conf= window.confirm(this.confirmMessag);
		if(conf){
			this.appConfirm();
			location.href = 'https://google.com'

		}
	}

}
