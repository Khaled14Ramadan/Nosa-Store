
import { createReducer, on } from '@ngrx/store';
import { Product } from './../../interfaces/product';
import { addToWishList } from './wishList.action';

interface wish {
    items: Product[];
    item: Product;
    // count : number;
}

const initalState: wish = {
    // count : 0,
    items: [],
    item: {
        createdAt: "string",
        name: "",
        image: "",
        rate: 0,
        count: 0,
        description: "",
        price: "",
        reviews: [""],
        counterBuy: 0,
        id: ""
    }
}

export const addToWishListReducer = createReducer(
    initalState,
    on(addToWishList, (state, action) => {
        // console.log(action);
        let newList = [...state.items];//this to store the old list before operation
        let index = -1 ; // initiale by -1 becouse this value never exist in indexs of wish list
        // let counter =0 ;
        newList.forEach((x, i) => {
			//to check if this item is exist in the list
            if (x.id == action.item.id) {
                // console.log("EXIST");
                index = i;// 
            }
        });

        if(index == -1){//to add product to list
            newList = [...state.items, action.item];
            // counter = state.count+1;
        }
        else {//to remove the product from list
            newList.splice(index , 1);
            // counter = state.count-1;
        }

        return ({
            items: newList,
            item: action.item,
            // count: counter,
        })
    })
)