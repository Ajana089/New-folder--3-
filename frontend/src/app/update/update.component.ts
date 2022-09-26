import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data:any;

  constructor(public bookservice:BookserviceService,public router:Router ) { }

  book={
    name:'',
    description:'',
    author:'',
    remark:''
  }

  ngOnInit(): void {

    let bookId = localStorage.getItem("editBookId");
    console.log(bookId);
    this.bookservice.getBookId(bookId).subscribe((data:any)=>{
    this.book=JSON.parse(JSON.stringify(data));
  })

  }
  editBook()
  {    
    this.bookservice.editBook(this.book);   
    alert("Success");
    this.router.navigate(['books']);
  }


}
