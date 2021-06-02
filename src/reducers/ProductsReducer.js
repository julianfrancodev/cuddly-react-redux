import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

// cada reducer tiene su propio state



const initialState = {
    products: [],
    error: false,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}