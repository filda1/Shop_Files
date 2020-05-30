import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { SearchproductsService } from '../../../services/searchproducts.service';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.css']
})
export class SearchproductsComponent implements OnInit {

  products = [];

  varUrl:string;

  constructor(private route: ActivatedRoute, private searchService: SearchproductsService) { }

  ngOnInit(): void {

    // Recupero variable de routerlinK
    this.route.params.subscribe(paramsId => {
      this.varUrl = paramsId.id;
  });

    this.searchService.search(this.varUrl)
     .subscribe(
       res => {
         this.products = res;
       },
        err => console.log(err)
     )

 }
}
