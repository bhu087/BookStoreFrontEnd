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
      for(let book of this.data){
        this.cartCount += 1;
     }
      console.log(serve["data"]);
    },
    (error)=>{
      console.log(error);
    });
  }
  onCart(){
    this.router.navigateByUrl("/cart");
  }
}
