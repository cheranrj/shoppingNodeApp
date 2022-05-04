const path = require('path');

const express = require('express');

// const productsController = require('../controllers/shop');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productID', adminController.getEditProduct);

router.post('/update-product', adminController.updateProduct);

router.post('/delete-product', adminController.deleteProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;
