import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from 'src/app/services/booksService/books-service.service';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.scss']
})
export class DisplayCartComponent implements OnInit {

  constructor(private bookService: BooksServiceService) { }
  data:any;
  increaseButton = true;
  decreaseButton = true;
  placeOrderButton =true;
  continueButton = true;
  customerDetails = false;
  orderSummery = false;
  ngOnInit(): void {
    this.onCart();
  }
  onCart(){
    this.bookService.getCart().subscribe((serve) => {
      this.data = serve["data"];
    },
    (error)=>{
      console.log(error);
    }
    );
  }
  increase(cart:any){
    if(cart.quantity < 10){
      let index = this.data.indexOf(cart);
    cart.quantity += 1;
    this.data[index] = cart;
    this.decreaseButton = true;
    }
    if(cart.quantity > 0){
      
    }
    else{
      this.increaseButton = false;
    }
     
  }
  decrease(cart:any){
    if(cart.quantity > 1){
      let index = this.data.indexOf(cart);
      cart.quantity -= 1;
      this.data[index] = cart;
      
      this.increaseButton = true;
    }
    if(cart.quantity < 10){
    }
     else{
       this.decreaseButton = false;
     }
  }
  placeOrder(){
    this.placeOrderButton = false;
    this.customerDetails = true;
  }
  continue(){
    this.continueButton = false;
    this.orderSummery = true;
  }
}
