import { Component, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Modell } from '../modell';
import { ModellService} from '../modell.service';
import { DataService } from '../data.service';
import { SelectedModel } from '../selectedModel';



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
  lastAction: string;
  hiddenValue = new Array(42).fill(false);
  // currClass = 'fa fa-check-circle-o';
  // // selectedIDs: string[] = ['1', '3', '5', '6'];
  // selectedIDs = new Array(42);
  constructor(private _modellService: ModellService, private  _data: DataService) {
  }

  ngOnInit() {
    //  // call modellService method to init values from mongodb
    // this._modellService.getModells().subscribe(resModellData => this.modells = resModellData);
    this._modellService.sharedModells.subscribe(res => this.modells = res);
 //   console.log('... get from DB, the modell length is: ', this.modells.length);
    this._modellService.changeModel(this.modells);
    this.itemCount = this.sms.length;
    console.log('... the sms length is: ', this.itemCount);
    this._data.selectedModels.subscribe(res => this.sms = res);
    this._data.changeGoal(this.sms);
  }

  // selectedIndex is actually the model ID
  addItem(selectedIndex, kri) {
    const newItem = new SelectedModel();
    newItem.isselected = true;
    newItem.kriterium = kri;
    newItem.kriterium_id = selectedIndex;
    if (this.sms.length === 0) {
      this.sms[0] = newItem;
      console.log('... to add the checked model: ', selectedIndex);
    } else {
      this.sms.push(newItem);
      console.log('... to push the checked model: ', selectedIndex); }
    // this.sms[selectedIndex] = true;
    this._data.changeGoal(this.sms);
  }

  // selectedIndex is actually the model ID
  removeItem(selectedIndex) {
    const cindex = this.sms.findIndex(ele => ele.kriterium_id === selectedIndex);
    this.sms.splice(cindex, 1);
    console.log('... to remove the unchecked model: ', selectedIndex);
    this._data.changeGoal(this.sms);
  }

  getCheckState(mid) {
    if (this.sms != null) {
      // console.log('... to get the check status of model: ', mid);
      const mo =  this.sms.find(x => x.kriterium_id === mid);
      if (mo != null) {
        // console.log('... mo size is ', mo.length, mid, ' checked status is: ', mo.isselected);
        return mo.isselected; }
    } else {
      return false;
    }
  }

  // check or uncheck modell
  onChange(event, index, item) {
    this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;

    console.log('before: ', index, event, item);
     item.checked = event.checked;

    this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;

    console.log('after: ', index, event, item);



    const checkedID = index;
    const kid = item._id;
    this.modells[checkedID].isSelected = item.checked;
    console.log('... now ', kid, ' hasChecked ...: ');

    if (item.checked)  {
      if (!this.smsExist(kid)) { // not exist in sms
        this.addItem(kid, item.Kriterium); // add
         }
    }
    if (!item.checked) { // uncheck
      if (this.smsExist(kid)) {
        this.removeItem(kid);
      }
  }
    this._modellService.changeModel(this.modells);

    console.log('... the persisted sms ...: ', this.sms.length);
    for (let i = 0; i < this.sms.length; i++) {
      console.log(this.sms[i].kriterium_id, this.sms[i].isselected); }
  }

  smsExist(kid) {
    if (this.sms.length === 0)  { return false; } else {
      const existIndex = this.sms.findIndex(ele => ele.kriterium_id === kid);
      if (existIndex > -1) { return true; } else { return false; }
    }
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


