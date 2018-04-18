import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  constructor() { }

  // this used to persist the selected models, which will be used by all the other pages
  private seModels = new BehaviorSubject<boolean[]>( new Array(42));
  selectedModels = this.seModels.asObservable();

  changeGoal(selectedModels) {
    this.seModels.next(selectedModels);
  }

}
