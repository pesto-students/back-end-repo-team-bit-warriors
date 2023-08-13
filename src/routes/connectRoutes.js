const express = require('express')
const router = express.Router()
const connectController = require('../controller/connectController');
const authContoller = require('../controller/auth/userAuthController');
const errorHandler = require('../middleware/errorHandlerMiddleware'); // Import the error handling middleware

router.post('/', errorHandler(connectController.createConnect));

// Find all contact us post
router.get('/', errorHandler(connectController.getConnects));

// Find contact us phase by id
router.get('/:id', errorHandler(connectController.getConnect));

// Delete by user id
router.delete('/:id', errorHandler(connectController.deleteConnect))

module.exports = router;