import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { BooksServiceService } from 'src/app/services/booksService/books-service.service';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  data :any;
  user : any;
  userName : any;
  @Output() toolToDash = new EventEmitter<number>();
  @Input() cartCount: number = 0;  //data sharing cart count will be updating according to add to bag click
  constructor(private bookService: BooksServiceService, private userService: UserServiceService,
     private router: Router) {
    this.onGetCart();     // initial badge count
    this.onGetUser();
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
  onGetUser(){
    this.userService.getUser().subscribe((serve) => {
      this.user = serve["data"];
      this.userName = this.user.name;
      console.log(this.user);
    },
    (error)=>{
      console.log(error);
    });
  }
  onMyWishlist(){
    this.router.navigateByUrl('/wishlist');
  }
  onLogout(){
    localStorage.clear();
    this.router.navigateByUrl('/main/login');
  }
}
