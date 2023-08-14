const { DiscountType} = require('../model/Discount'); 


// ALL ABOUT DISOCUNT TYPES
const getAllDiscountType = async(req, res) => {
    const data = await DiscountType.find();
    res.status(200).json(data)
}

const createDiscountType = async(req, res) => {
    const data = await DiscountType.create(req.body);
    res.status(200).json(data)
}

const getDiscountTypeById = async(req, res) => {
    const dt_id = req.params.id
    const data = await DiscountType.findById(dt_id)
    res.status(200).json(data)
}

const updateDiscountTypeById = async(req, res) => {
    const dt_id = req.params.id
    const data = await DiscountType.findByIdAndUpdate(dt_id, req.body)
    res.status(200).json(data)
}

const deleteDiscountTypeById = async(req, res) => {
    const dt_id = req.params.id
    const data = await DiscountType.findByIdAndDelete(dt_id)
    res.status(200).json(data)
}

module.exports = {
    getAllDiscountType,
    createDiscountType,
    getDiscountTypeById,
    updateDiscountTypeById,
    deleteDiscountTypeById
}