import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from './Country';
import {comparePassword} from './comparePassword';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  countries: Country[] = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Korean'},
    {id: 3, name: 'Japan'},
    {id: 4, name: 'USA'}];


  contractForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),



    passwordFrom: new FormGroup({
      password: new FormControl('', [Validators.required]  ),
      confirmPassword: new FormControl('')
    },[comparePassword]),


    country: new FormControl('',Validators.required),
    age: new FormControl('', [Validators.min(18), Validators.required] ),
    gender: new FormControl('', [Validators.required]) ,
    phoneNumber: new FormControl('' , [Validators.pattern('090\\d{7}'), Validators.required]),
  });
  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contractForm.value);
  }
}
