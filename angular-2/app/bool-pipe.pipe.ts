import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolPipe'
})
export class BoolPipePipe implements PipeTransform {

  transform(value: boolean, ...args: boolean[]): unknown {
    if(value)
    {
        return "Yes"
    }
    else
    {
      return "No"
    }
  }

}
