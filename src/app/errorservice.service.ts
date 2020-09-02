import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorserviceService implements ErrorHandler{

  constructor(private injector:Injector) { }
  handleError(error:any){

    const router = this.injector.get(Router)
    //router url redirect..
    console.log(router)
    if(Error instanceof HttpResponse){

      console.log(error.status)  // server ... 505 402

    }
    
    else{

      console.log("an error accured.")
    }

      router.navigate(['error'])
  }
  
}
