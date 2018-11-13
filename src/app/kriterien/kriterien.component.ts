import { Component, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Modell } from '../modell';
import { ModellService} from '../modell.service';
import { DataService } from '../data.service';
import { SelectedModel } from '../selectedModel';
import { UserService } from '../user.service';
import { User} from '../user';
import {AusPair, CRLObj, LRObj} from "../ComLR";
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
  modells = [];
  lastAction: string;
  hiddenValue = new Array(47).fill(false);
  dependencyStr = "Abhängigkeiten: ";

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


  getKirDependency(mod: Modell) {
    const kirID = parseInt( mod._id);
    let tempDependent : AusPair[] = [];
    tempDependent= this._clrService.getAusPair(kirID);

    mod.dependentAusp = tempDependent;
    mod.dependentType = this._clrService.getDependenType(kirID);
    mod.Korkri = this.getKorrelierendemKriterium(mod);

    console.log('... the dependecy of checked model: ', mod);
  }

  // selectedIndex is actually the model ID
  addItem(selectedIndex, kri, clrcontent, ausP, deType, kk) {
    const newItem = new SelectedModel();
    newItem.isselected = true;
    newItem.kriterium = kri;
    newItem.kriterium_id = selectedIndex;
    newItem.clrlist = clrcontent;
    newItem.dependentAusp = ausP;
    newItem.dependentType = deType;
    newItem.Korkri = kk;

    if (this.sms.length === 0) {
      this.sms[0] = newItem;
     // console.log('... to add the checked model: ', selectedIndex);
    } else {
      this.sms.push(newItem);
     // console.log('... to push the checked model: ', selectedIndex);
    }
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

  getDependentKriFromSM(model){
    let s = '';
    if(this.getCheckState(model)) {
      const smodel: SelectedModel = this.sms.find(x => x.kriterium_id === model._id);
      //console.log('.... using smodel to get dependency');
      s = this.getDependentKri(smodel);
      if(s === null) return null;
      if(s === undefined) return null;

      if (s !== null && s !== undefined) {
        console.log(" ... s: ", s);
        return s;
      } else {
        const  ss = this.getDependentKri(model);
        console.log(" ... ss: ", ss);
        return ss;
      }
    }
  }

  getDependentKri(model) {
   // console.log('.... then the smodle: ', model);
    let allRelatedKriIDs = '';
    if (model.dependentAusp !== undefined && model.dependentAusp !== null ) {
      for (let de of model.dependentAusp) {
        if (de.bulb){
          allRelatedKriIDs += de.relatedKri_id + ", ";
        }
      }

      if (allRelatedKriIDs !== null && allRelatedKriIDs.length !== 0) {
        const tttp = '💡'+  this.dependencyStr + allRelatedKriIDs.substring(0, allRelatedKriIDs.length - 2);
        console.log(" ... allRelatedKriIDs length: ", allRelatedKriIDs.length, allRelatedKriIDs);
        console.log(" ... tttp: ", tttp);
        return tttp;
      }
    }else {
      console.log(" ... sss: ");
      return null;
    }
  }


  getKorrelierendemKriterium (model) {
    let kkstr = '';

    if (model.dependentAusp !== undefined && model.dependentAusp !== null) {
      for (let de of model.dependentAusp) {
        if (de.bulb) {
          kkstr += de.relatedKri_id + ", ";
        }
      }
    }

    if (kkstr !== null && kkstr !== '') {
      return '💡'+ kkstr.substring(0, kkstr.length - 2) ;
    } else {
      return null;
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

    //get this model's dependency
    this.getKirDependency(mo);

    this._modellService.changeModel(this.modells);

    if (item.checked)  {
      item.isSelected= true;
      if (!this.smsExist(kid)) { // not exist in sms
        this.addItem(kid, item.Kriterium, item.clrlist, item.dependentAusp, item.dependentType, item.Korkri); // add
      }
      // if (kid === '10' || kid === 10) {
      //   this.checked10th = true;
      // }
    }
    if (!item.checked) { // uncheck
      item.isSelected= false;
      if (this.smsExist(kid)) {
        this.removeItem(kid);
      }
      // if (kid === '10' || kid === 10) {
      //   this.checked10th = false;
      // }
    }
    this._modellService.changeModel(this.modells);
    this._data.changeGoal(this.sms);

    // console.log('... the persisted sms ...: ', this.sms.length);
    // for (let i = 0; i < this.sms.length; i++) {
    //   let temp = this.modells.findIndex(x => x._id === this.sms[i].kriterium_id);
    //   if(temp > -1){
    //     this.modells[temp].isSelected  = true;
    //   }
    //   // console.log(this.sms[i].kriterium_id, this.sms[i].kriterium, this.sms[i].isselected);
    //   // console.log('.... model of the persist smodel, item: ', item);
    //   // console.log('.... model of the persist smodel: ', this.modells[checkedID]);
    // }

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


