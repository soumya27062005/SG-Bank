const express = require('express');
const app = express();
const path = require('path');

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const accountRoutes = require('./routes/accounts');
const transactionRoutes = require('./routes/transactions');

app.use('/api/accounts', accountRoutes);
app.use('/api/transactions', transactionRoutes);

// HTML frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve frontend HTML at /accounts (NOT the API)
app.get('/accounts', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'accounts.html'));
  });
  

app.listen(3000, () => {
  console.log('Banking Microservice is Running on http://localhost:3000');
});
