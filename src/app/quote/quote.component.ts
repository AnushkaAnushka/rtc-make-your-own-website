import { Component, OnInit } from '@angular/core';
import * as config from '../config';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quote: string;
  public quote_author: string;

  constructor() { }

  ngOnInit() {
    this.quote = config.quote_text;
    this.quote_author = config.quote_autor;
  }

}
