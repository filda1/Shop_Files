import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { generalUrl } from '../config/urls';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>( generalUrl + '/products');
  }
}
