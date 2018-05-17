import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  vision = 'Was ist Ihre Vision?';
  mission = 'Was ist Ihre Mission?';
  strategy = 'Was sind Ihre Strategische Ziele? (z.B. für 6 Monate) ';

  constructor(private  sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getVideoURL() {
    return this.sanitizer.bypassSecurityTrustHtml('https://www.youtube.com/embed/kQLbVVPNTMQ');
  }
}
