const express = require('express');
const models = require('../models');
const router = express.Router();


router.get('/', (req, res) => {
  models.Building.findAll({where: {Name: 'CA'}}).then((listOfRoom) => {
  		res.json(listOfRoom)
  });
});


module.exports = router;