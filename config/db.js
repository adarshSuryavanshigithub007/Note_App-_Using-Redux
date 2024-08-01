const mongoose = require('mongoose');

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 60000, // 60 seconds
            connectTimeoutMS: 60000, // 60 seconds
            serverSelectionTimeoutMS: 60000, // 60 seconds
        });
        console.log('DB connected');
    } catch (error) {
        console.log('DB connection failed', error);
    }
};

module.exports = connectionDB;
