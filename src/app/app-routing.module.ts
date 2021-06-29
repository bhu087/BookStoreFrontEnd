import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { DisplayCartComponent } from './components/display-cart/display-cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { OrderSuccessfulComponent } from './pages/order-successful/order-successful.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { AuthGuardGuard } from './services/authGuard/auth-guard.guard';

const routes: Routes =
[
  {path: 'dashboard', component: DashboardComponent,
  children:[
    {
      path: 'displaybooks', component: DisplayBooksComponent
    }
  ]
},
// {path: 'login', component: LoginComponent},
// {path: 'signup', component: SignupComponent},
{path: 'login-signup', component: LoginSignupComponent},
{path: 'cart', component: DisplayCartComponent, canActivate: [AuthGuardGuard]},
{path: 'orderPlaced', component: OrderSuccessfulComponent, canActivate: [AuthGuardGuard]},
{path: 'wishlist', component: WishListComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
