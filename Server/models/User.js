const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    name: String,
    _id: String,
    isHost: {
        type: Boolean,
        default: false  
    }
})

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    groups : [groupSchema],
    _id : String,
    
});

module.exports = mongoose.model('Users', UserSchema);