import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router){

  }
 canActivate(){
   var local = localStorage.getItem('Bearer')
   if(local != null){
     return true;
   }
   else{
     this.router.navigateByUrl('/main/login');
     return false;
   }
 }
}
