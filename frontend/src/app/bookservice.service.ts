import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(public http:HttpClient,public router:Router) { }

  newUser(user:any){

   
    return this.http.post("http://localhost:3000/books/addbook",user)
    .subscribe(data=>{alert(data)})

  }
  getBookId(id:any){
    return this.http.get("http://localhost:3000/books/"+id);
  }

  getBooks()
  {
    return this.http.get("http://localhost:3000/books/getbook");
  }

  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:3000/books/remove/"+id)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/books/update",book)
    .subscribe(data =>{console.log(data)})
  }
 
}
