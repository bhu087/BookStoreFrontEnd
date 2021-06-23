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
  addToCart(data:any): Observable<any>{
    var res = this.httpservice.put(`${this.url}Books/addToCart/${data}`, data, true, this.header);
    console.log(res);
    return res;
  }
  decreaseCartCount(data:any): Observable<any>{
    var res = this.httpservice.put(`${this.url}Books/decreaseFromCart/${data}`, data, true, this.header);
    console.log(res);
    return res;
  }
  deleteBookFromCart(data:any): Observable<any>{
    var res = this.httpservice.put(`${this.url}Books/deleteFromCart/${data}`, data, true, this.header);
    console.log(res);
    return res;
  }
  placeOrder(data:any): Observable<any>{
    var res = this.httpservice.post(`${this.url}Books/placeOrder`, data, true, this.header);
    return res;
  }
  getSortedBooks(data:any): Observable<any>{
    var res = this.httpservice.get(`${this.url}Books/orderByPrice/${data}`, true, this.header);
    return res;
  }
  addToWishList(data:any): Observable<any>{
    var res = this.httpservice.put(`${this.url}Books/addToWishList/${data}`, data, true, this.header);
    console.log(res);
    return res;
  }
  getWishList(): Observable<any>{
    var res = this.httpservice.get(`${this.url}Books/getWishList`, true, this.header);
    return res;
  }
  deleteBookFromWishlist(data:any): Observable<any>{
    var res = this.httpservice.delete(`${this.url}Books/deleteFromWishlist/${data}`, true, this.header);
    console.log(res);
    return res;
  }
  addwishToCart(data:any): Observable<any>{
    var res = this.httpservice.put(`${this.url}Books/addWishToCart/${data}`, data, true, this.header);
    console.log(res);
    return res;
  }
}
