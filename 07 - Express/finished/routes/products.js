const express = require('express');

const { data } = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(data);
});

router.get('/:id', (req, res) => {
  const productId = Number.parseInt(req.params.id);
  const product = data.find((product) => product.id === productId);
  res.json(product);
});

let currentProductId = 9;
router.post('/', (req, res) => {
  const { name, imageURL, type } = req.body;
  const product = {
    id: ++currentProductId,
    name,
    imageURL,
    type
  };
  data.push(product);
  res.json(product);
});

router.put('/:id', (req, res) => {
  const { name, imageURL, type } = req.body;
  const productId = Number.parseInt(req.params.id);
  const product = data.find((product) => product.id === productId);

  product.name = name;
  product.imageURL = imageURL;
  product.type = type;

  res.json(product);
});

router.delete('/:id', (req, res) => {
  const productId = Number.parseInt(req.params.id);
  const productIndex = data.findIndex((product) => product.id === productId);
  data.splice(productIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
