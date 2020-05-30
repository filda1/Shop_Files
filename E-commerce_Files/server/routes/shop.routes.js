const express = require('express');
const router = express.Router();

/*router.get('/', (req,res) => {
    res.send('Hello World');
})*/

const ShopController = require('../controllers/shop.controller');

/*router.get('/', (req,res) => {
    res.json({
        status: 'Hello World' });
   })*/

   router.get('/', ShopController.getShops)
   router.post('/', ShopController.createShop);
   router.get('/:id', ShopController.getShop);
   router.put('/:id', ShopController.editShop);
   router.delete('/:id', ShopController.deleteShop);


 module.exports = router;





