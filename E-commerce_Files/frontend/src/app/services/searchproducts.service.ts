import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchproductsService {

  private URL = 'http://localhost:3000/admin';

  constructor(private _http:HttpClient, private router: Router) { }

  search(varUrl:any) {
    return this._http.get<any>(this.URL + '/searchAll/${varUrl}');
  }
}
