const Order = require("../models/order");


const placeOrder = async (req, res) => {
    try {
        const { userId, products } = req.body;
        const newOrder = new Order({ userId, products });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ message: 'Order placement failed' })
    }
}

const orderHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const Orders = await Order.find(userId);
        res.status(200).json(Orders);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to fetch Order history" });
    }
}

module.exports = {
    placeOrder,
    orderHistory
}