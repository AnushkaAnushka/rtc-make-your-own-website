import { Component, OnInit } from '@angular/core';
import * as config from '../los-gehts/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header_titel: string;
  public header_untertitel: string;
  public header_bild: string;

  constructor() { }

  ngOnInit() {
    this.header_titel = config.header_titel;
    this.header_untertitel = config.header_untertitel;
    this.header_bild = config.header_bild;
  }

}
