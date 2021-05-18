import { Component, OnInit } from '@angular/core';
import{Quote}from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 
    quotes: Quote[] = [
      new Quote(1, 'Be humble in life', 0,0,'maalim',new Date(2019,9,14)),
      new Quote(2,'persue your dreams ruthlessly',0,0,' quote posted by:jj kamotho',new Date(2019,6,9)),
      new Quote(3,'be happy always',0,0,' quote posted by:allan mwangi',new Date(2019,1,12)),
      new Quote(4,'never give up',0,0,' quote posted by:kelvin ochieng',new Date(2019,11,18)),
      new Quote(5,'Stay wild,being normal is overrated',0,0,' quote posted by:abdi moha',new Date(2019,2,14)),
      new Quote(6,'be optimistic in life',0,0,' quote posted :juma kuno',new Date(2019,3,14)),
    ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}




  
