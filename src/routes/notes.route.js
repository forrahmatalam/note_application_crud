const express = require('express');
const {createNotesControllers ,getAllNotesControllers} = require('../controllers/notes.Controller');
const router = express.Router();




router.post("/create",createNotesControllers)

router.get("/allNotes",getAllNotesControllers )

module.exports = router;