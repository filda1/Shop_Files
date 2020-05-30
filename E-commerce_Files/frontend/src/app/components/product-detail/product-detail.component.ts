import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  
  moveToProductDetail(){
    this._router.navigate(['/product-detail']);
  }
}
