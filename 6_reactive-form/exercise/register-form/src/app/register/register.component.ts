import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {comparePassword} from '../validation/comparePassword';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  genderList = [
    {id: 1, gender: 'male'},
    {id: 2, gender: 'female'},
    {id: 3, gender: 'other'},
  ];
  countryList = [
    {id: 1, country: 'Viet Nam'},
    {id: 2, country: 'USA'},
  ];
  contactForm = new FormGroup({
    id: new FormControl(),
    email: new FormControl('', [Validators.email, Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.min(18), Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.pattern('^09\\d{8}$')]),
    passwordGroup: new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('')
    }, [comparePassword]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  createContract() {
    console.log(this.contactForm.value);
  }
}
