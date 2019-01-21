const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../helpers/path');

const adminData = require('./admin');

router.get('/', (req, res) => {
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;