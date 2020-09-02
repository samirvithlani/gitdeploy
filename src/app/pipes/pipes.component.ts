import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  name:string="sam";
  surname:string="VITHLANI";
  todaydate = new Date();
  rs:number =5000;
  jsonvalue ={
      name:'sam',age:20,city:'london'}
      months =['jan','feb','march','app','may','june']
  ngOnInit(): void {
  }

}
