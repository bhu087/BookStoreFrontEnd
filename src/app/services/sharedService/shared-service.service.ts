import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private data = "";  
  
 setOption(value: any) {      
    this.data = value;  
  }  
  
  getOption() {  
    return this.data;
  }  
}
