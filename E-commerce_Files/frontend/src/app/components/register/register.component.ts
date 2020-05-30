import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = { email:'', username:'', password:'', cpass:''};


  /*registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)
  })*/

  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit(): void {
  }

  register() { 

    if(!this.user || (this.user.password != this.user.cpass)){ 
      console.log('Invalid Form'); return;
    }
      
      this._userService.register(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/home']);
        },
        err => console.log(err)
      )
    
      

     
   /* if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); localStorage.setItem('token', this.registerForm.value.token);this._router.navigate(['/home']);},
      error=>console.error(error)
    )*/
    // console.log(JSON.stringify(this.registerForm.value));

  }

}
