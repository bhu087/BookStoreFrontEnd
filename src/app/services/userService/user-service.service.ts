import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
     console.log("User service");
     return this.httpService.post(`${this.url}User/login`, data);
   }
   register(data:any){
    console.log("User service");
    return this.httpService.post(`${this.url}User/register`, data);
   }
   addNewAddress(data:any){
    var res = this.httpService.put(`${this.url}User/addAddress/${data}`, data, true, this.header);
    return res;
   }
}
