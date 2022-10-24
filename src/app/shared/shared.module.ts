import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { WishListComponent } from './wish-list/wish-list.component';
import { PopUpComponent } from './pop-up/pop-up.component';






@NgModule({
  declarations: [
    NavBarComponent,
    WishListComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  exports:[
    NavBarComponent,
    PopUpComponent
  ]
})
export class SharedModule { }
