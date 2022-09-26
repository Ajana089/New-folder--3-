import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 title:String="Details of Books";
 data:any

  books=[{
    name :'',
    remark:'',
    author:'',
    description:''
   }]
  

  constructor(public bookservice:BookserviceService,public router:Router) { }

  ngOnInit(): void {
  
     this.bookservice.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }

  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }

  deleteBook(book:any)
  {
    this.bookservice.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
  
    }
}
