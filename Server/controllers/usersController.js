const User = require('../models/User');

exports.RegisterUser = function(req,res) {
    const user = new User({
        email: req.body.email,
        password: req.body.password
      });
    
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message : err})
    })
}

