'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import ProductList from 'components/ProductList';
import ProductForm from 'components/ProductForm';

import styles from 'css/components/product-listing';

const cx = classNames.bind(styles);

import { saveProduct, fetchProduct, fetchProducts, resetProduct, deleteProduct } from 'actions/products';


class ProductListing extends Component {

    static need = [  // eslint-disable-line
        fetchProducts
    ];
    constructor(props) {
        super(props);

        this.onSaveItem = this.onSaveItem.bind(this);
        this.onResetItem = this.onResetItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }
    onSaveItem(item) {
        const { dispatch } = this.props;
        dispatch(saveProduct(item));
    }
    onResetItem() {
        const { dispatch } = this.props;
        dispatch(resetProduct());
    }
    onDeleteItem(item) {
        const { dispatch } = this.props;
        dispatch(deleteProduct(item));
    }
    render() {
        return (
            <div className={cx('product-listing')}>
                <h1 className={cx('product-listing__header')}>Product Listing</h1>
                <div className={cx('product-listing__body')}>
                    <ProductList products={this.props.products} onDelete={this.onDeleteItem} />
                    <ProductForm product={this.props.product || {}} onSubmit={this.onSaveItem} onReset={this.onResetItem} ref="productForm" />
                </div>
            </div>
        )
    }
}

ProductListing.propTypes = {
    products: PropTypes.array.isRequired,
    product: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};
function mapStateToProps(state) {
    return {
        products: state.product.products,
        product: state.product.product
    };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(ProductListing);

