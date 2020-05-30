import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'frontend';

  constructor( public userService:UserService, public nav: NavbarService) { }
}
