const User = require('../models/User');
const Group = require('../models/Group');

exports.RegisterUser = async function(req,res) {
    const user = new User({
        email: req.body.email,
        groups : [],
        UID : "demo_id",
        username : req.body.username
      });

    try{
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err){
        res.json({message : err});
    }
};

//Returning all the groups the user is in
exports.ReturnAllGroups = async function(req,res){
    const userID = req.params.id
    try{
        const userGroups = await User.findById(userID);
        res.json(userGroups.groups);
    }
    catch(err){
        res.json({message : err});
    }
};





