import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { BooksServiceService } from 'src/app/services/booksService/books-service.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, AfterViewInit {

  @ViewChild(ToolBarComponent)
  toolBar!: ToolBarComponent;
  constructor(private bookService : BooksServiceService) { }
  ngAfterViewInit(): void {
    this.onGetWishlist();
  }
  data:any;
  ngOnInit(): void {
    this.onGetWishlist();
  }
onGetWishlist(){
  this.bookService.getWishList().subscribe((serve)=>{
    this.data = serve["data"];
  },
  (error)=>{
    console.log(error);
  }
  );
}
remove(book:any){
  this.bookService.deleteBookFromWishlist(book.bookID).subscribe((serve)=>{
    this.onGetWishlist();
  },
  (error)=>{
    console.log(error);
  }
  );
}
addToCart(book:any){
this.bookService.addwishToCart(book.bookID).subscribe((serve)=>{
  this.onGetWishlist();
  this.toolBar.increaseCart(1);
  //window.location.reload();
},
(error)=>{
  console.log(error);
});
}
}
