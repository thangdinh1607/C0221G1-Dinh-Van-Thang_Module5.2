import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-vote-app';
  rateP;

  rateChangeHandle(rate: number) {
    this.rateP = rate;
  }
}
