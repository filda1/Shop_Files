import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core'
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MessengerService } from 'src/app/services/messenger.service'
import { LocalstorageService } from 'src/app/services/localstorage.service'
 
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

  @Input() ItemsCart: any
  cartItems = [];
  CleancartItems = [];

  items = 0;
  items2:number
  cartTotal = 0;
  varUrl ='';

  variable:any;
  
  

  constructor(private _router:Router,public userService: UserService, private msg: MessengerService,
    private localS:LocalstorageService 
    ) { }

  

  ngOnInit(): void {

    this.handleSubscription();
  
    this.loadItems()
    
  }



  cleanAllCart() {
    this.localS.deleteLocalStorage('items');
    this.localS.deleteLocalStorage('cartTotal');
    this.localS.deleteLocalStorage('cartItems');
    location.reload();
  }

  loadItems(){
    let item = this.localS.getLocalStorage('items');
    let cartTotal = this.localS.getLocalStorage('cartTotal');
    let cartItems = this.localS.getLocalStorage('cartItems');
    this.items = parseInt(item)

     if ( item ) {

      this.items = parseInt(item)
      this.cartTotal = parseInt(cartTotal)
      this.cartItems = JSON.parse(cartItems)

      console.log(this.items)
     }

     else {

      this.items = 0
      this.cartTotal = 0;
  

     }
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
     // this.loadCartItems();
      this.addCartItems(product);
    })
  }
  
  numCarItems (){
   
    let totalItems = 0
    for (let i in this.cartItems) {  

      totalItems = totalItems + parseInt(this.cartItems[i].qty);
      this.items = totalItems

      //localStorage
      this.localS.setLocalStorage('items', this.items)
    } 
  }

  addCartItems(product: Product) {

     let productExists = false

     // Producto Repetido en cart
     for (let i in this.cartItems) {  

        if( this.cartItems[i].image === product.path ){ 

          this.cartItems[i].qty++;
          this.cartTotal = this.cartTotal + this.cartItems[i].price

          productExists = true
          break;
        } 
    } 

    // Nuevo Producto en Cart
    if (!productExists){ 

      this.cartItems.push ({ 
        productId: product.id,
        productName: product.product,
        qty: 1,
        price:product.price,
        image:product.path,
      })

     
    }

     //localStorage
     this.localS.setLocalStorage('cartItems', this.cartItems)

    this.numCarItems();
    this.calcCartTotal();

    //this.cartItems = this.cartItems.filter(({ image }) => image !== product.path);
      /*if (this.cartItems.length === 0){ 

        this.cartItems.push ({ 
          productId: product.id,
          productName: product.product,
          qty: 1,
          price:product.price,
          image:product.path,
        })

        console.log(this.cartItems);
      }

      else { 

        /*for (let i in this.cartItems) {  

          if( this.cartItems[i].image === product.path ){ 
            this.cartItems[i].qty++;
            break;

            console.log(this.cartItems);
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
          
          console.log(this.cartItems);
        }*/

  
}


   loadCartItems() {
    //this.cartService.getCartItems().subscribe((items: CartItem[]) => {
     // this.cartItems = items;
      this.calcCartTotal();
    //})
  }

  updateQtyCartItem(e){
   
    for (let i in this.cartItems) {  

      if( this.cartItems[i].image === e.image ){ 

        // Ja Actualizo el precio del Producto, al modificar Qty del producto en Cart, en cart-item.ts
  

        // Actualizo el números de items del carro, al modificar Qty del producto en Cart
          this.numCarItems();

          /*this.items = 0 
          this.cartItems.forEach(item => {
            this.items += parseInt(item.qty )
          })*/

        // Actulizo el total de carro, al modificar un cartItem
         this.calcCartTotal()
  
       // la Qty ya esta actulizada en archivo anterior cart-item.ts
        break;
      } 
    }
   

  }

  deleteCartItem(e){

    this.variable = e
    let index
    
    for (let i in this.cartItems) {  

      if( this.cartItems[i].image === this.variable.image ){ 

       index = i
        break;
      } 
    } 
      // Actulizo el total de carro, al eliminar un cartItem
       this.cartTotal = this.cartTotal -  this.variable.price

      // Actulizo el números de items del carro, al eliminar un cartItem
       this.items = this.items - this.variable.qty

      // Elimino/Actulizo la cantidad de productos o items, al ver eliminado un item
       this.cartItems  = this.cartItems.filter(x => x!= this.cartItems[index])
      
    }



  calcCartTotal() {


    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
   
    //localStorage
    this.localS.setLocalStorage('cartTotal', this.cartTotal)
  }

}
