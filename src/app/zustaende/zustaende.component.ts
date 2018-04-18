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
  int_ist= 0; int_ziet= 0; int_priorty= 0;
  constructor(private _modellService: ModellService, private _data: DataService) { }

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.allmodels = res);
    this._modellService.changeModel(this.allmodels);
    this._data.selectedModels.subscribe(res => this.checkedModells = res);
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

