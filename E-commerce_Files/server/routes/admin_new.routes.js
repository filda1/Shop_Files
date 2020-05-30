const express = require('express');
const router = express.Router();

/*router.get('/', (req,res) => {
    res.send('Hello World');
})*/
const { isAuthenticated } = require("../helpers/auth");

const Admin_newController = require('../controllers/admin_new.controller');
const HomeController = require('../controllers/home.controller');
const ProductController = require('../controllers/products.controller');
const UseradminController = require('../controllers/usersadmin.controller');
const CategoryController = require('../controllers/category.controller');

/*router.get('/', (req,res) => {
    res.json({
        status: 'Hello World' });
   })*/

   router.get('', Admin_newController.getAdmin)
   
   router.get('/register', Admin_newController.register);
   router.post('/register', Admin_newController.createAdmin);

   router.get('/login', Admin_newController.login);
   router.post('/login', Admin_newController.authLogin );
  
   router.get("/logout", Admin_newController.logout);
   
   //////////////////////////////////////////////////////////
   router.get('/home', isAuthenticated, HomeController.getHome);

   ///////// Product ////////////
   router.get('/products', ProductController.getProducts);
   router.get('/showproducts', isAuthenticated, ProductController.show);

   router.get('/postproduct', isAuthenticated, ProductController.showPost);
   router.post('/postproduct', isAuthenticated, ProductController.post);
   
   router.get('/editproduct', isAuthenticated, ProductController.edit);
   router.get('/deleteproduct', isAuthenticated, ProductController.delete);

   ///////// Users ////////////
   router.get('/showusers', isAuthenticated, UseradminController.show);
   router.get('/postuser', isAuthenticated, UseradminController.post);
   router.get('/edituser', isAuthenticated, UseradminController.edit);
   router.get('/deleteuser', isAuthenticated, UseradminController.delete);

    ///////// Category ////////////
    router.get('/categories', CategoryController.getCategory);
    router.get('/showcategory', isAuthenticated, CategoryController.show);
 
    router.get('/postcategory', isAuthenticated, CategoryController.showPost);
    router.post('/postcategory', isAuthenticated, CategoryController.post);
    
    router.get('/editcategory', isAuthenticated, CategoryController.edit);
    router.get('/deletecategory', isAuthenticated, CategoryController.delete);

    /////////////////////// Search /////////////////////
    router.get('/searchAll/:id', ProductController.searchAll);




   



 module.exports = router;