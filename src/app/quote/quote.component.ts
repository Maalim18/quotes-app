import { Component, OnInit } from '@angular/core';
import{Quote}from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Mahatma Gandi', 'An eye for an eye only ends up making the whole world blind','Obama',20,10,new Date(2021,4,15)),
     new Quote(2,'Nicho', 'be humble!','Obama',0,0,new Date(2021,4,15)),
    new Quote(3,'Jackob', 'wake up!','Obama',0,0,new Date(2021,4,15)),
     new Quote(4,'Maalim', 'you are good!','Obama',0,0,new Date(2021,4,15)),
     new Quote(5,'Jeyson', 'hello therere!','Obama',0,0,new Date(2021,4,15))
    
  ];

  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.completeDate) - <any>new Date(a.completeDate);
    });
  }  
  addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead:any, index:any){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
