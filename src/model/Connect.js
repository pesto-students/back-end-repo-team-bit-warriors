const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ConnectSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    email: String,
    phone: Number,
    comments: String
})

const Connect = mongoose.model("Connect", ConnectSchema)
module.exports = Connect