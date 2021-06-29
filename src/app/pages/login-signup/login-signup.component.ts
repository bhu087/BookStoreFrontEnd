import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }
  bgColor : string = '#666666';
  loginButton: string = 'black';
  signupButton: string = '#878787';
  signupBottomLine = false;
  loginBottomLine = true;
  login = true;
  signup = false;
  changeColorOne(){
    this.bgColor = '#666666';
    this.loginButton = 'black';
    this.signupButton = '#878787';
    this.login = true;
    this.signup = false;
    this.loginBottomLine = true;
    this.signupBottomLine = false;
  }
  changeColorTwo(){
    this.bgColor = '#b1b1b1';
    this.signupButton = 'black';
    this.loginButton = '#878787';
    this.login = false;
    this.signup = true;
    this.signupBottomLine = true;
    this.loginBottomLine = false;
  }
  ngOnInit(): void {
  }

}
