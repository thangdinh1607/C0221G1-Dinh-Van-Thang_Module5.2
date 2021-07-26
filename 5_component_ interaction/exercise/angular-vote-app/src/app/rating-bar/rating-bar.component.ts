import {Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit , DoCheck {
  colorRating1 = '';
  colorRating2 = '';
  colorRating3 = '';
  rate = '';
  @Output() rateChanged: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  rate1() {
    this.colorRating1 = 'colorR';
    this.colorRating2 = '';
    this.colorRating3 = '';
    this.rate = 'Bad';
    this.rateChanged.emit(this.rate);
  }

  rate2() {
    this.colorRating1 = 'colorY';
    this.colorRating2 = 'colorY';
    this.colorRating3 = '';

    this.rate = 'Normal';
    this.rateChanged.emit(this.rate);
  }

  rate3() {
    this.colorRating1 = 'colorG';
    this.colorRating2 = 'colorG';
    this.colorRating3 = 'colorG';
    this.rate = 'Good';
    this.rateChanged.emit(this.rate);
  }

  vote() {
    this.colorRating1 = '';
    this.colorRating2 = '';
    this.colorRating3 = '';
    alert('thank u');
  }


  ngDoCheck(): void {
  }
}
