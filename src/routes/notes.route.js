const express = require('express');
const {createNotesControllers ,getAllNotesControllers,getSingleNoteControllers,updateSingleNoteControllers,deleteSingleNoteControllers} = require('../controllers/notes.Controller');
const router = express.Router();

          //Create
router.post("/create",createNotesControllers)
          //Read
router.get("/allNotes",getAllNotesControllers)
          //Read Single
router.get("/:id",getSingleNoteControllers)
          //update
router.put("/:id",updateSingleNoteControllers)
          //delete
router.delete("/:id",deleteSingleNoteControllers)

module.exports = router;