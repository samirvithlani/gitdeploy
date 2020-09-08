import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  myForm:FormGroup;
  name:string;
  date:string;
  data:Array<any>;
  provinces:Array<any>;

  constructor(private service:DataService) { }

  submit(){

    this.name = this.myForm.get('name').value;
    this.date = this.myForm.get('date').value;

    console.log(this.name)
    console.log(this.date)

    this.service.corona(this.name,this.date).subscribe((res)=>{

      this.data = res;
      console.log(res)

    },(err)=>{

    })

  }
  ngOnInit(): void {

    this.myForm = new FormGroup(
      {
        name:new FormControl(''),
        date:new FormControl('')
      }
    )

  }

}
