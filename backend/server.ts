import express from "express";

const app = express();

app.get("", (req: express.Request, res: express.Response): void => {
    res.send("Hello World")
});

const port = 5000;
app.listen(port, (): void => {
    console.log(`Server listening at http://localhost:${port}`);
});