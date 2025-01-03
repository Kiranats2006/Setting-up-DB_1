const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const app = express();
const port = 3010;
const mongoURI=process.env.MONGO_URI;

mongoose.connect(mongoURI)
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.error('Error connecting to database:', error.message);
});

app.get('/', (req, res) => {
  res.send('Customer Management System Backend is Running');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
