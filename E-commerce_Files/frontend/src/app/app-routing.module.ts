import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { ErrorComponent } from './components/error/error.component';
import { SelectpaymentComponent } from './components/selectpayment/selectpayment.component';
import { SuccessComponent } from './components/success/success.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchproductsComponent } from './components/product/searchproducts/searchproducts.component';


const routes: Routes = [
  //{path:'', redirectTo:'', pathMatch:'full'},
  //{path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'',component:UserhomeComponent},
  {path:'product-detail',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'product',component:ProductComponent,canActivate: [AuthGuard]},
  {path:'error',component:ErrorComponent},
  {path:'payment',component:SelectpaymentComponent},
  {path:'success',component:SuccessComponent},
  {path:'info',component:InfoComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'searchproducts/:id',component:SearchproductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
