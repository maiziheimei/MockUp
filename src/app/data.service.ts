import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { SelectedModel } from './selectedModel';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
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
    {value: '3', viewValue: 'HOCH'},
    {value: '2', viewValue: 'MITTEL'},
    {value: '1', viewValue: 'NIEDRIG'},
    {value: '0', viewValue: 'KEINE'}
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
    this.downloadAsJson(file, 'Ihre_Criteria.json');
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



  // public captureScreen(elementid: string)
  // {
  //   this.printPDF();
  // }
  //
  //
  // printPDF() {
  //
  //   var data = document.getElementById('contentToConvert');
  //   html2canvas(data).then(canvas => {
  //     // Few necessary setting options
  //     var imgWidth = 180;
  //     var pageHeight = 295;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     var heightLeft = imgHeight;
  //
  //
  //     console.log("... canvas.clientHeight is: ",canvas.clientHeight );
  //     console.log("... canvas.clientWidth is: ",canvas.clientWidth );
  //     console.log("... canvas.height is: ",canvas.height );
  //     console.log("... canvas.width is: ",canvas.width );
  //
  //     const contentDataURL = canvas.toDataURL('image/png');
  //     let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  //     var position = 2;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  //     pdf.save('MYPdf.pdf'); // Generated PDF
  //   });
  //
  // }

  print(idstr) {

    var quotes = document.getElementById('contentToConvert');
    //var quotes = document.getElementById(idstr);

    html2canvas(document.querySelector('#'+idstr)).then(canvas => {
     // document.body.appendChild(canvas);

      //! MAKE YOUR PDF‚
        var pdf = new jsPDF('p', 'pt', 'letter');

        console.log("... quotes.clientHeight is: ",quotes.clientHeight );
        console.log("... canvas.Height is: ",canvas.height );

        for (var i = 0; i <= quotes.clientHeight/980; i++) {
          //! This is all just html2canvas stuff
          var srcImg  = canvas;
          var sX      = 0;
          var sY      = 980*i;// start 980 pixels down for every new page

          var sWidth  = 1000;
          var sHeight = 980;

          var dX      = 0;
          var dY      = 0;

          var dWidth  = 1000;
          var dHeight = 980;

          var onePageCanvas = document.createElement("canvas");
          onePageCanvas.setAttribute('width', '1000');
         // onePageCanvas.setAttribute('width', document.body.clientWidth.toString());
          onePageCanvas.setAttribute('height', '980');
          var ctx = onePageCanvas.getContext('2d');
          // details on this usage of this function:
          // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing

          ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

          // document.body.appendChild(canvas);
          var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

          var width         = onePageCanvas.width;
          var height        = onePageCanvas.clientHeight;

          //! If we're on anything other than the first page,
          // add another page
          if (i > 0) {
            pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
          }
          //! now we declare that we're working on that page
          pdf.setPage(i+1);
          //! now we add content to that page!
          pdf.addImage(canvasDataURL, 'PNG', 10, 40, (width*.62), (height*.62));


        }
        //! after the for loop is finished running, we save the pdf.
        pdf.save('Adaption_Kriterien.pdf');
      });
  }
}
