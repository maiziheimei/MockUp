import { Component, OnInit } from '@angular/core';
import { Modell } from '../modell';
import { ModellService} from '../modell.service';

@Component({
  selector: 'app-modell-center',
  templateUrl: './modell-center.component.html',
  styleUrls: ['./modell-center.component.css'],
  providers: [ ModellService]
})
export class ModellCenterComponent implements OnInit {

  // HardCoded data
  // modells: Modell[] = [
  //   {'_id': '1', 'Kriterium': 'test', 'Beschreibung': 'test', 'Auspraegung_0' : 'test', 'TOP_Zuordnung': 'test', 'IT': 'test'},
  //   {'_id': '2', 'Kriterium': 'xia test', 'Beschreibung': 'xia test', 'Auspraegung_0' : 'xia test', 'TOP_Zuordnung': 'xia test', 'IT': 'xia test'}
  //   ];


  modells: Array<Modell>;
  selectedModel: Modell;
  hidenewModel = true;

  constructor(private _modellService: ModellService) {
  }

  ngOnInit() {
    this._modellService.getModells()
      .subscribe(resModellData => this.modells = resModellData);
  }

  onSelectModel(modell: any) {
    this.selectedModel = modell;
    console.log(this.selectedModel);
    this.hidenewModel = true;
  }

  onSubmitAddModelDoc(mdl: Modell) {
    this._modellService.addModelDoc(mdl)
      .subscribe(resNewVideo => {
        this.modells.push(resNewVideo);
        this.hidenewModel = true;
        this.selectedModel = resNewVideo;
      });
  }

  onUpdateModelEvent(modell: any) {
    this._modellService.updateModelDoc(modell)
      .subscribe(resUpdatedVideo => modell = resUpdatedVideo);
    this.selectedModel = null;
  }


  onDeleteModelEvent(modell: any) {
    const modellArray = this.modells;
    this._modellService.deleteModelDoc(modell)
      .subscribe(resDeletedVideo => {
        for (let i = 0; i < modellArray.length; i++) {
          if (modellArray[i]._id === modell._id) {
            modellArray.splice(i, 1);
          }
        }
      });
    this.selectedModel = null;
  }

  newModellDoc() {
    this.hidenewModel = false;
  }
  cancelNewModellDoc() {
    this.hidenewModel = true;
    this.selectedModel = null;
  }

}
