var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    name: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'},         //person or company that owns the project
    address: String,
    desc: String,
});

module.exports = mongoose.model('Project', projectSchema);