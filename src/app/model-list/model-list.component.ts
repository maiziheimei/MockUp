import { Component, OnInit, EventEmitter } from '@angular/core';
import { Modell } from '../modell';

@Component({
  selector: 'model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css'],
  inputs: ['modells'],
  outputs: ['SelectModel']
})
export class ModelListComponent implements OnInit {

  modells: any;
  public SelectModel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(ml: Modell) {
    this.SelectModel.emit(ml);
  }

}
