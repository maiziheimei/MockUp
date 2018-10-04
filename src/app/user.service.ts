import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { NewUser } from './newuser';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http, Response } from '@angular/http';
import {v4 as uuid} from 'uuid';

@Injectable()
export class UserService {

  constructor() { }

//  private user = new ReplaySubject<User>(1);
  private user = new BehaviorSubject<User>( null);
  currentUser = this.user.asObservable();


  changeUser(currentUser) {
    this.user.next(currentUser);
  }


 getUser(): Observable<User> {
      return of(NewUser);
 }


}
