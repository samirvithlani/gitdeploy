import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit, AfterViewInit {
  @ViewChild("myInput") myInput: ElementRef;
  reqData:string;
  ngAfterViewInit() {

    console.log("myinput -->",this.myInput)
    const searchItem = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(


      map(event=>event.target.value),
      debounceTime(1500),
      distinctUntilChanged()
    );
   
    searchItem.subscribe(res=>{
      this.reqData =res;
      console.log(res)
      
      
    })
  }
  constructor(private loding:LoadingBarService) { }

  ngOnInit(): void {


  }

}
