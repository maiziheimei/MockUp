import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {ComLR, LRObj} from './ComLR';

@Injectable({
  providedIn: 'root'
})
export class ClrService {
  testdata: ComLR[];

  constructor(private http: Http) {
    this.http.get('assets/learningResource.json')
      .map(res => res.json())
      .subscribe(data => this.testdata = data,
        err => console.log(err),
        () => console.log(this.testdata.length + ' comlearningResource got from local json file' ));
  }

  // to get learning resource of a competence
  public getLRObj(compt_name: string): LRObj[] {
    // console.log('... again the testdata.length:  ' + this.testdata.length);
    for (const entry of this.testdata) {
      if (compt_name.indexOf('D3') > -1) {
        console.log('...  D3 index at: ' + compt_name.indexOf('D3') );
      }
      if (entry.competence_name === compt_name || compt_name.indexOf(entry.competence_id) > -1 ) {
        console.log('... to get lr:  ' + entry.LearningResources[0].lr_name + '...' + entry.LearningResources[0].lr_link);
        return entry.LearningResources;
      }
    }
    return null;
  }
}
