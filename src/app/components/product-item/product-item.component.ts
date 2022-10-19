import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../interfaces/product';
import { CartProductService } from './../../services/cart-product.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { addToWishList } from 'src/app/store/wishList/wishList.action';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  wishProduct = faHeart;
  wishListProduct : Product[] =[];
  checkExit: boolean = false;
  @Input() product: Product = {
    createdAt: "",
    name: "",
    image: "",
    rate: 0,
    count: 0,
    description: "",
    price: "",
    reviews: [],
    counterBuy: 0,
    id: ""
  };
  constructor(
    private cartProduct: CartProductService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    // console.log(this.cartProduct.getProductsCards());
    this.store.select('wishList').subscribe(res => {
      // console.log(res.item);
      this.wishListProduct = res.items;
      if(this.wishListProduct.some((x)=> x.id==this.product.id )){
      this.checkExit = true ;
      }
      else{
      this.checkExit = false ;
      }
    })
  }

  addProduvt() {
    this.cartProduct.setProductsCards(
      {
        ...this.product,
        counterBuy: 0
      });
  }

  UpdateWishList() {
    this.store.dispatch(addToWishList({
      item: {
        ...this.product,
        counterBuy: 0
      }
    }));
  }
}
