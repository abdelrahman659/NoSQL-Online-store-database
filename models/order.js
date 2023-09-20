const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    createdAt: { type: Date, default: Date.now },
    status: String
});

module.exports = mongoose.model("Order", orderSchema)