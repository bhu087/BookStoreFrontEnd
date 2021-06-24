import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  submitted = false;
  responseData: any;
  constructor(private formBuilder: FormBuilder, private service: UserServiceService,
    private router: Router) { }
  ngOnDestroy(): void {
    
  }
  loginForm= this.formBuilder.group({
    email : ['', [Validators.required, Validators.email]],//,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20),Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$")]],
});
  ngOnInit(): void {
  }
  
  get loggingForm() { return this.loginForm.controls; }

  onLogin(value:any){
    this.submitted = true;
    if (this.loggingForm.invalid) {
        return;
    }
    else{
      const login = {
        email: value.email,
        password: value.password
      }
      this.service.login(login).subscribe((success)=> {
        this.responseData = JSON.stringify(success);
        var res = JSON.parse(this.responseData);
        console.log(res['data']);
        localStorage.setItem("Bearer", res['data']);
        window.location.href="/dashboard"
        //this.router.navigateByUrl('/dashboard');
      },
      (error)=> {
        console.log(error);
      });
    }
    
  }
}
