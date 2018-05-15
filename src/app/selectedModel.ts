export class SelectedModel {
  kriterium_id: string;
  kriterium: string;
  isselected: boolean;
  isEvaluated: boolean;
  ist_id: string;
  ist_note: string;
  ziel_id: string;
  ziel_note: string;
  priority: number;
  Kriterium_note: string;
  Massnahmen: string;
  Erklaerung: string;
  Kosten: string;
  Termin: Date;
  Verantwortlich: string;

  constructor() {
    this.kriterium_id = '0';
    this.isselected = false;
    this.isEvaluated = false;
    this.ist_id = 'N';
    this.ziel_id = 'N';
    this.priority = 0;
    this.Kosten = '3000';
    this.Massnahmen = 'Maßnahme:';
    this.Erklaerung = 'Erklärung:';
    this.Verantwortlich = 'xxx';
    this.Termin = new Date(2018, 0, 1);
  }
}


