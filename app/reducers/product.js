import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    SAVE_PRODUCTS_REQUEST,
    SAVE_PRODUCTS_SUCCESS,
    SAVE_PRODUCTS_FAILURE,
    RESET_PRODUCTS,
    DELETE_PRODUCTS } from 'types';


export default function product(state = {
    products: [],
    product: {}
}, action) {
    switch (action.type) {
        case RESET_PRODUCTS:
            return Object.assign({}, state,
                { product: {} }
            );
        case GET_PRODUCTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                product: {}
            });
        case GET_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                products: action.req.data,
                product: {}
            });
        case GET_PRODUCTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                product: {}
            });
        case SAVE_PRODUCTS_SUCCESS:
            return {
                products: [...state.products, action.product ],
                product: {}
            };
        case DELETE_PRODUCTS:
            return {
                products: [...state.products.filter( p => p.id !== action.product.id)],
                product: {}
            };
        default:
            return state;
    }
}
