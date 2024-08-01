const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
        title:{
            type:String,
            required:true

        },
        content:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
},
{timeStamp:true}
);

const noteModel = mongoose.model('note',noteSchema)
module.exports = noteModel;
