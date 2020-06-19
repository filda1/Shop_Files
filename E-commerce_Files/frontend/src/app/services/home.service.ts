import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { userUrl } from '../config/urls';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getHome() {
    return this.http.get<any>( userUrl + '/home');
  }

}