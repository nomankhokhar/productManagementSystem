const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

const app = express()
app.use(express.json())


// connection to the MongoDB
connectDB();

app.listen(5000, () => {
    console.log(`Server is Running on Port 5000`)
})