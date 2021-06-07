import { ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS } from "../types";

// Crear nuevos productos

export function createProductAction(product) {
    return (dispatch) => {
        dispatch(addProduct());

        try {
            dispatch(addProductSuccess(product));
        } catch (e) {
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