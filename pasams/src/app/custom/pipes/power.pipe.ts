import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name:'power'
})
export class PowerPipe implements PipeTransform{
	transform(input:number, power:number):number{
		return Math.pow(input, power)
	}

}