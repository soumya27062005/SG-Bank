const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const accounts = [
    {
      id: 1,
      name: "Soumya",
      balance: 5000,
      transactions: [
        { to: "Krishna", amount: 2000, date: "2026-05-22" }
      ]
    },
    {
      id: 2,
      name: "Krishna",
      balance: 3000,
      transactions: [
        { from: "Soumya", amount: 2000, date: "2026-05-22" }
      ]
    }
  ];
  res.json(accounts); // ✅ Send as JSON
});

module.exports = router;
