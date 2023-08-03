const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/users.controller');

router.post('/register', usercontroller.userRegister);
router.post('/login', usercontroller.userAuth);
router.post('/admin/register', usercontroller.adminRegister);
router.post('/admin/login', usercontroller.adminAuth);

module.exports = router;