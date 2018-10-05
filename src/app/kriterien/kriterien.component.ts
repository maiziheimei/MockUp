import { Component, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Modell } from '../modell';
import { ModellService} from '../modell.service';
import { DataService } from '../data.service';
import { SelectedModel } from '../selectedModel';
import { UserService } from '../user.service';
import { User} from '../user';
import {CRLObj, LRObj} from "../ComLR";
import {ClrService} from "../clr.service";
import {CurrencyPipe} from "@angular/common";


@Component({
  selector: 'app-kriterien',
  templateUrl: './kriterien.component.html',
  styleUrls: ['./kriterien.component.css'],
  providers: [ ModellService]
})
export class KriterienComponent implements OnInit {

  checked10th:boolean;
  // showAll = 'show Selected';
  sms = [];
  modells: any;
  lastAction: string;
  hiddenValue = new Array(42).fill(false);

  selectedAll: string = 'alle';
  // shortLong: boolean;

  saOptions= [
    'auswählen',
    'alle',
  ];

  constructor(private _modellService: ModellService, private  _data: DataService,  private _userService: UserService, private  _clrService: ClrService) { }

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.modells = res);
    this._modellService.changeModel(this.modells);
    this._data.selectedModels.subscribe(res => this.sms = res);
    this._data.changeGoal(this.sms);
    console.log('... the sms length is: ', this.sms.length);
  }

  sortModells() {
    const size = Object.keys(this.modells).length;
    console.log('... length of dbMmodels: ', size);
    // console.log('... length of modells: ', xxx);
  }


  // allParts(){
  //   console.log('... showALL click before: ', this.showAll);
  //   if(this.showAll === "show Selected") {
  //     this.shortLong = true;
  //     console.log('... hey 1 ');
  //     this.showAll = 'show All';
  //     console.log('... showALL click after: ', this.showAll);
  //   }
  //   else if(this.showAll === "show All") {
  //     console.log('... hey 2 ');
  //     this.shortLong = false;
  //     this.showAll = 'show Selected';
  //     console.log('... showALL click after: ', this.showAll);
  //   }
  //
  // }

  getCLRObjList(mod: Modell) {
    const crl_KompetenzenStr = mod.Kompetenzen;
    if (crl_KompetenzenStr != null) {
      const crl_KompetenzenList: string[] = crl_KompetenzenStr.split(';');

      const clr_list: CRLObj[] = [];
      for (const kom of crl_KompetenzenList) {
        const new_clrobj: CRLObj = new CRLObj();
        new_clrobj.competence_name = kom.trim();
        new_clrobj.learningresources = Array<LRObj> ();
        new_clrobj.learningresources = this._clrService.getLRObj(kom);
        // for ( let i = 0; i < crl_current.length; i++) {
        //   vals.push(vals[i].val);
        // }
        clr_list.push(new_clrobj);
      }
      mod.clrlist = clr_list;

      console.log('... the clr of checked model: ', mod);
    }
  }

  // selectedIndex is actually the model ID
  addItem(selectedIndex, kri, clrcontent) {
    const newItem = new SelectedModel();
    newItem.isselected = true;
    newItem.kriterium = kri;
    newItem.kriterium_id = selectedIndex;
    newItem.clrlist = clrcontent;
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

  getCheckState(model) {
    // if (this.loadUser.kriterienList.length > 0) {
    //   console.log('... this loadeUser length is: ', this.loadUser.kriterienList.length);
    // }

    if (this.sms != null) {
      // console.log('... to get the check status of model: ', mid);
      const mo =  this.sms.find(x => x.kriterium_id === model._id);
      if (mo != null) {
        model.isSelected = true;
        // console.log('... mo size is ', mo.length, mid, ' checked status is: ', mo.isselected);
        return mo.isselected; }
    } else {
      model.isSelected = false;
      return false;
    }

  }

  onSMSChange(event, i, modell){

  }

  // check or uncheck modell
  onChange(event, index, item) {
    // this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
    //
    // console.log('before: ', index, event, item);
     item.checked = event.checked;
    //
    // this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
    //
    // console.log('after: ', index, event, item);

    const checkedID = index;
    const kid = item._id;
    this.modells[checkedID].isSelected = item.checked;
    console.log('... now ', kid, ' isSelected : ',  this.modells[checkedID].isSelected );

    // retrieve ComLR list
    const mo: Modell = this.modells[checkedID];
    this.getCLRObjList(mo);

    if (item.checked)  {
      item.isSelected= true;
      if (!this.smsExist(kid)) { // not exist in sms
        this.addItem(kid, item.Kriterium, item.clrlist); // add
      }
      if (kid === '10' || kid === 10) {
        this.checked10th = true;
      }
    }
    if (!item.checked) { // uncheck
      item.isSelected= false;
      if (this.smsExist(kid)) {
        this.removeItem(kid);
      }
      if (kid === '10' || kid === 10) {
        this.checked10th = false;
      }
    }
    this._modellService.changeModel(this.modells);
    this._data.changeGoal(this.sms);

    console.log('... the persisted sms ...: ', this.sms.length);
    for (let i = 0; i < this.sms.length; i++) {
      let temp = this.modells.findIndex(x => x._id === this.sms[i].kriterium_id);
      if(temp > -1){
        this.modells[temp].isSelected  = true;
      }
      console.log(this.sms[i].kriterium_id, this.sms[i].kriterium, this.sms[i].isselected); }

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

  amount:number = 0.0;
  formattedAmount: string = '';


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


