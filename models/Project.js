var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    name: String,
    owner: mongoose.Types.ObjectId,         //person or company that owns the project
    address: String,
    desc: String,
});

module.exports = mongoose.model('Project', projectSchema);