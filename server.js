import app from "./app.js";
import dotenv from "dotenv";
import connectMongoDb from "./database/mongodb.js";
dotenv.config();

connectMongoDb();

app.listen(process.env.PORT, () => {
    console.log(`App running on PORT ${process.env.PORT}`);
});
