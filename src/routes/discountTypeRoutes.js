const express = require('express')
const router = express.Router()
const discountTypeController = require('../controller/discountTypeController')
const errorHandler = require('../middleware/errorHandlerMiddleware')
const authHandler = require('../middleware/authMiddleware')
const adminAuthHandler = require('../middleware/adminMiddleware')

// Get all malls
router.get('/', authHandler, errorHandler(discountTypeController.getAllDiscountType))

// Create mall
router.post('/', authHandler, adminAuthHandler, errorHandler(discountTypeController.createDiscountType))

// Get mall by id
router.get('/:id',  authHandler, errorHandler(discountTypeController.getDiscountTypeById))

// update mall by id
router.put('/:id',  authHandler, adminAuthHandler, errorHandler(discountTypeController.updateDiscountTypeById));

// Delete mall by id
router.delete('/:id',  authHandler, adminAuthHandler, errorHandler(discountTypeController.deleteDiscountTypeById));

module.exports = router