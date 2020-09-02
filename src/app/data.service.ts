import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  login(email, password) {

    //login  api ...  true false..

    return this.http.get('http://localhost:8080/employee/adminlogin/' + email);


  }

  getData(): Observable<any> {

    return this.http.get("http://localhost:8080/employee/viewEmployee");
  }
  getSeries(): Observable<any> {

    return this.http.get("http://localhost:8080/seriesList")
  }
  userName = new Subject<any>();
}
