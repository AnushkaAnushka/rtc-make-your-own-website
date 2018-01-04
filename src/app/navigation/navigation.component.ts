import { Component, OnInit } from '@angular/core';
import * as config from '../config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public menu_text: string;
  public menu_logo: string;

  constructor() {
  }

  ngOnInit() {
    this.menu_text = config.menu_text;
    this.menu_logo = config.menu_logo;
  }

}
