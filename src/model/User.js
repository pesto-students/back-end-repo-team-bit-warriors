const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    joinedAt: Date,
    lastLoggedIn: Date,
    phone: String,
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    image:String
})

const User = mongoose.model("User", UserSchema)
module.exports = User