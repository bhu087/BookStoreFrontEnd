import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitted = false;
  responseData: any;
  constructor(private formBuilder: FormBuilder, private service: UserServiceService,
    private router: Router) { }
  signupForm= this.formBuilder.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    mobile:['', [Validators.required]],
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
    else{
      const register = {
        accountId: 0,
        name: value.name,
        email: value.email,
        mobile: value.mobile,
        password: value.password,
        holderState: 1
      }
      console.log(register);
      this.service.register(register).subscribe((success) =>{
        this.responseData = JSON.stringify(success);
        this.router.navigateByUrl("/login-signup");
        console.log(success);
      },
      (error)=>{
        console.log(error);
      }
    );
    }
  }
}
