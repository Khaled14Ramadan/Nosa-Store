import { createAction, props } from "@ngrx/store";
import { Product } from './../../interfaces/product';

//this method to add or delete the product from wish list
export const addToWishList = createAction(
    '[wishList page] add product',
    props <{item: Product}>()
);


// export const removeToWishList = createAction(
//     '[wishList page] add product',
//     props <{item: Product}>()
// );