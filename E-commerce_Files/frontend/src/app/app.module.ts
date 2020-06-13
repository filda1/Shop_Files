import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import  { MaterialModule }  from './material';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ManufactureComponent } from './components/manufacture/manufacture.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SelectpaymentComponent } from './components/selectpayment/selectpayment.component';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { HelpComponent } from './components/help/help.component';
import { ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms'
import { TokenInterceptor1Service } from './services/token-interceptor1.service';
import { HeadadminComponent } from './components/headadmin/headadmin.component';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchproductsComponent } from './components/product/searchproducts/searchproducts.component';
import { ProductItemComponent } from './components/product/product-item/product-item/product-item.component';
import { FeatureItemComponent } from './components/feature/feature-item/feature-item.component';
import { CartItemComponent } from './components/nav/cart-item/cart-item.component';


import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    NavComponent,
    BannerComponent,
    FeatureComponent,
    ManufactureComponent,
    FooterComponent,
    SearchComponent,
    ProductDetailComponent,
    CartComponent,
    ProductComponent,
    CheckoutComponent,
    SelectpaymentComponent,
    SuccessComponent,
    ErrorComponent,
    HomeComponent,
    InfoComponent,
    HelpComponent,
    HeadadminComponent,
    FilterPipe,
    SearchproductsComponent,
    ProductItemComponent,
    FeatureItemComponent,
    CartItemComponent,
  
  

   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule, 
    NgxPaginationModule , 
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    UserService,
    AuthGuard,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor1Service,
      multi: true
    }
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
