import { Component, OnInit, } from '@angular/core';
import { DataService } from '../data.service';
import { ModellService} from '../modell.service';
import {SelectedModel} from "../selectedModel";
import {ModellDesignComponent} from "../modell-design/modell-design.component";
import {Ist, Ziel} from "../modell";


@Component({
  selector: 'app-massnahmen',
  templateUrl: './massnahmen.component.html',
  styleUrls: ['./massnahmen.component.css']
})
export class MassnahmenComponent implements OnInit {

  // public CModells = [
  //   {'_id': '1', 'Kriterium': 'Digitale Konnektivität von Maschinen'},
  //   {'_id': '3', 'Kriterium': 'Produkt als digitaler Informationstraeger'},
  //   {'_id': '6', 'Kriterium': 'Mensch-Roboter-Kollaboration'},
  //   {'_id': '7', 'Kriterium': 'Betriebsdatenerfassung (BDE)'},
  //   {'_id': '9', 'Kriterium': 'Methodik der Fertigungs- und Montagesteuerung'},
  //   {'_id': '14', 'Kriterium': 'Kostentransparenz'},
  //   {'_id': '20', 'Kriterium': 'Dokumentation und Analyse von Qualitaetsdaten'},
  //   {'_id': '24', 'Kriterium': 'IT-Sicherheit / Industrial Security'}
  // ];
  // show = false;
  // myVar = 1;
  // balls = ['1 -> 2', '1 -> 2', '2 -> 3', '0 -> 2', '0 -> 3', '3 -> 4' ];
 //  public mass= ['Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    '1 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    '2 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    '3 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    '4 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    'Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    'Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. '];
 // public  erk= ['Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht'];
 //
 //
  ssms = [];
  CModells: any;
  itemCount: any;
  hiddenShowIst: any;
  hiddenShowZiel: any;


  constructor( private _modellService: ModellService, private  _data: DataService) {}

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.CModells = res);
    this._modellService.changeModel(this.CModells);
    this.itemCount = this.ssms.length;
    this._data.selectedModels.subscribe(res => this.ssms = res);
    this._data.changeGoal(this.ssms);
    this.hiddenShowIst = new Array(this.ssms.length).fill(false);
    this.hiddenShowZiel = new Array(this.ssms.length).fill(false);
    // console.log('... the passed on sms has ...: ', this.ssms.length);
    // for (let i = 0; i < this.ssms.length; i++) {
    //   console.log(this.ssms[i].kriterium_id, this.ssms[i].kriterium,
    //     this.ssms[i].isselected, this.ssms[i].int_priorty); }

    }

  showIst(i) {
    if (this.hiddenShowIst[i]) {
      this.hiddenShowIst[i] = false;
    } else {
      this.hiddenShowIst[i] = true;
    }
  }
    showZiel(i) {
      if (this.hiddenShowZiel[i]) {
        this.hiddenShowZiel[i] = false;
      } else {
        this.hiddenShowZiel[i] = true;
      }
    }

  public get_izIDs (cdModel: SelectedModel, iz:string) {
    if(iz === 'i') {
      const temp_ist_ids = cdModel.Iste.map(function (ist) {
        return ist.id;
      });
      return temp_ist_ids.join(',');
    }
    if(iz === 'z') {
      const temp_ziel_ids = cdModel.Ziele.map(function (ziel) {
        return ziel.id;
      });
      return temp_ziel_ids.join(',');
    }
    return 'N';
  }

  get_izContent (cdModel: SelectedModel, iz:string) {
    if(iz === 'i') {
      const temp_ist_contents = cdModel.Iste.map(function (ist) {
        if(ist.content !== null) {
          return 'Ist_' + ist.id + ': ' + ist.content;
        } });
      return temp_ist_contents.join('\n\n');
    }

    if(iz === 'z') {
      const temp_ziel_contents = cdModel.Ziele.map(function (ziel) {
        if(ziel.content !== null){
        return 'Ziel_' + ziel.id + ': ' + ziel.content;
        } });
      return temp_ziel_contents.join('\n\n');
    }

  }



  // updateIZnote() {
  //   if (this.ssms.length >0) {
  //     for(const entry of this.ssms) {
  //       for(let i=0; i< entry.Auspraegung_note.length; i++) {
  //         if(entry.Auspraegung_note[i] !== null) {
  //           this.updateIZ_List(i, entry);
  //         }
  //
  //       }
  //
  //     }
  //   }
  // }
  //
  //
  // updateIZ_List(i: number, entry: SelectedModel) {
  //   const temp_ist_ids = entry.Iste.map(function (ist) {
  //     return ist.id;
  //   });
  //
  //   const temp_ziel_ids = entry.Ziele.map(function (ziel) {
  //     return ziel.id;
  //   });
  //
  //   if(this.existObj (i, temp_ist_ids) && this.existObj(i,temp_ziel_ids)) {
  //     this.updateNote(entry, temp_ist_ids, 'i', i);
  //     this.updateNote(entry,temp_ziel_ids, 'z',i);
  //   }
  //   if(this.existObj (i, temp_ist_ids) && !this.existObj(i,temp_ziel_ids)) { this.updateNote(entry, temp_ist_ids, 'i', i);}
  //   if(!this.existObj (i, temp_ist_ids) && this.existObj(i,temp_ziel_ids)) { this.updateNote(entry,temp_ziel_ids, 'z',i);}
  //
  // }
  //
  // existObj (c_index, iz_list) {
  //   return iz_list.findIndex(x=> parseInt(x) === c_index)> -1;
  // }
  //
  // updateNote(entry: SelectedModel,list_ids, iz, i) {
  //  // let tp = list_ids.findIndex(x => parseInt(x.id) === i);
  //   if (iz = 'i') {
  //     entry.Iste.find( x => x.id === i).note = entry.Auspraegung_note[i];
  //   }
  //   if (iz = 'z') {
  //     entry.Ziele.find( x => x.id === i).note = entry.Auspraegung_note[i];
  //   }
  // }

}
