const mongoose = require('mongoose');

const ServicesSchema = mongoose.Schema({
    value: Number,
    name : String,
    isRecurring : Boolean,
    due : {
        type : Date,
        default : Date.now
    }
});

const MembersSchema = mongoose.Schema({
    username : String,
    paid : {
        type : Boolean,
        default : false
    },
    _id : String
});

const GroupSchema = mongoose.Schema({
    host : String,
    name : String, 
    service : [ServicesSchema],
    members : [MembersSchema],
    accountNum : Number,
    bsb : Number
});

module.exports = mongoose.model('Groups', GroupSchema);


