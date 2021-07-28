import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IWord} from '../model/IWord';
import {DictionaryService} from '../service/dictionary.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-addnew',
  templateUrl: './dictionary-addnew.component.html',
  styleUrls: ['./dictionary-addnew.component.css']
})
export class DictionaryAddnewComponent implements OnInit {
  wordForm = new FormGroup({
    word: new FormControl(),
    mean: new FormControl()
  });

  constructor(private dictionaryService: DictionaryService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addNew() {
    let iword = this.wordForm.value;
    this.dictionaryService.save(iword);
    this.wordForm.reset();
    this.router.navigateByUrl('');
  }
}
