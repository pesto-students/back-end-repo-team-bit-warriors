const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    area: String,
    state: String,
    city: String,
    pin: String,
    landmark: String,
    gmaplink: String
})


const Address = mongoose.model("Address", AddressSchema)
module.exports = Address