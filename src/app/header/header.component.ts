
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {DownloadAlertComponent} from "../download-alert/download-alert.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  // onLogout() {
  //     console.log('... the current this.isLoggedIn', this.isLoggedIn$);
  //     // open download-alert dialog
  //     let dialogRef = this.dialog.open(DownloadAlertComponent);
  //     dialogRef.afterClosed().subscribe(result => {
  //       // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
  //       if (result == 'confirm') {
  //         console.log('... to download');
  //       }
  //     });
  //
  //   this.authService.logout();
  // }
}
