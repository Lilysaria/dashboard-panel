const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/products');

// Route for creating a new product
router.post('/', productsController.createProduct);

// Route for listing all products
router.get('/', productsController.listProducts);

// Route for viewing a single product
router.get('/:productId', productsController.viewProduct);

// Route for updating a product
router.put('/:productId', productsController.updateProduct);

module.exports = router;
