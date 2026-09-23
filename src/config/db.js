const mongoose = require('mongoose');
const dotenv = require('dotenv'); //require('dotenv').config(); short form
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
};



module.exports = connectDB;
