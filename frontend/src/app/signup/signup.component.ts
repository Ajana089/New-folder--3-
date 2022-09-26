import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title:String="User Registration"
  confirmpwd:any;
  file:any;
 
    loginUser(item:any){
    alert("completed");

  }
  constructor(private userService:UserService,private router:Router) { }
 
   userSingnup={

     name:'',
     email:'',
    
     password:'',
    number:''
     


  }
  

 
  ngOnInit(): void {
  }

  addUser()
  {
    this.userService.newUser(this.userSingnup);
   
    console.log(this.userSingnup);
   // this.router.navigate(['login']);
  }
  

}
