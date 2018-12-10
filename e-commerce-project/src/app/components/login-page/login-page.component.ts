import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  toSubmit(userName, password){
    console.log("Username is '" + userName + "' and password is '" + password + "'.");
  }

  constructor() { }

  ngOnInit() {
  }

}
