import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html',
  styleUrls: ['./inputchild.component.css']
})
export class InputchildComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit {

  constructor() { }
  //decorator..
  @Input() item: string;

  ngAfterContentInit(){

    console.log("after content init")
  }

  ngAfterViewInit(){

    console.log("after view init")
  }
  ngAfterContentChecked(){

    console.log("after content checked..")
  }
  ngDoCheck(){

    console.log("do check method called...")
  }
  ngOnChanges(changes: SimpleChanges) {

    console.log("on changes method called..")
    console.log("1*", changes.item.previousValue)
  }
  ngOnInit(): void {

    console.log("item =", this.item)
  }

}
