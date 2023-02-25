//jshint esversion:8

import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewURlParser: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch(error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;
