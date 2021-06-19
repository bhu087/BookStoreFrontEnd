import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';

const routes: Routes = 
[
  {path: 'main', component : LoginSignupComponent,
  children:[
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'signup', component: SignupComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
