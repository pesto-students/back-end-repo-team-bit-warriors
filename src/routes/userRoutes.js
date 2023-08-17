const express = require('express')
const router = express.Router()
const userContoller = require('../controller/userController');
const authContoller = require('../controller/auth/userAuthController');
const errorHandler = require('../middleware/errorHandlerMiddleware'); // Import the error handling middleware
const authHandler = require('../middleware/authMiddleware')
const adminAuthHandler = require('../middleware/adminMiddleware')

// Create user
router.post('/', authHandler, adminAuthHandler, errorHandler(authContoller.register));

// Find all users
router.get('/', authHandler, adminAuthHandler, errorHandler(userContoller.getUsers));

// Find all users
router.get('/:id', authHandler, adminAuthHandler, errorHandler(userContoller.getUser));

// Update users
router.put('/:id', authHandler, adminAuthHandler, errorHandler(userContoller.updateUser))

// Delete users
router.delete('/:id', authHandler, adminAuthHandler, errorHandler(userContoller.deleteUser))

module.exports = router;