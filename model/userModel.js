const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true

    }
})

const userModel = mongoose.model('user',userSchema)
module.exports = userModel