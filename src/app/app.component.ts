import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string[];
  constructor() {
    this.quotes = ["To bring about change, you must not be afraid to take the first step. We will fail when we fail to try", "Not everything that is faced can be changed, but nothing can be changed until it is faced", "An eye for an eye makes the world blind"]
  }
}
