const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const Product = require('../models/Product')

router.get('/cart', async (req, res) => {
    try {
        // Use req.headers.authorization to get the Authorization header

        const token = req.headers.authorization;

        // console.log(token);

        // Ensure that the token is present
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - Token missing' });
        }

        const user = jwt.verify(token, SECRET_KEY);
        const email = user.email;

        // Use await to ensure Cart.findOne() returns a promise result
        const cart = await Cart.findOne({ email });

        if (cart) {
            const productIdsAndQuantities = cart.products.map(product => {
                return { productId: product.productId, quantity: product.quantity }
            });


            // Use await to ensure Product.find() returns a promise result
            let productDetailsAndQauntity = [];
            for (let i = 0; i < productIdsAndQuantities.length; i++) {
                const productDetails = await Product.findOne({ _id: productIdsAndQuantities[i].productId });
                productDetailsAndQauntity.push({ productDetails: productDetails, quantity: productIdsAndQuantities[i].quantity })
            }

            // Send the details of products as the response
            res.json(productDetailsAndQauntity);
        }
        else {
            // If the cart doesn't exist for the user, send an empty array or appropriate response
            res.json([]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});





router.post('/cart', async (req, res) => {
    try {
        const { token, productId } = req.body;

        const user = jwt.verify(token, SECRET_KEY);
        const email = user.email;

        // Use await to ensure Cart.findOne() returns a promise result
        const cart = await Cart.findOne({ email });

        if (cart) {
            // If the cart exists, find the product by productId
            const productIndex = cart.products.findIndex(product => product.productId === productId);

            if (productIndex !== -1) {
                // If the product exists, increase its quantity by 1
                cart.products[productIndex].quantity += 1;
            } else {
                // If the product doesn't exist, add a new product with quantity 1
                cart.products.push({ productId, quantity: 1 });
            }

            // Use await to ensure Cart.findOneAndUpdate() returns a promise result
            const updatedCart = await Cart.findOneAndUpdate(
                { email },
                { email, products: cart.products },
                { new: true }
            );
            console.log(updatedCart);
        } else {
            // If the cart doesn't exist, create a new cart with the email and the new product
            const newCart = await Cart.create({ email, products: [{ productId, quantity: 1 }] });
            console.log(newCart);
        }
        res.send('success');
    } catch (error) {
        console.error(error);
        res.send('error');
    }
});

router.put('/cart', async (req, res) => {
    try {
        const { token, productId, quantity } = req.body;
        console.log(token,productId,quantity);

        const user = jwt.verify(token, SECRET_KEY);
        const email = user.email;

        // Use await to ensure Cart.findOne() returns a promise result
        const cart = await Cart.findOne({ email });
        console.log(cart.products);

        // If the cart exists, find the product by productId
        const productIndex = cart.products.findIndex(product => product.productId === productId);
        cart.products[productIndex].quantity = quantity;

        const updatedCart = await Cart.findOneAndUpdate(
            { email },
            { email, products: cart.products },
            { new: true }
        );
        console.log(cart.products);

        res.send('success');
    } catch (error) {
        console.error(error);
        res.send('error');
    }
});

module.exports = router;
