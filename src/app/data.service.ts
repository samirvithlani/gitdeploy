import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, retryWhen, delay, scan } from 'rxjs/operators';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }

  movieName(id):Promise<any>{

    let headers = new HttpHeaders();
    headers = headers.set("x-rapidapi-host", "imdb-internet-movie-database-unofficial.p.rapidapi.com").set("x-rapidapi-key", "2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6");
    return this.http.get("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+id,{
      headers:headers
    }).toPromise();

  }
  movie(query):Observable<any>{

    let headers = new HttpHeaders();
    headers = headers.set("x-rapidapi-host", "imdb-internet-movie-database-unofficial.p.rapidapi.com").set("x-rapidapi-key", "2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6");

    return this.http.get("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/"+query,{
      headers:headers
    })

  }


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


  emailCheck(email):Observable<any>
  {

    return this.http.get('http://localhost:8080/employee/checkemail/' + email);
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
