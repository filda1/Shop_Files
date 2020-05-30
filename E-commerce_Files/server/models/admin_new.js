const mongoose = require('mongoose');
const { Schema } = mongoose;
var bcrypt = require('bcrypt');


            const Admin_newSchema = new Schema({
                email : {type:String, require:true},
                username: {type:String, require:true},
                password:{type:String, require:true},
                date: { type: Date, default: Date.now }
            });

              Admin_newSchema.methods.encryptPassword = async password => {
                const salt = await bcrypt.genSalt(10);
                return await bcrypt.hash(password, salt);
              };
              
              Admin_newSchema.methods.matchPassword = async function(password) {
                return await bcrypt.compare(password, this.password);
              };
            
            module.exports = mongoose.model('Admin_new',Admin_newSchema );