const Product = require("../models/product");

const createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const product = new Product({ name, price, description });

        await product.save();
        res.status(201).json({ message: "New product created", product });
    }
    catch (err) {
        res.status(500).json({ message: 'Product creation failed', err });

    }
}
const list = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to fetch Products" })

    }
}

module.exports = {
    createProduct,
    list
}