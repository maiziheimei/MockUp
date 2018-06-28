import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { SelectedModel } from './selectedModel';

@Injectable()
export class DataService {

  constructor() { }

  // this used to persist the selected models, which will be used by all the other pages
  private seModels = new BehaviorSubject<any>([]);
  selectedModels = this.seModels.asObservable();

  changeGoal(selectedModels) {
    this.seModels.next(selectedModels);
  }

}
