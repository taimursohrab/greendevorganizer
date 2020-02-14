var mongoose = require('mongoose');

var invoiceSchema = mongoose.Schema({
    amount: Number,
    quickbooksId : String,
    payments : [{type : mongoose.Schema.ObjectId, ref : 'Payment'}],
    parent : {type : mongoose.Schema.ObjectId, ref : 'Contract'},                //should be a contract
    document: String,
    date: Date,
    entity: mongoose.Types.ObjectId         // the entity who was invoiced, can be a person or company 
});

module.exports = mongoose.model('Invoice', invoiceSchema);