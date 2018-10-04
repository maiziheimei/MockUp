import { Component, OnInit,Inject } from '@angular/core';
import { DataService } from '../data.service';
import { ModellService} from '../modell.service';
import { DomSanitizer } from '@angular/platform-browser';
import { element} from 'protractor';
import { forEach} from '@angular/router/src/utils/collection';
import { UserService} from '../user.service';
import { MassnahmenComponent } from "../massnahmen/massnahmen.component";
import {SelectedModel} from "../selectedModel";
import {ClrviewComponent} from "../clrview/clrview.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  providers:[ MassnahmenComponent ],
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  sms = [];
  tmpArray: any = [];
  number = 0;

  currentUser: any;
  CModells: any;

  itemCount: any;
  balls = ['1 -> 2', '1 -> 2', '2 -> 3', '0 -> 2', '0 -> 3'];
  resJsonResponse: any;
  downloadJsonHref: any;
  constructor( private _modellService: ModellService, private  _data: DataService, private sanitizer: DomSanitizer, private _userService: UserService, private _massna: MassnahmenComponent, public dialog: MatDialog) {}

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.CModells = res);
    this._modellService.changeModel(this.CModells);
    this.itemCount = this.sms.length;
    this._data.selectedModels.subscribe(res => this.sms = res);
    this._data.changeGoal(this.sms);
    this.number = 0;
    for (const s of this.sms) {
     if ( s.isEvaluated ) {this.number ++; }
    }
    this._userService.getUser().subscribe(res => this.currentUser = res);
    this._userService.changeUser(this.currentUser);
  }



  // generateDownloadJsonUri() {
  //   const theJSON = JSON.stringify(this.resJsonResponse);
  //   const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
  //   this.downloadJsonHref = uri;
  // }

  save2Json() {
    this._data.exportJson(this.sms, this.currentUser);

  }

 //  public exportJson(sms): void {
 //    // console.log(this.sms);
 //    // this.tmpArray.push(this.currentUser);
 //    const arrForJson = [];
 //    console.log ('... the current user: ', this.currentUser);
 //    // this will leave out the ones of unchecked
 //    for (let i = 0; i < this.sms.length; i ++) {
 //     // if (this.sms[i].isEvaluated) {
 //      //  // this.tmpArray.push(this.sms[i]);
 //        arrForJson.push(this.sms[i]);
 //     // }
 //    }
 //
 //    //  this.currentUser.kriterienList = this.arrForJson;
 //    this.currentUser.kriterienList = arrForJson.map(x => Object.assign({}, x));
 //    //  this.tmpArray.push(this.currentUser);
 //    //  // this.tmpArray.push(this.arrForJson);
 //
 //   // const c = JSON.stringify(this.tmpArray);
 //    const c = JSON.stringify(this.currentUser);
 //    const file = new Blob([c], {type: 'text/json'});
 //    this.download(file, 'Your_Kriterions.json');
 //  }
 // download(blob, filename) {
 //    if (window.navigator.msSaveOrOpenBlob) { // IE10+
 //      window.navigator.msSaveOrOpenBlob(blob, filename);
 //    } else { // Others
 //      const a = document.createElement('a'),
 //        url = URL.createObjectURL(blob);
 //      a.href = url;
 //      a.download = filename;
 //      document.body.appendChild(a);
 //      a.click();
 //      setTimeout(function() {
 //        document.body.removeChild(a);
 //        window.URL.revokeObjectURL(url);
 //      }, 0);
 //    }
 //  }

// check or uncheck
  onChange(event, index, item) {
    this.number = 0;
    item.checked = event.checked;
    this.sms[index].isEvaluated = item.checked;

    for (const entry of this.sms) {
      if (entry.isEvaluated) {
        this.number += 1;
        console.log ('item is checked', entry.isEvaluated); }
    }
  }

  get_izIDs(cdModel: SelectedModel, iz:string){
     return this._massna.get_izIDs(cdModel, iz);
  }


  preview() {
    const arrForJson = [];
    for (let i = 0; i < this.sms.length; i ++) {
      arrForJson.push(this.sms[i]);
    }

    this.currentUser.kriterienList = arrForJson.map(x => Object.assign({}, x));
    const objJSON = JSON.stringify(this.currentUser, null, '\t');
    console.log('.... preview json: ', objJSON);

    this.openDialogPreview(objJSON);
  }


  openDialogPreview( TestTree_DATA: any): void {

    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '1200px',
      height: '1000px',
      // data: { name: this.test_name, animal: this.test_animal }
      data: <JSON> TestTree_DATA
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The preview dialog was closed; ');
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog-component.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
