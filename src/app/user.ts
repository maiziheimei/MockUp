import { v4 as uuid } from 'uuid';
import {SelectedModel} from './selectedModel';

export class User {
  uuid: string;
  name: string;
  vision: string;
  mission: string;
  strategy: string;
  kriterienList: SelectedModel[];

 // constructor () {}
  constructor(_id, _name, _mission, _vision, _strategy, _kriList) {
    this.uuid = _id;
    this.name = _name;
    this.vision = _mission;
    this.mission = _vision;
    this.strategy = _strategy;
    this.kriterienList = _kriList;
  }
}
