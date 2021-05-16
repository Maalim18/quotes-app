import { Component, OnInit } from '@angular/core';
import{Quote}from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Mahatma Gandi', 'When i despair ,i remember that all through history the way of truth and love have always won.There have been tyrants and murderers and for a time they can seem invicible but in the end ,they always fall,Think of it-always.','Ali Yunis',20,10,new Date(2021,4,15)),
     new Quote(2,'martin Luter king jnr', 'The ultimate measure of a man is not where he stands in moments of comfort and convenience but where he stands at times of challenge and controversy!','John Mc Grath',0,0,new Date(2021,4,15)),
    new Quote(3,'Bill Gates','The belief that the world is getting worse,that we cant solve extreme poverty and disease isnt just mistaken its harmful', 'Ali Mohamed',0,0,new Date(2021,4,15)),
     new Quote(4,'Malcom X', 'Be respectful, be obedient ,obey the law,but if anyone puts his hands on you ,send him to the cemetry','sheriif Hamdani',0,0,new Date(2021,4,15)),
     new Quote(5,'Mohamed Maalim', 'persue your dreams ruthlessly,simp no more,for the world doesnt need weak men!!','Solo chake',0,0,new Date(2021,4,15))
    
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
