import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }
  bgColor : string = '#666666';
  changeColorOne(){
    this.bgColor = '#666666';
  }
  changeColorTwo(){
    this.bgColor = '#b1b1b1';
  }
  ngOnInit(): void {
  }

}
