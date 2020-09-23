import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authentication(username,password){

    if(username =="samir" && password =="sam"){

        sessionStorage.setItem('userName',username)
        return true;
    }
    else{

      return false;
    }

  }
  isLoggedIn(){

    let user= sessionStorage.getItem('userName')
    return!(user===null)

  }
  logout(){

    sessionStorage.removeItem('userName')
  }
}
