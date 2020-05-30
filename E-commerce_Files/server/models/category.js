const mongoose = require('mongoose');
const { Schema } = mongoose;

            const categorySchema = new Schema({
                                   category_id: { type: Number, required: false },
                                   category: { type: String, required: false},
                                   subcategory1: { type: String, required: false },
                                   subcategory2: { type: String, required: false },
                                   subcategory3: { type: String, required: false },
                                   type: { type: String, required: false },
                                   specific: { type: String, required: false },
                                   popular: { type: String, required: false },
                                   active: { type: Boolean},
                                   date: { type: Date, default: Date.now }
                                  
            });

            module.exports = mongoose.model('Category', categorySchema);