import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.css']
})
export class FeatureItemComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;

  @Input() productItem: Product
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;

  constructor(private msg: MessengerService,) { }

  ngOnInit(): void {
  }

 /* handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }*/

  handleAddToCart() {
    
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
