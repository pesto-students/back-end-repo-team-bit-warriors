const express = require('express')
const router = express.Router()
const favouritController = require('../controller/favouritController')
const errorHandler = require('../middleware/errorHandlerMiddleware')


// Create users's fav
router.post('/user/:id/fav', errorHandler(favouritController.getFavourit))

// Get users's fav
router.get('/user/:id/fav', errorHandler(favouritController.createFavourit))

module.exports = router;
