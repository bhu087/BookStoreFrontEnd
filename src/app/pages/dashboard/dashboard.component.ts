import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { DisplayBooksComponent } from 'src/app/components/display-books/display-books.component';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { BooksServiceService } from 'src/app/services/booksService/books-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @ViewChild(ToolBarComponent)
  // primarySampleComponent!: ToolBarComponent;
  // child_id!: number;
  data:any;
  cartCount: number = 0;
  searchTerm: any;
  @ViewChild(ToolBarComponent)
  toolBar!: ToolBarComponent;
  @ViewChild(DisplayBooksComponent)
  displayBooks!: DisplayBooksComponent;
  constructor(private bookService: BooksServiceService) { }
  
  ngAfterViewInit(): void {
    
  }
  searcStringFromTool(searchString:any){
    this.searchTerm = searchString.target.value;
    console.log(searchString.target.value);
    this.displayBooks.searchStringCall();
  }
  ngOnInit(): void {
    this.onGetCart();  //this is for initial badge count
  }
  callChild(message:Event){
    this.cartCount++;       //Click on add to cart increase cart value
  }
  onGetCart(){
    if(localStorage.getItem("Bearer")){
      this.bookService.getCart().subscribe((serve) => {
        this.data = serve["data"];
        if(this.data !== null){
          for(let book of this.data){
            this.cartCount += book.quantity;
         }
        }
        else{
          this.cartCount = 0;
        }
      },
      (error)=>{
        console.log(error);
      });
    }
    
  }
}
