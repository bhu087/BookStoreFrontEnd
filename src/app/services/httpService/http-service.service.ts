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
  get(uri: any, isHeaders: any = false, headers : any = null){
    return this.http.get(uri, isHeaders && headers);
  }
  put(uri: any, data: any, isHeaders: any = false, headers : any = null){
    return this.http.put(uri, data, isHeaders && headers);
  }
  delete(uri: any, isHeaders: any = false, headers : any = null){
    return this.http.delete(uri, isHeaders && headers);
  }
}
