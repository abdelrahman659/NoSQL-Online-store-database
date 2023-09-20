const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
// Create a new product
router.post("/createProduct", productController.createProduct);

// Get all products

router.get('/list', productController.list)

module.exports = router;