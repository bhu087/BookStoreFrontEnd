import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  header = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.Bearer}`,
      'content-Type': 'application/json'
    })
  }
  url = environment.baseUrl;
  constructor(private httpservice: HttpServiceService) { }

  getAllBooks(): Observable<any>{
    var res = this.httpservice.get(`${this.url}Books/getAllBooks`, true, this.header);
    return res;
  }
  getCart(): Observable<any>{
    var res = this.httpservice.get(`${this.url}Books/getCart`, true, this.header);
    return res;
  }
}
