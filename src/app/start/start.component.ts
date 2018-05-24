import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {User} from '../user';
import {UserService} from '../user.service';
import {ModellService} from '../modell.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [ UserService]
})
export class StartComponent implements OnInit {

  vision = 'Was ist Ihre Vision?';
  mission = 'Was ist Ihre Mission?';
  strategy = 'Was sind Ihre Strategische Ziele? (z.B. für 6 Monate) ';
  cUser: User;

  constructor(private  sanitizer: DomSanitizer, private _userService: UserService) { }

  ngOnInit() {
    this.getNewUser();
    this._userService.changeUser(this.cUser);
  }


  getNewUser(): void {
    this._userService.getUser()
      .subscribe(res => this.cUser = res);
  }

  getVideoURL() {
    return this.sanitizer.bypassSecurityTrustHtml('https://www.youtube.com/embed/kQLbVVPNTMQ');
  }
}
