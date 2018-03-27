import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  public CModells = [
    {'_id': '1', 'Kriterium': 'Digitale Konnektivität von Maschinen'},
    {'_id': '3', 'Kriterium': 'Produkt als digitaler Informationstraeger'},
    {'_id': '6', 'Kriterium': 'Mensch-Roboter-Kollaboration'},
    {'_id': '7', 'Kriterium': 'Betriebsdatenerfassung (BDE)'},
    {'_id': '9', 'Kriterium': 'Methodik der Fertigungs- und Montagesteuerung'}
  ];

  balls = ['1 -> 2', '1 -> 2', '2 -> 3', '0 -> 2', '0 -> 3'];

  constructor() { }

  ngOnInit() {}

}
