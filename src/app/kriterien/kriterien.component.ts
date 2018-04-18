import { Component, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Modell } from '../modell';
import { ModellService} from '../modell.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-kriterien',
  templateUrl: './kriterien.component.html',
  styleUrls: ['./kriterien.component.css'],
  providers: [ ModellService]
})
export class KriterienComponent implements OnInit {
  // showUnderline = true;
  sms = [];
  itemCount: any;
  modells: any;
  hiddenValue = new Array(42).fill(false);
  currClass = 'fa fa-check-circle-o';
  // selectedIDs: string[] = ['1', '3', '5', '6'];
  selectedIDs = new Array(42);
  constructor(private _modellService: ModellService, private  _data: DataService) {
  }

  ngOnInit() {
    //  // call modellService method to init values from mongodb
    // this._modellService.getModells().subscribe(resModellData => this.modells = resModellData);
    this._modellService.sharedModells.subscribe(res => this.modells = res);
    this._modellService.changeModel(this.modells);
    this.itemCount = this.sms.length;
    this._data.selectedModels.subscribe(res => this.sms = res);
    this._data.changeGoal(this.sms);
    }


  addItem(selectedIndex) {
    this.sms[selectedIndex] = true;
    this._data.changeGoal(this.sms);
  }

  removeItem(selectedIndex) {
    this.sms[selectedIndex] = false;
    this._data.changeGoal(this.sms);
  }

  // check or uncheck modell
  onChange(event, index, item) {
    item.checked = !item.checked;
    const checkedID = index;
    this.modells[checkedID].isSelected = item.checked;
    console.log('... now hasChecked ...: ');

    for (let i = 0; i < this.modells.length; i++) {
      if (this.modells[i].isSelected) {
        this.addItem(i);
      } else {
        this.removeItem(i);
      }
    }
    // console.log('... from selectedIDs ...: ', this.selectedIDs);
    // this._modellService.changeModel(this.modells);
    console.log('... the persisted sms ...: ', this.sms.toString());
    }

  // to expand the Beschreibung section
  showBeschreibung(i) {
    if (this.hiddenValue[i]) {
      this.hiddenValue[i] = false;
    } else {
      this.hiddenValue[i] = true;
    }
  }

  // // CSS binding properties
  // makeChange(checked_index) {
  //   console.log('HELLO');
  //   if (this.currClass === 'fa fa-check-circle-o') {
  //     this.currClass = 'fa fa-check-circle';
  //     this.modells[checked_index].isSelected = true;
  //   } else {
  //       this.currClass = 'fa fa-check-circle-o';
  //       this.modells[checked_index].isSelected = false;
  //     }
  //   this._modellService.changeModel(this.modells);
  //   }
  }


