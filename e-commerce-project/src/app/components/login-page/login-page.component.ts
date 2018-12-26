import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { 
  	this.loginForm = formBuilder.group({
  		userName: [null, Validators.email],
      	password: [null, Validators.minLength(8)]
  	})
  }

  ngOnInit() {
  }

  toSubmit(userName, password) {
    console.log(this.loginForm.value);
  }

}
