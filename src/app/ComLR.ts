
// competence and learning resource


import {Dictionary} from "underscore";

export class ComLR {
  competence_id: string;
  competence_name: string;
  competence_type:  string;
  competence_definition: string;
  LearningResources: LRObj[];
}

export class LRObj {
  lr_id: string;
  lr_name: string;
  lr_link: string;
}


export class CRLObj {
  competence_name: String;
  learningresources:  LRObj[];
}


export class DependencyObj {
  kri_id: number;
  dependencyType: string;// P,S,T
  dependAuspr: AusPair[];
}

export class AusPair {
  relatedKri_id: number;
  relatedKri_depenTape: string;
  bulb: boolean; //the whole row is Glühbirne
  pair: pairObj[]; // if bulb is true, then pair is null
}

export class pairObj {
  from: number; // Ausprägung_id
  to: number; // Ausprägung_id
  to_bulb: boolean;
}
