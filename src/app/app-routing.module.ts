import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';

const routes: Routes = 
[
  {path: 'dashboard', component: DashboardComponent,
  children:[
    {
      path: 'displaybooks', component: DisplayBooksComponent
    }
  ]
},
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
