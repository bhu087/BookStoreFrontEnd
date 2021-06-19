import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  post(uri: any, data: any, isHeaders: any = false, headers : any = null){
    console.log(data);
    return this.http.post(uri, data, isHeaders && headers);
  }
}
