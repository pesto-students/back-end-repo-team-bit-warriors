const express = require('express')
const router = express.Router()
const storeController = require('../controller/storeController')
const errorHandler = require('../middleware/errorHandlerMiddleware')
const authHandler = require('../middleware/authMiddleware')

// Get store by mall id as query
router.get('/', authHandler, errorHandler(storeController.getStores))

// Create store
router.post('/', authHandler, errorHandler(storeController.createStore))

// Get store by id
router.get('/:id', authHandler, errorHandler(storeController.getStore))

// update mall by id
router.put('/:id', authHandler, errorHandler(storeController.updateStore));

// Delete mall by id
router.delete('/:id', authHandler, errorHandler(storeController.deleteStore));

module.exports = router