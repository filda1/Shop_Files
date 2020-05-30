const path = require('path');


const  CategoryController = {};

// Models
//const Note = require("../models/Note");

// Models
const Category = require('../models/category');



CategoryController.getCategory = async (req, res) => {

  const categories = await Category.find();
  res.json(categories );
  //res.render('admin/products/images', { products });
  //res.render("admin/products/update");
};


CategoryController.showPost = (req, res) => {
  res.render("admin/categories/postcategory");
};

CategoryController.post = async (req, res) => {

  const category = new Category();

  //console.log(req.body);
  category.category_id= req.body.category_id;
  category.category= req.body.category;
  category.subcategory1= req.body.subcategory1;
  category.subcategory2= req.body.subcategory2;
  category.subcategory3= req.body.subcategory3;
  category.type= req.body.type;
  category.specific= req.body.specific;
  category.popular= req.body.popular;
  category.active = req.body.active;

  await category.save();
  res.redirect('home');
};



CategoryController.show = (req, res) => {
  res.render("admin/categories/showcategories");
};



CategoryController.edit = (req, res) => {
  res.render("admin/categories/editcategory");
};

CategoryController.delete = (req, res) => {
  res.render("admin/categories/deletecategory");
};

module.exports = CategoryController;