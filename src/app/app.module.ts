import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthModule } from './auth/auth.module';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { addToWishListReducer } from './store/wishList/wishList.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { ToastComponent } from './components/toast/toast.component';

registerLocaleData(localeFr, 'fr');



@NgModule({
  declarations: [
    AppComponent,
    // NavBarComponent,
    ProductsListComponent,
    ProductItemComponent,
    // LoginComponent,
    // RegisterComponent,
    NotFoundComponent,
    CartComponent,
    ProductDetailsComponent,
    LoaderComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    StoreModule.forRoot({
      wishList : addToWishListReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
