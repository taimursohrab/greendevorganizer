var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: String,
    employees: [personSchema],
});

var personSchema = mongoose.Schema({
    name: String,
    companies: [companySchema],
    phoneNumber: String
});

var paymentSchema = mongoose.Schema({
    amount: Number,
    from: mongoose.Types.ObjectId,
    to: mongoose.Types.ObjectId,
    status: String,                         // Pending, paid, void
    date: Date,                             // if to be paid, this will be the date it is going to be paid, if paid already this is the date it was paid
    parent: mongoose.Types.ObjectId,        // parent, either an invoice or a contract
    paymentType: String,                    // e.g. check, debit card, cash, etc.
    check: checkSchema,                     // if it's a check, reference to the check here
    estimated: Boolean,                     // true if the date of this payment is an estimation, false if it is an exact date
    notes: String
});

var checkSchema = mongoose.Schema({
    checkNumber = Number,
    amount = Number,
    dateWritten = Date,
    datePosted = Date,
    from = mongoose.Types.ObjectID,
    to = mongoose.Types.ObjectID,
    memo = String,
    notes = String
});
                         
var invoiceSchema = mongoose.Schema({
    amount: Number,
    quickbooksId : String,
    payments : [paymentSchema],
    parent : contractSchema,                //should be a contract
    document: String,
    date: Date,
    entity: mongoose.Types.ObjectID         // the entity who was invoiced, can be a person or company 
});

var contractSchema = mongoose.Schema({
    name: String,
    desc: String,
    amount: Number,
    document: String,                       //url to path where physical contract copy can be found
    signature: Boolean,                     // was the contract signed? yes or no?
    contractType: String,                   //contract or subcontract
    invoices: [invoiceSchema],
    payments: [paymentSchema],              //first payment made towards the contract (only use if payments were issued outside of invoice)
});

var projectSchema = mongoose.Schema({
    name: String,
    owner: mongoose.Types.ObjectId,         //person or company that owns the project
    address: String,
    desc: String,
});

module.exports = mongoose.model('Contract', contractSchema );