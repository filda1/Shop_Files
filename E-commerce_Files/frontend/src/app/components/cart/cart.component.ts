import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() cambiox = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    //this.cambiox.emit('Ola')
  }

}
