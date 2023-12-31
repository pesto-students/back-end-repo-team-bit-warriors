const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MallSchema = new Schema({
    name: String,
    area: String,
    state: String,
    city: String,
    pin: String,
    landmark: String,
    gmaplink: String,
    clockingtimes: String,
    floorsCount: Number,
    floors: Array,
    shopCount: Number,
    phone: String,
    website: String,
    email: String,
    images: Array,
    rating:Number,
})

const Mall = mongoose.model('Mall', MallSchema)

module.exports = Mall
