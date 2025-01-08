import { NextFunction, Request, Response } from "express";

import noteModel from "../models/note";

export async function getNotes(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const notes = await noteModel.find().exec();

        res.status(200).json(notes);
    } catch (error: unknown) {
        next(error);
    }
}

export async function createNote(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { title, text } = req.body;

        const note = await noteModel.create({
            title: title,
            text: text
        });

        res.status(201).json(note);
    } catch (error: unknown) {
        next(error);
    }
}