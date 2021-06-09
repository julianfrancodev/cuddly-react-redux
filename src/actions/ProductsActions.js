import { ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS } from "../types";
import clientAxios from '../config/axios';

// Crear nuevos productos

export function createProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            // insertar en la API

           await clientAxios.post('/productos', product);

            // Si todo esta bien actualizar el state

            dispatch(addProductSuccess(product));
        } catch (e) {
            console.log(e);
            dispatch(addProductError(true));
        }

    }
};

const addProduct = () => ({
    type: ADD_PRODUCT,
});

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

const addProductError = (error) => ({
    type: ADD_PRODUCT_ERROR,
    payload: error
});