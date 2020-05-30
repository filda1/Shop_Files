import { Component, OnInit, Input } from '@angular/core';
import {FeatureService} from '../../services/feature.service'


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  products = [];

  filterPost='';

  constructor(private featureService: FeatureService) {
    //console.log('ola') ;
    //console.log(this.filterPost);
  }
 
  ngOnInit(): void {
   
     
    this.featureService.getProducts()
    .subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    )

  }

  setValue() { this.filterPost = 'cisne'; }


}
