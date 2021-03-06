const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    name: String,
    _id: mongoose.Schema.Types.ObjectID,
    isHost: {
        type: Boolean,
        default: false  
    }
})

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    groups : [groupSchema],
    UID : String,
    
});

module.exports = mongoose.model('Users', UserSchema);