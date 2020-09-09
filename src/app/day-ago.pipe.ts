import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayAgo'
})
export class DayAgoPipe implements PipeTransform {

  transform(value: any){
  
    if(value){

      const oneday = 24 * 60 *60 *1000; //hour * mins *sec *millsec
      const today = new Date();
      const firstDate = new Date(today.getFullYear(),today.getMonth()+1,today.getDate())

      const nextDate = new Date(value);
      const secondDate = new Date(nextDate.getFullYear(),nextDate.getMonth()+1,nextDate.getDate())

      const diffDays = Math.round(Math.abs((firstDate.getTime()-secondDate.getTime())/(oneday)))

      if(diffDays ===0){

          return 'TODAY'

      }
      else{
          return diffDays+ 'Days to go'
      }

    }
    return value;
  }

}
