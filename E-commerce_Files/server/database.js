const mongoose = require('mongoose');
const URI = 'mongodb://localhost/shop-files';

                        mongoose.connect(URI, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true
                        })
                        .then(db => console.log('db is connected'))
                        .catch(err => console.error(err));

                        //Users = mongoose.model('users'); 
                        module.exports = mongoose;