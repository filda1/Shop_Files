import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any
  @Input() indice: any
  @Input() todoCartItems: any

  @Output() cambio = new EventEmitter();
  @Output() cambioQty = new EventEmitter();

  //value="{{  }}"
   //qty:number = this.cartItem.qty;

  isDivVisible = true;


  constructor() { }

  ngOnInit(): void {

    //console.log(this.todoCartItems)
  }


  changeQty(value){ 

    // Actulizo el cambio de cantidad de CartItem
    this.cartItem.qty = value
    // Actualizo el cambio de precio por causa de Qty
    this.cartItem. price = this.cartItem. price 

    this.cambioQty.emit(this.cartItem)
  }

  onDelete(i:number, cartSelected:any)
  {
    
    
    this.cambio.emit(cartSelected)
  

    //this.todoCartItems = this.todoCartItems.filter(x => x!= this.cartItem[i])

    //this.cartItem = this.todoCartItems
    //this.isDivVisible = false;

    //alert(this.cartItem.length)
    //console.log(this.cartItem)
  }

}
