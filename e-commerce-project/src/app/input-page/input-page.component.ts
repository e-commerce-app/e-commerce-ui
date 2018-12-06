import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent implements OnInit {

  inputUsername = "";
  inputPass = "";

  loginInput(event){
    this.inputUsername = event.target.value;
  }

  passInput(event){
    this.inputPass = event.target.value;
  }

  toSubmit(){
    console.log("Username is '" + this.inputUsername + "' and password is '" + this.inputPass + "'.");
  }

  constructor() { }

  ngOnInit() {
  }

}
