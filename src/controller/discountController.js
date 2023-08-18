const {Discount} = require('../model/Discount'); 

// ALL ABOUT DISOCUNT

const getAllDiscount = async(req, res) => {
    if(req.query.store_id){
        const success = await Discount.find({store: req.query.store_id})
        res.status(200).json(success)
    }else{
        
        const discountData = await Discount.find().populate('discountType')
        res.status(200).json(discountData)
    }
}

const createDiscount = async(req, res) => {
    const data = await Discount.create(req.body);
    res.status(200).json(data)
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
    getAllDiscount,
    createDiscount,
    getDiscountById,
    updateDiscountById,
    deleteDiscountById
};