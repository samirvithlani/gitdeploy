import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private service:DataService) { 

    this.service.userName.subscribe(uname=>{

      this.userName = uname;
    })
  }

  userName:string ="name";
  ngOnInit(): void {
  }

}
