import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  mean: string;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.translate();
  }

  translate() {
    let word = this.activatedRoute.snapshot.params.word;
   this.mean =  this.dictionaryService.translate(word);
  }
}
