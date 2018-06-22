import { Pipe, PipeTransform } from '@angular/core';
import { SelectedModel } from './selectedModel';

@Pipe({
  name: 'sortArr'
})
export class SortArrPipe implements PipeTransform {

  transform(value: SelectedModel[]): SelectedModel[] {
    return value.sort((t1: SelectedModel, t2: SelectedModel) => {
      if (t1.priority > t2.priority) {
        return 1;
      }

      if (t1.priority < t2.priority) {
        return -1;
      }
      return 0; });
    }

}
