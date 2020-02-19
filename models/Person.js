var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    companies: [ {type : mongoose.Schema.Types.ObjectId} ],
    phoneNumber: String
});

module.exports = mongoose.model('Person', personSchema);