const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/users.controller');

router.post('/register', usercontroller.userRegister);
router.post('/login', usercontroller.userauth);

module.exports = router;