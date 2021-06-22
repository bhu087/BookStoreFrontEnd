import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { BooksServiceService } from 'src/app/services/booksService/books-service.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  data :any;
  @Output() toolToDash = new EventEmitter<number>();
  @Input() cartCount: number = 0;  //data sharing cart count will be updating according to add to bag click
  constructor(private bookService: BooksServiceService, private router: Router) {
    this.onGetCart();     // initial badge count
  }

  ngOnInit(): void {
  }

  onGetCart(){
    this.bookService.getCart().subscribe((serve) => {
      this.data = serve["data"];
      if(this.data !== null){
        for(let book of this.data){
          this.cartCount += book.quantity;
       }
        console.log(serve["data"]);
      }
    },
    (error)=>{
      console.log(error);
    });
  }
  onCart(){
    this.router.navigateByUrl("/cart");
  }
  navigateDashboard(){
    this.router.navigateByUrl('/dashboard');
  }
  increaseCart(count:number){
    console.log("increase");
    this.cartCount += count;
  }
  decreaseCart(count:number){
    this.cartCount -= count;
  }
}
