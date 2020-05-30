import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private URL = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.URL + '/products');
  }
}
