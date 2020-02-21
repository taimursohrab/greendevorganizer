var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    desc: String
});

module.exports = mongoose.model('Person', personSchema);