const mongoose = require('mongoose');
const { Schema } = mongoose;
var bcrypt = require('bcrypt');



            const UserSchema = new Schema({
                email : {type:String, require:true, unique:true},
                username: {type:String, require:true},
                password:{type:String, require:true},
                creation_dt:{type:Date, require:true}
            });

            UserSchema .statics.hashPassword = function hashPassword(password){
                return bcrypt.hashSync(password,10);
            }
            // Compara password
            UserSchema .methods.isValid = function(hashedpassword){
                return  bcrypt.compareSync(hashedpassword, this.password);
            }
            
            module.exports = mongoose.model('User',UserSchema );