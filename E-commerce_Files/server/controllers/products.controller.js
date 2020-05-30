const path = require('path');
const { unlink } = require('fs-extra');

const  ProductController = {};

// Models
//const Note = require("../models/Note");

// Models
const Product = require('../models/product');
const Category = require('../models/category');





ProductController.searchAll = async (req, res) => {
  const { phase } = req.params;
  const products = await Product.find({ product:  phase } );
  res.json(products );
};


ProductController.getProducts = async (req, res) => {

  const products = await Product.find();
  res.json(products );
  //res.render('admin/products/images', { products });
  //res.render("admin/products/update");
};


ProductController.showPost = async (req, res) => {
  const categories = await Category.find();
  res.render("admin/products/postproduct", {categories: categories});
};

ProductController.post = async (req, res) => {

  const product = new Product();

  //console.log(req.body);
  product.product= req.body.product;
  product.slug= req.body.slug;
  product.details= req.body.details;
  product.description= req.body.description;
  product.price= req.body.price;
  product.featured= req.body.featured;
  product.category_id= req.body.category_id;
  product.active= req.body.active;
  product.views=1,
  product.likes=1,
  product.comment_id=1,
  product.ititle = req.body.ititle;
  product.idescription = req.body.idescription;
  product.filename = req.file.filename;
  product.path = '/img/uploads/' + req.file.filename;
  product.originalname = req.file.originalname;
  product.mimetype = req.file.mimetype;
  product.size = req.file.size;

  await product.save();
  res.redirect('home');
};




ProductController.show = (req, res) => {
  res.render("admin/products/showproducts");
};



ProductController.edit = (req, res) => {
  res.render("admin/products/editproduct");
};

ProductController.delete = (req, res) => {
  res.render("admin/products/deleteproduct");
};

module.exports = ProductController;