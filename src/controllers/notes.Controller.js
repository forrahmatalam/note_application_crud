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

const getAllNotesControllers =async(req,res)=>{
    try{
const notes = await notesModel.find();
        return res.status(200).json({
        message:"All notes fetched successfully",
        data:notes
    });
    }catch(error){
        res.status(400).send(error);
    }   
}

const getSingleNoteControllers = async(req,res)=>{
let noteId = req.params.id;
    try{
        const note = await notesModel.findById(noteId);
        return res.status(200).json({
            message:"Note fetched successfully",
            data:note
        });
    }catch(error){
        res.status(400).send(error);
    }
}

const updateSingleNoteControllers =async (req,res)=>{
    try{
const noteId = req.params.id;
let body = req.body;
const updatedNote = await notesModel.findByIdAndUpdate(noteId,body);
        return res.status(200).json({
            message:"Note updated successfully",
            data:updatedNote
        });
    }catch(error){
        return res.status(400).send(error);
    }
}

const deleteSingleNoteControllers =async (req,res)=>{
    try{
        
let noteId =req.params.id;
const deletedNotes =await notesModel.findByIdAndDelete(noteId);
        return res.status(200).json({
            message:"Note deleted successfully",
            data:deletedNotes
        });

    }catch(error){
        return res.status(400).send(error);
    }
}
module.exports = {
    createNotesControllers,
    getAllNotesControllers,
    getSingleNoteControllers,
    updateSingleNoteControllers,
    deleteSingleNoteControllers
}