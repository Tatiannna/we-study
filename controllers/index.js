const express = require('express');
const router = express.Router();


router.use('/alt', require('./alt'));
router.use('/', require('./home'));
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));


module.exports = router;
