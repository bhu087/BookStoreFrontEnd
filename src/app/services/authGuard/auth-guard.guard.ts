import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router){

  }
 canActivate(){
   if(localStorage.getItem('Bearer') !== null){
     console.log("present");
     return true;
   }
   else{
    console.log("absent ");
    this.router.navigateByUrl('/login-signup');
     return false;
   }
 }
}
