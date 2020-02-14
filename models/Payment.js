var mongoose = require('mongoose');

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

module.exports = mongoose.model('Payment', paymentSchema);
