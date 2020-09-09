import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  dataArray =[

    {
      name:'gajni',
      date:'02/15/2007'
    },
    {
      name:'dil bechara',
      date:'09/09/2020'
    },
    {
      name:'spider man',
      date:'02/15/2010'
    },
    {
      name:'avangers',
      date:'02/14/2018'
    },
  ]
  salary:string ='500';
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
