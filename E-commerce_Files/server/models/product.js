const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const { Schema } = mongoose;


var SchemaTypes = mongoose.Schema.Types; 

            const ProductSchema = new Schema({
                                   product: { type: String, required: true},
                                   slug: { type: String, required: false },
                                   details: { type: String, required: true },   
                                   description: { type: String, required: true },         
                                   price: { type: SchemaTypes.Double , required: true },
                                   featured: { type: Boolean, required: false },
                                   category_id: { type: Number, required: true },
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

            module.exports = mongoose.model('Product', ProductSchema);