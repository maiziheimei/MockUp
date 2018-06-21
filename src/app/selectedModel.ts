export class SelectedModel {
  kriterium_id: string;
  kriterium: string;
  isselected: boolean;
  isEvaluated: boolean;
  ist_id: string;
  ist_note: string;
  ist_content: string;
  ziel_id: string;
  ziel_note: string;
  ziel_content: string;
  priority: number;
  Kriterium_note: string;
  Massnahmen: string;
  Erklaerung: string;
  Kosten: string;
  Termin: Date;
  Verantwortlich: string;
  Auspraegung_note: string[];
  constructor() {
    this.kriterium_id = '0';
    this.isselected = false;
    this.isEvaluated = false;
    this.ist_id = 'N';
    this.ziel_id = 'N';
    this.priority = 0;
    this.Kosten = '3,000';
    this.Massnahmen = ' ';
    this.Erklaerung = '  ';
    this.Verantwortlich = ' ';
    this.Termin = new Date(2018, 0, 1);
    this.Auspraegung_note = new Array<string>(3);
  }
}


