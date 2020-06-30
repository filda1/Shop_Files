const path = require('path');
const { unlink } = require('fs-extra');
const jwt = require('jsonwebtoken');
const key='secretkey';

const  WishlistController = {};

// Models
//const Note = require("../models/Note");

// Models
const Category = require('../models/category');
const FavoriteModel = require('../models/favorite');




WishlistController.getFavoriteId = async (req, res, next) => {

  verifyToken(req, res, next)

  //const products = await  wishlist.find();
  //res.json(products );
  const { id } = req.params;
  const products = await FavoriteModel.find({ email: id } );
  res.json(whishlist);

  };



  WishlistController.getFavorite = async (req, res) => {

    const products = await FavoriteModel.find();
    res.json(products);
  };



  WishlistController.postFavorite =  (req, res, next) => {
    
    verifyToken(req, res, next)
    const  favor= new FavoriteModel(req.body);

      favor.save();
      //console.log(req.body.product);
  };



  WishlistController.deleteFavorite = (req, res) => {
  
    verifyToken(req, res, next)
  
    FavoriteModel.findByIdAndRemove(req.params.id);
    res.json({status: ' Deleted'});
  };

 


async function verifyToken(req, res, next) {
  try {
      if (!req.headers.authorization) {
          return res.status(401).send('Unauhtorized Request');
      }
      let token = req.headers.authorization.split(' ')[1];
      if (token === 'null') {
          return res.status(401).send('Unauhtorized Request');
      }

      const payload = await jwt.verify(token, key);
      if (!payload) {
          return res.status(401).send('Unauhtorized Request');
      }
      req.userId = payload._id;
      next();

  } catch(e) {
      //console.log(e)
      return res.status(401).send('Unauhtorized Request');
  }
}






module.exports = WishlistController;