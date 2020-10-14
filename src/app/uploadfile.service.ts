import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(private http:HttpClient) { }

getFiles():Observable<any>{

  return this.http.get("http://localhost:8080/files")
}
  upload(formData):Observable<HttpEvent<any>>{

    //const formData = new FormData();
    //formData.append('file',file);

    const req= new HttpRequest('POST',"http://localhost:8080/upload",formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  
  }

  
}
