const express = require('express');
const connectDB = require('./config/db');

const notesController = require('./controllers/notes.Controller');


const app = express();
app.use(express.json());
connectDB();

        //Apis
app.get("/",(req,res)=>{
    res.send("kya main dikh rha hu kya batao na ");
});

app.post("/create",notesController) ;
module.exports = app;



