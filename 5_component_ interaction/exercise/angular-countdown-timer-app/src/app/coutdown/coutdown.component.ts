import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coutdown',
  templateUrl: './coutdown.component.html',
  styleUrls: ['./coutdown.component.css']
})
export class CoutdownComponent implements OnInit {
  @Input()
  countChild: number;
  @Input()
  countReset: number;
  messageChild: string;
  interval: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    this.interval = setInterval(() => {
      if (this.countChild == null) {
        this.messageChild = 'input number';
      } else if (this.countChild >= 1) {
        this.countChild = +this.countChild - 1;
        this.messageChild = 'wait';
        if (this.countChild === 0) {
          clearInterval(this.interval);
          this.messageChild = 'finish';
        }
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.messageChild = 'stop';
  }

  reset() {
    clearInterval(this.interval);
    this.countChild = this.countReset;
    this.messageChild = 'reset';
  }

}
