import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service'
import { LocalstorageService } from 'src/app/services/localstorage.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any = [];

  filterPost='';
  pageActual: number = 1;


  constructor( private wish:WishlistService, private localS:LocalstorageService) { }

  ngOnInit(): void {

    let  email = this.localS.getLocalStorage('email');
     console.log(email)


    this.wish.getWishlistUser(email)
    .subscribe(
      res => {
        this.products = res;
        console.log(this.products)
      },
      err => console.log(err)
    )
  }

}
