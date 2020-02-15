var mongoose = require('mongoose');

var invoiceSchema = mongoose.Schema({
    amount: Number,
    quickbooksId : String,
    payments : [{type : mongoose.Schema.Types.ObjectId, ref : 'Payment'}],
    parent : {type : mongoose.Schema.Types.ObjectId, ref : 'Contract'},                //should be a contract
    document: String,
    date: Date,
    entity: {type : mongoose.Schema.Types.ObjectId, refPath : 'entityModel'},      // the entity who was invoiced, can be a person or company 
    entityModel: {
        type: String,
        enum: ['Person', 'Company']
    },
});

module.exports = mongoose.model('Invoice', invoiceSchema);