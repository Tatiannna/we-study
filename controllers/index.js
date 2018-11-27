const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));
router.use('/signup', require('./sign-up'));


module.exports = router;
