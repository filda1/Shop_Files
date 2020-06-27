const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const { Schema } = mongoose;


var SchemaTypes = mongoose.Schema.Types; 

            const FavoriteSchema = new Schema({
                                   productId: { type: String, required: false},
                                   product: { type: String, required: false},
                                   user_id: { type: String },
                                   user: { type: String, required: false }, 
                                   description: { type: String, required: false },         
                                   price: { type: SchemaTypes.Double , required: false },
                                   category_id: { type: Number, required: false },                               
                                   path: {type: String},
                                 
                                   created_at: {type: Date, default: Date.now()}
            });

            module.exports = mongoose.model('Favorite', FavoriteSchema);