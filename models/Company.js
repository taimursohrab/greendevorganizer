var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: String,
    employees: [ {type : mongoose.Schema.ObjectId, ref : 'Person'} ]
});

module.exports = mongoose.model('Company', companySchema);