const express = require('express');
const connectDB = require('./config/db');
const notesModel = require('./models/noteModel');


const app = express();
app.use(express.json());
connectDB();
        //Apis
app.get("/",(req,res)=>{
    res.send("kya main dikh rha hu kya batao na ");
});

app.post("/create",async (req,res)=>{
    try{

        const {title,description} = req.body;

        const note =await notesModel.create({
            title,description
        });
        
        return res.status(201).json({
            message:"Note created successfully",
            data:note
            
        });

    }catch(error){
        res.status(400).send(error);
    }
});
module.exports = app;



