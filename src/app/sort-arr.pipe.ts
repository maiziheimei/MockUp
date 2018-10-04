import { Pipe, PipeTransform } from '@angular/core';
import { SelectedModel } from './selectedModel';

@Pipe({
  name: 'sortArr'
})

export class SortArrPipe  implements PipeTransform {

  transform(array: any[], field: string, ad: string): any[] {

    if(array !== null && array[0].priority !== undefined) {
      this.editPriority(array);
    }

    if (array !== null) {
      array.sort((a: any, b: any) => {
        if (a[field] * 1 < b[field] * 1) {
          return -1;
        } else if (a[field] * 1 > b[field] * 1) {
          return 1;
        } else {
          return 0;
        }
      });

      if(array !== null && array[0].priority !== undefined) {
        this.changePriBack(array);
      }

      // ad as string, either 'ascending' or 'descending'
      if(ad === 'descending') {
        return array.reverse();
      }

      return array;
    }
  }



  editPriority(array: SelectedModel[]) {
    for (let ar of array) {
      console.log('... ar.priority: ', ar.priority);
      if(ar.priority.charAt(0) === 'M') { ar.priority = '2'; }
      if(ar.priority.charAt(0) === 'H') { ar.priority = '3'; }
      if(ar.priority.charAt(0) === 'L') { ar.priority = '1'; }
      if(ar.priority.charAt(0) === 'N') { ar.priority = '0'; }
    }
  }

  changePriBack(array: SelectedModel[]) {
    for (let ar of array) {
      if(ar.priority === '3') { ar.priority = 'High'; }
      if(ar.priority === '2') { ar.priority = 'Medium'; }
      if(ar.priority === '1') { ar.priority = 'Low'; }
      if(ar.priority === '0') { ar.priority = 'None'; }
    }
  }
}
