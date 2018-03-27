import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.css'],
  inputs: ['modell'],
  outputs: ['updateModelEvent', 'deleteModelEvent']
})
export class ModelDetailComponent implements OnInit {

  modell: any;

  editId: boolean = false;
  private updateModelEvent = new EventEmitter();
  private deleteModelEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onIdClick() {
    this.editId = true;
  }

  ngOnChanges() {
    this.editId = false;
  }

  updateModel() {
    this.updateModelEvent.emit(this.modell);
  }

  deleteModel() {
    this.deleteModelEvent.emit(this.modell);
  }



}
