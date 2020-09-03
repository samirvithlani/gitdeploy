import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, retryWhen, delay, scan } from 'rxjs/operators';

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


  viewEmployeeRetry(): Observable<any> {

    return this.http.get('http://localhost:8080/employee/viewEmployee').pipe(

      //retry(15)
      retryWhen(err => err.pipe(

        delay(2000), scan((retryCount) => {
          if (retryCount > 5) {
            throw err;
          }
          else {

            retryCount = retryCount + 1;
            console.log("retry count -->", retryCount)
            return retryCount;
          }

        }, 0)

      ))

    );
  }
}
