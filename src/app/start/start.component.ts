import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User} from '../user';
import { UserService} from '../user.service';
import { ModellService} from '../modell.service';
import { v4 as uuid } from 'uuid';
import {DataService} from '../data.service';
import {FormControl, FormGroup} from '@angular/forms';
import { NewUser } from '../newuser';

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
  loadUser: any;
  slist: any;
  json: any;
  jsonObj: any;

  myForm = new FormGroup({
    EDI: new FormControl(),
  });


  constructor(private  sanitizer: DomSanitizer, private _userService: UserService, private http: Http,
              private  _data: DataService) {
  }

  ngOnInit() {

    this.getNewUser();
    this._userService.changeUser(this.cUser);
    this._data.selectedModels.subscribe(res => this.slist = res);
    this._data.changeGoal(this.slist);
  }


  getNewUser(): void {
    this._userService.getUser()
      .subscribe(res => this.cUser = res);
  }

  getVideoURL() {
    return this.sanitizer.bypassSecurityTrustHtml('https://www.youtube.com/embed/kQLbVVPNTMQ');
  }


  //// read a local .json file
  // onFileSelected(event) {
  //   // the code works.
  //     this.http.request('assets/Your_Kriterions_1.json')
  //     .subscribe((res) => {
  //       const resSTR = JSON.stringify(res);
  //       const resJSON = JSON.parse(resSTR);
  //       console.log(resJSON._body);
  //       this.cUser = JSON.parse(resJSON._body);
  //       this.slist = this.cUser.kriterienList;
  //       console.log('... the slist[0].k_id:', this.slist[0].kriterium_id);
  //       console.log('... the slist length:', this.slist.length);
  //       this.slist = this.cUser.kriterienList.map(x => Object.assign({}, x));
  //       console.log('... the slist[0].id: 2', this.slist[0].kriterium_id);
  //       console.log('... first kri list length:', this.cUser.kriterienList.length);
  //       this._userService.changeUser(this.cUser);
  //       this._data.changeGoal(this.slist);
  //     });
  // }

  onFileLoad (event) {
    const f = event.target.files[0];
    const reader = new FileReader();
    console.log(this);

    // Closure to capture the file information.
    reader.onload = ((theFile) => {
      console.log('load');
      console.log(this);
      return (e) => {
        try {
          console.log(this);
          const json = JSON.parse(e.target.result);
          const resSTR = JSON.stringify(json);
          console.log('... resSTR: ', resSTR);
          this.loadUser = JSON.parse(resSTR);
          this.slist = this.loadUser.kriterienList;

          this.cUser.id = this.loadUser.id;
          this.cUser.vision = this.loadUser.vision;
          this.cUser.mission = this.loadUser.mission;
          this.cUser.strategy = this.loadUser.strategy;
          this.cUser.kriterienList = this.loadUser.kriterienList;
          console.log('... mission: ', this.cUser.mission);
          console.log('... vision: ', this.cUser.vision);
          this.vision = this.loadUser.vision;
          console.log('... uuid of cUser: ', this.cUser.id);
          // alert('file content = \n' + this.slist[0].kriterium_id + '  length:' + this.slist.length);

          this._userService.changeUser(this.cUser);
          this._data.changeGoal(this.slist);

        } catch (ex) {
          alert('exception when trying to parse json = ' + ex);
        }
      };
    })(f);
   reader.readAsText(f);
    // alert('json global var has been set to parsed json of this file here it is unevaled = \n' + JSON.stringify(this.json));
  }
}
