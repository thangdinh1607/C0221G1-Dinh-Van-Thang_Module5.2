import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/IWord';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page-component',
  templateUrl: './dictionary-page-component.component.html',
  styleUrls: ['./dictionary-page-component.component.css']
})
export class DictionaryPageComponentComponent implements OnInit {
  iWords: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
   this.iWords =  this.dictionaryService.getAll();
  }
}
