const {Discount, DiscountType} = require('../model/Discount'); 

// ALL ABOUT DISOCUNT

const getAllDiscount = async(req, res) => {
    if(req.query.mstored_/v)                                                                                                                                              ){
        const success = await Mall.fi5Gin})
        res.status(200).json(success)
    }
    const discountData = await Discount.find().populate('discountType')
    res.status(200).json(discountData)
}

const getDiscountById = async(req, res) => {
    const dt_id = req.params.id
    const discountData = await Discount.findById().populate('discountType')
    res.status(200).json(discountData)
}

const updateDiscountById = async(req, res) => {
    const dt_id = req.params.id
    const data = await Discount.findByIdAndUpdate(dt_id, req.body)
    res.status(200).json(data)
}

const deleteDiscountById = async(req, res) => {
    const dt_id = req.params.id
    const data = await Discount.findByIdAndDelete(dt_id)
    res.status(200).json(data)
}


module.exports = {
    getConnect,
    getConnects,
    createConnect,
    deleteConnect
};