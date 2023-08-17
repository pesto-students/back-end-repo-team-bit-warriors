const express = require('express')
const router = express.Router()
const discountController = require('../controller/discountController')
const errorHandler = require('../middleware/errorHandlerMiddleware')
const authHandler = require('../middleware/authMiddleware')
const adminAuthHandler = require('../middleware/adminMiddleware')

// Get all malls
router.get('/', authHandler,errorHandler(discountController.getAllDiscount))

// Create mall
router.post('/', authHandler, adminAuthHandler,  errorHandler(discountController.createDiscount))

// Get mall by id
router.get('/:id', authHandler, errorHandler(discountController.getDiscountById))

// update mall by id
router.put('/:id', authHandler, adminAuthHandler,  errorHandler(discountController.updateDiscountById));

// Delete mall by id
router.delete('/:id', authHandler, adminAuthHandler,  errorHandler(discountController.deleteDiscountById));

module.exports = router