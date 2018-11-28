const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('sign-up');
  // res.json({
  //   msg: "Successful GET to '/sign-up' route"
  // });
});

router.post('/', (req, res) => {
  models.User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }).catch(() => {
      res.render('sign-up');
    });
});

module.exports = router;
