const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const key='secretkey';

/*router.get('/', (req,res) => {
    res.send('Hello World');
})*/

const UserController = require('../controllers/user.controller');

/*router.get('/', (req,res) => {
    res.json({
        status: 'Hello World' });
   })*/

   router.get('/', UserController.getUser)
   router.get('/home', UserController.gethome)
   router.post('/register', UserController.createUser);
   router.post('/login', UserController.login);
  
     //router.get('/:id', ShopController.getShop);
   //router.put('/:id', ShopController.editShop);
   //router.delete('/:id', ShopController.deleteShop);

 
   
 


 module.exports = router;