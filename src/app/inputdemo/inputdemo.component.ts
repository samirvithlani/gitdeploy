import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdemo',
  templateUrl: './inputdemo.component.html',
  styleUrls: ['./inputdemo.component.css']
})
export class InputdemoComponent implements OnInit {

  constructor() { }
  ci:string = "apple-iphone-11s"
  value:string;
  ngOnInit(): void {
  }

  uname(value){

    this.ci = value.value;

  }
}
