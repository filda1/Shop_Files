const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const { Schema } = mongoose;


var SchemaTypes = mongoose.Schema.Types; 

            const WishlistSchema = new Schema({
                                   productId: { type: String, required: false},
                                   product: { type: String, required: false},
                                   user_id: { type: Number },
                                   user: { type: String, required: false },
                                   details: { type: String, required: false },   
                                   description: { type: String, required: false },         
                                   price: { type: SchemaTypes.Double , required: false },
                                   featured: { type: Boolean, required: false },
                                   category_id: { type: Number, required: false },
                                   active: { type: Boolean, required: false },
                                   views: { type: Number },
                                   likes: { type: Number },
                                   comment_id: { type: Number },
                                   ititle: {type: String},
                                   idescription: {type: String},
                                   filename: {type: String},
                                   path: {type: String},
                                   originalname: {type: String},
                                   mimetype: {type: String},
                                   size: { type: Number},
                                   created_at: {type: Date, default: Date.now()}
            });

            module.exports = mongoose.model('Wishlist', WishlistSchema);