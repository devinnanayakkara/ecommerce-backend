const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require ('dotenv').config();

const Product = require ('./models/Product');

const app = express ();

app.use(cors());
app.use(express.json());

console.log("🔍 Loaded MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// API routes

app.get('/api/products',async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.PORT}`);

});