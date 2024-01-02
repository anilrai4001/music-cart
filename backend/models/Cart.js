const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    email: String,
    products: Array
})

const Cart = mongoose.model("Cart",cartSchema);
module.exports = Cart