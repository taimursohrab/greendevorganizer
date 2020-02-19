var mongoose = require('mongoose');

var checkSchema = mongoose.Schema({
    checkNum : Number,
    amount : Number,
    dateWritten : Date,
    datePosted : Date,
    checkFrom : {type : mongoose.Schema.Types.ObjectId, refPath : 'entityModel'},
    checkTo : {type : mongoose.Schema.Types.ObjectId, refPath : 'entityModel'},
    memo : String,
    notes : String,
    imageURL : String,
    entityModel: {
        type: String,
        enum: ['Person', 'Company']
    }
});

module.exports = mongoose.model('Check', checkSchema);