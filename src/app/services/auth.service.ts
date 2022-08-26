import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:9085"

  constructor(private http:HttpClient) { }

  doLogin(user:User):Observable<any> 
  {
    return this.http.post(`${this.url}/token`,user, {responseType: 'text'});
  }

  getPensionerList()
  {
    return this.http.get<[]>(`${this.url}/details`);
  }


  loginUser(token:any,credentials:any)
  {
    localStorage.setItem('token',token);
    // localStorage.setItem('uname',user.username);
    return true;
  }
  setSession(token: string) {
        localStorage.setItem('token', token);
        return true;
      }

  loginUserName()
  {
    return localStorage.getItem('uname');
  }

  isLoggedIn()
  {
      let token=localStorage.getItem('token');
      if(token==undefined||token==''||token==null)
      {
        return false;
      }else{

        return true;
      }
  }
  logout()
  {
    localStorage.removeItem('token');
    return true;
  }

  getToken()
  {
    return localStorage.getItem('token');
  }
  
}





