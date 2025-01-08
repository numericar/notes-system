import "dotenv/config";
import env from "./utils/validateEnv";
import app from "./app";

import mongoose from "mongoose";

mongoose.connect(env.MONGO_CONNECTION_STRING).then((): void => {
    console.log("Database Connected");
}).catch((error) => {
    console.log(error);
});

app.listen(env.PORT, (): void => {
    console.log(`Server listening at http://localhost:${env.PORT}`);
});

// https://youtu.be/FcxjCPeicvU?si=FSMec66tPg0TKVfe&t=4451