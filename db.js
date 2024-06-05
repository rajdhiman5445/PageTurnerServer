const mongoose = require('mongoose');
const itemModel = require('./models/items')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
            process.env.DB_URL);
        console.log(`MongoDB Connected successfully`);
    } catch (error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;