const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema

const AuthenticationSchema = new Schema({
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
})


AuthenticationSchema.statics.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });
    return token;
}

const Auth = mongoose.model("Auth", AuthenticationSchema)

module.exports = { Auth }