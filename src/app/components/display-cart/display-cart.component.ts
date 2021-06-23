import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksServiceService } from 'src/app/services/booksService/books-service.service';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.scss']
})
export class DisplayCartComponent implements OnInit {

  @ViewChild(ToolBarComponent)
  toolBar!: ToolBarComponent;
  constructor(private bookService: BooksServiceService,
     private router: Router, private formBuilder: FormBuilder,
     private userService: UserServiceService) { }
  data:any;
  address:any;
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
      if(this.data === null){
        this.placeOrderButton = false;
      }
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
    //adding cart value by one
    this.toolBar.increaseCart(1);
    this.bookService.addToCart(cart.bookID).subscribe((serve)=>{
      console.log(serve);
    },
    (error) =>
    {
      console.log(error);
    });
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
      //decreasing cart value by one
      this.toolBar.decreaseCart(1);
      this.bookService.decreaseCartCount(cart.bookID).subscribe((serve)=>{
        console.log(serve);
      },
      (error) =>
      {
        console.log(error);
      });
    }
    if(cart.quantity < 10){
    }
     else{
       this.decreaseButton = false;
     }
  }
  remove(book:any){
    this.bookService.deleteBookFromCart(book.bookID).subscribe((serve)=>{
      console.log(serve);
      this.toolBar.decreaseCart(book.quantity);
      window.location.reload();
    },
    (error) =>
    {
      console.log(error);
    });
  }
  placeOrder(){
    this.placeOrderButton = false;
    this.customerDetails = true;
    console.log(this.data);
  }
  continue(){
    this.continueButton = false;
    this.orderSummery = true;
  }

  addressForm = this.formBuilder.group({
    city : ['', [Validators.required]],
    name : ['', [Validators.required]],
    mobile : ['', [Validators.required]],
    pincode : ['', [Validators.required]],
    locality : ['', [Validators.required]],
    address : ['', [Validators.required]],
    landMark : ['', [Validators.required]],
    options : ['', [Validators.required]]
});
get addressFormControls() { return this.addressForm.controls; }
onAddAddress(newAddress:any){
    if(this.addressForm.invalid){
      console.log("invalid");
      return;
    }
    this.continueButton = false;
    this.orderSummery = true;
    this.address = "Name : " + newAddress.name + " City: " + newAddress.city
                    " Mobile: " + newAddress.mobile + " pincode: " + newAddress.pincode
                    " Locality: " + newAddress.locality + " Address: " + newAddress.address
                    " Landmark: " + newAddress.landMark + " Option: " + newAddress.options;
    
    this.userService.addNewAddress(this.address).subscribe((serve)=>{
      console.log(serve);
    },
    (error) => {
      console.log(error);
    });
  }
  onCheckout(){
    console.log("oncheck");
    this.bookService.placeOrder(this.address).subscribe((serve)=>{
      console.log(serve);
      //window.location.reload();
      this.router.navigateByUrl('/orderPlaced');
    },
    (error)=>{
      console.log(error);
    });
  }
}



