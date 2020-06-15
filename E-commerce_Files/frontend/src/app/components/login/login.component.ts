import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute  } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  user = {email:'',password:''};

  /*loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });*/

  constructor(private _router:Router, private _user:UserService, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){

    this._user.login(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        //setToken(res.token);
        //this._router.navigate(['/home']);
        this._router.navigateByUrl(this.returnUrl);
      },
      err => console.log(err)
    )


     //console.log(this.user);
     
    /*if(!this.loginForm.valid){
      console.log('Invalid');return;
    }*/

    // console.log(JSON.stringify(this.loginForm.value));
    /*this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/home']);} ,
      error=>console.error(error)
    )*/

    

  
  }

 

}
