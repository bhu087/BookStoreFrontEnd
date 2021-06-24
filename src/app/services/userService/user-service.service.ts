import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

   url = environment.baseUrl;
   
   constructor(private httpService: HttpServiceService) { }

   login(data: any): Observable<any>{
     return this.httpService.post(`${this.url}User/login`, data);
   }
   register(data:any): Observable<any>{
    return this.httpService.post(`${this.url}User/register`, data);
   }
   addNewAddress(data:any): Observable<any>{
    var header = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${localStorage.Bearer}`,
        'content-Type': 'application/json'
      })
    }
    var res = this.httpService.put(`${this.url}User/addAddress/${data}`, data, true, header);
    return res;
   }
   getUser(): Observable<any>{
    var header = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${localStorage.Bearer}`,
        'content-Type': 'application/json'
      })
    }
     if(localStorage.getItem("Bearer")){
      var res = this.httpService.get(`${this.url}User/getUser`, true, header);
      return res;
     }
    else
    return new Observable<null>();
  }
}
