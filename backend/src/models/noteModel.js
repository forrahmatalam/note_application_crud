const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        minlength:[20 ,"Description must be at least 20 characters long"]
    },
});
const notesModel= mongoose.model('note',noteSchema);

module.exports = notesModel;