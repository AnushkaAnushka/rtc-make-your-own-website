import { Component, OnInit } from '@angular/core';
import * as config from './../config';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
    public intro_titel: string;
    public intro_text: string;
    public intro_bild: string;
    public intro_bild_untertitel: string;

    constructor() { }

    ngOnInit() {
        this.intro_titel = config.intro_titel;
        this.intro_text = config.intro_text;
        this.intro_bild = config.intro_bild;
        this.intro_bild_untertitel = config.intro_bild_untertitel;
    }

}
