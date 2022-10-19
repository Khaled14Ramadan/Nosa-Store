import { Component, OnInit } from '@angular/core';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartProductService } from './../../services/cart-product.service';
import { Store } from '@ngrx/store';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  totalProductBuy:number = 0
  wishListCounter :number =0;
  loginState:boolean = false;
  showList:boolean = false;
  cart =faCartShopping ;
  wishProduct = faHeart;

  constructor(
    private state:LoginServiceService,
    private router:Router,
    private cartProducts:CartProductService,
    private store: Store<any>
    ) { }

  ngOnInit(): void {
    this.cartProducts.totalProducts.subscribe((value:number)=>{
      this.totalProductBuy = value;
    });

    this.store.select('wishList').subscribe(res => {
        console.log(res.items.length);
        this.wishListCounter = res.items.length;
      });

      // to set state of login or logout
      this.state.stateLogin.subscribe((v:boolean)=>{
        this.loginState = v;
      })
  }

  showWishList(){
    if(this.showList){
      this.showList =false;
    }
    else{
      this.showList =true;
    }
  }

  handleLogOut(){
    const checkLogOut = confirm("are you sure logout ? ");
    if(checkLogOut){
      this.state.setStateLogin(false);
      this.router.navigate(['/login']);
    }
  }

  handelNavigate(){
    let check=false;
    this.state.stateLogin.subscribe(v=> check=v)
    console.log(check);
    if(!check){
      this.router.navigate(['/login']);
    }
  }

}
