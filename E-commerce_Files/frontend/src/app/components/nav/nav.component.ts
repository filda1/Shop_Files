import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MessengerService } from 'src/app/services/messenger.service'
 
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

  cartItems = [];


  cartTotal = 0
  varUrl ='';

  constructor(private _router:Router,public userService: UserService, private msg: MessengerService,) { }

  

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      //this.loadCartItems();
      this.addCartItems(product);
    })
  }

  addCartItems(product: Product) {

      if (this.cartItems.length === 0){ 

        this.cartItems.push ({ 
          productId: product.id,
          productName: product.product,
          qty: 1,
          price:product.price,
          image:product.path,
        
        })

      }
      else { 

        for (let i in this.cartItems) {  
          if( this.cartItems[i].productId=== product.id ){ 
            this.cartItems[i].qty++
          }
          else {
            this.cartItems.push ({ 
  
              productId: product.id,
              productName: product.product,
              qty: 1,
              price:product.price,
              image:product.path,
            
            })
          }
        }

        


      }
      
    

     
      this.calcCartTotal();
    //})

  }
   loadCartItems() {
    //this.cartService.getCartItems().subscribe((items: CartItem[]) => {
     // this.cartItems = items;
      this.calcCartTotal();
    //})
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
