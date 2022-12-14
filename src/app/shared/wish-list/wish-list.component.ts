import { Component, OnInit } from '@angular/core';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ToastServiceService } from 'src/app/services/toast-service.service';
import { addToWishList } from 'src/app/store/wishList/wishList.action';
import { Product } from './../../interfaces/product';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  baskerRemove =faBasketShopping;
  products:Product[]=[];

  constructor(private store:Store<any>,
     private toast: ToastServiceService,) { }

  ngOnInit(): void {
    this.store.select('wishList').subscribe(wish => this.products =wish.items );
  }

  ngOnDestroy():void {
    this.toast.clear();
}

  removeProduct(p:Product){
    console.log(p)
    this.store.dispatch(addToWishList({
      item: p
    }));


    this.toast.show(`Remove ${p.name} `, { classname: 'bg-danger text-light', delay: 2000 , list: "Wish List" });
  }
}
