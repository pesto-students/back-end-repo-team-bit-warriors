const express = require('express')
const router = express.Router()
const userContoller = require('../controller/UserController');
const authContoller = require('../controller/auth/userAuthController');
const errorHandler = require('../middleware/errorHandlerMiddleware'); // Import the error handling middleware

// Create user
router.post('/', errorHandler(authContoller.register));

// Find all users
router.get('/', errorHandler(userContoller.getUsers));

// Update users
router.put('/:id', errorHandler(userContoller.updateUser))

// Delete users
router.delete('/:id', errorHandler(userContoller.deleteUser))

module.exports = router;