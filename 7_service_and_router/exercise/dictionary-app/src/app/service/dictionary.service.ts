import {Injectable} from '@angular/core';
import {IWord} from '../model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iwords: IWord[] = [
    {word: 'hello', mean: 'Xin Chao'},
    {word: 'Component', mean: 'Thanh Phan'},
    {word: 'Directive', mean: 'Chi Huy'},
  ];

  constructor() {
  }

  getAll() {
    return this.iwords;
  }

  translate(word: string): string {
    for (let i = 0; i < this.iwords.length; i++) {
      if (this.iwords[i].word === word) {
        return this.iwords[i].mean;
      }
    }
    return 'not found';
  }
  save(iword: IWord): void{
    this.iwords.push(iword);
  }
}
