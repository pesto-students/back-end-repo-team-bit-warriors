const express = require('express')
const router = express.Router()
const mallController = require('../controller/mallController')
const errorHandler = require('../middleware/errorHandlerMiddleware')
const authHandler = require('../middleware/authMiddleware')
const adminAuthHandler = require('../middleware/adminMiddleware')


// Get all malls
router.get('/',  authHandler, errorHandler(mallController.getMalls))

// Create mall
router.post('/', authHandler, adminAuthHandler,errorHandler(mallController.createMall))

// Get mall by id
router.get('/:id', authHandler, errorHandler(mallController.getMall))

// update mall by id
router.put('/:id', authHandler, adminAuthHandler, errorHandler(mallController.updateMall));

// Delete mall by id
router.delete('/:id', authHandler, adminAuthHandler, errorHandler(mallController.deleteMall));

module.exports = router