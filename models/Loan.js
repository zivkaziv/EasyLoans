var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
};

var loanSchema = new mongoose.Schema({
    amount: String,
    reason: String,
    status: String,
    requestedBy: {},
    approvedBy: {}
}, schemaOptions);



var Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
