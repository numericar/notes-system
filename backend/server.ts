import "dotenv/config";
import env from "./utils/validateEnv";

import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("", (req: express.Request, res: express.Response): void => {
    res.send("Hello World");
});

mongoose.connect(env.MONGO_CONNECTION_STRING).then((): void => {
    console.log("Database Connected");
}).catch((error) => {
    console.log(error);
});

app.listen(env.PORT, (): void => {
    console.log(`Server listening at http://localhost:${env.PORT}`);
});

// https://youtu.be/FcxjCPeicvU?si=FSMec66tPg0TKVfe&t=4451