const express = require('express');

const Product = require('../models/products');
const { data } = require('../data');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(product);
});

let currentProductId = 9;
router.post('/', async (req, res) => {
  const { name, imageURL, type } = req.body;
  const product = await Product.create({
    name,
    imageURL,
    type
  });
  res.json(product);
});

router.put('/:id', async (req, res) => {
  const { name, imageURL, type } = req.body;
  const product = await Product.findOne({
    where: {
      id: req.params.id
    }
  });

  product.name = name;
  product.imageURL = imageURL;
  product.type = type;

  await product.save();

  res.json(product);
});

router.delete('/:id', async (req, res) => {
  await Product.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(204);
});

module.exports = router;
