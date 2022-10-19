import { Component, OnInit } from '@angular/core';
import { CartProductService } from 'src/app/services/cart-product.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsCart:Product[]=[];
  theTotalPrice:number = 0;
  constructor(private cartProduct:CartProductService) { }

  ngOnInit(): void {
    this.productsCart = this.cartProduct.productsCards;
    this.tottalprice();
  }

  increase(p:Product)
  {
    this.cartProduct.setProductsCards(p);
    this.productsCart = this.cartProduct.productsCards;
    this.tottalprice();

  }

  decrease(p:Product){
    this.cartProduct.decreaseProduct(p);
    this.productsCart = this.cartProduct.productsCards;
    this.tottalprice();
  }

  tottalprice(){
    let total =this.productsCart.reduce((sum:any , product:any)=>sum +=(product.price * product.counterBuy) ,0);
    console.log(total);
    this.theTotalPrice = total;
  }

  removeProduct(p:Product){
    this.cartProduct.removeProduct(p);
    this.productsCart = this.cartProduct.productsCards;
    this.tottalprice();
  }
}
