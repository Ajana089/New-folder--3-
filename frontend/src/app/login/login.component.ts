import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String="Login"
  constructor(private userService:UserService,private router:Router) { }
 
  userSingnup={

   
    email:'',
   
    password:''
  
    


 }
 


  ngOnInit(): void {
  }

  addUser()
  {
    this.userService.loginUser(this.userSingnup);
   
    console.log(this.userSingnup);
    //this.router.navigate(['books']);
  }
  


}
