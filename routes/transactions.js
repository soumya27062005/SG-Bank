const express = require('express');
const router = express.Router();

let transactions = [];

router.post('/', (req, res) => {
  const { from, to, amount } = req.body;

  if (!from || !to || !amount) {
    return res.redirect('/?message=Missing+fields');
  }

  const transaction = { from, to, amount, time: new Date().toISOString() };
  transactions.push(transaction);

  // Redirect back with success message
  res.redirect(`/?message=Transaction+successful:+${from}+sent+$${amount}+to+${to}`);
});

module.exports = router;
