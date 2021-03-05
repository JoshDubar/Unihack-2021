var express = require('express');
var router = express.Router();

var groupController = require('../controllers/groupController');

//Creating a new group
router.post('/newGroup', groupController.CreateGroup);

module.exports = router;