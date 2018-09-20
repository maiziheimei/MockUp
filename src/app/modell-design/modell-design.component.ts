import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Ist, Modell, Ziel} from '../modell';
import { ModellService} from '../modell.service';
import { DataService } from '../data.service';
import { SelectedModel } from '../selectedModel';
import {FormControl} from '@angular/forms';



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

  // ClickedModell: any;
  value_p: number;
  value_s: any;
  value_z: any;
  knote: string;
  selectedOption = 1;

  // data from Modell_1
  // auspraegung = ['Keine Konnektivität gegeben, d.h., es stehen keine Schnittstellen für die digitale Datenkommunikation zur Verfügung.',
  //   'Es existieren lediglich Schnittstellen, die den manuellen Transfer von digitalen Daten vor Ort mittels physischer Speichermedien ermöglichen. Es gibt keinen permanenten Kommunikationskanal.',
  //   'Die Maschinen bzw. Anlagen verfügen über einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche nur binaere oder analoge Signale ausgetauscht werden.',
  //   'Die Maschinen und Anlagen sind mittels Punkt-zu-Punkt-Kommunikationssystemen (z.B. IO-Link, HART) bzw. Low-Level-Feldbussen (z.B. AS-Interface) angebunden.',
  //   'Mit den Maschinen und Anlagen kann über (High-Level-)Feldbusse kommuniziert werden (z.B. Profi-Bus, CANOpen, CC-Link, Foundation Fieldbus).',
  //   'Die Maschinen und Anlagen sind an ein lokales IP-basiertes Netzwerk angeschlossen. Dies kann kabelgebunden oder drahtlos erfolgen (z.B. Industrial Ethernet, WLAN). Die Maschinen und Anlagen sind nicht (unmittelbar) mit dem Internet verbunden.',
  //   'Die Maschinen bzw. Anlagen sind kabelgebunden (z.B. Ethernet) oder drahtlos (z.B. WLAN, Mobilfunk) an das Internet angeschlossen und  können über dieses aktiv mit anderen Systemen kommunizieren (Internet of Things).',
  //   'null'];


  auspraegung: string[] = new Array();
  niz: string[] = new Array(8)  ;
  iz_selects = ['None', 'Ist', 'Ziel'];
  // selected = this.iz_selects[0];;
  selected = '0';
  panelColor = new FormControl('0' );
  selectedValue: string;

  public colorClass = [
    // 'example-card-0': this.selected === 'None',
    // 'example-card-1': this.selected === 'Ist',
    // 'example-card-2': this.selected === 'Ziel'
    {className: 'example-card-0'},
    {className: 'example-card-1'},
    {className: 'example-card-2'}
  ];

  constructor() {
  }

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
    this.value_p = this.ClickedSelectedModel.priority;
    this.knote = this.ClickedModell.Kriterium_note;

    for (let i = 0; i < this.niz.length; i++) {
      this.niz[i] = this.checkInList(i);
    }
    // console.log('... current niz[]: ', this.niz);
  }

  getBColor(nizValue) {
   // console.log('... nizValue:', nizValue);
    switch (nizValue) {
      case '0':
        return 'lightgrey';
      case '1':
        return '#71B7FD';
      case '2':
        return '#FA8072';
      case '3':
        return '#EFD9C1';
    }

}

checkInList(i) {
  const temp_ist_ids = this.ClickedSelectedModel.Iste.map(function (ist) {
    return ist.id;
  });

  const temp_ziel_ids = this.ClickedSelectedModel.Ziele.map(function (ziel) {
    return ziel.id;
  });

  if(this.exitObj (i, temp_ist_ids) && this.exitObj(i,temp_ziel_ids)) {return '3';}
  if(this.exitObj (i, temp_ist_ids) && !this.exitObj(i,temp_ziel_ids)) {return '1';}
  if(!this.exitObj (i, temp_ist_ids) && this.exitObj(i,temp_ziel_ids)) {return '2';}
  return '0';
}

 exitObj (c_index, iz_list) {
    return iz_list.findIndex(x=> parseInt(x) === c_index)> -1;
}

  // getValue(aug_index) {
  //   if ( this.ClickedSelectedModel.ziel_id !== 'N' && aug_index === this.ClickedSelectedModel.ziel_id ) {
  //     console.log('... ang_index is ', aug_index, '... ziel id: ', this.ClickedSelectedModel.ziel_id);
  //     this.selectedOption = 2; }
  //   if ( this.ClickedSelectedModel.ist_id !== 'N' && aug_index === this.ClickedSelectedModel.ist_id ) {
  //     console.log('... ang_index is ', aug_index, '... ist id: ', this.ClickedSelectedModel.ist_id);
  //     this.selectedOption = 1; }
  // }

  // onChange(event, optionValue, cIndex) {
  //   console.log('... hey option is', this.iz_selects[optionValue], cIndex);
  //   if (optionValue === '1') {
  //     this.value_s = cIndex;
  //     this.ClickedSelectedModel.ist_id = cIndex;
  //     this.ClickedSelectedModel.ist_content = this.auspraegung[cIndex];
  //     this.ClickedSelectedModel.ist_note = this.ClickedSelectedModel.Auspraegung_note[cIndex];
  //     this.selected = '1';
  //     this.niz[cIndex] = '1';
  //   }
  //   if (optionValue === '2') {
  //     this.value_z = cIndex;
  //     this.ClickedSelectedModel.ziel_id = cIndex;
  //     this.ClickedSelectedModel.ziel_content = this.auspraegung[cIndex];
  //     this.ClickedSelectedModel.ziel_note = this.ClickedSelectedModel.Auspraegung_note[cIndex];
  //     this.selected = '2';
  //     this.niz[cIndex] = '2';
  //   }
  //   console.log('... currently, priority:', this.ClickedSelectedModel.priority, ' ist_id : ', this.ClickedSelectedModel.ist_id, ' ziel_id : ', this.ClickedSelectedModel.ziel_id);
  //   console.log('... ist_note:', this.ClickedSelectedModel.ist_note, ' ziel_id : ', this.ClickedSelectedModel.ziel_note);
  // }

  onChange(event, optionValue, cIndex) {
    console.log('... hey I am here');
    console.log('... hey option is', this.iz_selects[optionValue], cIndex);
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

    // testing cretiria_10
    if (this.ClickedSelectedModel.kriterium_id === '10' && cIndex === 3 && (optionValue === '2' || optionValue === '3')) {
      console.log('...getting in here !!')
      this.ClickedSelectedModel.Auspraegung_note[3] = '9. Methodik der Fertigungs und Montagesteuerung - Ausprägung 2\n' +
        '7. Betriebsdatenerfassung - Ausprägung 2\n' +
        '20. Produktionsstücklisten und Rezepturen - Ausprägung 1\n' +
        '28. Auswertung von Daten - Ausprägung 1';
    }

    // console.log('... currently, priority:', this.ClickedSelectedModel.priority, ' ist_id : ', this.ClickedSelectedModel.ist_id, ' ziel_id : ', this.ClickedSelectedModel.ziel_id);
    // console.log('... ist_note:', this.ClickedSelectedModel.ist_note, ' ziel_id : ', this.ClickedSelectedModel.ziel_note);
    console.log(cIndex, '... this.niz[]:', this.niz);
  }

  removeIZ(cIndex) {
    if(this.ClickedSelectedModel.Iste.find(x => x.id === cIndex)) {
      this.ClickedSelectedModel.Iste =   this.ClickedSelectedModel.Iste.filter(obj => obj.id !== cIndex);
    }

    if(this.ClickedSelectedModel.Ziele.find(x => x.id === cIndex)) {
      this.ClickedSelectedModel.Ziele =   this.ClickedSelectedModel.Ziele.filter(obj => obj.id !== cIndex);
    }

  }
  newZEIT(cIndex) {
    const newZiel = new Ziel();
    newZiel.id = cIndex;
    newZiel.note = this.ClickedSelectedModel.Auspraegung_note[cIndex];
    newZiel.content = this.auspraegung[cIndex];
    return newZiel;
  }

  newIST(cIndex) {
    const newIst = new Ist();
    newIst.id = cIndex;
    newIst.note = this.ClickedSelectedModel.Auspraegung_note[cIndex];
    newIst.content = this.auspraegung[cIndex];
    return newIst;
  }

  updateIZnote(entry) {
    // let  temp_iste: Ist[] = entry.Iste;
    // let  temp_ziele: Ziel[] = entry.Ziele;

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

  noteIndexContains(id, entry) {
    for (let i=0; i < entry.Auspraegung_note.length; i++) {
      if (id === i) {
        return true;
      }
    }
    return false;
    }


  closeBlock() {
    this.updateIZnote(this.ClickedSelectedModel);
    this.parentSwitch = true;
    // to do something more here: disable navbar, save the data!
    this.childEvent.emit(this.parentSwitch);
  }
}



