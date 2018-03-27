import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Modell } from '../modell';
import { ModellService} from '../modell.service';

@Component({
  selector: 'app-modell-design',
  templateUrl: './modell-design.component.html',
  styleUrls: ['./modell-design.component.css']
})
export class ModellDesignComponent implements OnInit {
  @Input() public parentSwitch;
  @Input() public ClickedModell: Modell;
  @Output() public childEvent = new EventEmitter();

  // ClickedModell: any;

  // data from Modell_1
  auspraegung = ['Keine Konnektivität gegeben, d.h., es stehen keine Schnittstellen für die digitale Datenkommunikation zur Verfügung.',
    'Es existieren lediglich Schnittstellen, die den manuellen Transfer von digitalen Daten vor Ort mittels physischer Speichermedien ermöglichen. Es gibt keinen permanenten Kommunikationskanal.',
    'Die Maschinen bzw. Anlagen verfügen über einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche nur binaere oder analoge Signale ausgetauscht werden.',
    'Die Maschinen und Anlagen sind mittels Punkt-zu-Punkt-Kommunikationssystemen (z.B. IO-Link, HART) bzw. Low-Level-Feldbussen (z.B. AS-Interface) angebunden.',
    'Mit den Maschinen und Anlagen kann über (High-Level-)Feldbusse kommuniziert werden (z.B. Profi-Bus, CANOpen, CC-Link, Foundation Fieldbus).',
    'Die Maschinen und Anlagen sind an ein lokales IP-basiertes Netzwerk angeschlossen. Dies kann kabelgebunden oder drahtlos erfolgen (z.B. Industrial Ethernet, WLAN). Die Maschinen und Anlagen sind nicht (unmittelbar) mit dem Internet verbunden.',
    'Die Maschinen bzw. Anlagen sind kabelgebunden (z.B. Ethernet) oder drahtlos (z.B. WLAN, Mobilfunk) an das Internet angeschlossen und  können über dieses aktiv mit anderen Systemen kommunizieren (Internet of Things).',
    'null'];




  iz_selects = ['None', 'Ist', 'Ziel'];
  selected = this.iz_selects[0];
  selectedValue: string;

  public colorClass = {
    'example-card-0': this.selected === 'None',
    'example-card-1': this.selected === 'Ist',
    'example-card-2': this.selected === 'Ziel'
  };

  constructor() {
  }

  ngOnInit() {
  }

  closeBlock() {
    this.parentSwitch = true;
    // to do something more here: disable navbar, save the data!
    this.childEvent.emit(this.parentSwitch);
    }
}



