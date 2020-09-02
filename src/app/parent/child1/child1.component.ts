import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  userName:string;

  constructor(private serivce:DataService) {
    this.serivce.userName.subscribe(uname=>{
      this.userName = uname;
    })
   }

  updateUserName(uname){

    
    this.serivce.userName.next(uname.value)
  }
  ngOnInit(): void {
  }

}
