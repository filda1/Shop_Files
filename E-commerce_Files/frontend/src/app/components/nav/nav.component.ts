import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
 
//Para services en View
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:  [ UserService ]  //Para traer services a View
})



export class NavComponent implements OnInit {


  varUrl ='';

  constructor(private _router:Router,public userService: UserService) { }

  

  ngOnInit(): void {
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }


}
