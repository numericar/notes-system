import { 
    getNotes, 
    createNote } 
from "../controllers/notes.controller";

import express, { Router } from "express";

const router: Router = express.Router();

router.get("", getNotes);
router.post("", createNote);

export default router;