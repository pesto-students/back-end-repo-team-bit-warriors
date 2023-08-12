const mongoose = require('mongoose')
const Schema = mongoose.Schema


const StoreSchema = new Schema({
    name: String,
    mall: {
        type: Schema.Types.ObjectId,
        ref: 'Mall'
    },
    floor: String,
    clockingtimes: String,
    phone: String,
    email: String,
    website: String,
    images: Array,
    rating: Number
})

const Store = mongoose.model('Store', StoreSchema)

module.exports = Store
