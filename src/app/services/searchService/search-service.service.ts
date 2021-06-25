import { Injectable } from '@angular/core';
import { BooksServiceService } from '../booksService/books-service.service';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name:'bookFilter'
})
export class SearchServiceService implements PipeTransform {

  constructor(private bookService: BooksServiceService) {
   }
  transform(books: any[], searchTerm:any): any[] {
    if(!books || !searchTerm){
      return books;
    }
    console.log(books);
    console.log(searchTerm);
    return books.filter(book => 
      (book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.description.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    //book => book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
    //book => book.bookName.toLowerCase().indexOf(searchTerm.toLowerCase())  !== -1
  }
}
