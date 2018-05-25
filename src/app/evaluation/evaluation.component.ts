import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ModellService} from '../modell.service';
import { DomSanitizer } from '@angular/platform-browser';
import {element} from 'protractor';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  // public CModells = [
  //   {'_id': '1', 'Kriterium': 'Digitale Konnektivität von Maschinen'},
  //   {'_id': '3', 'Kriterium': 'Produkt als digitaler Informationstraeger'},
  //   {'_id': '6', 'Kriterium': 'Mensch-Roboter-Kollaboration'},
  //   {'_id': '7', 'Kriterium': 'Betriebsdatenerfassung (BDE)'},
  //   {'_id': '9', 'Kriterium': 'Methodik der Fertigungs- und Montagesteuerung'}
  // ];

  sms = [];
  tmpArray: any = [];
  number = 0;
  // evaluated: Array<boolean> = [];
  // evaluated: any;
  CModells: any;
  itemCount: any;
  balls = ['1 -> 2', '1 -> 2', '2 -> 3', '0 -> 2', '0 -> 3'];
  resJsonResponse: any;
  downloadJsonHref: any;
  constructor( private _modellService: ModellService, private  _data: DataService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.CModells = res);
    this._modellService.changeModel(this.CModells);
    this.itemCount = this.sms.length;
    this._data.selectedModels.subscribe(res => this.sms = res);
    this._data.changeGoal(this.sms);
    this.number = 0;
    for (const s of this.sms) {
     if ( s.isEvaluated ) {this.number ++; }}
  }

  preview() {
    const objJSON = JSON.stringify(this.tmpArray);
    console.log(objJSON);
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.resJsonResponse);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }
  exportJson(): void {
    console.log(this.sms);
    for (let i = 0; i < this.sms.length; i ++) {
      if (this.sms[i].isEvaluated) {
        this.tmpArray.push(this.sms[i]); }
    }

    const c = JSON.stringify(this.tmpArray);
    const file = new Blob([c], {type: 'text/json'});
    this.download(file, 'Your_Kriterions.json');
  }
  download(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) { // IE10+
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else { // Others
      const a = document.createElement('a'),
        url = URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

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

}
