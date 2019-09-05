import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ljust'
})
export class LjustPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let char = "0";
    if(args != null && args.char != null) { char = args.char; }
    
    let count = 2;
    if(args != null && args.count != null) { count = args.count; }

    let data = value.toString();
    while(data.length < count) {
      data = `${char}${data}`;
    }
    return data;
  }

}
