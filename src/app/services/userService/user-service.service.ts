import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

   url = environment.baseUrl;
   constructor(private httpService: HttpServiceService) { }

   login(data: any){
     console.log("User service");
     return this.httpService.post(`${this.url}User/login`, data);
   }
   register(data:any){
    console.log("User service");
    return this.httpService.post(`${this.url}User/register`, data);
  
   }
}
