const mongoose = require('mongoose')
const Schema = mongoose.Schema


const StoreSchema = new Schema({
    name: String,
    mall: {
        type: Schema.Types.ObjectId,
        ref: 'Mall'
    },
    floor: String,
    clockingtimes: Array,
    phone: String,
    email: String,
    website: String,
    images: Array
})

const Store = mongoose.model('Store', StoreSchema)

module.exports = Store
