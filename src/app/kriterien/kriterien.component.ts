import { Component, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Modell } from '../modell';
import { ModellService} from '../modell.service';

@Component({
  selector: 'app-kriterien',
  templateUrl: './kriterien.component.html',
  styleUrls: ['./kriterien.component.css'],
  providers: [ ModellService]
})
export class KriterienComponent implements OnInit {
  // showUnderline = true;
  // modells: Array<Modell>;
  modells: any;
  public unchecked_o = 'fa fa-check-circle-o';

  // selectedIDs: string[] = ['1', '3', '5', '6'];
  // selectedIDs: number[] = new Array();
  constructor(private _modellService: ModellService) {}


  ngOnInit() {
   //  // call modellService method to init values from mongodb
   // this._modellService.getModells().subscribe(resModellData => this.modells = resModellData);
     this._modellService.sharedModells.subscribe(res => this.modells = res);
     this._modellService.changeModel(this.modells);
  }
  // check or uncheck modell
  onChange(event, index, item) {
    item.checked = !item.checked;
    const checkedID = index ;
    this.modells[checkedID].isSelected = item.checked;
    console.log('... now hasChecked ...: ');
    for (let i = 0; i < this.modells.length; i++) {
      if (this.modells[i].isSelected) {
        console.log(this.modells[i]._id, this.modells[i].Kriterium);
      }
    }
    // console.log(index, event, item);
    this._modellService.changeModel(this.modells);
  }

  makeChange(id) {
    console.log('HELLO');
    // if (event.className === 'fa fa-check-circle-o') {
    //  return event.className = 'fa fa-check-circle';
    //  } else {
    //     return event.className = 'fa fa-check-circle-o';
    //         }
      }
}


