import { Pipe, PipeTransform } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';

@Pipe({
  name: 'chrono',
  pure: false
})
export class ChronoPipe implements PipeTransform {

  transform(value: Chrono, formattage: string): string {

    let mm = value.minutes < 10 ? "0"+value.minutes : value.minutes;
    let ss = value.seconds < 10 ? "0"+value.seconds : value.seconds;
    
    switch(formattage){
      case 'deuxPoints':
          return mm + ":" + ss;
      case 'short':
          return mm + "m" + ss +"s";
      case 'long':
          return mm + " minutes et " + ss +" secondes";
    }

    return "";
  }
  

}
