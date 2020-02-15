var mongoose = require('mongoose');

var contractSchema = mongoose.Schema({
    name: String,
    desc: String,
    amount: Number,
    document: String,                       //url to path where physical contract copy can be found
    signature: Boolean,                     // was the contract signed? yes or no?
    contractType: String,                   //contract or subcontract
    invoices: [{type : mongoose.Schema.Types.ObjectId, ref : 'Invoice'}],
    payments: [{type : mongoose.Schema.Types.ObjectId, ref : 'Payment'}],              //first payment made towards the contract (only use if payments were issued outside of invoice)
});

module.exports = mongoose.model('Contract', contractSchema);