import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:String="BooK Details"

  book={

     name:'',
     description:'',
     author:'',
     remark:''
   }

  constructor(public router:Router,public bookservice:BookserviceService) { }

  ngOnInit(): void {
  }

  addUser()
  {
    this.bookservice.newUser(this.book);
   
    console.log(this.book);
    this.router.navigate(['books']);
  }


  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }

}
