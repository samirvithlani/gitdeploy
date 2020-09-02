import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  userName: String;
  constructor(private service: DataService) {


    this.service.userName.subscribe(uname => {
      this.userName = uname;
    })

  }

  updateUserName(uname) {


    this.service.userName.next(uname.value)
  }
  ngOnInit(): void {
  }

}
