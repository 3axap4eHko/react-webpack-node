'use strict';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/product-item';

const cx = classNames.bind(styles);

export default class ProductItem extends Component {

    render() {
        const product = this.props.product;
        return (
            <li className={cx('product-item')} key={product.id}>
                <div className={cx('product-item__preview-holder')}>
                    <h3>{product.title}</h3>
                    <img className={cx('product-item__preview-image')} src={product.image} />
                </div>
                <div className={cx('product-item__description')}>{product.description}</div>
                <div className={cx('product-item__actions')}>
                    <button onClick={this.props.onDelete.bind(null, product)}>Delete</button>
                </div>
            </li>
        );
    }
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};
