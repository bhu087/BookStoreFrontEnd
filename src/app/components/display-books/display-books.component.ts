import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {

  col: any = 4;
  showFirstButton: any = false;
  addWishlist: any = false;
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  constructor() { }

  ngOnInit(): void {
  }
   HEROES = [
    {id: 1, name:'Superman', clicked:false},
    {id: 2, name:'Batman', clicked:false},
    {id: 5, name:'BatGirl', clicked:false},
    {id: 3, name:'Robin', clicked:false},
    {id: 4, name:'Flash', clicked:false}
];
// openMyMenu() {
//   this.trigger.openMenu();
// } 
// closeMyMenu() {
//   this.trigger.closeMenu();
// }
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
  onAddToCart(a:any){
    let index = this.HEROES.indexOf(a);
    console.log(a.clicked);
    a.clicked = true;
    this.HEROES[index] = a;
    console.log(a.clicked);
  }
}
