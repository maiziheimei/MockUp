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
