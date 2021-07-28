import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupName, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor() {
  }

  login = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email]),
    password: new FormControl('', [ Validators.required , Validators.minLength(6)] )
  });

  ngOnInit(): void {
  }

  onSubmit() {
console.log(this.login.value);
  }
}
