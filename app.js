const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());
app.use('/api', require('./routes/index'));

const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
const mongoURI = MONGODB_URI_PROD;

mongoose.connect(mongoURI, { useNewUrlParser: true}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});