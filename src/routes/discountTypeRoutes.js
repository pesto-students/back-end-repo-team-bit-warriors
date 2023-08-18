const express = require('express')
const router = express.Router()
const discountTypeController = require('../controller/discountTypeController')
const errorHandler = require('../middleware/errorHandlerMiddleware')

// Get all malls
router.get('/', errorHandler(discountTypeController.getAllDiscountType))

// Create mall
router.post('/', errorHandler(discountTypeController.createDiscountType))

// Get mall by id
router.get('/:id', errorHandler(discountTypeController.getDiscountTypeById))

// update mall by id
router.put('/:id', errorHandler(discountTypeController.updateDiscountTypeById));

// Delete mall by id
router.delete('/:id', errorHandler(discountTypeController.deleteDiscountTypeById));

module.exports = router