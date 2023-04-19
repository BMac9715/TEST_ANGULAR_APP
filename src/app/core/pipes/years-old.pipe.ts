import { Pipe, PipeTransform } from '@angular/core';

import * as _moment from 'moment';

@Pipe({
  name: 'yearsold'
})
export class YearsOldPipe implements PipeTransform {
  transform(value: any, mode: boolean): string | number {
    if(value){
        const today = _moment();
        const years = today.diff(value, 'years');

        if(years > 0) {
            return mode ? years : `${years} Años`;
        }
    }

    return mode ? 0 : '';
  }
}
