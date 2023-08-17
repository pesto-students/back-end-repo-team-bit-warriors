const express = require('express')
const router = express.Router()
const storeController = require('../controller/storeController')
const errorHandler = require('../middleware/errorHandlerMiddleware')
const authHandler = require('../middleware/authMiddleware')
const adminAuthHandler = require('../middleware/adminMiddleware')

// Get store by mall id as query
router.get('/', errorHandler(storeController.getStores))

// Create store
router.post('/', errorHandler(storeController.createStore))

// Get store by id
router.get('/:id', errorHandler(storeController.getStore))

// update mall by id
router.put('/:id', errorHandler(storeController.updateStore));

// Delete mall by id
router.delete('/:id', errorHandler(storeController.deleteStore));

module.exports = router