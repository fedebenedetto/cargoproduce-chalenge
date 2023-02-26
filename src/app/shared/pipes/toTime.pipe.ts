import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: any): any {
    let miliSecond = value * 1000
    let time = moment(miliSecond).format('mm:ss')
    return time
  }

}
