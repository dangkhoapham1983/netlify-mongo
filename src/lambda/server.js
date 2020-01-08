// server.js
import mongoose from 'mongoose';
const dotenv = require('dotenv').config();

// Initialize connection to database
const dbUrl = process.env.MONGO_URI
        + process.env.DB_USER + ':'
        + encodeURIComponent(process.env.DB_PASS) + '@'
        + process.env.DB_HOST + ':'
        + process.env.DB_PORT + '/'
        + process.env.DB_NAME,
      dbOptions = { useNewUrlParser: true, useFindAndModify: false };

// Set DB from mongoose connection
//mongoose.connect(encodeURI(dbUrl), dbOptions);
//mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false", dbOptions);
mongoose.connect("mongodb+srv://khoapham:12345678911@cluster0-aazch.mongodb.net/demodb?retryWrites=true&w=majority", dbOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;