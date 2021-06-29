import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksServiceService } from 'src/app/services/booksService/books-service.service';
import { SharedServiceService } from 'src/app/services/sharedService/shared-service.service';
import { SnackBarService } from 'src/app/services/snackBar/snack-bar.service';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.scss']
})
export class DisplayCartComponent implements OnInit, AfterViewInit {

  @ViewChild(ToolBarComponent)
  toolBar!: ToolBarComponent;
  constructor(private bookService: BooksServiceService,
     private router: Router, private formBuilder: FormBuilder,
     private userService: UserServiceService, private snackBar: SnackBarService,
     private sharedService: SharedServiceService) { }
  ngAfterViewInit(): void {
    this.onCart();
  }
  
  submitted = false;
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
    if(localStorage.getItem("Bearer")){
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
    else{
      this.router.navigateByUrl("/login-signup");
    }
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
      },
      (error) =>
      {
        console.log(error);
      });
    }
    if(cart.quantity < 10){
    }
    else
    {
     this.decreaseButton = false;
    }
  }

  remove(book:any){
    this.bookService.deleteBookFromCart(book.bookID).subscribe((serve)=>{
      this.toolBar.decreaseCart(book.quantity);
      this.ngAfterViewInit();
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
    city : ['', [Validators.required, Validators.minLength(3)]],
    name : ['', [Validators.required, Validators.minLength(3)]],
    mobile : ['', [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
    pincode : ['', [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{5}$")]],
    locality : ['', [Validators.required, Validators.minLength(5)]],
    address : ['', [Validators.required, Validators.minLength(10)]],
    landMark : ['', [Validators.required, Validators.minLength(5)]],
    options : ['', [Validators.required]]
  });
  get addressFormControls() { return this.addressForm.controls; }

  onAddAddress(newAddress:any){
    this.submitted = true;
    if(this.addressForm.invalid){
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
    this.bookService.placeOrder(this.address).subscribe((serve)=>{
      this.sharedService.setOption(serve["data"]);
      this.router.navigateByUrl('/orderPlaced');
      this.snackBar.openSnackBar("Order Placed Successfully", "Success!!!");
    },
    (error)=>{
      console.log(error);
    });
  }
}



