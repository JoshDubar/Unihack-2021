const mongoose = require('mongoose');

const ServicesSchema = mongoose.Schema({
    cost: Number,
    name : String,
    isRecurring : Boolean,
});

const MembersSchema = mongoose.Schema({
    username : String,
    paid : {
        type : Boolean,
        default : false
    }
});

const GroupSchema = mongoose.Schema({
    host : String, 
    link : String,
    service : [ServicesSchema],
    members : [MembersSchema]
});

module.exports = mongoose.model('Groups', GroupSchema);


