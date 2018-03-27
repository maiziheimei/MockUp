import { Component, OnInit } from '@angular/core';
import { Modell} from '../modell';
import { ModellService} from '../modell.service';

@Component({
  selector: 'app-zustaende',
  templateUrl: './zustaende.component.html',
  styleUrls: ['./zustaende.component.css']
})
export class ZustaendeComponent implements OnInit {
  // public checkedModells = [
  //   {'_id': '1', 'Kriterium': 'Digitale Konnektivitaet von Maschinen'},
  //   {'_id': '3', 'Kriterium': 'Produkt als digitaler Informationstraeger'},
  //   {'_id': '4', 'Kriterium': 'Förderhilfsmittel als digitaler Informationstraeger'},
  //   {'_id': '7', 'Kriterium': 'Betriebsdatenerfassung (BDE)'},
  //   {'_id': '9', 'Kriterium': 'Methodik der Fertigungs- und Montagesteuerung'},
  //   {'_id': '14', 'Kriterium': 'Kostentransparenz'},
  //   {'_id': '20', 'Kriterium': 'Dokumentation und Analyse von Qualitaetsdaten'},
  //   {'_id': '24', 'Kriterium': 'IT-Sicherheit / Industrial Security'}
  //   ];
  allmodels: any;
  // checkedModells: any;
  displayThenBlock= true;
  cMod: any;
  checkedArray: string[] = ['1', '3' , '4' , '6' , '7' , '9' ];
  constructor(private _modellService: ModellService) { }

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.allmodels = res);
    this._modellService.changeModel(this.allmodels);
    if (this.checkedArray.indexOf('1') > -1) {
      console.log('... it works'); } else {
      console.log('... it works'); }

    // for (let i = 0; i < this.allmodels.length; i++) {
    //   if (this.allmodels[i].isSelected) {
    //     this.checkedModells.push(this.allmodels[i]);
    //     console.log(this.allmodels[i]._id, this.allmodels[i].Kriterium);
    //   }
    // }
  }

  hideThenBlock() {
    this.displayThenBlock = false;
    // console.log('..... button has been clicked ' );
  }

  openEditor(cmodle: Modell) {
    this.displayThenBlock = false;
    this.cMod = cmodle;
    const m_index = cmodle._id;
    console.log('..... the clicked cmodel.des: ', m_index);
  }

  receiveChanage($event) {
    this.displayThenBlock = $event;
  }
}

