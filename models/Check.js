var mongoose = require('mongoose');

var checkSchema = mongoose.Schema({
    checkNum : Number,
    amount : Number,
    dateWritten : Date,
    datePosted : Date,
    checkFrom : mongoose.Types.ObjectId,
    checkTo : mongoose.Types.ObjectId,
    memo : String,
    notes : String
});

module.exports = mongoose.model('Check', checkSchema);