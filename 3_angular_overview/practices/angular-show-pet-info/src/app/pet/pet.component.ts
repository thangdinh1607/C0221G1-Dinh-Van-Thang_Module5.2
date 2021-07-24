import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
pet: Pet = {
  name: 'gau gau',
  image: 'https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794__340.jpg'
};
  constructor() { }

  ngOnInit(): void {
  }

}
