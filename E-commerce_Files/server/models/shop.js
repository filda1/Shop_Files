const mongoose = require('mongoose');
const { Schema } = mongoose;

            const shopSchema = new Schema({
                                   name: { type: String, required: true},
                                   user: { type: String, required: true },
                                   email: { type: String, required: true },   
                                   logo: { type: String, required: false },         
                                   phone: { type: Number, required: false },
                                   address: { type: String, required: false },
            });

            module.exports = mongoose.model('Shop', shopSchema);