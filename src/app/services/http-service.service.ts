import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products');
  }
  
  getProductDetails(id:string){
    return this.http.get(`https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/${id}`);
  }

}
