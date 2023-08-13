

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const DiscountSchema = new Schema({
    name: String,
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    },
    startDate: Date,
    endDate: Date,
    createdDate: {
        type: Date,
        default: Date.now(),

    },
    active: Boolean,
    discountPercentage: String,
    discountType: {
        type: Schema.Types.ObjectId,
        ref: 'DiscountType'
    },
    image: Array
})

const DiscountTypeSchema = new Schema({
    name: String,
    description: String,
    type: Number
})

const Discount = mongoose.model("Discount", DiscountSchema)
const DiscountType = mongoose.model("DiscountType", DiscountTypeSchema)

module.exports = { Discount, DiscountType}