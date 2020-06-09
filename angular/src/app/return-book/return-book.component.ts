import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  constructor(private bookService: BookserviceService) {

  }

  ngOnInit(): void {
  }
  message;
  borrowedBooks;
  error;

  

  bookReturn(book) {
    this.bookService.returnData({ bookid: book.bookid, userid: book.userid }).subscribe(response => {
      console.log(response);
      if (response.error) {
        this.error = 'Book is not Returned';
        setTimeout(() => {
          this.error = null;
        }, 5000);
      } else {
        this.message = 'Book returned to the library';
      }
      setTimeout(() => {
        this.message = null;
      }, 5000);
    });

  }
}