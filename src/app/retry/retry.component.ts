import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(private service: DataService) { }
  employee: Array<any> = [];
  fetching: boolean = false;
  status: string = "NO DATA";

  fetchData() {
    this.fetching = true;
    this.service.viewEmployeeRetry().subscribe((res) => {

      this.employee = res;
      this.status = "Data Found.."
      this.fetching = false;

    }, (err) => {

      this.status = "problem in fetching Data.."

    })


  }

  ngOnInit(): void {
  }

}
