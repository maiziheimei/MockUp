import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { SelectedModel } from './selectedModel';
import * as jsPDF from 'jspdf';
import {PriKid} from "./modell";
import {v4 as uuid} from "uuid";

@Injectable()
export class DataService {

  constructor() { }

  // this used to persist the selected models, which will be used by all the other pages
  private seModels = new BehaviorSubject<any>([]);
  selectedModels = this.seModels.asObservable();

  changeGoal(selectedModels) {
    this.seModels.next(selectedModels);
  }


  public priorities = [
    {value: '3', viewValue: 'hoch'},
    {value: '2', viewValue: 'mittel'},
    {value: '1', viewValue: 'niedrig'},
    {value: '0', viewValue: 'keiner'}
  ];

  public sortMulti(obj: SelectedModel[]) {

      const newArray = obj.map(o => {
        return { pri: o.prioirtyNum, kid: o.kriterium_id };
      });

      console.log('.... 1111');
      newArray.forEach(element => {
        console.log(element);
      });

     obj.sort(function(a, b) {
        return b['prioirtyNum'] - a['prioirtyNum'] || a['kriterium_id'] - b['kriterium_id'];
      });

      console.log('.... sorted by new multity: ');
      obj.forEach(element => {
        console.log(element.kriterium_id);
      });
     return obj;

  }




  // public sortMultiple(obj: SelectedModel[]) {
  //   const newArray = obj.map(o => {
  //     return { pri: o.priority, kid: o.kriterium_id };
  //   });
  //
  //   // console.log('.... 1111');
  //   // newArray.forEach(element => {
  //   //   console.log(element);
  //   // });
  //
  //   let tempArr = [];
  //  newArray.forEach(element => {
  //     let pk = new PriKid();
  //     pk.pri = 3 - this.priorities.findIndex(x => x.viewValue === element.pri);
  //     pk.kid = parseInt(element.kid);
  //     tempArr.push(pk);
  //   });
  //
  //   console.log('.... 222');
  //   tempArr.forEach(element => {
  //     console.log(element);
  //   });
  //
  // // newArray.forEach(o => o.pri = (this.priorities.find(x => x.viewValue === o.pri).value) );
  //
  //   // const newObj = tempArr.map(o => {
  //   //   return { npri: parseInt(o.pri), nkid: parseInt(o.kid) };
  //   // });
  //
  //  tempArr.sort(function(a, b) {
  //     return b['pri'] - a['pri'] || a['kid'] - b['kid'];
  //   });
  //
  //  console.log('.... xxxx');
  //  let newObj2: SelectedModel[] =[];
  //  for(let element of tempArr){
  //    newObj2.push(obj.find(x=> x.kriterium_id === element.kid.toString()));
  //    console.log(element);
  //  }
  //
  //   console.log('.... yyy');
  //   newObj2.forEach(element => {
  //     console.log(element.kriterium_id);
  //   });
  //  return newObj2;
  // }

 public exportJson(sms: any[], currentUser): void {
    const arrForJson = [];
    for (let i = 0; i < sms.length; i ++) {
      arrForJson.push(sms[i]);
    }
    currentUser.kriterienList = arrForJson.map(x => Object.assign({}, x));
    const c = JSON.stringify(currentUser, null, '\t');
    const file = new Blob([c], {type: 'text/json'});
    this.downloadAsJson(file, 'Your_Criteria.json');
  }

  downloadAsJson(blob, filename) {
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

  downloadAsPDF(sms: any[], currentUser) {

    let doc = new jsPDF();
    doc.setFont('helvetica');
    doc.setFontType('normal');
    doc.setFontSize(10);

    const arrForJson = [];
    for (let i = 0; i < sms.length; i ++) {
      arrForJson.push(sms[i]);
      let jsonStr = JSON.stringify(sms[i], null, '\t')
      doc.text(jsonStr, 5, 2);
      if(i < sms.length -1) {
        doc.addPage();
      }
    }
   // currentUser.kriterienList = arrForJson.map(x => Object.assign({}, x));
   // const jsonStr = JSON.stringify(currentUser, null, '\t');

   doc.save('your_criteria.pdf');
  }



}
