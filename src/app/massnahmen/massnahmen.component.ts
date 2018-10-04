import { Component, OnInit, } from '@angular/core';
import { DataService } from '../data.service';
import { ModellService} from '../modell.service';
import { SelectedModel} from "../selectedModel";
import {Ist, Modell, Ziel} from "../modell";
import {ModellDesignComponent} from "../modell-design/modell-design.component";


@Component({
  selector: 'app-massnahmen',
  templateUrl: './massnahmen.component.html',
  styleUrls: ['./massnahmen.component.css'],
  providers:[ ModellDesignComponent]
})
export class MassnahmenComponent implements OnInit {
  ssms = [];
  CModells: any;
  itemCount: any;
  hiddenShowIst: any;
  hiddenShowZiel: any;
  money: number =13495;


  constructor( private _modellService: ModellService, private  _data: DataService, private mdc: ModellDesignComponent) {}

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
          return 'Ist ' + ist.id + ': ' + ist.content;
        } });
      return temp_ist_contents.join('\n\n');
    }

    if(iz === 'z') {
      const temp_ziel_contents = cdModel.Ziele.map(function (ziel) {
        if(ziel.content !== null){
        return 'Ziel ' + ziel.id + ': ' + ziel.content;
        } });
      return temp_ziel_contents.join('\n\n');
    }

  }

  openCLRDialog(cm: SelectedModel): void {
    this.mdc.openDialog3(cm);
  }

  // currencyInputChanged(value) {
  //   var num = value.replace('.', ",");
  //   return Number(num);
  // }
  //
  // validateOnlyNumbers(evt) {
  //   var theEvent = evt || window.event;
  //   var key = theEvent.keyCode || theEvent.which;
  //   key = String.fromCharCode( key );
  //   var regex = /[0-9]|\./;
  //   if( !regex.test(key) ) {
  //     theEvent.returnValue = false;
  //     if(theEvent.preventDefault) theEvent.preventDefault();
  //   }
  // }
  //
  // valuechange(newValue) {
  //   this.money = newValue;
  //   console.log(newValue)
  // }

  update(value: number, cmodel: SelectedModel) {
    this.money = value;
    cmodel.Kosten = value.toString();
  }


  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
