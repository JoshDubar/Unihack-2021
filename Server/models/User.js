const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    groups : [String],
    UID : String,
    accountNum : Number,
    bsb : Number
});

module.exports = mongoose.model('Users', UserSchema);