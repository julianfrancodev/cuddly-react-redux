import {ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS} from "../types";

// Crear nuevos productos

export function createProductAction(product){
    return () =>{
        console.log("from Actions");
        console.log(product);
    }
}