import Products from '../models/products';
import _ from 'lodash';

const omitKeys = [ '_id', '__v'];

function omit(object) {
    return _.omit(object, omitKeys)
}

/**
 * List
 */
export function all(req, res) {
    Products.find({}).exec((err, products) => {
        if (err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }

        return res.json(products.map(omit));
    });
}

/**
 * List
 */
export function one(req, res) {
    Products.findOne({id: req.params.id}).exec((err, product) => {
        if (err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }

        return res.json(omit(product));
    });
}

/**
 * Create a Product
 */
export function create(req, res) {
    var product = Object.assign({}, req.body, {id: Date.now().toString(16)});
    Products.create(product, (err, product) => {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        return res.json(omit(product));
    });
}

/**
 * Update a topic
 */
export function update(req, res) {
    const query = { id: req.params.id };
    const data = _.omit(req.body, omitKeys);

    Products.findOneAndUpdate(query, data, (err, product) => {
        if (err) {
            console.log('Error on save!');
            return res.status(500).send('We failed to save for some reason');
        }
        return res.json(omit(product));
    });
}

/**
 * Remove a topic
 */
export function remove(req, res) {
    const query = { id: req.params.id };
    Products.findOneAndRemove(query, (err, product) => {
        if (err) {
            console.log('Error on delete');
            return res.status(500).send('We failed to delete for some reason');
        }

        return res.json(omit(product));
    });
}

export default {
    all,
    one,
    create,
    update,
    remove
};