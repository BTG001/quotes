import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {name:"To bring about change, you must not be afraid to take the first step. We will fail when we fail to try", author:"Rosa Parks"},
    {name:"Not everything that is faced can be changed, but nothing can be changed until it is faced", author:"James Baldwin"},
    {name:"An eye for an eye makes the world blind", author:"Mahatma Gandhi"},
    {name:"It doesn't matter who you are, where you come from. The ability to triumph begins with you — always", author:"Oprah Winfrey"},
    {name:"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that", author:"Martin Luther King Jr."},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
