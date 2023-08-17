const express = require('express')
const router = express.Router()
const mallController = require('../controller/mallController')
const errorHandler = require('../middleware/errorHandlerMiddleware')
const authHandler = require('../middleware/authMiddleware')
const adminAuthHandler = require('../middleware/adminMiddleware')


// Get all malls
router.get('/', errorHandler(mallController.getMalls))

// Create mall
router.post('/', errorHandler(mallController.createMall))

// Get mall by id
router.get('/:id', errorHandler(mallController.getMall))

// update mall by id
router.put('/:id', errorHandler(mallController.updateMall));

// Delete mall by id
router.delete('/:id', errorHandler(mallController.deleteMall));

module.exports = router