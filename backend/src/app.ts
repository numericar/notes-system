import "dotenv/config";

import express from "express";
const app = express();

app.get("", (req: express.Request, res: express.Response): void => {
    res.send("Hello World");
});

export default app;