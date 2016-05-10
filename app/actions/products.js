/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import * as types from 'types';

polyfill();

/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */
function makeProductRequest(method, id, data, api = '/product') {
    return request[method](api + (id ? ('/' + id) : ''), data);
}

// Fetch posts logic
export function fetchProducts() {
    return {
        type: types.GET_PRODUCTS,
        promise: makeProductRequest('get')
    };
}

export function fetchProduct(id) {
    return {
        type: types.GET_PRODUCTS,
        promise: makeProductRequest('get', id)
    };
}

function saveProductRequest(product) {
    return {
        type: types.SAVE_PRODUCTS_REQUEST,
        product
    };
}

function saveProductSuccess(product) {
    return {
        type: types.SAVE_PRODUCTS_SUCCESS,
        product
    };
}

function saveProductFailure(data) {
    return {
        type: types.SAVE_PRODUCTS_FAILURE,
        ...data
    };
}

function deleteProductSuccess(product) {
    return {
        type: types.DELETE_PRODUCTS,
        product
    }
}

export function saveProduct(product) {
    return (dispatch, getState) => {

        if (product.title.trim().length === 0) return;
        if (product.image.trim().length === 0) return;
        if (product.description.trim().length === 0) return;

        const data = Object.assign({count: 1}, product);

        dispatch(saveProductRequest(data));

        return makeProductRequest( product.id ? 'put' : 'post', product.id, data)
            .then(res => {
                if (res.status === 200) {
                    // We can actually dispatch a CREATE_TOPIC_SUCCESS
                    // on success, but I've opted to leave that out
                    // since we already did an optimistic update
                    // We could return res.json();

                    return dispatch(saveProductSuccess(res.data));
                }
            })
            .catch(() => {
                return dispatch(saveProductFailure({ product, error: 'Oops! Something went wrong and we couldn\'t save your product'}));
            });
    }
}

export function deleteProduct(product) {
    return dispatch => {
        return makeProductRequest('delete', product.id)
            .then( res => {
                return dispatch(deleteProductSuccess(product))
            })
    }
}