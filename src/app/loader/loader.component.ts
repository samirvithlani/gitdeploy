import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderserviceService } from '../loaderservice.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderservice:LoaderserviceService) { }
  color ="primary"
  mode = "indeterminate"
  value =50;
  isLoading:Subject<boolean> =this.loaderservice.isLoading;
  ngOnInit(): void {
  }

}
