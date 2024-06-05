const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
dotenv.config()

const app = express()
app.use(express.json())


// connection to the MongoDB
connectDB();

// // api routes
app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})