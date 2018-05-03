import { Component, OnInit } from '@angular/core';
import { Modell} from '../modell';
import { ModellService} from '../modell.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-zustaende',
  templateUrl: './zustaende.component.html',
  styleUrls: ['./zustaende.component.css'],
  providers: [ ModellService]
})
export class ZustaendeComponent implements OnInit {
  allmodels: any;
  checkedModells: any;
  displayThenBlock= true;
  cMod: any;
  csMod: any;
  int_ist= 0; int_ziet= 0; int_priorty= 0;
  constructor(private _modellService: ModellService, private _data: DataService) { }

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.allmodels = res);
    this._modellService.changeModel(this.allmodels);
    this._data.selectedModels.subscribe(res => this.checkedModells = res);
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
  }

  receiveChanage($event) {
    this.displayThenBlock = $event;
  }
}

