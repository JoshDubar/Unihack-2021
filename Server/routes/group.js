var express = require('express');
var router = express.Router();

var groupController = require('../controllers/groupController');

//Creating a new group
router.post('/newGroup', groupController.CreateGroup);

//Getting a group
router.get('/getGroup', groupController.ReturnGroup);

//Add a new member to the group
router.post('/addMember', groupController.AddMember);

//Member has made a payment
router.patch('/paymentMade', groupController.PaymentMade);

//Changing the amount to paid
router.patch('/amountToPay', groupController.EditAmountToPay);

module.exports = router;