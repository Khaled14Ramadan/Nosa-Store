import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from './../../interfaces/product';
import { CartProductService } from './../../services/cart-product.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { addToWishList } from 'src/app/store/wishList/wishList.action';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ToastServiceService } from './../../services/toast-service.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit , OnDestroy {
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
    private store: Store<any>,
    private toast: ToastServiceService,
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
    });

    this.cartProduct.productsCards.map((item)=>{
      if(item.id == this.product.id){
        this.product = item;
        console.log(" one product : " , this.product);
      }
    });
  }

  ngOnDestroy():void {
    this.toast.clear();
 }

  addProduvt() {
    this.cartProduct.setProductsCards(
      {
        ...this.product,
        counterBuy: 0
      });

      //toaster for add to cart
      this.toast.show(`Add ${this.product.name} `, { classname: 'bg-success text-light', delay: 2000 , list: "Cart" });
  }

  UpdateWishList() {
    let before = this.wishListProduct.length;
    this.store.dispatch(addToWishList({
      item: {
        ...this.product,
        counterBuy: 0
      }
    }));

    if(before > this.wishListProduct.length ){
      //to show toaster is danger color
      this.toast.show(`Remove ${this.product.name} `, { classname: 'bg-danger text-light', delay: 2000 , list: "Wish List" });
    }
    else{
      //to show toaster is success color
      this.toast.show(`Add ${this.product.name} `, { classname: 'bg-success text-light', delay: 2000 , list: "Wish List" });

    }
    
  }

}
