import {Component, OnInit} from '@angular/core';
import {DownloadAlertComponent} from "./download-alert/download-alert.component";
import {AuthService} from "./auth/auth.service";
import {MatDialog} from "@angular/material";
import {Observable} from "rxjs";
import {EvaluationComponent} from "./evaluation/evaluation.component";
import {DataService} from "./data.service";
import {UserService} from "./user.service";
import {NewUser} from "./newuser";
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  onOff: Observable<boolean>;
  sms = [];
  currUser: any;

  continueLogout = false;

  constructor( private authService: AuthService, private dialog: MatDialog, private  _data: DataService, private _userService: UserService ) { }

  ngOnInit() {
    this._data.selectedModels.subscribe(res => this.sms = res);
    this._data.changeGoal(this.sms);
    this._userService.getUser().subscribe(res => this.currUser = res);
    this._userService.changeUser(this.currUser);
    this.onOff = this.authService.isLoggedIn;
  }


  onLogout() {
    // open download-alert dialog
    let dialogRef = this.dialog.open(DownloadAlertComponent);
    dialogRef.afterClosed().subscribe(result => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
      if (result == 'confirm') {
        // this._data.exportJson(this.sms, this.currUser);
        this._data.downloadAsPDF(this.sms, this.currUser);
       // this.authService.logout();
      };

      // if (result == 'cancel') {
      // to clean up the cache before logout
      this.sms = [];
      this._data.changeGoal(this.sms);
      this.currUser.uuid = uuid();
      this.currUser.mission = '';
      this.currUser.vision = '';
      this.currUser.strategy = '';
      this.currUser.kriterienList = [];
      this._userService.changeUser( this.currUser );

      this.authService.logout();
     // }

    });
  }



}
