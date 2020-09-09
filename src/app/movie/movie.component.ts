import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit ,AfterViewChecked{

  constructor(private service:DataService) { }

  ngAfterViewChecked(){


  }
  movieid:string;
  myForm:FormGroup;
  movieName:string;
  data:Array<any>
  

   async submit(){

    this.movieName = this.myForm.get('name').value;
    this.service.movie(this.movieName).subscribe(res=>{

      console.log(res.titles[0].id);
      this.movieid = res.titles[0].id;
      
    })
    setTimeout(() => {

      this.service.movieName(this.movieid).then(res=>{

        this.data = res;
      console.log(this.data)
    }) 
    }, 1500);

    
    
        


  }
  ngOnInit(): void {

   
    
    this.myForm = new FormGroup(
      {
        name:new FormControl('')
      }
    )

    
  }

}
