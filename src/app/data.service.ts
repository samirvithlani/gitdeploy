import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, retryWhen, delay, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }


  corona(name, date): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.set("x-rapidapi-host", "covid-19-data.p.rapidapi.com").set("x-rapidapi-key", "");
    let params = new HttpParams();
    console.log("inside corona", name)
    console.log(date)
    params = params.append("name", name).append("date", date);


    return this.http.get("https://covid-19-data.p.rapidapi.com/report/country/name", {
      params: params, headers: headers
    });

  }

  login(email, password) {

    //login  api ...  true false..

    return this.http.get('http://localhost:8080/employee/adminlogin/' + email);


  }

  getCoronaData(name, date): Observable<any> {

    let params = new HttpParams();
    params.set("name", name).set("date", date)

    let headers = new HttpHeaders();
    headers.set("x-rapidapi-host", "covid-19-data.p.rapidapi.com").set("x-rapidapi-key", "")

    return this.http.get("https://covid-19-data.p.rapidapi.com/report/country/name", {
      params: params, headers: headers
    });
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
