var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
    amount: Number,
    from: {
        type: mongoose.Schema.Types.ObjectId, refPath: 'targetModel'
    },
    to: {
        type: mongoose.Schema.Types.ObjectId, refPath: 'targetModel'
    },
    status: String,                         // Pending, paid, void
    date: Date,                             // if to be paid, this will be the date it is going to be paid, if paid already this is the date it was paid
    parent: {type: mongoose.Schema.Types.ObjectId, refPath: 'parentModel'},        // parent, either an invoice or a contract
    paymentType: String,                    // e.g. check, debit card, cash, etc.
    check: {type : mongoose.Schema.Types.ObjectId, ref : 'Check'},                     // if it's a check, reference to the check here
    estimated: Boolean,                     // true if the date of this payment is an estimation, false if it is an exact date
    notes: String,
    //enum models
    targetModel: {
        type: String,
        enum: ['Person', 'Company']
    },
    parentModel: {
        type: String,
        enum: ['Invoice', 'Contract']  
    }
});

module.exports = mongoose.model('Payment', paymentSchema);