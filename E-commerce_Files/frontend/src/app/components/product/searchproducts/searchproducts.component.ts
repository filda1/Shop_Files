import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FeatureService} from '../../../services/feature.service';
//import { SearchproductsService } from '../../../services/searchproducts.service';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.css']
})
export class SearchproductsComponent implements OnInit {

  products = [];

  varUrl:string;
  page: number = 1;
  
  constructor(private route: ActivatedRoute, private featureService: FeatureService) { }

  ngOnInit(): void {

    // Recupero variable  URL de routerlinK
    this.route.params.subscribe(paramsId => {
      this.varUrl = paramsId.id;
  });


    this.featureService.getProducts()
      .subscribe(
        res => {
         this.products = res;
      },
      err => console.log(err)
    )

    /*this.searchService.search(this.varUrl)
     .subscribe(
       res => {
         this.products = res;
       },
        err => console.log(err)
     )*/

 }
}
