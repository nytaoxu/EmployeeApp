import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, unit: string) {
    let temperature = null;
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        temperature = (value - 32) / 1.8;
        return temperature.toFixed(2);
      } else if (unit === 'F') {
        temperature = value * 1.8 + 32;
        return temperature.toFixed(2);
      }
    }
  }

}
