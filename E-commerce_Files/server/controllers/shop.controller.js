const ShopModel = require('../models/shop');

const  ShopController = {};

/*ShopController.getShop = async (req,res) => {
    res.json({
        status: 'MY SHOP' });
   };*/

   ShopController.getShops = async (req, res, next) => {
    const store= await ShopModel.find();
    res.json(store);
    };

    ShopController.createShop = async (req, res, next) => {
        const store= new ShopModel(req.body);
        await store.save();
        res.json({
            'status':'saved'});
        };

    ShopController.getShop = async (req, res, next) => {
            const { id } = req.params;
            const store = await ShopModel.findById(id);
            res.json(store);
            };

    ShopController.editShop = async (req, res, next) => {
                const { id } = req.params;
                const store = {
                name: req.body.name,
                user: req.body.user,
                email: req.body.email,
                logo: req.body.logo,
                phone: req.body.phone,
                address: req.body.address
                };

                await ShopModel.findByIdAndUpdate(id, {$set: store}, {new: true});
                res.json({status: 'Shop Updated'});
                };


    ShopController.deleteShop = async (req, res, next) => {
                    await ShopModel.findByIdAndRemove(req.params.id);
                    res.json({status: 'Store Deleted'});
                    };


   module.exports = ShopController;