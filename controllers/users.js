const express = require('express');
const models = require('../models');
const router = express.Router();


router.get('/', (req, res) => {
  models.User.findAll({where: {first_name: 'Tatianna'}}).then((listOfUsers) => {
  		res.json(listOfUsers)
  });
});


module.exports = router;