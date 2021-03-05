const Group = require('../models/Group');

exports.CreateGroup = function(req,res){
    const newGroup = new Group({
        host : req.body.host,
        service : req.body.service,
        link : "link",
        members : []
    });

    newGroup.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message:err})
    })
}