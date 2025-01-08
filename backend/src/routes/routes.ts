import { 
    getNotes, 
    createNote,
    getNote } 
from "../controllers/notes.controller";

import express, { Router } from "express";

const router: Router = express.Router();

router.get("", getNotes);
router.get("/:noteId", getNote)
router.post("", createNote);

export default router;