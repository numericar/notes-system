import noteModel from "./models/note";

import express, { NextFunction, Request, Response } from "express";

const app = express();

app.get("", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const notes = await noteModel.find().exec();

        res.status(200).json(notes);
    } catch (error: unknown) {
        next(error);
    }
});

app.use((req: Request, res: Response, next: NextFunction): void => {
    next(Error("End point not found"));
});

// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction): void => {
    if (error instanceof Error) {
        console.error(`Error message ${error.message}`);
        console.log(res.json);
        res.status(400).json({
            status: false,
            message: error.message,
            data: null
        });
    } else {
        console.error("Unknow error", error);
        res.status(500).json({
            status: false,
            message: "Unknow error",
            data: null
        });
    }
});

export default app;