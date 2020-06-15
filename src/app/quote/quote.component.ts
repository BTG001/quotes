import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[new Quote("Martin Luther King Jr.","NewYork Times","Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that."),
new Quote("James Baldwin","London Paper","Not everything that is faced can be changed, but nothing can be changed until it is faced.")]
  preNum:number
  lastNum:number
  counter:number

  constructor() { }

  ngOnInit(): void {
  }

}
