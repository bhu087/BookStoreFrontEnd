import { AfterContentInit, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { from } from 'rxjs';
import { BooksServiceService } from 'src/app/services/booksService/books-service.service';


@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit, AfterViewInit {
  cartCount : number = 0;
  col: any = 4;
  data:any = [];
  sortedData:any;
  totalItems: number = 0;
  cartData:any;
  wishListData: any;
  disableWish = false;
  showMatMenu=false;
  @Output() childToParent = new EventEmitter<Event>();
  @ViewChild(MatMenuTrigger)
  menu!: MatMenuTrigger;
  p:any;
  public pageSlice = this.data.slice(0,12);
  constructor(private booksService: BooksServiceService) { 
    this.onGetAllBooks();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
    this.onGetCart();
    this.onGetWishList();
    }, 100)
  }

  ngOnInit(): void {
    this.defaultColsize();
  }

notifyDashboard(event:Event){
  console.log(event);
  this.childToParent.emit(event);
}
  defaultColsize(){
    if(window.innerWidth <= 820){
      this.col = 1;
    }
    else if(window.innerWidth > 820 && window.innerWidth <= 1095){
      this.col = 2;
    }
    else if(window.innerWidth > 1095 && window.innerWidth <= 1320){
      this.col = 3;
    }
    else{
      this.col = 4;
    }
  }
  // for selecting columns 
  onResize(event:any) {
    if(window.innerWidth <= 820){
      this.col = 1;
    }
    else if(window.innerWidth > 820 && window.innerWidth <= 1095){
      this.col = 2;
    }
    else if(window.innerWidth > 1095 && window.innerWidth <= 1320){
      this.col = 3;
    }
    else{
      this.col = 4;
    }
  }
  onGetAllBooks(){
    this.booksService.getAllBooks().subscribe((result) => {
      this.data = result["data"];
       for(let book of this.data){
         book["clicked"] = false;
         book["wish"] = false;
         this.totalItems += 1;
      }
    },
    (error)=>{
      console.log(error);
    });
  }
  onGetCart(){
    this.booksService.getCart().subscribe((result) => {
      this.cartData = result["data"];
      if(this.cartData !== null){
      for(let book of this.cartData){
        book["clicked"] = true;
     }
     this.checkBookCartStatus();
    } 
    },
    (error)=>{
      console.log(error);
    });
  }
  onGetWishList(){
    this.booksService.getWishList().subscribe((result) => {
      this.wishListData = result["data"];
      if(this.wishListData !== null){
      for(let book of this.wishListData){
        book["wish"] = true;
     }
     this.checkBookWishListtatus();
    } 
    },
    (error)=>{
      console.log(error);
    });
  }
  checkBookCartStatus(){
    if(this.cartData !== null){
      for(let book of this.data){
        for(let cart of this.cartData){
          if(book.bookID === cart.bookID){
            if(cart.clicked === true){
              book["clicked"] = true;
            }
          }
       }
     }
    }
  }
  checkBookWishListtatus(){
    if(this.wishListData !== null){
      for(let book of this.data){
        for(let cart of this.wishListData){
          if(book.bookID === cart.bookID){
            if(cart.wish === true){
              book["wish"] = true;
            }
          }
       }
     }
    }
  }

  onAddToCart(a:any){
    let index = this.data.indexOf(a);
    a.clicked = true;
    this.data[index] = a;
    this.booksService.addToCart(a.bookID).subscribe((serve) =>
    {
      console.log(serve);
    },
    (error) =>{
      console.log(error);
    });
  }



  sort(){
    console.log(this.data);
       for(let book of this.sortedData){
       book["clicked"] = false;
       book["wish"] = false;
      }
      for(let book of this.data){
       for(let sortBook of this.sortedData){
         if(book.bookID === sortBook.bookID){
           sortBook = book;
         }
       }
     }
      this.data = this.sortedData;
    console.log(this.data);
  }
 
  onSort(event:any){
     this.booksService.getSortedBooks(event).subscribe((serve) =>
      {
        this.sortedData = serve['data'];
        this.sort();
        this.ngAfterViewInit();
      },
      (error) =>{
        console.log(error);
      });
  }
  addtoWishList(book:any){
     let index = this.data.indexOf(book);
     book.wish = true;
     this.data[index] = book;
     this.booksService.addToWishList(book.bookID).subscribe((serve) =>
     {
       console.log(serve);
     },
     (error) =>{
       console.log(error);
     });
   }
   openMyMenu(){
    this.menu.openMenu();
    console.log("Mouse Enter");
   }
   closeMyMenu(){
     this.menu.closeMenu();
    console.log("Leave");
   }

   dataRefresher:any;
   refreshData(){
    this.dataRefresher =
      setInterval(() => {
        this.onGetAllBooks();
        //Passing the false flag would prevent page reset to 1 and hinder user interaction
      }, 30000);  
  }
}
