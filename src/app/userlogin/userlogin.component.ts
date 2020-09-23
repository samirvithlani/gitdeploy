import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private router:Router,private loginService:AuthenticationService) { }
  userName ="samir";
  password=""
  invalidLogin = false;

  checkLogin(){

    if(this.loginService.authentication(this.userName,this.password)){
      this.router.navigate([''])
      this.invalidLogin = false;

    }
    else{

      this.invalidLogin = true;
      
    }

  }
  ngOnInit(): void {
  }

}
