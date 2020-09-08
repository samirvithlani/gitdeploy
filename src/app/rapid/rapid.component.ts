import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Data } from '@angular/router';


@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {

  constructor(private service: DataService) { }
  myForm: FormGroup;
  data: Array<any>;
  name: string;
  date: string;
  provinces: Array<any>;

  
  submit() {

    console.log("submit called..")
    console.log(this.myForm.value)
    this.name = this.myForm.get('name').value;
    this.date = this.myForm.get('date').value;
    

    this.service.corona(this.name,this.date).subscribe(res => {

      this.data = res;
      console.log("data -- > ", this.data);

    })

    console.log(this.name)
    console.log(this.date)

  }
  ngOnInit(): void {

    
    this.myForm = new FormGroup(
      {
        name: new FormControl(''),
        date: new FormControl('')
      }
    );
  


  }

}
