import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartProductService } from 'src/app/services/cart-product.service';
import { Product } from 'src/app/interfaces/product';
import { ToastServiceService } from './../../services/toast-service.service';
import { PopUpService } from 'src/app/services/pop-up.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpComponent } from 'src/app/shared/pop-up/pop-up.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  productsCart: Product[] = [];
  theTotalPrice: number = 0;

  constructor(
    private popUpService: PopUpService,
    private _modalService: NgbModal,
    private cartProduct: CartProductService,
    private toast: ToastServiceService,
  ) { }

  ngOnInit(): void {
    this.productsCart = this.cartProduct.productsCards;
    this.tottalprice();
  }

  ngOnDestroy(): void {
    this.toast.clear();
  }

  increase(p: Product) {
    this.cartProduct.setProductsCards(p);
    this.productsCart = this.cartProduct.productsCards;
    this.tottalprice();

    //toaster for add to cart
    this.toast.show(`Add  ${p.name} `, { classname: 'bg-success text-light', delay: 2000, list: "Cart" });

  }

  decrease(p: Product) {
    if (p.counterBuy != 1) {
      this.cartProduct.decreaseProduct(p);
      this.productsCart = this.cartProduct.productsCards;
      this.tottalprice();

      //toaster for remove from cart
      this.toast.show(`Remove  ${p.name} `, { classname: 'bg-danger text-light', delay: 2000, list: "Cart" });
    }
    else {
      this.removeProduct(p);
    }


  }

  tottalprice() {
    let total = this.productsCart.reduce((sum: any, product: any) => sum += (product.price * product.counterBuy), 0);
    console.log(total);
    this.theTotalPrice = total;
  }

  removeProduct(p: Product) {
    this.popUpService.setPopUpState('delete');
    let f = this._modalService.open(PopUpComponent);

    // result is primise method 
    f.result.then((e) => {
      // e is the value from close method . is true when click on ok
      if (e) {
        this.cartProduct.removeProduct(p);
        this.productsCart = this.cartProduct.productsCards;
        this.tottalprice();

        //toaster for remove from cart
        this.toast.show(`Remove  ${p.name} `, { classname: 'bg-danger text-light', delay: 2000, list: "Cart" });
      }
    }).catch(()=>console.log("not delete"));

  }

}
