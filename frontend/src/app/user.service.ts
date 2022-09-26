import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
error:any
  constructor(private http:HttpClient,public router:Router) { }

  newUser(user:any){

   
    // return this.http.post("http://localhost:3000/user/signup",{user})
    // .subscribe(data=>{alert(data)})
    return this.http.post("http://localhost:3000/user/signup",{user})
    .subscribe((res) => {
      this.router.navigate(['login']);
  }, (err) => {
      this.error = err.message;
      alert(err.message);
      
  });


  }
 

  loginUser(user:any){

    
    return this.http.post("http://localhost:3000/user/login",{user})
  //   .subscribe((data)=>{
  //     this.error=JSON.parse(JSON.stringify(data))
  //   console.log(this.error);

  //   })
  // }
  .subscribe((res) => {
    this.router.navigate(['books']);
                    }, 
(err) => {
    this.error = err.message;
    alert(err.message);

})
}
}