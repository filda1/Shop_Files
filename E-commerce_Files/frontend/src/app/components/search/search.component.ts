import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Router } from '@angular/router';
import {FeatureService} from '../../services/feature.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output('') cambio = new EventEmitter();

  products = [];

  //user = {};


  constructor(private _router:Router,private featureService: FeatureService) { }

  ngOnInit(): void { 

  }

  

  cambiar(){
       
    this.cambio.emit('Nuevo dato')
}



}
