'use strict';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/product-form';

const cx = classNames.bind(styles);

const ProductForm = React.createClass({
    propTypes: {
        product: PropTypes.object,
        onSubmit: PropTypes.func.isRequired,
        onReset: PropTypes.func.isRequired
    },
    onSubmit(event) {
        event.preventDefault();
        var data = Array.from(this.refs.form.querySelectorAll('[name]')).reduce( (data, input) => {
            data[input.name] = input.value;
            return data;
        }, {});
        data.id = (this.props.product || {}).id;
        this.props.onSubmit(data);
        this.props.onReset();
    },
    render() {

        const product = this.props.product || {};

        return (
            <div className={cx('product-form')}>
                <h3>Product Form</h3>
                <form onSubmit={this.onSubmit} ref="form">
                    <div className={cx('product-form__group')} htmlFor="title">
                        <label className={cx('product-form__label')}>Title:</label>
                        <input type="text" className={cx('product-form__control')} id="title" name="title" defaultValue={product.title} required={true}/>
                    </div>
                    <div className={cx('product-form__group')} htmlFor="image">
                        <label className={cx('product-form__label')}>Image URL:</label>
                        <input type="url" id="image" name="image" defaultValue={product.image} required={true}/>
                    </div>
                    <div className={cx('product-form__group')} htmlFor="description">
                        <label className={cx('product-form__label')}>Description:</label>
                        <textarea id="description" name="description" defaultValue={product.description} required={true} />
                    </div>
                    <div className={cx('product-form__group')}>
                        <button type="submit" className={cx('product-form__button_right')}>Create</button>
                    </div>
                </form>
            </div>
        );
    }
});

export default ProductForm;
/*
export default class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
     }
    onSubmit(event) {
        event.preventDefault();
        var data = Array.from(this.refs.form.querySelectorAll('[name]')).reduce( (data, input) => {
            data[input.name] = input.value;
            return data;
        }, {});
        data.id = (this.props.product || {}).id;
        this.props.onSubmit(data);
        this.props.onReset();
    }
    render() {

        const product = this.props.product || {};

        return (
            <div className={cx('product-form')}>
                <h3>Product Form</h3>
                <form onSubmit={this.onSubmit} ref="form">
                    <div className={cx('product-form__group')}>
                        <label className={cx('product-form__label')}>Title:</label>
                        <input type="text" className={cx('product-form__control')} id="title" name="title" defaultValue={product.title}/>
                    </div>
                    <div className={cx('product-form__group')}>
                        <label className={cx('product-form__label')}>Image URL:</label>
                        <input type="url" id="image" name="image" defaultValue={product.image}/>
                    </div>
                    <div className={cx('product-form__group')}>
                        <label className={cx('product-form__label')}>Description:</label>
                        <textarea id="description" name="description" defaultValue={product.description} />
                    </div>
                    <div className={cx('product-form__group')}>
                        <button className={cx('product-form__button_left')} onClick={this.props.onReset}>Reset</button>
                        <button type="submit" className={cx('product-form__button_right')}>Done</button>
                    </div>
                </form>
            </div>
        );
    }
}

ProductForm.propTypes = {
    product: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
};
    */