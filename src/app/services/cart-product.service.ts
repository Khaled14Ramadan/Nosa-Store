import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {
  // total counter for navBar
  private counter = new BehaviorSubject(0);
  totalProducts = this.counter.asObservable();
  total:number = 0;

  productsCards : Product[] =[];

  constructor() { }

  getProductsCards(){
    return this.productsCards;
  }

  setProductsCards(product:Product){
    let index:number = 0;
    let check:boolean = this.productsCards.some((x:Product , i:number)=>{
      if(x.id ===product.id){
        index=i;
      }
      return (x.id ===product.id);
    } );
      
    if(check){
      this.productsCards[index].counterBuy ++;
    }
    else {
      this.productsCards.push(product);
      index=this.productsCards.length-1;
      this.productsCards[index].counterBuy =1;
      // console.log(index);
    }
    // console.log(this.productsCards);
    // console.log('before :  ' ,this.productsCards[index]);
    this.productsCards[index].count --;
    // console.log('after : ' , this.productsCards[index]);

    this.counter.next(++this.total);
  }

  decreaseProduct(product:Product){
    let index:number = this.productsCards.indexOf(product);
    this.productsCards[index].counterBuy --;
    // for increase count in product
    this.productsCards[index].count ++;

    if(this.productsCards[index].counterBuy == 0){
      this.productsCards.splice(index , 1);
    }
    this.counter.next(--this.total);
  }

  removeProduct(product:Product){
    let index:number = this.productsCards.indexOf(product);
    this.total = this.total - this.productsCards[index].counterBuy;
    //to apdate count of product
    // this.productsCards[index].count += this.productsCards[index].counterBuy;
    console.log(this.total);
    this.counter.next(this.total);
    this.productsCards.splice(index , 1);
  }
}
