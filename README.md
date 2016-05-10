# React Webpack Node

Created 4 components with styles:
``` cmd
app/components/ProductForm.js
app/components/ProductItem.jsx
app/components/ProductList.jsx
app/containers/ProductListing.jsx
app/css/components/product-form.css
app/css/components/product-item.css
app/css/components/product-list.css
app/css/components/product-listing.css
```
`ProductListing` is listing container that contains `ProductList` which consists from `ProductItem` components and `ProductForm`

Also created 4 action in `app/actions/products.js`:
``` javascript
saveProduct();
fetchProducts();
fetchProduct();
deleteProduct();
```
After that created Mongoose Product model `server/db/mongo/models/products.js` and product controller `server/db/mongo/controllers/products.js`

And finally added `Product Listing` menu item in file `app/containers/Navigation.jsx`, routes for `Product Controller` and `actions types`
