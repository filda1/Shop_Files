import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor1Service implements HttpInterceptor {

  constructor(private authService:UserService) { }

  intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }

}