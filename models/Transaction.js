const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  accountId: mongoose.Schema.Types.ObjectId,
  type: { type: String, enum: ['credit', 'debit'], required: true },
  amount: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
