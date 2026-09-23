const notesModel = require('../models/noteModel');

const createNotesControllers = async (req,res)=>{
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
}

module.exports = createNotesControllers;