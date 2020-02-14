var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    companies: [ {type : mongoose.Schema.ObjectId, ref : 'Company'} ],
    phoneNumber: String
});

module.exports = mongoose.model('Person', personSchema);