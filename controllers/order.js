const Order = require("../models/order");
const placeOrder = async (req, res) => {
    try {
        const { userId, products } = req.body;
        const newOrder = new Order({ userId, products });
        await newOrder.save();
        res.status(201).json({ data: newOrder });
    } catch (err) {
        res.status(500).json({ message: 'Order placement failed' })
    }
}

const orderHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        // using populate method to show User data inside his Order
        const Orders = await Order.find().populate("userId");
        res.status(200).json(Orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const allOrders = async (req, res) => {
    try {
        const result = await Order.find().populate("products");
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: "Server cannot fetch Data" })
    }
}

module.exports = {
    placeOrder,
    orderHistory,
    allOrders
}