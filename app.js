import express from "express";
import userRoutes from "./routes/user.js"
import morgan from "morgan";

const app = express();

app.use(morgan(":date :method :url :status :res[content-length] - :response-time ms"));

app.use(userRoutes);

export default app;