//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [ MatGridListModule,MatCardModule,MatInputModule,NgMatSearchBarModule,MatAutocompleteModule,MatFormFieldModule,MatListModule,MatButtonModule,MatSliderModule,MatToolbarModule, MatIconModule, MatMenuModule],
  exports: [ MatGridListModule,MatCardModule,MatInputModule,NgMatSearchBarModule,MatAutocompleteModule,MatFormFieldModule,MatListModule,MatButtonModule,MatSliderModule,MatToolbarModule, MatIconModule, MatMenuModule],
})
export class MaterialModule { }