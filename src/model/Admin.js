const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AdminSchema = new Schema({
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
    }
})

const Admin = mongoose.model("Admin", AdminSchema)
module.exports = Admin