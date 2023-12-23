import mongoose from "mongoose";
import logger from "../logger.js";
import dotenv from "dotenv";
dotenv.config();

export default function connectMongoDb() {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING, )
    .then((data) => {
        logger.info('DB CONNECTED');
    })
    .catch((err) => {
        logger.error("Error has occured")
    })
}

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        require: true
    }
});

const Student = new mongoose.model('Students', schema);

const addStudent = async () => {
    const S1 = await Student.create({
        name: "Shantanu Singh create",
        age: 24,
        subject: "ComputerScience"
    })
    console.log(S1);
}


// S1.save();
addStudent();
