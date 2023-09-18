const express = require('express');
const router = express.Router();

const userController = require('../controller/user/userController');
router.post('/newUser',userController.signup);
module.exports = router;