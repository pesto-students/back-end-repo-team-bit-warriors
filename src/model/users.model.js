const { boolean, bool } = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    isAdmin: Boolean
});

UserSchema.statics.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });
    return token;
}

const User = new mongoose.model('User', UserSchema);




// const usermodel = mongoose.model('User',user)

module.exports = { User }
