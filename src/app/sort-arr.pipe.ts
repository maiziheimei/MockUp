import { Pipe, PipeTransform } from '@angular/core';
import { SelectedModel } from './selectedModel';

@Pipe({
  name: 'sortArr'
})

export class SortArrPipe  implements PipeTransform {

  transform(array: any[], field: string): any[] {
      array.sort((a: any, b: any) => {
        if (a[field] * 1 < b[field] * 1) {
          return -1;
        } else if (a[field] * 1 > b[field] * 1) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
}
