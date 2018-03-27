import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Modell } from './modell';


@Injectable()
export class ModellService {
  // check out the "server.js" file, "app.use  ..."
  private _getUrl = '/api/models';
  private _postUrl = '/api/model';
  private _putUrl = '/api/model/';
  private _deleteUrl = '/api/model/';
  private dbModels = new BehaviorSubject<any>(null);
  sharedModells = this.dbModels.asObservable();
  constructor(private _http: Http) {
    this._http.get(this._getUrl)
      .map((response: Response) => response.json() )
      .subscribe(data => this.dbModels.next(data),
        err => console.log(err),
        () => console.log('Completed'));
  }
  getModells() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json() );
  }

  addModelDoc(md: Modell) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(md), options)
      .map((response: Response) => response.json());
  }

  updateModelDoc(md: Modell) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + md._id, JSON.stringify(md), options)
      .map((response: Response) => response.json());
  }

  deleteModelDoc(md: Modell) {
    return this._http.delete(this._deleteUrl + md._id)
      .map((response: Response) => response.json());
  }

  changeModel(sharedModells) {
    this.dbModels.next(sharedModells);
  }

} // end of Class
