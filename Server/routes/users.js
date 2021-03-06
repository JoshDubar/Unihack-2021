var express = require('express');
var router = express.Router();
const User = require('../models/User');

var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('logging in user');
});

//Make new user
router.post('/', usersController.RegisterUser);
//Return user info
router.get('/userData',usersController.ReturnUserData);

//Return all the groups for a user
router.get('/returnAllGroups',usersController.ReturnAllGroups);



module.exports = router;
