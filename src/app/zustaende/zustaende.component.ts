import { Component, OnInit } from '@angular/core';
import { Modell} from '../modell';
import { ModellService} from '../modell.service';
import { DataService } from '../data.service';
import { SelectedModel } from '../selectedModel';
import { SortArrPipe } from '../sort-arr.pipe';

@Component({
  selector: 'app-zustaende',
  templateUrl: './zustaende.component.html',
  styleUrls: ['./zustaende.component.css'],
  providers: [ ModellService]
})
export class ZustaendeComponent implements OnInit {
  allmodels: any;
  checkedModells: SelectedModel[];
  displayThenBlock= true;
  cMod: any;
  csMod: any;
  int_ist= 0; int_ziet= 0; int_priorty= 0;
  constructor(private _modellService: ModellService, private _data: DataService) { }

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.allmodels = res);
    this._modellService.changeModel(this.allmodels);
    this._data.selectedModels.subscribe(res => this.checkedModells = res);
    this._data.changeGoal(this.checkedModells);
  }

  // the same code as smsExist(kid) of Kriterien.componenet.ts
  isChecked(cid) {
    if (this.checkedModells.length === 0)  {
      console.log('... 0 elements in checkedModells...: ');
      return false; } else {
      const existIndex = this.checkedModells.findIndex(ele => ele.kriterium_id === cid);
      if (existIndex > -1) { return true; } else { return false; }
    }
  }
  hideThenBlock() {
    this.displayThenBlock = false;
    // console.log('..... button has been clicked ' );
  }

  openEditor(cmodle) {
    this.displayThenBlock = false;
    const m_index = cmodle.kriterium_id;
    this.csMod = cmodle;
    this.cMod = this.allmodels.find(el => el._id === m_index);
    console.log('..... the clicked cmodel.des: ', m_index);
    console.log('..... the clicked cmodel.priorty: ', cmodle.priority);
    console.log('..... the clicked cmodel: ', cmodle);
  }

  sortPK(arr){
   // this.checkedModells = this._data.sortMultiple(arr);
    this.checkedModells = this._data.sortMulti(arr);

    console.log('.... ccc');
    this.checkedModells.forEach(element => {
      console.log(element);
    });

    return this.checkedModells;
  }

  receiveChanage($event) {
    this.displayThenBlock = $event;
  }

  getPriorityLevel(sms: SelectedModel) {
    return sms.priority.charAt(0);
  }

  // getFullPri(sms) {
  //   return this._data.priorities.find(x => x.value === sms.priority);
  // }

  getISTE(csModell: SelectedModel, iz: string) {
    let temp_list: any;
    if (iz === 'i') {
      temp_list = csModell.Iste;
    } else if (iz === 'z') {
      temp_list = csModell.Ziele;
    } else {
      temp_list = [];
    }

    if(temp_list.length === 0) {
      return 'N';
    } else {
      const temp_ist_ids = temp_list.map(function (ist) {
        return ist.id;
      });
      console.log('... tge temp_istZiel_string: ', temp_ist_ids.join(','));
      return temp_ist_ids.join(',');
    }
  }

}

