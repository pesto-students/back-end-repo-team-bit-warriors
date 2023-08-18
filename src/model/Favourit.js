const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavouritSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    mall: {
        type: Schema.Types.ObjectId,
        ref: 'Mall'
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    },
    discount:  {
        type: Schema.Types.ObjectId,
        ref: 'Discount'
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
});


const Favourit = mongoose.model('Favourit', FavouritSchema)

module.exports = Favourit;