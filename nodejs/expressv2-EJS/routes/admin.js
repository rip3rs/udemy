const path = require('path');

const express = require('express');
const router = express.Router();
const rootDir = require('../helpers/path');

const products = [];


router.get('/add-product', (req, res) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', productCSS: true, formsCSS: true, activeAddProduct: true});
});

router.post('/add-product', (req, res) => {
  console.log(req.body)
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;