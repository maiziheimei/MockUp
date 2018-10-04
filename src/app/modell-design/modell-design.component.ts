import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Ist, Modell, Ziel} from '../modell';
import { SelectedModel } from '../selectedModel';
import {FormControl} from '@angular/forms';
import {CRLObj, LRObj} from "../ComLR";
import {ClrviewComponent} from "../clrview/clrview.component";
import {MatDialog} from "@angular/material";
import {DataService} from "../data.service";

@Component({
  selector: 'app-modell-design',
  templateUrl: './modell-design.component.html',
  styleUrls: ['./modell-design.component.css']
})
export class ModellDesignComponent implements OnInit {
  @Input() public parentSwitch;
  @Input() public ClickedModell: Modell;
  @Input() public ClickedSelectedModel: SelectedModel;
  @Output() public childEvent = new EventEmitter();

  // value_p: number;
  knote: string;
  auspraegung: string[] = new Array();
  niz: string[] = new Array(8)  ;
  iz_selects = ['None', 'Ist', 'Ziel', 'Ist+Ziel'];
  selected = '0';
  selectedPri = 0;
  panelColor = new FormControl('0' );
  priorityLevels: any;
  hiddeText= new Array(9).fill(false);
  hiddeRow= new Array(9).fill(1);
  public colorClass = [
    {className: 'example-card-0'},
    {className: 'example-card-1'},
    {className: 'example-card-2'}
  ];

  constructor(public dialog: MatDialog, private  _data: DataService) { }

  ngOnInit() {
    console.log('..... to see the detail of clicked model ', this.ClickedModell._id );
    this.auspraegung.push(this.ClickedModell.Auspraegung_0);
    this.auspraegung.push(this.ClickedModell.Auspraegung_1);
    this.auspraegung.push(this.ClickedModell.Auspraegung_2);
    this.auspraegung.push(this.ClickedModell.Auspraegung_3);
    this.auspraegung.push(this.ClickedModell.Auspraegung_4);
    this.auspraegung.push(this.ClickedModell.Auspraegung_5);
    this.auspraegung.push(this.ClickedModell.Auspraegung_6);
    this.auspraegung.push(this.ClickedModell.Auspraegung_7);
    // this.value_p = this.ClickedSelectedModel.priority;
    this.knote = this.ClickedModell.Kriterium_note;
    this.priorityLevels = this._data.priorities;

    for (let i = 0; i < this.niz.length; i++) {
      this.niz[i] = this.checkInList(i);
    }
     console.log('... init niz[]: ', this.niz);
  }

  getBColor(nizValue) {
    // console.log('... nizValue:', nizValue);
    switch (nizValue) {
      case '0':
        return 'lightgrey';
      case '1':
        return '#71B7FD';
      case '2':
        return '#a0d878';
      case '3':
        return '#EFD9C1';
    }
  }

  // priorityLevels = [
  //   {value: '3', viewValue: 'High'},
  //   {value: '2', viewValue: 'Medium'},
  //   {value: '1', viewValue: 'Low'},
  //   {value: '0', viewValue: 'None'}
  // ];

  // deal with priority change
  changePri(event)
  {
    if(event.isUserInput) {
      this.ClickedSelectedModel.priority = event.source.viewValue;
      this.ClickedSelectedModel.prioirtyNum = event.source.value;
      console.log('.... priority changed: ', event.source.value, event.source.selected);
    }
  }


  checkInList(i) {
    const temp_ist_ids = this.ClickedSelectedModel.Iste.map(function (ist) {
      return ist.id;
    });

    const temp_ziel_ids = this.ClickedSelectedModel.Ziele.map(function (ziel) {
      return ziel.id;
    });

    if( this.existsObj (i, temp_ist_ids) &&  this.existsObj(i,temp_ziel_ids)) {return '3';}
    if( this.existsObj (i, temp_ist_ids) && !this.existsObj(i,temp_ziel_ids)) {return '1';}
    if(!this.existsObj (i, temp_ist_ids) &&  this.existsObj(i,temp_ziel_ids)) {return '2';}
    return '0';
  }

  existsObj (c_index, iz_list) {
    return iz_list.findIndex(x=> parseInt(x) === c_index)> -1;
  }

  onChange(event, optionValue, cIndex) {
    console.log('... hey I am here');
    console.log('... hey option is', this.iz_selects[optionValue], cIndex, this.ClickedSelectedModel.kriterium_id);
    // this.value_z = cIndex;
    this.removeIZ(cIndex);

    if (optionValue === '3') {
      const new_zeit = this.newZEIT(cIndex);
      this.ClickedSelectedModel.Iste.push(new_zeit);
      const new_ist = this.newIST(cIndex);
      this.ClickedSelectedModel.Ziele.push(new_ist);
      this.selected = '3';
      this.niz[cIndex] = '3';
    }

    if (optionValue === '1') {
      const new_ist = this.newIST(cIndex);
      this.ClickedSelectedModel.Iste.push(new_ist);
      this.selected = '1';
      this.niz[cIndex] = '1';
    }

    if (optionValue === '2') {
      const new_zeit = this.newZEIT(cIndex);
      this.ClickedSelectedModel.Ziele.push(new_zeit);
      this.selected = '2';
      this.niz[cIndex] = '2';
    }

    if (optionValue === '0') {
      this.selected = '0';
      this.niz[cIndex] = '0';
    }

    // testing cretiria_10
    if ( this.ClickedSelectedModel.kriterium_id == 10 && cIndex === 3 ) {
      const dependency: string = 'Abhängigkeit: 9. Methodik der Fertigungs und Montagesteuerung - Ausprägung 2\n' +
      '7. Betriebsdatenerfassung - Ausprägung 2\n' +
      '20. Produktionsstücklisten und Rezepturen - Ausprägung 1\n' +
      '28. Auswertung von Daten - Ausprägung 1';
      if( optionValue === '2' || optionValue === '3')  {
      console.log('...  getting in here !!');
      this.ClickedSelectedModel.Auspraegung_note[3] = dependency;
    } else {
        this.ClickedSelectedModel.Auspraegung_note[3] = '';
      }
    }

    // console.log('... currently, priority:', this.ClickedSelectedModel.priority, ' ist_id : ', this.ClickedSelectedModel.ist_id, ' ziel_id : ', this.ClickedSelectedModel.ziel_id);
    // console.log('... ist_note:', this.ClickedSelectedModel.ist_note, ' ziel_id : ', this.ClickedSelectedModel.ziel_note);
    console.log(cIndex, '... this.niz[]:', this.niz);
  }

  // call by onChange
  removeIZ(cIndex) {
    if(this.ClickedSelectedModel.Iste.find(x => x.id === cIndex)) {
      this.ClickedSelectedModel.Iste =   this.ClickedSelectedModel.Iste.filter(obj => obj.id !== cIndex);
    }

    if(this.ClickedSelectedModel.Ziele.find(x => x.id === cIndex)) {
      this.ClickedSelectedModel.Ziele =   this.ClickedSelectedModel.Ziele.filter(obj => obj.id !== cIndex);
    }

  }

  // call by onChange
  newZEIT(cIndex) {
    const newZiel = new Ziel();
    newZiel.id = cIndex;
    newZiel.note = this.ClickedSelectedModel.Auspraegung_note[cIndex];
    newZiel.content = this.auspraegung[cIndex];
    return newZiel;
  }

  // call by onChange
  newIST(cIndex) {
    const newIst = new Ist();
    newIst.id = cIndex;
    newIst.note = this.ClickedSelectedModel.Auspraegung_note[cIndex];
    newIst.content = this.auspraegung[cIndex];
    return newIst;
  }

  // called by closeBlock;   update the ist and Ziel note
  updateIZnote(entry) {
    for (const em of entry.Iste) {
      console.log('ist... em.id', em.id);
      if (this.noteIndexContains(em.id, entry)) {
        em.note = entry.Auspraegung_note[parseInt(em.id)];
        console.log('... em.note: ', em.note);
      }
    }

    for (const em of entry.Ziele) {
      console.log('ziel... em.id', em.id);
      if (this.noteIndexContains(em.id, entry)) {
        em.note = entry.Auspraegung_note[em.id];
        console.log('... em.note: ', em.note);
      }
    }

  }

  // called by updateIZnote
  noteIndexContains(id, entry) {
    for (let i=0; i < entry.Auspraegung_note.length; i++) {
      if (id === i) {
        return true;
      }
    }
    return false;
  }


  public openDialog3(csModel: SelectedModel): void {
    console.log('... openDialog2() to test on string this.ClickedSelectedModel.clrlist ' + this.createTreeString(csModel.clrlist));
    const crlstring = this.createTreeString(csModel.clrlist);

    const dialogRef = this.dialog.open(ClrviewComponent, {
      width: '850px',
      data: JSON.parse(crlstring)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed; name: ' + result);
    });
  }

  public openDialog2(): void {
    const TestTree_DATA: any = {
      'D3: Dokumentations- und Lesekompetenzen von Messdaten zz': {
        'IT-Berufe und IT-Kompetenzen in der Industrie 4.0 zz': 'https://www.bibb.de/veroeffentlichungen/de/publication/show/7833'
      },
      'F4: Überwachung und Instandhaltung der vernetzten Systeme': {
        'Hands on Industrie 4.0: 1.7 Die neue Qualität der Flexibilität': 'https://mooc.house/courses/industrie40-2016/items/7tUdCRZIAGu1GtiUM3GBqG',
        'Hands on Industrie 4.0: 1.6 Enterprise Internet of Things': 'https://mooc.house/courses/industrie40-2016/items/3ENBLZInxWxpVj4vzcjdzl'
      }
    };

    console.log('... openDialog2() to test on string this.ClickedSelectedModel.clrlist ' + this.createTreeString(this.ClickedSelectedModel.clrlist));
    const crlstring = this.createTreeString(this.ClickedSelectedModel.clrlist);


    const dialogRef = this.dialog.open(ClrviewComponent, {
      width: '850px',
      // data: { name: this.test_name, animal: this.test_animal }
      // data: <JSON> TestTree_DATA
      data: JSON.parse(crlstring)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed; name: ' + result);
      // this.test_animal = result;
    });
  }

  // input this.ClickedSelectedModel.clrlist
  // output: TestTree_DATA
  createTreeString(clrobj_list: CRLObj[]) {
    let tree_string = '{';
    for (const entry of clrobj_list) {
      const ename = entry.competence_name.replace(/"/g, '\'');
      tree_string = tree_string + '\"' + ename + '\":{' + this.getLRString(entry.learningresources) + '},';
    }
    tree_string = tree_string.substring(0, tree_string.length - 1) + '\}';
    console.log('The built tree string is: ' + tree_string);
    return tree_string;
  }

  getLRString(lrob: LRObj[]) {
    let subtree_string = '';
    for (const entry of lrob) {
      const eename = entry.lr_name;
      const eelink = entry.lr_link;
      subtree_string = subtree_string + '\"' + eename + '\": ' + '\"' + eelink + '\",';
    }

    subtree_string = subtree_string.substring(0, subtree_string.length - 1);
    // subtree_string = subtree_string + '\}';
    return subtree_string;
  }


  // to expand the Beschreibung section
  showNote(i) {
    if (this.hiddeText[i]) {
      this.hiddeText[i] = false;
      this.hiddeRow[i] = 1;
    } else {
      this.hiddeText[i] = true;
      if(i===8) {
        this.hiddeRow[i] = 5;
      } else {
      this.hiddeRow[i] = 5;
      }
    }
  }

  closeBlock() {

    this.selectedPri = 0;
    this.updateIZnote(this.ClickedSelectedModel);
    this.parentSwitch = true;
    // to do something more here: disable navbar, save the data!
    this.childEvent.emit(this.parentSwitch);
  }
}



