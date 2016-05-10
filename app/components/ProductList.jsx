'use strict';

import React, { Component, PropTypes } from 'react';
import ProductItem from 'components/ProductItem';
import classNames from 'classnames/bind';
import styles from 'css/components/product-list';

const cx = classNames.bind(styles);

const ProductList = ({onEdit, onDelete, products}) => {
    return (
        <div className={cx('product-list')}>
            <ul className={cx('product-list__items')}>
                {products.map( (product, key) => <ProductItem key={key} product={product} onEdit={onEdit} onDelete={onDelete} />)}
            </ul>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    product: PropTypes.object,
    onDelete: PropTypes.func.isRequired
};

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default ProductList;


