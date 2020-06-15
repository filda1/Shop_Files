import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string
  private URL = 'http://localhost:3000/api';

  headers= new Headers();

  constructor(private _http:HttpClient, private router: Router) { }

  

 login(user:any) {
    return this._http.post<any>(this.URL + '/user/login', user,
    { 
     // headers:new HttpHeaders().append('Authorization','Bearer + nnnnnnnnnnnnnnnnn'),
    }
    
    );
  }

  register(user:any) {
    return this._http.post<any>(this.URL + '/user/register', user);
  }

  /*register(body:any){
    return this._http.post(this.URL +'/user/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json'),
    });
  }*/

  /*login(user:any){
     return this._http.post(this.URL +'/user/login',user,{
      //observe:'user',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }*/

 

  /*getHome() {
    return this._http.get<any>(this.URL + '/user/home');
  }*/


  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  

}
