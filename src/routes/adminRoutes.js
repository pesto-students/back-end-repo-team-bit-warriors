const express = require('express');
const adminAuthController = require("../controller/auth/adminAuthController");

const router = express.Router();

router.post('/register', adminAuthController.register);
router.post('/login', adminAuthController.login);

module.exports = router;