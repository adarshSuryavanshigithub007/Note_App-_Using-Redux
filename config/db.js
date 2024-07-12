const  mongoose = require('mongoose');
const connectionDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected')
    } catch (error) {
        console.log('db faile')
    }
}
module.exports = connectionDB;



