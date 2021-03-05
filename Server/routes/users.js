var express = require('express');
var router = express.Router();
const User = require('../models/User');

var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('logging in user');
});

router.post('/', usersController.RegisterUser);

module.exports = router;
