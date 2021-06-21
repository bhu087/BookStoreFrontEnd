import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
  constructor(private bookService: BooksServiceService) { }
  ngOnInit(): void {
    this.onGetCart();  //this is for initial badge count
  }
  callChild(message:Event){
    this.cartCount++;       //Click on add to cart increase cart value
  }
  onGetCart(){
    this.bookService.getCart().subscribe((serve) => {
      this.data = serve["data"];
      for(let book of this.data){
        this.cartCount += 1;
     }
      console.log(serve["data"]);
    },
    (error)=>{
      console.log(error);
    });
  }
}
