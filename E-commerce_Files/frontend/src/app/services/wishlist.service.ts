import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { userUrl } from '../config/urls';
import { generalUrl } from '../config/urls';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _http:HttpClient, private router: Router) { }
  

  /*getWishlistUser(obj:any) {
    return this._http.get<any>( generalUrl + '/favorite', obj);
  }*/

  getWishlistUser(id:any) {
    return this._http.get<any>( generalUrl + '/favorite/${id}');
  }


  postWishlist(obj:any) {
    return this._http.post<any>( generalUrl + '/favorite', obj);
  }


  deleteWishlist(id:any) {
    return this._http.delete<any>( generalUrl + '/favorite/${id}');
  }


  
}
