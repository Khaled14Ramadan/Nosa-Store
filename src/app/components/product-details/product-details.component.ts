import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartProductService } from 'src/app/services/cart-product.service';
import { HttpServiceService } from './../../services/http-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  check:boolean=true;
  product:Product = {
    createdAt: "",
    name:"",
    image:"",
    rate: 0,
    count: 0,
    description: "",
    price: "",
    reviews: [],
    counterBuy: 0,
    id: ""
  }

  constructor(
    private httpService:HttpServiceService ,
    private route:ActivatedRoute,
    private cartProduct:CartProductService
    ) { }

  ngOnInit(): void {
    const id:string = this.route.snapshot.params['id'];
    console.log(id);

    this.httpService.getProductDetails(id).subscribe((product: any)=>{
      // console.log(product);
      this.check=false;//this for spinner
      this.product = product;
    })
  }

  addProduvt(){
    this.cartProduct.setProductsCards(this.product);
  }

}
