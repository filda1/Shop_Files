import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { WishlistService } from 'src/app/services/wishlist.service'
import { UserService } from '../../../services/user.service';
import { LocalstorageService } from 'src/app/services/localstorage.service'
import { ToastrService } from 'ngx-toastr';
import { baseUrl } from '../../../config/urls';


@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.css']
})
export class FeatureItemComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;

  baseUrl:string = baseUrl
  
  

  @Input() productItem: Product
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;

  
  
                 
  constructor(private msg: MessengerService,private toastr: ToastrService,
              private wish: WishlistService, private router: Router,
              private userService:UserService, private localS:LocalstorageService ) { }


  ngOnInit(): void {
  }


   
  loadObject() {
  
    let email = this.localS.getLocalStorage('email');

    let  obj = {
      productId: this.productItem._id,
      product:this.productItem.product, 
      user_id: 0, 
      user: email,
      description: this.productItem.description,
      price:this.productItem.price,
      category_id: this.productItem.category_id,
      path : this.productItem.path,  
    };

       return obj
       /*this.productWish.push ({
       user:1,
       })*/
  }


   insertWishlist() {

    if ( this.userService.loggedIn() ){

     let objFavorite = this.loadObject()

     console.log(objFavorite)
   
 
     this.wish.postWishlist(objFavorite)
     .subscribe(
       res => {
         console.log(res);
       },
 
       err => console.log(err) 
     )

     this.toastr.success("Success, when adding to the wishlist")
    }

    else{

    this.router.navigate(['/login']);

    }

   }

 /* handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }*/

  handleAddToCart() {

      this.toastr.success("Success, when adding to the cart")

      this.msg.sendMsg(this.productItem);

      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
  }

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
 /* gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }*/

}
