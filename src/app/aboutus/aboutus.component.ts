import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private service:DataService) { }

  value:string;

  submitValue(val){

    this.value = val.value;
  }

  ngOnInit(): void {
  }

  api(){

    this.service.getData().subscribe(res=>{

      console.log(res)
    })


  }

}
