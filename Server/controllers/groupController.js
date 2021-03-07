const Group = require("../models/Group");
const User = require("../models/User");

(ObjectID = require("mongodb").ObjectID),
  //Creating a new group
  (exports.CreateGroup = async function (req, res) {
    const userId = req.body.userId;
    const newGroup = new Group({
      host: req.body.username,
      service: req.body.service,
      members: [],
      bsb: req.body.bsb,
      accountNum: req.body.accountNumber,
      name: req.body.name,
    });
    console.log("working2");
    try {
      console.log("working");
      const savedGroup = await newGroup.save();
      const addToGroup = {
        _id: savedGroup._id,
        name: req.body.name,
        isHost: true,
      };
      const addGroupToUserList = await User.updateOne(
        { _id: userId },
        { $push: { groups: addToGroup } }
      );

      res.json(savedGroup);
    } catch (err) {
      res.json({ message: err });
    }
  });

//Getting Group
exports.ReturnGroup = async function (req, res) {
  try {
    const group = await Group.findById(req.body.groupId);
    res.json(group);
  } catch (err) {
    res.json({ message: err });
  }
};

//Adding a member to a group
exports.AddMember = async function (req, res) {
  const groupId = req.body.groupId;
  const memberId = req.body.memberId;
  const username = req.body.username;
  const newMember = { username: username, _id: memberId };

  console.log(req.body);
  console.log(newMember);
  try {
    const group = await Group.findById(groupId);
    const updatedGroup = await Group.updateOne(
      { _id: groupId },
      { $push: { members: newMember } }
    );
    //res.json(updatedGroup);
    const newGroup = { _id: memberId, name: group.name };
    const addGroupToUserList = await User.updateOne(
      { _id: memberId },
      { $push: { groups: newGroup } }
    );
    res.json(updatedGroup);
  } catch (err) {
    res.json({ message: err });
  }
};

//Member has made a payment
exports.PaymentMade = async function (req, res) {
  const userId = req.body.memberId;
  const groupId = req.body.groupId;
  const paid = { "members.$.paid": true };
  console.log(req.body);
  try {
    const doc = await Group.findOne({ _id: groupId });
    doc.members.forEach((member) => {
      if (!!member._id && member._id == userId) {
        console.log(member);
        member.paid = true;
      }
    });
    //console.log(doc);
    delete doc._id;
    const paymentMade = await Group.updateOne({ _id: groupId }, { $set: doc });

    res.json(paymentMade);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.EditAmountToPay = async function (req, res) {
  const userId = req.body.memberId;
  const groupId = req.body.groupId;
  const amountToPay = req.body.amountToPay;
  try {
    const doc = await Group.findOne({ _id: groupId });
    doc.members.forEach((member) => {
      if (!!member._id && member._id == userId) {
        console.log(member);
        member.amountToPay = amountToPay;
      }
    });
    delete doc._id;
    const amountEdited = await Group.updateOne({ _id: groupId }, { $set: doc });
    res.json(amountEdited);
  } catch (err) {
    res.json({ message: err });
  }
};
