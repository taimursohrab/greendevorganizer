var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    companies: [ {type : mongoose.Schema.ObjectId, ref : 'Company'} ],
    phoneNumber: String
});

var companySchema = mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: String,
    employees: [ {type : mongoose.Schema.ObjectId, ref : 'Person'} ]
});

var paymentSchema = mongoose.Schema({
    amount: Number,
    from: mongoose.Types.ObjectId,
    to: mongoose.Types.ObjectId,
    status: String,                         // Pending, paid, void
    date: Date,                             // if to be paid, this will be the date it is going to be paid, if paid already this is the date it was paid
    parent: mongoose.Types.ObjectId,        // parent, either an invoice or a contract
    paymentType: String,                    // e.g. check, debit card, cash, etc.
    check: {type : mongoose.Schema.ObjectId, ref : 'Check'},                     // if it's a check, reference to the check here
    estimated: Boolean,                     // true if the date of this payment is an estimation, false if it is an exact date
    notes: String
});

var checkSchema = mongoose.Schema({
    checkNum : Number,
    amount : Number,
    dateWritten : Date,
    datePosted : Date,
    checkFrom : mongoose.Types.ObjectId,
    checkTo : mongoose.Types.ObjectId,
    memo : String,
    notes : String
});
                         
var invoiceSchema = mongoose.Schema({
    amount: Number,
    quickbooksId : String,
    payments : [{type : mongoose.Schema.ObjectId, ref : 'Payment'}],
    parent : {type : mongoose.Schema.ObjectId, ref : 'Contract'},                //should be a contract
    document: String,
    date: Date,
    entity: mongoose.Types.ObjectId         // the entity who was invoiced, can be a person or company 
});

var contractSchema = mongoose.Schema({
    name: String,
    desc: String,
    amount: Number,
    document: String,                       //url to path where physical contract copy can be found
    signature: Boolean,                     // was the contract signed? yes or no?
    contractType: String,                   //contract or subcontract
    invoices: [{type : mongoose.Schema.ObjectId, ref : 'Invoice'}],
    payments: [{type : mongoose.Schema.ObjectId, ref : 'Payment'}],              //first payment made towards the contract (only use if payments were issued outside of invoice)
});

var projectSchema = mongoose.Schema({
    name: String,
    owner: mongoose.Types.ObjectId,         //person or company that owns the project
    address: String,
    desc: String,
});

var company = mongoose.model('Company', companySchema);
var person = mongoose.model('Person', personSchema);
var payment = mongoose.model('Payment', paymentSchema);
var check = mongoose.model('Check', checkSchema);
var invoice = mongoose.model('Invoice', invoiceSchema);
var contract = mongoose.model('Contract', contractSchema);
var project = mongoose.model('Project', projectSchema);

module.exports = {Company: company, Person: person, Payment: payment, Check: check, Invoice: invoice, Contract: contract, Project: project};
