import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  signupForm= this.formBuilder.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    mobile:['', [Validators.required, Validators.pattern("^[6-9]\d{9}$")]],
    email : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20),Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$")]],
});
  ngOnInit(): void {
  }
  get signingForm() {return this.signupForm.controls;}
  signup(value:any){
    this.submitted = true;
    if(this.signingForm.invalid){
      return;
    }
  }
}
