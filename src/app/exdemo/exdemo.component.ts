import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exdemo',
  templateUrl: './exdemo.component.html',
  styleUrls: ['./exdemo.component.css']
})
export class ExdemoComponent implements OnInit {

  constructor(private router:Router) { }

  no1:number = 10;
  no2:number = 0;
  no3:number=0;
  trycatch(){

    try{

      //const nam =nm;
    }
    catch(error){

      console.log("error handled...")
      this.router.navigate(['error'])
    }
  }
  normal(){

   
    
 console.log("normal function without try catch...")
    
  }
  ngOnInit(): void {
  }

}
