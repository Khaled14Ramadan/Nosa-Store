import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmRegisterGuard } from './guards/confirm-register.guard';


const routes: Routes = [
  {
    path:'',
    component: ProductsListComponent,
  },
  {
    path:'login',
    component: LoginPageComponent,
  },
  {
    path:'register',
    component: RegisterPageComponent,
    canDeactivate: [ConfirmRegisterGuard], 
  },
  {
    path:'cart',
    component: CartComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'cart',
    component: LoginPageComponent,
  },
  {
    path:'details/:id',
    component: ProductDetailsComponent,
  },
  {
    path:'**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
