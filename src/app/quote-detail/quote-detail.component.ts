import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quoty: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quoty.upvote+=1;
  }
  downvote(){
    this.quoty.downvote+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
