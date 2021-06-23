import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

   url = environment.baseUrl;
   header = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.Bearer}`,
      'content-Type': 'application/json'
    })
  }
   constructor(private httpService: HttpServiceService) { }

   login(data: any){
     return this.httpService.post(`${this.url}User/login`, data);
   }
   register(data:any){
    return this.httpService.post(`${this.url}User/register`, data);
   }
   addNewAddress(data:any){
    var res = this.httpService.put(`${this.url}User/addAddress/${data}`, data, true, this.header);
    return res;
   }
   getUser(): Observable<any>{
    var res = this.httpService.get(`${this.url}User/getUser`, true, this.header);
    return res;
  }
}
