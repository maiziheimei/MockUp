import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from './user';
import {Observable} from 'rxjs';
import {NewUser} from './newuser';

@Injectable()
export class UserService {
  private user = new BehaviorSubject<User>(null);
  currentUser = this.user.asObservable();
  constructor() {}

  changeUser(currentUser) {
    this.user.next(currentUser);
  }

 getUser(): Observable<User> {
   return Observable.of(NewUser);
 }
 }
