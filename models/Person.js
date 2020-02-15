var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    companies: [ {type : mongoose.Schema.Types.ObjectId, ref : 'Company'} ],
    phoneNumber: String
});

module.exports = mongoose.model('Person', personSchema);