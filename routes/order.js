const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

router.post("/place-order", orderController.placeOrder);

router.get('/order-history/:userId', orderController.orderHistory);

module.exports = router;