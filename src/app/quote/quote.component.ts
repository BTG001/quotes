import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =[
    new Quote(1,"Not everything that is faced can be changed, but nothing can be changed until it is faced.","James Baldwin","Bruno",0,0,new Date(2017,2,6)),
    new Quote(2,"An eye for an eye makes the world blind.","Mahatma Gandhi","Eunice",0,0,new Date(2014,5,12)),
    new Quote(3,"It doesn't matter who you are, where you come from. The ability to triumph begins with you — always.","Oprah Winfrey","Cyrill",0,0,new Date(2019,9,6)),
    new Quote(4, "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", "Martin Luther King Jr.", "Arnold",0,0,new Date(2013,6,8)),
    new Quote(5,"A man who stands for nothing will fall for anything.","Malcom X","Sandy",0,0,new Date(2018,8,12)),
        ];
        toggleDetails(index){
          this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
          this.quotes[index].showFan=!this.quotes[index].showFan;
        }
        upvote(index){
          this.quotes[index].upvotes++;
        }
        downvote(index){
          this.quotes[index].downvotes++;
        }
        deleteQuote(isComplete,index){
               if (isComplete){
                   let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
       
                   if(toDelete){
                       this.quotes.splice(index,1)
                   }
               }
           }
           addNewQuote(quote){
            this.quotes.push(quote)
       
        }
  constructor() { 

  }

  ngOnInit(): void {
  }

}
