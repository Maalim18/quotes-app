import { Component, OnInit } from '@angular/core';
import{Quote}from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'John', 'Yes we can!','Obama',20,10,new Date(2021,4,15)),
     new Quote(2,'Nicho', 'be humble!','Obama',20,10,new Date(2021,4,15)),
    new Quote(3,'Jackob', 'wake up!','Obama',20,10,new Date(2021,4,15)),
     new Quote(4,'Maalim', 'you are good!','Obama',20,10,new Date(2021,4,15)),
     new Quote(5,'Jeyson', 'hello therere!','Obama',20,10,new Date(2021,4,15))
    
  ];

  addNewQuote(quote:any){
    let arraysize = this.quotes.length;
    
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

toggleDetails(index:any){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteQuote(isComplete:any, index:any){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}


  constructor() { }

  ngOnInit(): void {
  }

}
