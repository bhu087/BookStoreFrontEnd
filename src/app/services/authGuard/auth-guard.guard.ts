import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router){

  }
 canActivate(){
   if(localStorage.getItem('Bearer')){
     return true;
   }
   else{
     this.router.navigateByUrl('/main/login');
     return false;
   }
 }
}
