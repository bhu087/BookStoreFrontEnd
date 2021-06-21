import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { BooksServiceService } from 'src/app/services/booksService/books-service.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  cartCount : number = 0;
  col: any = 4;
  data:any;
  @Output() childToParent = new EventEmitter<Event>();
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  constructor(private booksService: BooksServiceService) { }

  ngOnInit(): void {
    this.onGetAllBooks();
  }
// openMyMenu() {
//   this.trigger.openMenu();
// } 
// closeMyMenu() {
//   this.trigger.closeMenu();
// }

notifyDashboard(event:Event){
  console.log(event);
  this.childToParent.emit(event);
}
  // for selecting columns 
  onResize(event:any) {
    if(window.innerWidth >= 600)
    {
      this.col =  4;
    }
    else{
      this.col = 1;
    }
  }
  onGetAllBooks(){
    this.booksService.getAllBooks().subscribe((result) => {
      console.log(result);
      this.data = result["data"];
      for(let book of this.data){
        book["clicked"] = false;
     }
      console.log(result["data"]);
    },
    (error)=>{
      console.log(error);
    });
  }
  onAddToCart(a:any){
    let index = this.data.indexOf(a);
    a.clicked = true;
    this.data[index] = a;
  }
}
