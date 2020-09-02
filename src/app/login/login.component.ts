import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:DataService,private router:Router) { }
  userName:string="";
  userPassword:string="";
  flag:boolean;
  res:any;
  submit(){

    //

    this.service.login(this.userName,this.userPassword).subscribe(res=>{

      this.res = res;
      console.log(res)
    })
    if(this.flag == true){

      localStorage.setItem("adminActive","true")
      sessionStorage.setItem("admin","true");
      console.log("session activaeted..")

    }
    else{

      console.log("pls try agein..")

      this.router.navigate(['/login']) // redirect..


    }


  }
  ngOnInit(): void {
  }

}
