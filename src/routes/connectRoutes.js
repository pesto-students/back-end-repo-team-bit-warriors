const express = require('express')
const router = express.Router()
const connectController = require('../controller/connectController');
const authContoller = require('../controller/auth/userAuthController');
const errorHandler = require('../middleware/errorHandlerMiddleware'); // Import the error handling middleware
const authHandler = require('../middleware/authMiddleware')
const adminAuthHandler = require('../middleware/adminMiddleware')

router.post('/', authHandler, errorHandler(connectController.createConnect));

// Find all contact us post
router.get('/', authHandler, adminAuthHandler, errorHandler(connectController.getConnects));

// Find contact us phase by id
router.get('/:id', authHandler, adminAuthHandler, errorHandler(connectController.getConnect));

// Delete by user id
router.delete('/:id', authHandler, adminAuthHandler, errorHandler(connectController.deleteConnect))

module.exports = router;