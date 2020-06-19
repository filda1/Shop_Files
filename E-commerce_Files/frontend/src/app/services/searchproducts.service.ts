import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { generalUrl } from '../config/urls';

@Injectable({
  providedIn: 'root'
})
export class SearchproductsService {


  constructor(private _http:HttpClient, private router: Router) { }

  search(varUrl:any) {
    return this._http.get<any>( generalUrl + '/searchAll/${varUrl}');
  }
}
