const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/product', async (req, res) => {
  try {
    const { search, color, brand, price, type, sort } = req.query;

    let searchFilter = {};

    if (search) {
      const searchWordsArray = search.split(' ');
      const searchWordsRegex = searchWordsArray.map((word) => new RegExp(word, 'i'));
      searchFilter = {
        $and: searchWordsRegex.map((wordRegex) => ({ fullName: { $regex: wordRegex } })),
      };
    }

    const colorFilter = color ? { color: new RegExp(color, 'i') } : {};
    const brandFilter = brand ? { brand: new RegExp(brand, 'i') } : {};

    let min = 0,
      max = 100000;
    if (price) {
      [min, max] = price.split('-');
    }
    const priceFilter = { price: { $lte: parseInt(max), $gte: parseInt(min) } };

    const typeFilter = type ? { type: new RegExp(type, 'i') } : {};

    const filters = {
      $and: [searchFilter, colorFilter, brandFilter, priceFilter, typeFilter],
    };

    const sortOptions = {
        'price-ascending': { price: 1 },
        'price-descending': { price: -1 },
        'name-ascending': { fullName: 1 },
        'name-descending': { fullName: -1 },
    };

    const sortOption = sortOptions[sort] || sortOptions['name-ascending'] ;

    const products = await Product.find(filters).sort(sortOption);

    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
